// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU6r3gyS5vJffe5Hr3VTe8R0by5ob3CGo",
  authDomain: "chat-app-25ce6.firebaseapp.com",
  projectId: "chat-app-25ce6",
  storageBucket: "chat-app-25ce6.appspot.com",
  messagingSenderId: "762103832300",
  appId: "1:762103832300:web:275197b42a3b41b2af0fc9",
  measurementId: "G-35YJ6QDKSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the necessary instances
export { db, auth, storage, FacebookAuthProvider };
