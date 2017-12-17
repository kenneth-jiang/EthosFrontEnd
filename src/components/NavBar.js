import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink
        to='/signup'
        exact style={{ background: 'yellow' }}
        activeStyle={{ background: 'green' }}
        >SignUp</NavLink>
      <NavLink
        to='/login'
        exact style={{ background: 'yellow' }}
        activeStyle={{ background: 'green' }}
      >Login</NavLink>
      <NavLink
        to='/'
        exact style={{ background: 'yellow' }}
        activeStyle={{ background: 'green' }}
      >Main</NavLink>
    </div>
  )
}

export default NavBar;
