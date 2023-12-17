import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navbar1() {
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
    <Navbar expand="lg" className="bg-black">
      <Navbar.Brand className='px-[1vw]'>
        <Link to="/" className=' text-blue-600 no-underline font-bold '>Global Techify</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link}  to="/" className=' text-white nav-items'm>Home</Nav.Link>
          <Nav.Link as={Link} to="/Mentors" className=' text-white nav-items'm>Mentor</Nav.Link>
          <Nav.Link as={Link} to="/about" className=' text-white nav-items'm>About</Nav.Link>
          <Nav.Link as={Link} to="/contactus" className=' text-white nav-items'm>Contact</Nav.Link>
          <Nav.Link as={Link} to="/services" className=' text-white nav-items'm>Services</Nav.Link>
          <Nav.Link as={Link} to="/ourteam" className=' text-white nav-items'm>Our Team</Nav.Link>
        
        </Nav>
        <div className='text-white hover:cursor-pointer p-2' onClick={toggleDropdown}>
            {Domains} ▼
          
          {isDropdownOpen && (
            <div className='domains-dropdown'>
              <div onClick={() => handleDomainClick('Engineering')}>Engineering</div>
              <div onClick={() => handleDomainClick('Management')}>Management</div>
            </div>
          )}
          </div>
      

        <div className='search mx-1 '>
          <input className='p-1 rounded-lg w-[10rem]' type="text" placeholder="Search..." />
        </div>
        <div className='w-fit m-2'>
          <div className='profile'>👤</div>
          {/* <div className='notifications'>💬</div> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;
