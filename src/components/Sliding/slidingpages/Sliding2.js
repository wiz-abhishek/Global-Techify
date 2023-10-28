import React from 'react';
import '../Sliding.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Connect from '../ss/Connect.png'
function Sliding() {
  return (
    <div className='sliding '>
      <div className='text'>Build <br/>connections and grow your<div><span style={{ color: 'rgb(89, 0, 89)', fontSize: '3.9rem', fontWeight: 'bold' }}> Network👥</span>......</div></div>
      <div className='mobileappview'>
<img src={Connect} alt=''/>
</div>

    </div>
  );
}

export default Sliding;
