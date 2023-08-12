import React from 'react'
import {NavLink} from 'react-router-dom'

function SignOut() {
  return (
    <ul className='right'>
    <li><NavLink to="/singup">Signup</NavLink></li>
    <li><NavLink to="/singin">LogIn</NavLink></li>

  </ul>
  )
}

export default SignOut;