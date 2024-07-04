import { collection, addDoc as firebaseAddDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config.js";

export const addDoc = async (collectionName, data) => {
  try {
    const docRef = await firebaseAddDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log('Document successfully written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error writing document: ', error);
  }
};
