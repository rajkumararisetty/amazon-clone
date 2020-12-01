import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrH6-lRRYJGNcgbBTvalDKePFFSwFqJfY",
  authDomain: "fir-21e28.firebaseapp.com",
  databaseURL: "https://fir-21e28.firebaseio.com",
  projectId: "fir-21e28",
  storageBucket: "fir-21e28.appspot.com",
  messagingSenderId: "169079838359",
  appId: "1:169079838359:web:37658eb8a9b600d51ebbd2",
  measurementId: "G-JKMD0Y50BV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
