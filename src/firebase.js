import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB68OZ0kw9GNWwRGOQvI_l5qENXOH0C6dE",
  authDomain: "myportfolio-a041b.firebaseapp.com",
  projectId: "myportfolio-a041b",
  storageBucket: "myportfolio-a041b.firebasestorage.app",
  messagingSenderId: "698974423490",
  appId: "1:698974423490:web:05849e011d0f7727c5ae5b",
  measurementId: "G-5BKGGC6DG4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}