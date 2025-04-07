// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBTjLEU4eHf19yygtSV6HF86dsyHGNkTA",
  authDomain: "headline-hub-da82a.firebaseapp.com",
  projectId: "headline-hub-da82a",
  storageBucket: "headline-hub-da82a.firebasestorage.app",
  messagingSenderId: "452050786122",
  appId: "1:452050786122:web:3b21c8678863454abd93b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service

// export { auth, app };
export { app };