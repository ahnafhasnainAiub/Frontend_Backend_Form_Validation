import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../store/auth';

function ProtectedRoute() {

  //  const isLoggedIn = window.localStorage.getItem("token");

   const {authData} = useAuth();
 
   return authData?._id && authData?.token  ? <Outlet/> :<Navigate to="login"/>;
}

export default ProtectedRoute;