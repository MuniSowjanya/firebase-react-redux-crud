import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA6so315mpSpOJo6ybYV1KCymHQN7Fp8c8",
  authDomain: "react-blog-2a2fd.firebaseapp.com",
  databaseURL: "https://react-blog-2a2fd.firebaseio.com",
  projectId: "react-blog-2a2fd",
  storageBucket: '',
  messagingSenderId: "333954241079"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
