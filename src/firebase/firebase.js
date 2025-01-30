// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFireStore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvm7hFBOIJOp1NSFIEuck_5fMFD7we9xQ",
  authDomain: "portfolio-82e62.firebaseapp.com",
  projectId: "portfolio-82e62",
  storageBucket: "portfolio-82e62.firebasestorage.app",
  messagingSenderId: "522458046369",
  appId: "1:522458046369:web:b7e091a04c5737cda3b5e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFireStore(app);

export default db;