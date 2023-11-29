// Page.js
import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Routes, Route } from 'react-router-dom';
import Mentors from './Mentors/Mentors';
import MentorInfo from './MentorInfo/MentorInfo';
import Mentorform from './Become_A_Mentor/mentorform'
function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mentors" element={<Mentors />} />
      <Route path="/mentorInfo" element={<MentorInfo />} />
      <Route path="/mentorform" element={<Mentorform />} />
    </Routes>
  );
}

export default Page;
