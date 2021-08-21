import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHo7a0PlunQCBDpl0D6cT-46vinNlCtTM",
  authDomain: "cadastrovendedorasbarreto.firebaseapp.com",
  databaseURL: "https://cadastrovendedorasbarreto-default-rtdb.firebaseio.com",
  projectId: "cadastrovendedorasbarreto",
  storageBucket: "cadastrovendedorasbarreto.appspot.com",
  messagingSenderId: "209860339205",
  appId: "1:209860339205:web:12b523d579f12b33d01e6c"
  };

   // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);