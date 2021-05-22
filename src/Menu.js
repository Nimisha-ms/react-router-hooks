import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Menu = () => {
  return (
    <>
      <div className="navbarmenu">
      <NavLink exact  className="linkcls" activeClassName='active_class' to='/'> About Us </NavLink>
      <NavLink exact  className="linkcls" activeClassName='active_class' to='/user/abc/test'> User </NavLink>
      <NavLink exact  className="linkcls" activeClassName='active_class' to='/search'> Search </NavLink>
      <NavLink exact  className="linkcls" activeClassName='active_class' to='/services'> Services </NavLink>
      <NavLink exact  className="linkcls" activeClassName='active_class' to='/contact'> Contact Us </NavLink>      
      </div>
    </>
  );
}

export default Menu;