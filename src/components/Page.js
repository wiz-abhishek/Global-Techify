// Page.js
import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Routes, Route } from 'react-router-dom';
function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Page;
