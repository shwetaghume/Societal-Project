// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuMsNqDEPb3y4YevBHPpeaMT1XAgHLs4g",
  authDomain: "govt-school-website.firebaseapp.com",
  databaseURL: "https://govt-school-website-default-rtdb.firebaseio.com",
  projectId: "govt-school-website",
  storageBucket: "govt-school-website.appspot.com",
  messagingSenderId: "202967660868",
  appId: "1:202967660868:web:2866a190ff3b64d0723f11",
  measurementId: "G-QNB51SHR99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
