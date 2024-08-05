import React from 'react'
// import Design from './OBJECTS.svg'
import './Home.css'
import Spline from '@splinetool/react-spline';


const Home = () => {
  return (
    <div>
      <div className="home-details">
        {/* <img src={Design} alt="Home-design" /> */}
        <div className="spline-container">
        <Spline scene="https://prod.spline.design/BOe1pvcXp1XLg0sf/scene.splinecode" />
        </div>
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
