import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator,serverTimestamp } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

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

if (window.location.hostname === "127.0.0.1") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectStorageEmulator(storage, "127.0.0.1", 9199);
}

// Export the necessary instances
export { db, auth, storage, FacebookAuthProvider, serverTimestamp };
