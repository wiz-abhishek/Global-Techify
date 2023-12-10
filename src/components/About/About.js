import React from 'react'
import './About.css'
function About() {
  return (
    <div className='about'>
      <div className="flex mt-20 justify-center ml-auto mr-auto mb-20">
      <h1>About Us</h1>
      </div>
      <div className="justify-start">
      <h2 className="main-heading">Our Vision</h2>
      <p>Global Techify is a startup that provides mentorship to students. We empower students to stay up-to-date with the latest advancements in technology and connect them with experts from leading companies. Our goal is to help students explore their interests and pave their way towards a successful career in technology. At Global Techify, we believe in the power of mentorship and the potential of the next generation of tech leaders.</p>
      </div>
      <div className='vis'>
      <div className='mission card'>
        <h3 className='headi'>Mission</h3>
        <p>“Our mission is to be passionate in anticipating and providing the best floating products and experiences that excite our customers.”</p>
        </div>
        <div className='vision card'>
        <h3 className='headi'>Vision</h3>
        <p>“Our vision is to revolutionize the floatation industry through our quality & IP driven products
and services.”</p>
        </div>
      </div>
    </div>
  )
}

export default About
