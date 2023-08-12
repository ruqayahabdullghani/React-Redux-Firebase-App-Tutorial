import React from 'react'
import {NavLink} from 'react-router-dom'


function SingIn() {
  return (
    <ul className='right'>
      <li><NavLink to="/creatProject">New Project</NavLink></li>
      <li><NavLink to="/">LogOut</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>

    </ul>
  );
}

export default SingIn;