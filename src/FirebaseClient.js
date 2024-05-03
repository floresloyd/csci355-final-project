/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // JOBDOCK-777 DB 
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyA966PYyWgZIlTXUc3gNUeZmRMMi4U4RSg",
// //   authDomain: "jobdock-777.firebaseapp.com",
// //   projectId: "jobdock-777",
// //   storageBucket: "jobdock-777.appspot.com",
// //   messagingSenderId: "997016671087",
// //   appId: "1:997016671087:web:beda75a1aaebc9acf7ce9a",
// //   measurementId: "G-9ZMSSWGMTE",
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyDxABO3tGL0BprM5zuVGQydgqNr0WLDoJ8",
//   authDomain: "jobdock-24.firebaseapp.com",
//   projectId: "jobdock-24",
//   storageBucket: "jobdock-24.appspot.com",
//   messagingSenderId: "486262401411",
//   appId: "1:486262401411:web:5dfafd5c577c5721fbeeb6",
//   measurementId: "G-1T22J299W0"
// };



// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const userLoginDatabase = getAuth(app);

// // Initialize job database
// const jobDataBase = getFirestore();

// export { app, userLoginDatabase, jobDataBase };



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