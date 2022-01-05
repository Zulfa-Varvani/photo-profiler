import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUgn8G491beHKJivmkhWRxbJlzPTgRKUE",
    authDomain: "profiler-967d3.firebaseapp.com",
    projectId: "profiler-967d3",
    storageBucket: "profiler-967d3.appspot.com",
    messagingSenderId: "886256899991",
    appId: "1:886256899991:web:627e17e0bb1b4cda0a56d2"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = app.auth();
const storage = firebase.storage();

export {auth, db, storage};