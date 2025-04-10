'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";
import { items } from "@/data/items";
import { getInventoryItems, deleteInventoryItem } from "@/utils/inventory";


// Define the shape of a product
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

// Define the shape of an item in the cart
export interface CartItem extends Item {
  quantity: number;
  total: number;
}

// Define context type
interface ProductContextType {
  items: Item[];
  cart: CartItem[];
  itemId: string;
  addItem: (prodId: string) => void;
  removeItem: (prodId: string) => void;
  updateQuantity: (prodId: string, quantity: number) => void;
}

// Initialize ProductContext
const ItemsContext = createContext<ProductContextType | undefined>(undefined);

// Sample initial data
const initialProducts = await getInventoryItems()

// Context provider
export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [items] = useState<Item[]>(initialProducts);
  const [itemId] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to the cart
  const addItem = (itemId: string) => {
    const selected = items.find((item) => item.id === itemId);
    console.log('Added to cart')
    if (!selected) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemId);

      if (existingItem) {
        // Update the quantity and total if the item exists
        return prevCart.map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * Number(item.price),
              }
            : item
        );
      } else {
        // Add the new item to the cart
        const newItem: CartItem = {
          ...selected,
          quantity: 1,
          total: Number(selected.price),
        };
        return [...prevCart, newItem];
      }
    });
  };

  // Update item in the cart
  const updateQuantity = (prodId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === prodId
          ? {
              ...item,
              quantity,
              total: quantity * Number(item.price),
            }
          : item
      )
    );
  };

  // Remove item from the cart
  const removeItem = (prodId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== prodId));
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        itemId,
        cart,
        addItem,
        removeItem,
        updateQuantity
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
