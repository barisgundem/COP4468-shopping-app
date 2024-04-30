// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAvE4S0dGQrxGwGdvco95aJPkgi8AZ47I",
  authDomain: "barishop-1.firebaseapp.com",
  projectId: "barishop-1",
  storageBucket: "barishop-1.appspot.com",
  messagingSenderId: "779444444062",
  appId: "1:779444444062:web:2fc8f8213ace20786f148f",
  measurementId: "G-M2FZ1N581C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);