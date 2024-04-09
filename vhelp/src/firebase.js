// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3yMUDT9j3nC7PeFXJv0HgHP9XBgaVtdc",
  authDomain: "vhelp-d6c0b.firebaseapp.com",
  projectId: "vhelp-d6c0b",
  storageBucket: "vhelp-d6c0b.appspot.com",
  messagingSenderId: "1030058716862",
  appId: "1:1030058716862:web:9c3b73e7aeea374693b8ef",
  measurementId: "G-NW4GFDPXD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);