import React from 'react'
import './home.css'
import Counter from '../Counter/Counter'
import Top from './Top'
import HomeButtons from './HomeButtons'
import Sliding from '../Sliding/Sliding'
function Home() {
  return (

    <div className='home'>
      <Top/>
      <HomeButtons/>
      <Counter/>
      <Sliding  />

      {/* <Why/> */}
    </div>
  )
}

export default Home
