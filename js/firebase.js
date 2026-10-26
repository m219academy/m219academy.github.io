
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnvisT7B6wfF-MDD3VGy8b5qEzL3G6BQ",
  authDomain: "m219-academy.firebaseapp.com",
  projectId: "m219-academy",
  storageBucket: "m219-academy.firebasestorage.app",
  messagingSenderId: "651770396939",
  appId: "1:651770396939:web:e0dfa7ebb69df1356ea20e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

