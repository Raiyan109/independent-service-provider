// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByvbbKVZT_teTauNjeSzWtGAtOiAtTAGI",
    authDomain: "assignment-10-4181d.firebaseapp.com",
    projectId: "assignment-10-4181d",
    storageBucket: "assignment-10-4181d.appspot.com",
    messagingSenderId: "913913389608",
    appId: "1:913913389608:web:00cc90ab3c790224d58b1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;