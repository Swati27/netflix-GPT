import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh1xKYwDau9uLOwH7poctzLOkZylHZvFM",
  authDomain: "netflixgpt-41d27.firebaseapp.com",
  projectId: "netflixgpt-41d27",
  storageBucket: "netflixgpt-41d27.appspot.com",
  messagingSenderId: "999460606625",
  appId: "1:999460606625:web:d90f565676e22fc67fd6e0",
  measurementId: "G-1JH8ZND026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();