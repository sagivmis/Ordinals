import React, { useContext, useEffect } from "react"
import homeBackground from "../../assets/HOME-back.png"
import walletIcon from "../../assets/walletIcon.png"
import Button from "@mui/material/Button"
import "./home.css"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { Link } from "react-router-dom"

const Home = () => {
  const {
    highlightedCollections,
    selectedCollection,
    setSelectedCollection,
    updateSelectedCollection
  } = useContext(GlobalContext) as IGlobalContext

  return (
    <div className='home-container'>
      <div className='landing'>
        <div className='controls'>
          <div className='navigation'>
            <Button variant='text' className='nav-btn'>
              Home
            </Button>
            <Button variant='text' className='nav-btn'>
              <Link to='/collections'>Collections</Link>
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
        {highlightedCollections.map((collection) => (
          <div
            className='collection'
            onClick={() => {
              updateSelectedCollection(collection.name)
            }}
          >
            <span className='collection-name-home'>{collection.name}</span>
            <img
              src={collection.image}
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
