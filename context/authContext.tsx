"use client"; // Ensure it runs only on the client side
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "@/utils/initFirebase";
import { onAuthStateChanged, User } from "firebase/auth";

// Define the shape of the authentication context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => void;
}

// Create a context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true, // Set loading to true initially
  signOut: () => { }, // Default signOut function
});

// Provider component to wrap the app
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Track loading state

  const signOut = () => {
    // Sign out the user
    auth.signOut()
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); // Firebase has finished checking auth state
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
