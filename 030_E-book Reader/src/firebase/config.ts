import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8cxSyAKkSMLmkMJt4soiIen0RnM3D7Og",
  authDomain: "ebook-bf306.firebaseapp.com",
  projectId: "ebook-bf306",
  storageBucket: "ebook-bf306.firebasestorage.app",
  messagingSenderId: "247482964880",
  appId: "1:247482964880:web:b02808160babd5cabdf115",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);