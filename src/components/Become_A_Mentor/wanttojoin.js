import React from 'react'
import Button from 'react-bootstrap/Button';
import A1 from './idea.png'
import A2 from './price.png'
import A3 from './build.png'
import BAMIMG from './4630062-removebg-preview.png'
function wanttojoin() {
  return (
    <div className="flex min-h-screen flex-wrap text-white justify-center items-center ">
        <div className='flex flex-col  justify-center ' > 
            <div className="text-[3rem] font-semibold  " >Want to join as a <span className='text-primary'> Mentor ?</span></div>
            <div className="text-xl text-gray-400 pb-4" >Joining us as a mentor has many benefits, which are:</div>
            <div className="text-[1.1rem] flex text-white py-1"> <img className='h-[25px] m-1' src={A1} alt=''/> you can connect and earn without any hassle</div>
            <div className="text-[1.1rem] flex text-white py-1"><img className='h-[25px] m-1' src={A2} alt=''/>set your own price and availability</div>
            <div className="text-[1.1rem] flex text-white py-1"><img className='h-[25px] m-1' src={A3} alt=''/>Build your own personal brand</div>
            <Button className="px-3 my-2 py-1 w-fit rounded-full " href="/MentorForm">Become a Mentor</Button> 

            </div> 
                <div className='w-[100%] md:w-[50%] flex justify-center p-10'><img src={BAMIMG} alt=''/></div> 
    </div>
  )
}

export default wanttojoin
