const firebase = require('firebase');
require('firebase/storage')

const firebaseConfig = {
  apiKey: "AIzaSyCXu0B7QX_QPW2hGNj20E4uwEzw0JKRnMw",
  authDomain: "rent-a-car-b5d57.firebaseapp.com",
  projectId: "rent-a-car-b5d57",
  storageBucket: "rent-a-car-b5d57.appspot.com",
  messagingSenderId: "495512674565",
  appId: "1:495512674565:web:6bef99ec72b8d70f5cd76c",
  measurementId: "G-SDRNY7C1YM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebase.auth();

module.exports = { db, auth, storage };
