// src/components/Mentors.js
import MentorCard from './Mentorcard';
import React from 'react';
import './mentors.css';
import a from './images/1.jpeg'
import b from './images/2.jpeg'
import c from './images/3.jpeg'
import d from './images/4.jpeg'
import e from './images/5.jpeg'
import f from './images/6.jpeg'
import g from './images/7.jpeg'
import h from './images/8.jpeg'
import i from './images/9.jpeg'
import j from './images/10.jpeg'
import k from './images/11.jpeg'
import l from './images/12.jpeg'
import m from './images/13.jpeg'
import n from './images/14.jpeg'
import o from './images/15.jpeg'
import p from './images/16.jpeg'
import q from './images/17.jpeg'
import r from './images/18.jpeg'

function Mentors() {
    return (
        <div className="mentorpage bg-black flex flex-col gap-4">

            <div className='mentorhead'>
                <div className="mentor-head-text">
                    Choose your Mentor.
                </div>
                <div className='mentor-head-subtext'>
                    Numerous Mentors in every Domain.
                </div>
            </div>
            <div className='mentortype '>
                <h2>SDE</h2>
            </div>
            <div className='mentor_main '>
            
                <div className='mentors flex flex-wrap gap-10 justify-center '>
                    <MentorCard 
                        name="Christian Bale"
                        img={a}
                    />
                    <MentorCard 
                        name="Cyllian Murphy"
                        img={b}
                    />
                   <MentorCard 
                        name="Robery Downey"
                        img={c}
                    />
               
                
                
                <MentorCard 
                        name="Toby Maguire"
                        img={d}
                    />
                    <MentorCard 
                        name="Tom Halland"
                        img={e}
                    />
                    <MentorCard 
                        name="De Caprio"
                        img={f}
                    />

                </div>
            </div>

            <div className='mentortype'>
                <h2>Data Analysis/Data Science</h2>
            </div>
            <div className='mentor_main'>
                <div className='mentors flex flex-wrap gap-10 justify-center'>
                <MentorCard 
                        name="Jacob Batlion
                        "
                        img={g}
                    />
                    <MentorCard 
                        name="Matt Damon"
                        img={h}
                    />
                    <MentorCard 
                        name="Chris Evans"
                        img={i}
                    />
               
                <MentorCard 
                        name="Steven Rogers"
                        img={j}
                    />
                    <MentorCard 
                        name="Brenden Kumar"
                        img={k}
                    />
                    <MentorCard 
                        name="Martin Guptil"
                        img={l}
                    />

                </div>
            </div>

            <div className='mentortype'>
                <h2>Product Management</h2>
            </div>
            <div className='mentor_main'>
                <div className='mentors flex flex-wrap gap-10 justify-center'>
                <MentorCard 
                        name="De Caprio"
                        img={m}
                    />
                    <MentorCard 
                        name="Aaron Finch"
                        img={n}
                    />
                    <MentorCard 
                        name="Andrew Simons"
                        img={o}
                    />

                <MentorCard 
                        name="Gilli Robert"
                        img={p}
                    />
                    <MentorCard 
                        name="Amrit sander"
                        img={q}
                    />
                    <MentorCard 
                        name="Palakh Khanna"
                        img={r}
                    />
                    
                </div>
            </div>
        </div>

    );
}

export default Mentors;
