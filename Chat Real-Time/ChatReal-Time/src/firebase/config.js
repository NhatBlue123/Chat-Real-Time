import firebase from 'firebase/compat/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCU6r3gyS5vJffe5Hr3VTe8R0by5ob3CGo",
    authDomain: "chat-app-25ce6.firebaseapp.com",
    projectId: "chat-app-25ce6",
    storageBucket: "chat-app-25ce6.appspot.com",
    messagingSenderId: "762103832300",
    appId: "1:762103832300:web:275197b42a3b41b2af0fc9",
    measurementId: "G-35YJ6QDKSE"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();