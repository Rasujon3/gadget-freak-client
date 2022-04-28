// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT56Ov3WUMfLLyeJf2lPmTQmdZfNTWThM",
  authDomain: "gadget-freak-96d88.firebaseapp.com",
  projectId: "gadget-freak-96d88",
  storageBucket: "gadget-freak-96d88.appspot.com",
  messagingSenderId: "215287201410",
  appId: "1:215287201410:web:60840933f7d3bdf58bfe9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
