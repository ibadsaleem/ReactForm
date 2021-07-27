import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDc3UmtYR1ZIxtvbHCj5pusVNG9lBSDzAg",
    authDomain: "reactjsform.firebaseapp.com",
    databaseURL: "https://reactjsform-default-rtdb.firebaseio.com",
    projectId: "reactjsform",
    storageBucket: "reactjsform.appspot.com",
    messagingSenderId: "142581141918",
    appId: "1:142581141918:web:d11c99b3e346d22eddc68f",
    measurementId: "G-13FBBNK62S"
  };
  // Initialize Firebase
let fire =firebase.initializeApp(firebaseConfig);

 export default fire;