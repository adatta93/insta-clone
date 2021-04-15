import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// seeding DB...uncomment only once
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCzDmr6boO98CoAESKDPUKNgJWLkdJzkhw",
  authDomain: "insta-clone-6c2c7.firebaseapp.com",
  projectId: "insta-clone-6c2c7",
  storageBucket: "insta-clone-6c2c7.appspot.com",
  messagingSenderId: "527300392761",
  appId: "1:527300392761:web:531da4515fda1628511ae8",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase, FieldValue };
