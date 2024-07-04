import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import React from "react";

const useFireStore = (collectionName, condition) => {
  const [documents, setDocuments] = React.useState([]);

  React.useEffect(() => {
    if (!condition || !condition.compareValue) {
      return;
    }

    let collectionRef = collection(db, collectionName);

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      collectionRef = query(
        collectionRef,
        where(condition.fieldName, condition.operator, condition.compareValue),
        orderBy("createdAt") // Add this line if you also need ordering
      );
    }

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(docs);
    });

    return unsubscribe;
  }, [collectionName, condition]);

  return documents;
};

export default useFireStore;
