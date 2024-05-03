/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0eN5y3bKHsg93a0on1CmIvixfCUcYBfs",
  authDomain: "job-dock.firebaseapp.com",
  projectId: "job-dock",
  storageBucket: "job-dock.appspot.com",
  messagingSenderId: "815199812168",
  appId: "1:815199812168:web:0dbff9c91b3746460db67d"
};

// Initialize Firebase Authentication
const app = initializeApp(firebaseConfig);
export const userLoginDatabase = getAuth(app)

// Initialize JobDatabase
export const jobDataBase = getFirestore();