import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config.js";

export const addDoc = async (collectionName, data) => {
  try {
    const docRef = doc(collection(db, collectionName));
    await setDoc(docRef, {
      ...data,
      createAt: serverTimestamp(),
    });
    console.log('Document successfully written!');
  } catch (error) {
    console.error('Error writing document: ', error);
  }
};
