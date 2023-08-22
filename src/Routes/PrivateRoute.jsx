import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import MainLoader from '../Component/Loader/MainLoader';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    let location = useLocation();
    if(loading){
        return <MainLoader/>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
};

export default PrivateRoute;