import React from 'react'

import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

isAuthenticated = () => {
    var auth = sessionStorage.getItem('@web/email')
    if (!auth)
        return false;

    return true;
}

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}){
  const loading = false;

  if(loading){
    return(
      <div></div>
    )
  }

  if(!isAuthenticated && isPrivate){
    return <Navigate to="/" />
  }

  if(isAuthenticated && !isPrivate){
    return <Navigate to="/dashboard" />
  }


  return(
    <Route
      {...rest}
      render={ props => (
        <Component {...props} />
      )}
    />
  )
}