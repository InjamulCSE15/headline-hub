import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
        <div className='grid col-12 align-middle h-screen place-items-center'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
        )       
    }
    if(user && user?.email){
       return children; 
    }
    return (
        <Navigate state={location.pathname} to='/auth/login' />
    )
}
