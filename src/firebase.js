import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAM9277CdQ9y3wdE9MCSxhLBjrvUMaXG0U",
  authDomain: "careerzoneadminpannel.firebaseapp.com",
  projectId: "careerzoneadminpannel",
  storageBucket: "careerzoneadminpannel.appspot.com",
  messagingSenderId: "326326221393",
  appId: "1:326326221393:web:a5afe73016fa17479e9670",
  measurementId: "G-S8L1XVGYJ3",
  databaseUrl: 'https://careerzoneadminpannel-default-rtdb.firebaseio.com/'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

export { auth, googleProvider, githubProvider, facebookProvider, twitterProvider };
export default db;
export const storage = firebase.storage();
export const app = initializeApp(firebaseConfig);
