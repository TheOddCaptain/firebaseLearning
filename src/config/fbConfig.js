  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  // This web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCCq0srYk2KimeMWHdqRd0HLB7D6V89RUA",
    authDomain: "react-with-firebase-fc6a4.firebaseapp.com",
    databaseURL: "https://react-with-firebase-fc6a4.firebaseio.com",
    projectId: "react-with-firebase-fc6a4",
    storageBucket: "react-with-firebase-fc6a4.appspot.com",
    messagingSenderId: "788105359805",
    appId: "1:788105359805:web:395902c1e20f2fc53ca2d4",
    measurementId: "G-GJEGTF5D1K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;