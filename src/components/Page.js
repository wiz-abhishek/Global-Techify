// Page.js
import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import ContactUs from './contactus/ContactUs';
import { Routes, Route } from 'react-router-dom';

function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />

    </Routes>
  );
}

export default Page;
