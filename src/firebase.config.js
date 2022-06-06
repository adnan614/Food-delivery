import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0fmpMHNRt52puniR4qxqvPEWisoeTq7E",

  authDomain: "fooddelivery-980ae.firebaseapp.com",

  databaseURL: "https://fooddelivery-980ae-default-rtdb.firebaseio.com",

  projectId: "fooddelivery-980ae",

  storageBucket: "fooddelivery-980ae.appspot.com",

  messagingSenderId: "424492589734",

  appId: "1:424492589734:web:6eff0aaf6e49c2cc5b8a67",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
