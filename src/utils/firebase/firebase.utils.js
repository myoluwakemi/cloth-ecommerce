//create an app instant base on config
import { initializeApp} from 'firebase/app'
import {getDoc, doc, setDoc, getFirestore} from 'firebase/firestore'
import {
    getAuth, 
    signOut,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider} 
    from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAWqevRxZsidhot76FQgmBX3IPZ-s8qr5o",
    authDomain: "cloth-ecommerce-89aa4.firebaseapp.com",
    projectId: "cloth-ecommerce-89aa4",
    storageBucket: "cloth-ecommerce-89aa4.appspot.com",
    messagingSenderId: "851484902357",
    appId: "1:851484902357:web:fe67a39fdd8a2f8779335c"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
    if(!userAuth) return
    //takes 3 arguement, 1: the initialize db 2: the name we wanna call our collection
    //3: we need a unique id that we have access to, that is gotten from the user object
    const userDocRef = doc(db, 'users', userAuth.uid )
    const userSnapShot = await getDoc(userDocRef)


    //pseudo code
    //if user data does not exit
    //create / set the document with the data from userAuth in my collection
    if(!userSnapShot.exists()){
        const {displayName, email } = userAuth
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch(error){
            console.log(`error creating user ${error}`)

        }

    }
    // if user data exists
    //return userDocRef
    return userDocRef
} 

export const createAuthWithEmailandPassword =  async (email, password)=> {
    if(!email || !password) return
   return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async() => await signOut(auth)

  export const onAuthStateChangedListener =(callback) => 
  onAuthStateChanged(auth, callback)
