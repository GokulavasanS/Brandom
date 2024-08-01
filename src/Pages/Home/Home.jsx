import React from 'react'
import Design from './OBJECTS.svg'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="home-details">
        <img src={Design} alt="Home-design" />
        <div className="aligncenter">
        <div className="content">
          <h1 >"Crafting Your Vision, From Pixels to Perfection!"</h1>
          <h3>"Design Solutions that Sell: Your Product, Perfected!" </h3>
          <div className="butn">PORTFOLIO</div>
        </div>
        </div> 
      </div>
    </div>
  )
}

export default Home
