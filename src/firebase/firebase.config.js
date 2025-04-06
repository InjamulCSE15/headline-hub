// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, updateProfile } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrPH6HliPyuCS8qNWYr8rqYnCCGdpGWU",
  authDomain: "react-auth-d71af.firebaseapp.com",
  projectId: "react-auth-d71af",
  storageBucket: "react-auth-d71af.appspot.com",
  messagingSenderId: "57675919001",
  appId: "1:57675919001:web:0337a5a2c526c0e0579208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service

export { auth, app };