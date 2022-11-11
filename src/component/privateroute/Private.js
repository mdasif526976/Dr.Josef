import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../authproovider/AuthProvidor';

const Private = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation();
   
    if (loader) {
        return <div className="w-16 h-16 border-4 border-dashed
         border-sky-400 rounded-full animate-spin dark:border-violet-400"></div>
    }
    if (user) {
        return children;
     }

    return <Navigate to='/login' state={{form:location}} replace></Navigate>
    
    // return children;
};

export default Private;