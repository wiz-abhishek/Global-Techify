import React from 'react';
import '../Sliding.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mentorship from '../ss/Mentorships.png'
function Sliding() {
  return (
    <div className='sliding '>
      <div className='text'>Take <br/>mentorship from <div><span style={{'color':'#FF5800'}}>Industry Experts</span>......</div></div>
      <div className='mobileappview'>
    <img src={Mentorship} alt=''/>
</div>

    </div>
  );
}

export default Sliding;
