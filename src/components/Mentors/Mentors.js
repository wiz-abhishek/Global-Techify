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
            <div className='mentortype'>
                <h2>SDE</h2>
            </div>
            <div className='mentor_main'>
            
                <div className='mentors'>
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                </div>
                
                <div className='mentors'>
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                </div>
            </div>

            <div className='mentortype'>
                <h2>Data Analysis/Data Science</h2>
            </div>
            <div className='mentor_main'>
                <div className='mentors'>
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                </div>
                <div className='mentors'>
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                </div>
            </div>

            <div className='mentortype'>
                <h2>Product Management</h2>
            </div>
            <div className='mentor_main'>
                <div className='mentors'>
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                </div>
                <div className='mentors'>
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                </div>
            </div>
        </div>

    );
}

export default Mentors;
