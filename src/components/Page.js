// Page.js
import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Routes, Route } from 'react-router-dom';
import Sliding from './Sliding/Sliding';
function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sliding" element={<Sliding />} />
    </Routes>
  );
}

export default Page;
