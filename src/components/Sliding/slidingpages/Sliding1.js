import React from 'react';
import '../Sliding.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../ss/Home.png';
function Sliding() {
  return (
    <div className='sliding '>
      <div className='text'>Start your professional journey with <div><span style={{ color: 'blue', fontSize: '3.9rem', fontWeight: 'bold' }}>Global Techify</span>
      ......</div></div>
      <div className='mobileappview'>
      
<img src={Home} alt='a'/>
</div>
    </div>
  );
}

export default Sliding;
