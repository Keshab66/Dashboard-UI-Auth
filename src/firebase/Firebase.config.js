// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUf80UyFQIa0k8XzowUKlMSQe63aA1_FY",
  authDomain: "dashboard-8ace0.firebaseapp.com",
  projectId: "dashboard-8ace0",
  storageBucket: "dashboard-8ace0.appspot.com",
  messagingSenderId: "960436418393",
  appId: "1:960436418393:web:eeb661faee8659d7f5be48",
  measurementId: "G-8Q1H7Q6T5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider= new GoogleAuthProvider();
export {auth,provider};