// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAetocCljM54512pZkNm_5zN1vQFNbM6Cw",
  authDomain: "blog-791fa.firebaseapp.com",
  projectId: "blog-791fa",
  storageBucket: "blog-791fa.appspot.com",
  messagingSenderId: "928565519171",
  appId: "1:928565519171:web:82d44758a97235ce0d85f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };