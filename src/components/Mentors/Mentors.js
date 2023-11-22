// src/components/Mentors.js
import MentorCard from './Mentorcard';
import React from 'react';
import './mentors.css'; 
function Mentors() {
    return (
        <div className="mentorpage">

            <div className='mentorhead'>
                <div className="mentor-head-text">
                    Choose your Mentor.
                </div>
                <div className='mentor-head-subtext'>
                    Numerous Mentors in every Domain.
                </div>
            </div>
                <div className='mentors'>
                    <MentorCard/>
                    <MentorCard/>
                    <MentorCard/>
                    <MentorCard/>
                    <MentorCard/>
                    <MentorCard/>
                    <MentorCard/>
                    <MentorCard/>
                    <MentorCard/>
                    <MentorCard/>
                    <MentorCard/>
                    </div>
                </div>

    );
}

export default Mentors;
