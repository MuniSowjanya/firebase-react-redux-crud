import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA6so315mpSpOJo6ybYV1KCymHQN7Fp8c8",
  authDomain: "react-blog-2a2fd.firebaseapp.com",
  databaseURL: "https://react-blog-2a2fd.firebaseio.com",
  projectId: "react-blog-2a2fd",
  storageBucket: "",
  messagingSenderId: "333954241079"
};
export const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
