import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCoCWGv8gUwxDG6Ayw4V852YaxCULFpkqM",
  authDomain: "schematic-capture.firebaseapp.com",
  databaseURL: "https://schematic-capture.firebaseio.com",
  projectId: "schematic-capture",
  storageBucket: "schematic-capture.appspot.com",
  messagingSenderId: "138524710398",
  appId: "1:138524710398:web:375f6526813261cdda1caf",
  measurementId: "G-NHPZRLZZ2F"
});

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
