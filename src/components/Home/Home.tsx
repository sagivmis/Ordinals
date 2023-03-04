import React from "react"
import homeBackground from "../../assets/HOME-back.png"
import collection1 from "../../assets/image 1.png"
import collection2 from "../../assets/image 2.png"
import collection3 from "../../assets/image 3.png"
import collection4 from "../../assets/image 4.png"
import walletIcon from "../../assets/walletIcon.png"
import Button from "@mui/material/Button"
import "./home.css"
const highlightedCollections = [
  collection1,
  collection2,
  collection3,
  collection4
]

const Home = () => {
  return (
    <div className='home-container'>
      <div className='landing'>
        <div className='controls'>
          <div className='navigation'>
            <Button variant='text' className='nav-btn'>
              Home
            </Button>
            <Button variant='text' className='nav-btn'>
              Collections
            </Button>
          </div>
          <Button variant='contained' className='wallet-btn'>
            <img src={walletIcon} alt='walletIcon' />
            Connect Wallet
          </Button>
        </div>
        <span className='home-landing-text'>
          Discover, Buy and Sell Bitcoin NFT’s
        </span>
        <img
          src={homeBackground}
          alt='homeBackground'
          className='home-background'
        />
      </div>
      <div className='highlighted-collections'>
        {highlightedCollections.map((collectionImage) => (
          <div className='collection'>
            <span className='collection-name'>name</span>
            <img
              src={collectionImage}
              alt='collectionImage'
              className='collection-image'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
