import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDDQzkguoHa4oFjP3Xr-wPA6LZ_G6rPccQ",
    authDomain: "ecommerce-4d51f.firebaseapp.com",
    databaseURL: "https://ecommerce-4d51f.firebaseio.com",
    projectId: "ecommerce-4d51f",
    storageBucket: "ecommerce-4d51f.appspot.com",
    messagingSenderId: "633364513150",
    appId: "1:633364513150:web:53768efd99d9ad82ff332f"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;