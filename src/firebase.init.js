// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWZXoDeQAckZts9BlLxpt3hYDNn7aoshM",
  authDomain: "red-onion-28076.firebaseapp.com",
  projectId: "red-onion-28076",
  storageBucket: "red-onion-28076.appspot.com",
  messagingSenderId: "856827122629",
  appId: "1:856827122629:web:512fd26f9a40dc393db1ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;