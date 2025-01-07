import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// shwetas firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDixT0KYl3scLl03jSqz5GdEQ_ptnAffqc",
  authDomain: "govt-school-website-6884e.firebaseapp.com",
  projectId: "govt-school-website-6884e",
  storageBucket: "govt-school-website-6884e.firebasestorage.app",
  messagingSenderId: "930264384485",
  appId: "1:930264384485:web:ee5f131f431dbe4796250c",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
