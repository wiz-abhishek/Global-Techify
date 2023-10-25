import React from 'react'
import './HomeButtons.css'

function HomeButtons() {
    return (
        <div class="Home_Button">

            <div class="But">
                <div><button class="custom-button red">Get Mentorship</button></div>
                <div><button class="custom-button yellow">Opportunity</button></div>
                <div><button class="custom-button green">Participate in Hackathons</button></div>
                {/* <div><button class="custom-button yellow">Hover Me</button></div> */}

            </div>

            <div class="But">
                <button class="custom-button red">Build Connections</button>
                <button class="custom-button yellow">Interview preperation</button>
                <button class="custom-button green">Learn</button>
                {/* <button class="custom-button yellow">Hover Me</button> */}
            </div>

        </div>
    )
}

export default HomeButtons