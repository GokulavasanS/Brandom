import React from 'react'
import Design from './OBJECTS.svg'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="home-details">
        <img src={Design} alt="Home-design" />
        <div className="content">
        <h1 >"Crafting Your Vision,
 From Pixels
 to Perfection!"</h1>
        <h3>"EVOLVE... INITIATE... EXPAND" </h3>
      </div> 
      </div>
    </div>
  )
}

export default Home
