import React, { useContext } from "react"
import walletIcon from "../../assets/walletIcon.png"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { IUniSatContext, UniSatContext } from "../../context/UniSatContext"

const HomeControls = () => {
  const {
    connected,
    address,
    handleAccountsChanged,
    unisat,
    setUnisat,
    unisatInstalled
  } = useContext(UniSatContext) as IUniSatContext

  return (
    <div className='controls'>
      <div className='navigation'>
        <Button variant='text' className='nav-btn selected'>
          <Link to='/'> Home</Link>
        </Button>
        <Button variant='text' className='nav-btn'>
          <Link to='/collections'>Collections</Link>
        </Button>
      </div>
      <Button
        variant='contained'
        className='wallet-btn'
        onClick={async () => {
          if (unisat) {
            try {
              const result = await unisat.requestAccounts()
              handleAccountsChanged(result)
            } catch (e) {
              console.log("connection failed\n", (e as any).message)
            }
          } else {
            setUnisat((window as any).unisat)
          }
        }}
        disabled={connected}
      >
        <img
          src={walletIcon}
          className='wallet-icon'
          alt='walletIcon'
          role={!connected ? "img" : ""}
        />
        {connected
          ? `${address.substring(0, 5)}......${address.substring(
              address.length - 5
            )}`
          : unisatInstalled
          ? "Connect Wallet"
          : "Install Wallet"}
      </Button>
    </div>
  )
}

export default HomeControls
