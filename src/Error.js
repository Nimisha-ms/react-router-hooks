import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Error = () => {
  return (
    <>
    <h1>Sorry!</h1>
    <h2>Page not found</h2>
    <NavLink to="/">Go Back</NavLink>
    </>
  )
}

export default Error;