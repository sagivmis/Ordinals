import React from "react"
import HomeControls from "../HomeControls"
import homeBackground from "../../assets/HOME-back.png"

const Landing = () => {
  return (
    <div className='landing'>
      <HomeControls />
      <span className='home-landing-text'>
        Discover, Buy and Sell Bitcoin NFT’s
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
