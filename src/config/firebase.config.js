// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: esto para a variable de entorno
const firebaseConfig = {
  apiKey: "AIzaSyDRlawG5EqjBFiaCUDGYq_SOz5E6GZZ2w0",
  authDomain: "react-2330.firebaseapp.com",
  projectId: "react-2330",
  storageBucket: "react-2330.appspot.com",
  messagingSenderId: "679014692785",
  appId: "1:679014692785:web:fd5c3182f034d32e6cef90",
  measurementId: "G-BGFTYK5CZ2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
