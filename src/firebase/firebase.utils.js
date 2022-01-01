import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDduFQLA69XPLy_1hb7Z9flz3q3jkOKQTQ",
    authDomain: "crwn-db-873ea.firebaseapp.com",
    projectId: "crwn-db-873ea",
    storageBucket: "crwn-db-873ea.appspot.com",
    messagingSenderId: "106413454908",
    appId: "1:106413454908:web:6d42c5415e1e33cab4f539"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return
   
    const userRef = doc(firestore, `users/${userAuth.uid}`)
   
    const snapShot = await getDoc(userRef)
   
    if (!snapShot.exists()) {
      const { displayName, email } = userAuth
      const createdAt = new Date()
   
      try {
        await setDoc(userRef, {
          displayName,
          email,
          createdAt,
          ...additionalData,
        })
      } catch (error) {
        console.log('Error creating user ', error.message)
      }
    }
   
    return userRef
  }
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);


// Your web app's Firebase configuration



