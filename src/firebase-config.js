import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "findit-986c3.firebaseapp.com",
  projectId: "findit-986c3",
  storageBucket: "findit-986c3.appspot.com",
  messagingSenderId: "416742810402",
  appId: "1:416742810402:web:e93ce6b350b620f991bb7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
