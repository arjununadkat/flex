import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCAOLsTp-Guuxyt9kETTNDmC85vOpjNW50",
    authDomain: "flexsuite-edfeb.firebaseapp.com",
    projectId: "flexsuite-edfeb",
    storageBucket: "flexsuite-edfeb.appspot.com",
    messagingSenderId: "940250401446",
    appId: "1:940250401446:web:db6ed66973e42da29a4267",
    measurementId: "G-HQV031W3ZQ"
};

firebase.initializeApp(firebaseConfig);


export default firebase;
