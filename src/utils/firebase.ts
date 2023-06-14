import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXhIss6IR4O1uvEi6Iuh8EhrfSDFCEUqU",
  authDomain: "software-engineering-qui-55ce4.firebaseapp.com",
  projectId: "software-engineering-qui-55ce4",
  storageBucket: "software-engineering-qui-55ce4.appspot.com",
  messagingSenderId: "846482344984",
  appId: "1:846482344984:web:53fc9d3b3099ef7d32c76d",
  measurementId: "G-Q0H2BHHH5H",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
