// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5EukYmi2oOPows2BryL1K7ISckdu4UI0",
  authDomain: "interactive-museum-c9f4d.firebaseapp.com",
  projectId: "interactive-museum-c9f4d",
  storageBucket: "interactive-museum-c9f4d.appspot.com",
  messagingSenderId: "1043770726501",
  appId: "1:1043770726501:web:b2405850e710f573d98e8c",
  measurementId: "G-C89N098RFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);