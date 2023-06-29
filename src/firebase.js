// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlmTfctJywH9pA87pnjQh_SbvzkzeW5aI",
  authDomain: "piyushdognegurjar-portfolio.firebaseapp.com",
  projectId: "piyushdognegurjar-portfolio",
  storageBucket: "piyushdognegurjar-portfolio.appspot.com",
  messagingSenderId: "562097241363",
  appId: "1:562097241363:web:6ce95f6e9c3a63e82e2ee6",
  measurementId: "G-LBMWZBZZRR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 
export const db = getFirestore()