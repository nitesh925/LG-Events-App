
// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ2oFH09X4ucey0zKiPXjHFwL88XC9wV0",
  authDomain: "lgevents.firebaseapp.com",
  projectId: "lgevents",
  storageBucket: "lgevents.firebasestorage.app",
  messagingSenderId: "970191213609",
  appId: "1:970191213609:web:17baadafe92d9870653838",
  measurementId: "G-R8WL75QEJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Authentication
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Authentication instance

// Export the Firestore and Auth instances
export { db, auth }; // Export both db and auth
