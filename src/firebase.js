
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCErk9r_4_1ZNAHf2l3NfxHbugezbzxfpg",
  authDomain: "test-ddb98.firebaseapp.com",
  projectId: "test-ddb98",
  storageBucket: "test-ddb98.appspot.com",
  messagingSenderId: "621814538603",
  appId: "1:621814538603:web:a80881612602b54e13ec2e",
  measurementId: "G-VHTKBF882J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};