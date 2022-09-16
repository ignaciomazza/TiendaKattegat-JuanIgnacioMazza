// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF2VT4-oi474tXDcGA9r1s0b_47HJNHvs",
  authDomain: "coderhouse-ecommerce-d8b21.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d8b21",
  storageBucket: "coderhouse-ecommerce-d8b21.appspot.com",
  messagingSenderId: "1074447638619",
  appId: "1:1074447638619:web:5bc1995c62bdf67c955f7e",
  measurementId: "G-0HYLBV3K07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;