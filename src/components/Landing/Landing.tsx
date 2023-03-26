import React from "react"
import HomeControls from "../HomeControls"
import homeBackground from "../../assets/HOME-back.png"

const Landing = () => {
  return (
    <div className='landing'>
      <HomeControls />
      <span className='home-landing-text'>
        Discover, <span className='pad-with-color'>Buy</span> and Sell Bitcoin
        <span className='pad-with-color'>NFT’s</span>
      </span>
      <img
        src={homeBackground}
        alt='homeBackground'
        className='home-background'
      />
    </div>
  )
}

export default Landing
