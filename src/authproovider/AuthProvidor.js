import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider,
 onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../firebase/Firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvidor = ({children}) => {
    const [user,setUser] = useState({});
    const [oldReview,SetReview] = useState(0);
    const [reviewName,setReviewName] = useState(null)
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
  const updateUser =( displayName,photoURL)=>{
    return updateProfile(auth.currentUser,{
      displayName:displayName,
      photoURL:photoURL
    })
    
  }
  // authenticate by google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = ()=>{
    setloader(true)
   return signInWithPopup(auth,googleProvider)
    
  }

  //   // authenticate by github
  const githubProvider =  new GithubAuthProvider();
  const githubSignIn = ()=>{
    setloader(true);
    signInWithPopup(auth,githubProvider).then(result =>{
      const user = result.user;
        setUser(user);
        
    })
  .catch(err=>console.error(err))
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
    const UnSubscribe = onAuthStateChanged(auth,currentUser =>{  
         setUser(currentUser)
         setloader(false)
     })
        return ()=> UnSubscribe();
  },[])

    const authInfo ={auth,githubSignIn,updateUser,logOut
      ,googleSignIn,signIn,loader,createUser,setloader,user,setUser,oldReview,SetReview,
      reviewName,setReviewName
    };

  
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvidor;