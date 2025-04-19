import { db } from "@/utils/initFirebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";


const getDate = (timestamp: Timestamp) => {
  const date = timestamp.toDate();
  return date;
}

interface Blog {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  imageUrl: string[];
  category: string;
  reads: number;
}

// Reference to the blog collection
const blogRef = collection(db, "blogs");

// ✅ Add a new blog
export const addBlog = async (blog: {
  title: string;
  description: string;
  imageUrl: string[];
  category: string;
  reads: number;
}) => {
  return await addDoc(blogRef, {...blog, createdAt: Timestamp.now(),});
};

// ✅ Fetch all blogs
export const getAllBlogs = async (): Promise<Blog[]> => {
  const snapshot = await getDocs(collection(db, "blogs"));
  // Extract documents
  const blogs = snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id, // Include document ID
      ...data, // Spread document data
      createdAt: getDate(data.createdAt), // Convert Firestore Timestamp to Date
    }
  }) as Blog[]; // Type assertion ensures data matches the Blog interface

  return blogs; 
};



// ✅ Get a single item by ID
export const getBlog = async (id: string) => {
  const docRef = doc(db, "blogs", id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};


// ✅ Update an item
export const updateBlog = async (id: string, updatedData: any) => {
  const docRef = doc(db, "blogs", id);
  return await updateDoc(docRef, updatedData);
};

// ✅ Delete an item
export const deleteBlog = async (id: string) => {
  const docRef = doc(db, "blogs", id);
  return await deleteDoc(docRef);
};
