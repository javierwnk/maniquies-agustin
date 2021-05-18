
  var firebaseConfig = {
    apiKey: "AIzaSyBfDvnh6u-c3rZYW4I_FdVvCZuhv8_NgWQ",
    authDomain: "maniquies-agustin.firebaseapp.com",
    projectId: "maniquies-agustin",
    storageBucket: "maniquies-agustin.appspot.com",
    messagingSenderId: "860048799974",
    appId: "1:860048799974:web:d08c72e1bb55e8c44c6327"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const fs = firebase.firestore()