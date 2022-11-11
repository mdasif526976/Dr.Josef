import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/Firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvidor = ({children}) => {
    const [user,setUser] = useState({});
    const [review,setReview] = useState(0)
    const [loader,setloader] = useState(true);

  // create user  
  const createUser =(email,password)=>{
    setloader(true)
    return createUserWithEmailAndPassword(auth,email,password) ;
  }
// sign in
  const signIn =(email,password)=>{
    setloader(true)
   return signInWithEmailAndPassword(auth,email,password)
  }
  // update profile
  const updateProfile =( displayName,photoURL)=>{
    updateProfile(auth.currentUser,{
      displayName:`displayName`,
      photoURL:`photoURL`
    }).then(()=>{

    })
    .catch((error)=>{
     console.error(error);
    })
    
  }
  // authenticate by google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = ()=>{
    setloader(true)
   signInWithPopup(auth,googleProvider)
    .then(result=>{
        const user = result.user;
        setUser(user);
    })
    .catch(error=>{
        console.error(error);
    })
  }

  // sign out
  
  const logOut = ()=>{
    signOut(auth)
    .then(() => {
      setUser('')
    }).catch((error) => {
      // An error happened.
    })
  }

 useEffect(()=>{
  const unsubscribe =
    onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser)
     setloader(false)
    })

  return ()=>{
    return unsubscribe();
  }
 },[])


    const authInfo ={auth,updateProfile,logOut,googleSignIn,signIn,loader,createUser,setloader,user,setUser,review,setReview };

  
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvidor;