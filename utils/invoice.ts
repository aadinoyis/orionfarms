import { db } from "@/utils/initFirebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";

interface Invoice {
  id: string;
  customer: string;
  phone: string;
  email: string;
  address: string;
  amount: number;
  deliveryFee: number;
  createdAt: Date;
  items: Item[];
  status: string;
}

interface Item {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  imageUrl: string[];
  category: string[];
  unit: string;
}

// Reference to the inventory collection
const orderRef = collection(db, "orders");

const getDate = (timestamp: Timestamp) => {
  const date = timestamp.toDate();
  return date;
}

// ✅ Fetch all orders
export const getAllOrders = async (): Promise<Invoice[]> => {
  const snapshot = await getDocs(collection(db, "orders"));
  // Extract documents
  const orders = snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id, // Include document ID
      ...data, // Spread document data
      createdAt: getDate(data.createdAt), // Convert Firestore Timestamp to Date
    }
  }) as Invoice[]; // Type assertion ensures data matches the Blog interface

  return orders; 
};

// ✅ Get a single order by ID
export const getOrder = async (id: string) => {
  const docRef = doc(db, "orders", id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as Invoice : null;
};


// ✅ Update an item
export const updateOrder = async (id: string, updatedData: any) => {
  const docRef = doc(db, "orders", id);
  return await updateDoc(docRef, updatedData);
};

// ✅ Delete an item
export const deleteOrder = async (id: string) => {
  const docRef = doc(db, "orders", id);
  return await deleteDoc(docRef);
};
