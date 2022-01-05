import { useEffect, useState } from "react";
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUgn8G491beHKJivmkhWRxbJlzPTgRKUE",
    authDomain: "profiler-967d3.firebaseapp.com",
    projectId: "profiler-967d3",
    storageBucket: "profiler-967d3.appspot.com",
    messagingSenderId: "886256899991",
    appId: "1:886256899991:web:627e17e0bb1b4cda0a56d2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function register(name, email, password){
    return createUserWithEmailAndPassword(auth, email, password).then((user) =>{
        updateProfile(user.user, {displayName: name});
    });
}

export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
    return signOut(auth);
}

export function useAuth() {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {setUser(user)});
        return unsub;
    }, [])

    return user;
}