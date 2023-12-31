import React from 'react'

function TeamMemberCard(props) {
  return (
    <div className='h-[20rem]  hover:scale-[1.02] duration-300 p-1 gap-3 w-[13rem] flex justify-center items-center flex-col bg-white rounded-xl ' style={{border:"1px solid #006eff",boxShadow:"0px 0px 10px #006eff " }} >
      <div className=' w-[98%] h-[11rem] mb-2 flex justify-center items-center'>
      <div className='  flex justify-center h-[11rem] overflow-hidden items-center rounded-full'><img className='rounded-full   w-[11rem]' src={props.img}></img></div></div>
      <div className=' text-xl text-black font-semibold '>{props.name}</div>
      <div className=' text-sm text-black'>{props.position}</div>
      <div className='text-sm text-black  '>Contact Info</div>
    </div>
  )
}

export default TeamMemberCard
