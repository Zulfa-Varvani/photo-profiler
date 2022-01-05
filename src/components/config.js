import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUgn8G491beHKJivmkhWRxbJlzPTgRKUE",
    authDomain: "profiler-967d3.firebaseapp.com",
    projectId: "profiler-967d3",
    storageBucket: "profiler-967d3.appspot.com",
    messagingSenderId: "886256899991",
    appId: "1:886256899991:web:627e17e0bb1b4cda0a56d2"
};

class Firebase{ //usility class
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    login(email, password) {return this.auth.signInWithEmailAndPassword(email,password)}
    logout() {return this.auth.signOut()}
    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.currentUser.updateProfile({
            displayName: name
        })
    }
    isInit() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }
    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.email
    }
}

export default new Firebase();