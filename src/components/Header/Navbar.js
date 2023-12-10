import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [Domains, setDomains] = useState('Domains');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDomainClick = (domain) => {
    setDomains(domain);
    setIsDropdownOpen(false); 
  };

  return (
    <div className='nvbr'>
      <div className='nav-items'>logo</div>
      <div className='domains'>
        <div className='domains-header' onClick={toggleDropdown}>
          {Domains} ▼
        </div>
        {isDropdownOpen && (
          <div className='domains-dropdown'>
            <div onClick={() => handleDomainClick('Engineering')}>Engineering</div>
            <div onClick={() => handleDomainClick('Management')}>Management</div>
          </div>
        )}
      </div>
      <div className='search'>
        <input
          type="text"
          placeholder="Search..."
        />
      </div>
      <Link to ="/" style={{textDecoration:'none'}}><div className='nav-items'>Home</div></Link>
      <Link to ="/Mentors" style={{textDecoration:'none'}}><div className='nav-items'>Mentor</div></Link>
      <Link to ="/about" style={{textDecoration:'none'}}><div className='nav-items'>About</div></Link>
      <Link to ="/contactus" style={{textDecoration:'none'}}><div className='nav-items'>Contact</div></Link>
      <Link to ="/services" style={{textDecoration:'none'}}><div className='nav-items'>Services</div></Link>
      <Link to ="/ourteam" style={{textDecoration:'none'}}><div className='nav-items'>Our Team</div></Link>
      <div className='right'>
        <div className='profile'>👤</div>
        {/*  <div className='notifications'>💬</div> */ }
      </div>
    </div>
  );

        }
export default Navbar;
