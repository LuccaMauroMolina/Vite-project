import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAdGnNXolljglLDC5fN7HPTrQ6gFEfWlcE",
    authDomain: "tienda-brownie-ec0cc.firebaseapp.com",
    projectId: "tienda-brownie-ec0cc",
    storageBucket: "tienda-brownie-ec0cc.appspot.com",
    messagingSenderId: "884773195508",
    appId: "1:884773195508:web:daa354bd85d579371098a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)