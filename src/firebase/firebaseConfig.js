import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBjk0jPZl8tko_tqu_rVxIHGpGOwD8UFHU",
  authDomain: "rentalapp-a3983.firebaseapp.com",
  databaseURL: "https://rentalapp-a3983-default-rtdb.firebaseio.com",
  projectId: "rentalapp-a3983",
  storageBucket: "rentalapp-a3983.firebasestorage.app",
  messagingSenderId: "263950270553",
  appId: "1:263950270553:web:12356245acb0ba0bb9f148",
  measurementId: "G-BF04ZTBHVX"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;