import React, { useState } from 'react';
import './mentorcard.css'
import IMG from '../../components/Sliding/ss/Connect.png'
import { Link } from 'react-router-dom';
const MentorCard = () => {
    const maxWords = 10;
    const [showMore, setShowMore] = useState(false);

    const mentorAbout = `Venture Capital Professional, Serial Entrepreneur, Corp. Finance, CxO, Advisor, Mentor & Company Builder. US, India & SE Asia Experience. Currently - Managing Partner, Early Stage VC Fund, Fintech Entrepreneur, Advisor/Mentor, Corporate Development Services to corporate VCs, family offices, VC funds & Startups. `;

    const words = mentorAbout.split(' ');

    const displayWords = showMore ? words : words.slice(0, maxWords);

    return (
        <Link to="/MentorInfo" style={{textDecoration:'none'}}>
        <div className="mentorcard">
            <div className="mentorpic">
                <img src={IMG} alt='' />
            </div>
            <div className="mentordesc">
                <div className="mentorname ">Vinod Keni</div>
                <div className="mentorfield">Investor, Entrepreneur& Mentor</div>
                <div className="mentorabout">{displayWords.join(' ')}{!showMore && words.length > maxWords && '...'}

                    <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>


            <div className="mentorprice">
              <div className=' mentorpackages '>  Packages </div>
              <div className=' mentorpackages-regular '>  Regular : 1 Session X 30min : Rs.1500 </div>
              <div className=' mentorpackages-allaccess '>  All Access : 1 Session X 60min : Rs.3000 </div> 
            </div>
        </div>
        </Link>
    );
};

export default MentorCard;
