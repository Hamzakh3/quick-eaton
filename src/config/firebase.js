import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCAAYxfJSvMd_kXsXDxXAW53mBVhLYVAy0',
  authDomain: 'quick-eaton.firebaseapp.com',
  databaseURL: 'https://quick-eaton.firebaseio.com',
  projectId: 'quick-eaton',
  storageBucket: '',
  messagingSenderId: '155639858304',
  appId: '1:155639858304:web:42078bfbc9b2f999',
};
// Initialize Firebase
firebase.initializeApp (firebaseConfig);

const db = firebase.firestore ();

function SignIn (valueStr) {
  console.log (valueStr);
}

function UserSignUp(userObj, pass) {
  // Add a new document with a generated id.
  firebase.auth().createUserWithEmailAndPassword(userObj.email, pass).then(()=>{
    db
    .collection ('users')
    .add (
      userObj  
    )
    .then (function (docRef) {
      console.log ('Document written with ID: ', docRef.id);
    })
    .catch (function (error) {
      console.error ('Error adding document: ', error);
    });
  })
  
}

export {
  SignIn,
  UserSignUp
}
