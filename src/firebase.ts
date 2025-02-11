import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcSFYJD6eNysMYmhU7O593ZNktJEIfjMM",
  authDomain: "twiiter-clone-956fb.firebaseapp.com",
  projectId: "twiiter-clone-956fb",
  storageBucket: "twiiter-clone-956fb.firebasestorage.app",
  messagingSenderId: "546707402441",
  appId: "1:546707402441:web:ac2309a3255ca655c1a718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);