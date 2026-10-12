// Firebase Configuration - GlobalVest Capital (Browser/CDN version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBw3i6YNShBVG21gMlAIpsVNEH8Hrwsk4I",
  authDomain: "globalvest-capital.firebaseapp.com",
  projectId: "globalvest-capital",
  storageBucket: "globalvest-capital.firebasestorage.app",
  messagingSenderId: "400862952779",
  appId: "1:400862952779:web:4e955284cdffefba82bcce",
  measurementId: "G-P93QFJ14ZM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);