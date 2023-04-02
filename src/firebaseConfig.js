// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need

import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCA0yh22lyfDjUEDm2XhsaaySJ6uQnQOs",
  authDomain: "anamoly-detection-8d944.firebaseapp.com",
  projectId: "anamoly-detection-8d944",
  storageBucket: "anamoly-detection-8d944.appspot.com",
  messagingSenderId: "888274304028",
  appId: "1:888274304028:web:727633d2308bbc4b51f3d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };