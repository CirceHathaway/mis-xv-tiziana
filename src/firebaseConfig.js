// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDipd_z47SnoD_gHZmX7vq5tHLlQCj-ydU",
  authDomain: "mis-xv-tiziana.firebaseapp.com",
  databaseURL: "https://mis-xv-tiziana-default-rtdb.firebaseio.com",
  projectId: "mis-xv-tiziana",
  storageBucket: "mis-xv-tiziana.firebasestorage.app",
  messagingSenderId: "580363922586",
  appId: "1:580363922586:web:052703a8ad2e3cc2fc0323"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);