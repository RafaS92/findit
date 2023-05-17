import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "findit-project-6b559.firebaseapp.com",
  projectId: "findit-project-6b559",
  storageBucket: "findit-project-6b559.appspot.com",
  messagingSenderId: "1000095828514",
  appId: "1:1000095828514:web:d9e83742af42e668d8587b",
  measurementId: "G-N8DMXPK6YR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
