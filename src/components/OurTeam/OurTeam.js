import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import { Link } from 'react-router-dom'
import abhi from './Images/abhi.jpg'
import Ritwij from './Images/Ritiwij_Singh.jpeg'
import amisha from './Images/Amisha.png'
import swatantra from './Images/swatantra.jpeg'
import Vineet from './Images/vineet.jpeg'
import Apoorv from './Images/Apoorv.jpg'
function OurTeam() {'./Images/abhi.jpg'
    return (
        <div>
            <div className='h-[50vh] w-[100%] bg-black gap-4 flex flex-col justify-center items-center  '>
                <div className='text-6xl font-bold'>
                    <span className=' text-white'>   Our</span>
                    <span className=' text-[#006eff]'> Team</span></div>
                <div className='text-xl font-semibold text-center text-white'>
                    Our aim is to create a better world in the floatation industry through our innovative and IP driven products and services.</div>
            </div>
            <div className='px-20 py-10 font-mono bg-black text-white font-normal text-lg '>Our Team consists of a group of engineers from IIT (BHU) Varanasi, having industrial experience in Finance, Marketing, Business Development, Administration and Research & Development. Professors and Mentors from IIT (BHU) Varanasi are technical advisors to our company and guide us to deliver quality and technology driven products pertaining to Global Industrial Standards.</div>

            <div className='bg-black'>
                <div className=' w-[100%] flex justify-center items-center text-white font-semibold font-serif text-5xl underline' >Leadership</div>
                <div className='p-20 flex flex-wrap justify-center items-center gap-3'>
                   <Link to ="https://www.linkedin.com/in/amisha-prajapati-7b4aa9200" style={{ textDecoration: 'none' }}> <TeamMemberCard img={amisha} name="Amisha Prajapati" position="Technical Executive" /></Link>
                    <Link to="https://www.linkedin.com/in/ritiwij-singh-69a6b4226" style={{ textDecoration: 'none' }}><TeamMemberCard img={Ritwij} name="Ritiwij Singh" position="Technical Executive" /></Link>
                    <Link to="https://www.linkedin.com/in/vineet-soni-00997222a" style={{ textDecoration: 'none' }}><TeamMemberCard img={Vineet} name="Vineet Soni" position="Technical Executive" /></Link>
                </div>
            </div>
            <div className='bg-black'>
                <div className=' w-[100%] flex flex-wrap justify-center items-center text-white font-semibold font-serif text-5xl underline' >Team Members</div>
                <div className='p-20 flex flex-wrap justify-center items-center gap-3'>
                <Link to="https://www.linkedin.com/in/apoorv-dubey-a5b4ab26a/" style={{ textDecoration: 'none' }}><TeamMemberCard img={Apoorv} name="Apoorv Dubey" position="Technical Executive" /></Link>
                <Link to="https://www.linkedin.com/in/abhishek-shukla-350713255/" style={{ textDecoration: 'none' }}><TeamMemberCard img={abhi} name="Abhishek Shukla" position="Technical Executive" /></Link>
                    {/* <TeamMemberCard name="Apoorv Dubey" position="Technical Executive" /> */}
                </div>
            </div>
            <div className='bg-black'>
                <div className=' w-[100%] flex justify-center items-center text-white font-semibold font-serif text-5xl underline' >Consultant and Advisor</div>
                <div className='p-20 flex flex-wrap justify-center items-center gap-3'>
                    <TeamMemberCard img={swatantra} name="Swatantra Soni" position="Technical Executive" />
                    {/* <TeamMemberCard name="Apoorv Dubey" position="Technical Executive" />
                    <TeamMemberCard name="Apoorv Dubey" position="Technical Executive" /> */}
                </div>
            </div>



        </div>
    )
}

export default OurTeam
