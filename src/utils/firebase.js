// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQMjAOLKo8-Y6LLJaLgmgK_jor502Bvvk",
    authDomain: "food-restaurant-2e27a.firebaseapp.com",
    projectId: "food-restaurant-2e27a",
    storageBucket: "food-restaurant-2e27a.appspot.com",
    messagingSenderId: "795171317819",
    appId: "1:795171317819:web:4cb1c5a420f21e1bbdd41e",
    measurementId: "G-JRBVW67L7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);