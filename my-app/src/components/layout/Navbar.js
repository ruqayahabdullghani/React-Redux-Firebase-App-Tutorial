import React from 'react'
import {Link} from 'react-router-dom'
import SingIn from './SingIn'
import SignOut from './SignOut'


function Navbar() {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/'  className='brand-logo'> Marioplan</Link>
        <SingIn/>
        <SignOut/>
      </div>

    </nav>
  )
}

export default Navbar