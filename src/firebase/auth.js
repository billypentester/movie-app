import { initializeApp } from '@firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAga4g7BSWY5NCENBCD42K3DpBs0TnqZ6s",
    authDomain: "movie-aae92.firebaseapp.com",
    projectId: "movie-aae92",
    storageBucket: "movie-aae92.appspot.com",
    messagingSenderId: "132099504597",
    appId: "1:132099504597:web:7d7f9b2f9013ca3440255c"

};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();