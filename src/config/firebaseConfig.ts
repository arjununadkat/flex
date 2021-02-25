import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBxOiANzuwPRF5w_9nUGXJ5_NnWF33TG4o",
    authDomain: "flex-softwaresuite-website.firebaseapp.com",
    projectId: "flex-softwaresuite-website",
    storageBucket: "flex-softwaresuite-website.appspot.com",
    messagingSenderId: "74668630082",
    appId: "1:74668630082:web:cd37a774bd1ceb54460ddb",
    measurementId: "G-1Y6J25W8BM"
};

firebase.initializeApp(firebaseConfig);


export default firebase;
