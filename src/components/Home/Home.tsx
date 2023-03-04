import React from "react"
import "./home.css"
import Landing from "../Landing"
import HighlightedCollections from "../HighlightedCollections"

const Home = () => {
  return (
    <div className='home-container'>
      <Landing />
      <HighlightedCollections />
    </div>
  )
}

export default Home
