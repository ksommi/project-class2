// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrg2IzhxV-PAXq51K5eZmqQhBXwKYJRh4",
  authDomain: "corderproject-reactclass.firebaseapp.com",
  projectId: "corderproject-reactclass",
  storageBucket: "corderproject-reactclass.appspot.com",
  messagingSenderId: "827637115733",
  appId: "1:827637115733:web:fba7b5e733ac2895e45ddc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
