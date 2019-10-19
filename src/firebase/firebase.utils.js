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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    console.log(snapShot)

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;