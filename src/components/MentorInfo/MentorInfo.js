import React from "react";
import IMG from './meneeimg.jpeg'
import './mentorInfo.css'
import PriceCard from "./PriceCard";

function MentorInfo() {
    return (
        <div>
            <div className="top flex justify-evenly ">
                <div>
                <img className="mentorimg justify-center items-center" src={IMG} alt='' />
                <h2>Vinod Keni</h2></div>
                <PriceCard/>
            </div>
            <div className="about">
                <h2>About</h2>
                <p>
                    I am an accredited Chartered Accountant of India and have a Master's Degree in Commerce. I am an ardent supporter of stepping out of comfort zones and keen to explore any kind of opportunities that life might have for me. Currently associated with Deloitte USI and previously associated with Price Waterhouse & Co LLP and have a total post qualification work experience of more than 7 years. Expertise in Statutory Audit, Limited Reviews and IFCFR assignments of listed/unlisted/overseas clients belonging to Manufacturing & Trading, IT, Telecom, Banking and Service industry across multiple geographies including international assignments. Financial Statements under IFRS / Ind-AS / Indian GAAP and ISA compliance.
                </p>
                
            </div>
            <div className="Info">
                <price />
            </div>
        </div>
    )
}

export default MentorInfo;