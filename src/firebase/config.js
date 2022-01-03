import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUgn8G491beHKJivmkhWRxbJlzPTgRKUE",
    authDomain: "profiler-967d3.firebaseapp.com",
    projectId: "profiler-967d3",
    storageBucket: "profiler-967d3.appspot.com",
    messagingSenderId: "886256899991",
    appId: "1:886256899991:web:627e17e0bb1b4cda0a56d2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage(); //storage service
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFireStore, timeStamp}; //export services in react components