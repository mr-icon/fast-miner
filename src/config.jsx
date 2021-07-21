import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAbKusYSBIU9O8-JHINcb-vHSCErN_1PT0",
    authDomain: "fast-miner-6dd04.firebaseapp.com",
    projectId: "fast-miner-6dd04",
    storageBucket: "fast-miner-6dd04.appspot.com",
    messagingSenderId: "25963283112",
    appId: "1:25963283112:web:d3a87442147b8dcb5df89d"
  });

  export default firebaseConfig;