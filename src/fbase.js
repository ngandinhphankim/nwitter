import firebase from "firebase/app";
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCmtxQqjOakC4j7hHZKDMgR-bwNDXr0L0o",
    authDomain: "nwitter-6a336.firebaseapp.com",
    projectId: "nwitter-6a336",
    storageBucket: "nwitter-6a336.appspot.com",
    messagingSenderId: "688174115854",
    appId: "1:688174115854:web:18a38e4e1c073848ffa05f",
    measurementId: "G-7PV6061ZQM",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth()