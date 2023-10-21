import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom';

function Navbar() {
  const activelink='activelink';
  const normallink='normallink';
  return (
    <div className='navbar'>
      <div className='logo'>logo</div>
      <div className='links'>

        <NavLink to='/' 
        className={({isActive})=>
          isActive?activelink:normallink}>
            <div>
          Home</div>
        </NavLink>
        <NavLink to='/about' 
         className={({isActive})=>
          isActive?activelink:normallink}><div>
            About</div>
        </NavLink>
        
        <div className='link'>FAQ</div>
        <NavLink to='/contactus' 
         className={({isActive})=>
          isActive?activelink:normallink}><div>
            ContactUs</div>
        </NavLink>
        <div className='socialhandle'>
            <div className='sociallink'>insta</div>
            <div className='sociallink'>fb</div>
            <div className='sociallink'>twitter</div>
        </div>
        <div className='login'>login</div>
      </div>
    </div>

  )
}

export default Navbar
