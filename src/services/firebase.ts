import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBPLbGFSvhL8QcM-tAZTBfytySk3HWf0I0",
    authDomain: "letmeask-kalel.firebaseapp.com",
    databaseURL: "https://letmeask-kalel-default-rtdb.firebaseio.com",
    projectId: "letmeask-kalel",
    storageBucket: "letmeask-kalel.appspot.com",
    messagingSenderId: "717801705405",
    appId: "1:717801705405:web:6613fbe066bd55d4998cd4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database };


