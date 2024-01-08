import React, { useContext } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import { AuthContext } from '../store/Context'

function PrivateRoutes() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      {authCtx.isLoggedIn ?   <Outlet/> : <Navigate to="/auth"/> }
    </div>
  )
}

export default PrivateRoutes
