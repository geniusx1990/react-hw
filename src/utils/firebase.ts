import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVAFEj-kKgN1X9U_3WWwSH7u90qJysKhI",
  authDomain: "test-baeae.firebaseapp.com",
  projectId: "test-baeae",
  storageBucket: "test-baeae.firebasestorage.app",
  messagingSenderId: "221238801834",
  appId: "1:221238801834:web:fee3da841e40d21376e7d3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
