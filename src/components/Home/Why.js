import React from 'react'
import './Why.css'
import a247 from './images/247.jpeg'
import hack from './images/hack.jpeg'
import inter from './images/inter.jpeg'
import men from './images/men.jpeg'

function Why() {
    return (
        <div class="why">
            <div class="head1">
                <h1 class="heading">Why Global Techify</h1>
            </div>

            <div className="why-card">
                <div className="tf card1">
                    <div><img className="image" src={men} alt="" /></div>
                    <p class="description">Career Mentorship Network : Our platform connects students with industry experts who can provide guidance and insights about the latest technology trends and developments. Our goal is to help students stay up-to-date with the latest advancements and prepare them for successful careers in the tech industry.</p>
               </div>
                <div className="tf card2">
                <img className="image" src={a247} alt="" />
                    <p>24/7 Success Support : At Global Techify, we are committed to providing the best possible support to our students. Our team is available 24/7 to answer any questions or concerns you may have. We also provide a range of resources and tools to help you succeed, including online workshops, career advice, and networking opportunities.</p>
                    </div>
                <div className="tf card3">
                    <img className="image"  src={inter} alt="" />
                    <p>Comprehensive Interview Preparation :
                    Develop and provide comprehensive interview preparation modules covering various industries and job positions.
                    Include mock interview sessions and feedback to enhance practical skills and confidence.</p>
                </div>
                <div className="tf card4">
                <img className="image" src={hack} alt="" />
                <p>
                    Hackathon Support :
                    Offer specialized resources and training for hackathon participants, aiding them in developing problem-solving skills and innovative thinking.
                    Showcase success stories of participants who have excelled in hackathons with the help of your platform.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Why;