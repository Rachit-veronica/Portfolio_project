// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqtvdNPw6LshkS97aUfUv6dNx2omzAu7g",
  authDomain: "portfolio-cd1bf.firebaseapp.com",
  databaseURL: "https://portfolio-cd1bf-default-rtdb.firebaseio.com",
  projectId: "portfolio-cd1bf",
  storageBucket: "portfolio-cd1bf.appspot.com",
  messagingSenderId: "528855695772",
  appId: "1:528855695772:web:33cd2311c30c28ea28c859",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
