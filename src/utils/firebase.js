// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvo82CZ-MUoe0n869mxfBJypXh0azPv40",
  authDomain: "netflixgpt-6c452.firebaseapp.com",
  projectId: "netflixgpt-6c452",
  storageBucket: "netflixgpt-6c452.appspot.com",
  messagingSenderId: "451057010368",
  appId: "1:451057010368:web:85e339b53b40681ecc8f25",
  measurementId: "G-9GBJS6GZ3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();