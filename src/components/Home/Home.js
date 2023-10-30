import React from 'react'
import './home.css'
import Counter from '../Counter/Counter'
import Top from './Top'
import HomeButtons from './HomeButtons'
import Why from './Why'
import Sliding from '../Sliding/Sliding'
function Home() {
  return (

    <div className='home'>
      <Top/>
      <HomeButtons/>
      <Counter/>
      <Why/>
      <Sliding  />

      
    </div>
  )
}

export default Home
