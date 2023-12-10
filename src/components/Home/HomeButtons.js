import React from 'react'
import './HomeButtons.css'
import Mentors from '../Mentors/Mentors'
import {Link} from "react-router-dom"

function HomeButtons() {
    return (
        <div class="Home_Button">

            <div class="But">
                <div className='mentbut'>
                <Link to="/Mentors">
                <button class="custom-button red">Get Mentorship</button>
                </Link></div>
            </div>
        </div>
    )
}

export default HomeButtons