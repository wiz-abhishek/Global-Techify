import React, { useState } from 'react';
import './mentorcard.css'
import IMG from '../../components/Sliding/ss/Connect.png'
const MentorCard = () => {
    const maxWords = 10;
    const [showMore, setShowMore] = useState(false);

    const mentorAbout = `Venture Capital Professional, Serial Entrepreneur, Corp. Finance, CxO, Advisor, Mentor & Company Builder. US, India & SE Asia Experience. Currently - Managing Partner, Early Stage VC Fund, Fintech Entrepreneur, Advisor/Mentor, Corporate Development Services to corporate VCs, family offices, VC funds & Startups. Visiting Faculty, IIMK Experience across the entire lifecycle of VC funds including launch, fundraising, deployment, portfolio management, and exits. Have launched and raised LP commitments for multiple VC funds. Investments in VC/PE funds, startups, and growth-stage businesses – social impact, deeptech, alternate protein, B2B, SaaS, cleantech, tech, services & fintech. CFO/CEO/COO of venture & PE-backed businesses in the US. Exit to public companies. As CFO, have led NASDAQ-listed IPOs for tech startups in the US. Experience in building and scaling businesses, financial management, fundraising, restructuring, and exits as CFO & CEO. Partnerships & Strategic Alliances. M&A. As an entrepreneur, co-founded businesses in financial services, outsourcing, and technology. Successfully exited to larger/public companies. Have built profitable back-office and outsourcing businesses. Experienced with GTM strategies, business development, and strategic initiatives. Global living & professional experience in the US & India. Frequent speaker, blogger & writer. Guest Faculty.`;

    const words = mentorAbout.split(' ');

    const displayWords = showMore ? words : words.slice(0, maxWords);

    return (
        <div className="mentorcard">
            <div className="mentorpic">
                <img src={IMG} alt='' />
            </div>
            <div className="mentordesc">
                <div className="mentorname ">Vinod Keni</div>
                <div className="mentorfield">Investor, Entrepreneur, Mentor, Director & Company Builder, Founder & Managing Partner, Qi Ventures</div>
                <div className="mentorabout">{displayWords.join(' ')}{!showMore && words.length > maxWords && '...'}

                    <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>


            <div className="mentorprice">
              <div className=' mentorpackages '>  Packages </div>
              <div className=' mentorpackages-regular '>  Regular :<br/>
                1 Session X 30min
                Rs.1500 </div>
              <div className=' mentorpackages-allaccess '>  All Access :<br/>
                1 Session X 60min
                Rs.3000 </div> 
               
               
            </div>
        </div>
    );
};

export default MentorCard;
