import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAGTh3_T4u6Y6n9bigRDEGVsVFdl2HFw4Q",
    authDomain: "codesprintbfinal.firebaseapp.com",
    databaseURL: "https://codesprintbfinal.firebaseio.com",
    projectId: "codesprintbfinal",
    storageBucket: "codesprintbfinal.appspot.com",
    messagingSenderId: "510324582625",
    appId: "1:510324582625:web:0968037dde801178fb6fa0"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const characterCollection = db.collection("characters");

export default db;
export {characterCollection};