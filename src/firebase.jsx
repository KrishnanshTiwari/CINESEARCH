import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDawFBFu4eSQZwj6wVO5Tih9d-xVURidxw",
  authDomain: "moviesearch-c6bac.firebaseapp.com",
  projectId: "moviesearch-c6bac",
  storageBucket: "moviesearch-c6bac.appspot.com",
  messagingSenderId: "657427987962",
  appId: "1:657427987962:web:6b6bc6b4120f5f303a3843"
};

const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  export { db,auth };