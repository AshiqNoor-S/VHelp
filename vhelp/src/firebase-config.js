// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALnanJpKKV1aJRiYxxFHbWR2LxVkX2NX8",
  authDomain: "vhelp-de84f.firebaseapp.com",
  projectId: "vhelp-de84f",
  storageBucket: "vhelp-de84f.appspot.com",
  messagingSenderId: "196514508240",
  appId: "1:196514508240:web:40718ba6fe4374cfd09dd5",
  measurementId: "G-W87HPYLS59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();
