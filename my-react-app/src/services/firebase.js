// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5_WFSrcj0IRyhmo6tO69KSPDHe2rNx58",
    authDomain: "proy-4-aplicacion-restaurante.firebaseapp.com",
    projectId: "proy-4-aplicacion-restaurante",
    storageBucket: "proy-4-aplicacion-restaurante.appspot.com",
    messagingSenderId: "410211112951",
    appId: "1:410211112951:web:ce606a4a1d4912537440f2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();