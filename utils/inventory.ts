import { db, storage } from "@/utils/initFirebase";
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

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string[];
  category: string[];
  unit: string;
}

// Reference to the inventory collection
const inventoryRef = collection(db, "inventory");

// ✅ Add a new item
export const addInventoryItem = async (item: {
  name: string;
  description?: string;
  price: number;
  quantity: number;
  imageUrl?: string[];
  category?: string[];
  unit: string;
}) => {
  return await addDoc(inventoryRef, {
    ...item,
    createdAt: Timestamp.now(),
  });
};

// ✅ Fetch all items
export const getInventoryItems = async (): Promise<Item[]> => {
  const snapshot = await getDocs(collection(db, "inventory"));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Item[]; // Type assertion ensures data matches the Item interface
};

// ✅ Get a single item by ID
export const getInventoryItem = async (id: string) => {
  const docRef = doc(db, "inventory", id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

// ✅ Update an item
export const updateInventoryItem = async (id: string, updatedData: any) => {
  const docRef = doc(db, "inventory", id);
  return await updateDoc(docRef, updatedData);
};

// ✅ Delete an item
export const deleteInventoryItem = async (id: string) => {
  const docRef = doc(db, "inventory", id);
  return await deleteDoc(docRef);
};
