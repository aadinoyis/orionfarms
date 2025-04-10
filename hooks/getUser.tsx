'use client'
import { useState, useEffect } from 'react';
import { auth } from '@/utils/initFirebase'; // Import your initialized auth instance
import { onAuthStateChanged, User } from "firebase/auth";

function useAuth() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return currentUser;
}

export default useAuth;
