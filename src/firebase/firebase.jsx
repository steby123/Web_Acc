import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {GoogleAuthProvider, getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAp7BwwdYCS7mDsu_xXII1h1hOafeBat-I",
  authDomain: "website-penjualan-makanan.firebaseapp.com",
  projectId: "website-penjualan-makanan",
  storageBucket: "website-penjualan-makanan.appspot.com",
  messagingSenderId: "638297681598",
  appId: "1:638297681598:web:580767791c0bbf9916b8ef"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const projectAuth = auth;
export { app, auth, db, provider, projectAuth };