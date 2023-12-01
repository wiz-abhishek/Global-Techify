import React, { useState } from 'react';
import './navbar.css';
import Authentication from '../Authentication/Authenticaion';

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
      <div className='logo'>logo</div>
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
      <div className='right'>
        <div className='profile'>👤</div>
        {/*  <div className='notifications'>💬</div> */ }
        <Authentication/>
      </div>
    </div>
  );

        }
export default Navbar;
