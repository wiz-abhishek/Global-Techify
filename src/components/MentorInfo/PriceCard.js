import React from "react"
// import './PriceCard.css'
import { Button } from "react-bootstrap"

function price() {
    return (
     
     <div className="flex hover:border-white hover:bg-blue-950  duration-200  gap-3 flex-col border-1 border-cyan-300 rounded-lg bg-black  py-3 px-3">
<div className=" text-2xl font-cursive font-semibold m-1 ">Packages</div>
<div className=" border-1 flex rounded-lg justify-center hover:scale-105 duration-200 hover:bg-gray-800 items-center px-4 py-2 gap-3"><div className="flex-col "><div className="font-semibold text-lg">Regular</div> <div className=" text-sm"> 1session x 30mins</div></div><div className="bg-blue-700 px-3 py-1 rounded-lg">Rs1250</div></div>
<div className=" border-1 flex rounded-lg px-4 py-2  hover:scale-105 duration-200 hover:bg-gray-800 justify-center gap-3 items-center"><div className="flex-col"><div className="font-semibold">All Access</div> <div className=" text-sm"> 1session x 60mins</div></div><div className="bg-blue-700 px-3 py-1 rounded-lg">Rs2000</div></div>
     <Button className="rounded-lg p-1 hover:bg-blue-950 duration-200 hover:scale-105 bg-cyan-500" href="/MentorForm">Sign Up</Button>
     </div>
    )
}

export default price