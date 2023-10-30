import React from 'react';
import '../Sliding.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Opportunities from '../ss/Opportunities.png';
function Sliding() {
  return (
    <div className='sliding '>
      <div className='text'>Enormous opportunities to get <div><span style={{'color':'#007f0d','font-size':'4rem','font-weight':'700'}}>Hired</span>......</div></div>
      <div className='mobileappview'>
   <img src={Opportunities} alt=''/>
</div>

    </div>
  );
}

export default Sliding;
