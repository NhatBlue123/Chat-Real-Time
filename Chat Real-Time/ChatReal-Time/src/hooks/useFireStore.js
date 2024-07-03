import { collection as firestoreCollection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import React from 'react';

const useFireStore = (collectionName, condition) => {
    const [documents, setDocuments] = React.useState([]);

    React.useEffect(() => {
        if (!collectionName) return;

        const user = auth.currentUser;
        if (user) {
            let q = query(firestoreCollection(db, collectionName), orderBy('createdAt'));

            if (condition && condition.compareValue && condition.compareValue.length) {
                q = query(
                    firestoreCollection(db, collectionName),
                    where(condition.fieldName, condition.operator, condition.compareValue),
                    orderBy('createdAt')
                );
            }

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const docs = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setDocuments(docs);
            });

            return () => unsubscribe();
        }
    }, [collectionName, condition]);

    return documents;
};

export default useFireStore;
