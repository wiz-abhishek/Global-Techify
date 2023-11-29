// Page.js
import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Routes, Route } from 'react-router-dom';
import Mentors from './Mentors/Mentors';
import MentorInfo from './MentorInfo/MentorInfo';
function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mentors" element={<Mentors />} />
      <Route path="/mentorInfo" element={<MentorInfo />} />
    </Routes>
  );
}

export default Page;
