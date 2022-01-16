import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHJWFydXLTWXxNk_vMPGauTAyGTgN05q4",
  authDomain: "twitterclone-e8b4a.firebaseapp.com",
  projectId: "twitterclone-e8b4a",
  storageBucket: "twitterclone-e8b4a.appspot.com",
  messagingSenderId: "167194182171",
  appId: "1:167194182171:web:5cc25bb3ff603fc04f6ebe"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
