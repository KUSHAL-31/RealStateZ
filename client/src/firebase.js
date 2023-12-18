// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realmernestate.firebaseapp.com",
  projectId: "realmernestate",
  storageBucket: "realmernestate.appspot.com",
  messagingSenderId: "944737525589",
  appId: "1:944737525589:web:878f7eebee0b83fdba99dc",
  measurementId: "G-SJDX9NN3DN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
