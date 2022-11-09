import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
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
  // authenticate by google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = ()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        const user = result.user;
        setUser(user);
    })
    .catch(error=>{
        console.error(error);
    })
  }

    const authInfo ={auth,googleSignIn,signIn,loader,createUser,setloader,user,setUser,review,setReview };

  
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvidor;