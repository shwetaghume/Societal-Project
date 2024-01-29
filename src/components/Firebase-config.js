import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0hZFIZB09nj0AeipjkR1gLqo4iLDj-xY",
  authDomain: "schoolapp-web-aef73.firebaseapp.com",
  databaseURL: "https://schoolapp-web-aef73-default-rtdb.firebaseio.com",
  projectId: "schoolapp-web-aef73",
  storageBucket: "schoolapp-web-aef73.appspot.com",
  messagingSenderId: "313463433649",
  appId: "1:313463433649:web:1eb1d4865de73e1d5cf590",
  measurementId: "G-F4687RM9H4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
