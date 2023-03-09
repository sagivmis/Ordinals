import React from "react"
import walletIcon from "../../assets/walletIcon.png"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

const HomeControls = () => {
  return (
    <div className='controls'>
      <div className='navigation'>
        <Button variant='text' className='nav-btn'>
          <Link to='/'> Home</Link>
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
  )
}

export default HomeControls
