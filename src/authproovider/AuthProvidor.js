import React, { createContext, useState } from 'react';
import {getAuth} from 'firebase/auth'
import { app } from '../firebase/Firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvidor = ({children}) => {
    const [user,setUser] = useState({});
    const [review,setReview] = useState(0)
    const [loader,setloader] = useState(true);
    const authInfo ={auth,loader,setloader,user,setUser,review,setReview
    
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