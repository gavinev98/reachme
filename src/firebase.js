  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCBtWeVf1tP7GRDMpG6r87OrlOQdpBM8FE",
    authDomain: "reachme-react.firebaseapp.com",
    projectId: "reachme-react",
    storageBucket: "reachme-react.appspot.com",
    messagingSenderId: "665361989176",
    appId: "1:665361989176:web:6e9595a9d9215146ce70cd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider, storage};