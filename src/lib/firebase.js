import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { seedDatabase } from "../seed";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyCbeHXNHH4kl3zjFE3GqbDIgOoHb-eTvcY",
  authDomain: "instagram-ea6ff.firebaseapp.com",
  projectId: "instagram-ea6ff",
  storageBucket: "instagram-ea6ff.appspot.com",
  messagingSenderId: "518982239636",
  appId: "1:518982239636:web:1acb1177d14f275dc4fb81",
};

const app = initializeApp(firebaseConfig);
const { FieldValue } = Firestore;
const db = getFirestore(app);
const auth=getAuth(app)


//call seedDatabase once
//seedDatabase(db)
export { app, FieldValue,auth };
