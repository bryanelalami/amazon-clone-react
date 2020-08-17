import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDLUBWcq5luCYMewP2scnzBrIPAVyLMV-c",
        authDomain: "clone-35eda.firebaseapp.com",
        databaseURL: "https://clone-35eda.firebaseio.com",
        projectId: "clone-35eda",
        storageBucket: "clone-35eda.appspot.com",
        messagingSenderId: "81216549250",
        appId: "1:81216549250:web:dce866f8ecf46e28025f9b",
        measurementId: "G-88R8KK4CLV"
  });
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };  