import React from 'react'
import AVAILABILITY from './images/Availability.jpg'
import CareerAdvice from './images/CareerAdvice.jpg'
import ExpertNetworking from './images/ExpertNetworking.jpg'
import IIAT from './images/IndustryInsightsandTrends.jpg'
import Mentoring from './images/Mentoring.jpg'
import SDP from './images/SkillDevelopmentPrograms.jpg'
import TN from './images/TechNews.jpg'
import Hackathon from './images/Hackathon.jpeg'
import GD from './images/GD.jpeg'
function ServicesCard(props) {
    return (
        <div className='hover:scale-105 duration-300 h-[28rem] p-3 w-[18rem] overflow-hidden bg-black text-white rounded-2xl' style={{ boxShadow: '0px 0px 10px 3px #006eff' }}>
            <img className='h-[11rem] rounded-full mb-3 w-[100%] ' src={props.img} alt='' />
            <div className='font-serif text-3xl flex justify-center underline'>{props.heading}
            </div>
            <div className=' text-[1rem] px-3 py-2 flex items-center justify-center'>
                {props.content}
            </div>
        </div>
    )
}
function Services() {
    return (
        <div className='bg-black'>
            <div className='w-[100%] flex justify-center p-3 text-white font-mono text-5xl font-bold'>Services</div>
            <div className='flex h-fit justify-center gap-10 p-10 items-center flex-wrap'>
                <ServicesCard img={AVAILABILITY} heading="24x7 Availability" content="Ensuring round-the-clock availability of support and resources to assist individuals at any time, providing convenience and flexibility." />
                <ServicesCard img={ExpertNetworking} heading="Expert Networking" content="
Expert Networking
Connecting individuals with industry experts and professionals to expand their professional network, gain insights, and explore collaboration opportunities." />
                <ServicesCard img={CareerAdvice} heading="Career Advice" content="Our experts provide career advice to students who want to pursue a career in the tech industry. Get guidance on job search, interviews, and more." />
                <ServicesCard img={IIAT} heading="Interview Prep" content="Develop and provide comprehensive interview preparation modules covering various industries and job positions.
Include mock interview sessions and feedback to enhance practical skills and confidence." />
                <ServicesCard img={Mentoring} heading="Mentorship" content="Our mentorship program provides students with the opportunity to connect with experts in various fields of technology. Students can gain valuable insights and knowledge from these industry professionals." />
                <ServicesCard img={SDP} heading="Skill Development Programs" content="Offering tailored programs and resources to enhance individuals' skills, ensuring they stay competitive in the ever-evolving job market" />
                <ServicesCard img={TN} heading="Tech News" content="Our website provides the latest news and updates on technology trends, innovations and companies. Stay informed and ahead of the curve with Global Techify." />
                <ServicesCard img={Hackathon} heading="Hackathon Support" content="Offer specialized resources and training for hackathon participants, aiding them in developing problem-solving skills and innovative thinking.
" />
                <ServicesCard img={GD} heading="Group Discussion" content="Facilitating interactive and collaborative discussions among individuals to share ideas, perspectives, and knowledge on career-related topics, fostering learning and networking opportunities." />
            </div>
        </div>
    )
}

export default Services
