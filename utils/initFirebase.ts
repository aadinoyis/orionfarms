// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyA9G8xi1tChJrIYEVpJZcRJqAg_vRIb4bA",
  authDomain: "website-project-b1431.firebaseapp.com",
  projectId: "website-project-b1431",
  storageBucket: "website-project-b1431.firebasestorage.app",
  messagingSenderId: "437954435839",
  appId: "1:437954435839:web:95dfc1c788abb224d74aca",
  measurementId: "G-BCYKTGCDC3"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

//firebase login
//firebase init
//firebase deploy