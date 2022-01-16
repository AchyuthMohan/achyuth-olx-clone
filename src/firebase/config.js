import firebase from "firebase";
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDy0c432lEDUkcBY7H8ir3T0Eogz87S6Cg",
    authDomain: "olx-clone-bbafe.firebaseapp.com",
    projectId: "olx-clone-bbafe",
    storageBucket: "olx-clone-bbafe.appspot.com",
    messagingSenderId: "525125144618",
    appId: "1:525125144618:web:e7c66ac4466a154743b353",
    measurementId: "G-2BBRFRBGVC"
  };
  export default firebase.initializeApp(firebaseConfig)