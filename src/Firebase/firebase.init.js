// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGi9_i29rxBDx_XMOo302JU6wsJoLrc9Y",
  authDomain: "fir-project-1-66665.firebaseapp.com",
  projectId: "fir-project-1-66665",
  storageBucket: "fir-project-1-66665.firebasestorage.app",
  messagingSenderId: "467086329367",
  appId: "1:467086329367:web:05df05d6cb37d9be863e52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;