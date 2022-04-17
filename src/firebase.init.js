// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxU5yDRWFqD5E3FOx9LxF3meddLKps13I",
  authDomain: "dentpro-dental-website.firebaseapp.com",
  projectId: "dentpro-dental-website",
  storageBucket: "dentpro-dental-website.appspot.com",
  messagingSenderId: "779174948899",
  appId: "1:779174948899:web:9e8a3a38ba66455ea94196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;