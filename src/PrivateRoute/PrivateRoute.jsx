/* import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location  = useLocation();

    if(loading){
        return <p>Loading...</p>
    }
    if(user){
        return children;
        }

  return (
    <Navigate to="/login" state={{from : location}} replace></Navigate>
  )
}

export default PrivateRoute */