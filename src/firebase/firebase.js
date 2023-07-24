// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt_lc0bR5UW12hvuMdVq-LaQlrEDizGzM",
  authDomain: "movienexus-8ad61.firebaseapp.com",
  projectId: "movienexus-8ad61",
  storageBucket: "movienexus-8ad61.appspot.com",
  messagingSenderId: "867123580602",
  appId: "1:867123580602:web:8c3f8fdbf001c5b4d97c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;