// import firebase from "firebase";
// import { getAuth } from "firebase/auth";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBiqUsGbN3J-VTCW-yWN-EehsOid-7Tn7k",
//   authDomain: "clone-febbc.firebaseapp.com",
//   projectId: "clone-febbc",
//   storageBucket: "clone-febbc.appspot.com",
//   messagingSenderId: "745502168567",
//   appId: "1:745502168567:web:e9146be4c7f3f4c4108af2",
//   measurementId: "G-2QC99N60RX",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// export const db = firebaseApp.firestore();
// export const auth = firebase.auth();

// // export { db, auth };





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiqUsGbN3J-VTCW-yWN-EehsOid-7Tn7k",
  authDomain: "clone-febbc.firebaseapp.com",
  projectId: "clone-febbc",
  storageBucket: "clone-febbc.appspot.com",
  messagingSenderId: "745502168567",
  appId: "1:745502168567:web:e9146be4c7f3f4c4108af2",
  measurementId: "G-2QC99N60RX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

