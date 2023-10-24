import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='nvbr'>
      <div className='logo'>logo</div>
      <div className='domains'>
        <div className='domains-header' onClick={toggleDropdown}>
          Domains ▼
        </div>
        {isDropdownOpen && (
          <div className='domains-dropdown'>
            <div>Engineering</div>
            <div>Management</div>
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
        <div className='notifications'>💬</div>
      </div>
    </div>
  );
}

export default Navbar;
