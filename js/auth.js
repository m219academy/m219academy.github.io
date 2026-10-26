
import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  reload
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

auth.languageCode = "de";

export async function register(name, email, password) {
  const result = await createUserWithEmailAndPassword(
    auth, email, password
  );

  await updateProfile(result.user, {
    displayName: name
  });

  await setDoc(doc(db, "users", result.user.uid), {
    name,
    email: result.user.email,
    xp: 0,
    completedLessons: [],
    createdAt: serverTimestamp()
  });

  await sendEmailVerification(result.user);

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

export async function resendVerification() {
  if (!auth.currentUser) {
    throw new Error("Nicht angemeldet.");
  }
  await sendEmailVerification(auth.currentUser);
}

export async function checkVerification() {
  if (!auth.currentUser) return false;
  await reload(auth.currentUser);
  return auth.currentUser.emailVerified;
}

export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}
