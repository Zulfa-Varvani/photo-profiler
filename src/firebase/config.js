import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDTdnVId8XGZ1h3MrLaXruXzyjinMojvM4",
    authDomain: "photo-gallery-1d27c.firebaseapp.com",
    projectId: "photo-gallery-1d27c",
    storageBucket: "photo-gallery-1d27c.appspot.com",
    messagingSenderId: "231005045934",
    appId: "1:231005045934:web:0667953572fe963cc3193f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage(); //storage service
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFireStore, timeStamp}; //export services in react components