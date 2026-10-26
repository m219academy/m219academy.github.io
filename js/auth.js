
import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

export async function register(name, email, password) {
  const result = await createUserWithEmailAndPassword(
    auth, email, password
  );

  await updateProfile(result.user, {
    displayName: name
  });

  await setDoc(doc(db, "users", result.user.uid), {
    name: name,
    email: result.user.email,
    xp: 0,
    completedLessons: [],
    createdAt: serverTimestamp()
  });

  return result.user;
}

export async function login(email, password) {
  const result = await signInWithEmailAndPassword(
    auth, email, password
  );
  return result.user;
}

export async function logout() {
  await signOut(auth);
}

export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

