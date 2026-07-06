import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBazMttHXEa60lPNZFa-8f8jQANKGUaSXE",
  authDomain: "silent-road-r5xj8.firebaseapp.com",
  projectId: "silent-road-r5xj8",
  storageBucket: "silent-road-r5xj8.firebasestorage.app",
  messagingSenderId: "152996245110",
  appId: "1:152996245110:web:eee094f2c2648678d8f957"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
