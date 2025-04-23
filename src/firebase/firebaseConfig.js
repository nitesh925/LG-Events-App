// firebase.js or firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, RecaptchaVerifier, PhoneAuthProvider } from 'firebase/auth'; // Added RecaptchaVerifier and PhoneAuthProvider

const firebaseConfig = {
  apiKey: "AIzaSyBJ2oFH09X4ucey0zKiPXjHFwL88XC9wV0",
  authDomain: "lgevents.firebaseapp.com",
  projectId: "lgevents",
  storageBucket: "lgevents.firebasestorage.app",
  messagingSenderId: "970191213609",
  appId: "1:970191213609:web:17baadafe92d9870653838",
  measurementId: "G-R8WL75QEJE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, RecaptchaVerifier, PhoneAuthProvider }; // Export added functions
