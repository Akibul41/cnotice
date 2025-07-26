import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjs4mIH44AIWUZoFjSPbfkZ9gaTx4xYFE",
  authDomain: "college-notice-cd622.firebaseapp.com",
  projectId: "college-notice-cd622",
  storageBucket: "college-notice-cd622.appspot.com",
  messagingSenderId: "257074623269",
  appId: "1:257074623269:web:8fa09ddd5885d09445a0cc",
  measurementId: "G-9Y0PVLP70F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, collection, addDoc, getDocs };