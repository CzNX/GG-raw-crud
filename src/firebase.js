import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBdxyUUrjPCChv3GHxFz87DZ2hggrV3d90",

  authDomain: "linkedin-clone-b503b.firebaseapp.com",

  projectId: "linkedin-clone-b503b",

  storageBucket: "linkedin-clone-b503b.appspot.com",

  messagingSenderId: "253419230573",

  appId: "1:253419230573:web:1bfa25b875fb210acb3664",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
