// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update, child } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxqS-2MmrVRbhmg49Bx2P1b4f_lFeSkQ0",
    authDomain: "ounn-ea631.firebaseapp.com",
    databaseURL: "https://ounn-ea631-default-rtdb.firebaseio.com",
    projectId: "ounn-ea631",
    storageBucket: "ounn-ea631.appspot.com",
    messagingSenderId: "111990065034",
    appId: "1:111990065034:web:1b1a4a2fd6d9aef5db6a73",
    measurementId: "G-YL3CYJJN58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database, ref, set, get, update, child};