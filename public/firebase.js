import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDnSZ5YM_HWP07DmBoXp9GYzSMgyZowGMI",
    authDomain: "norest-d326f.firebaseapp.com",
    projectId: "norest-d326f",
    storageBucket: "norest-d326f.firebasestorage.app",
    messagingSenderId: "854813785173",
    appId: "1:854813785173:web:743af28300e9a9349628dc",
    measurementId: "G-XNNYKH56CV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };