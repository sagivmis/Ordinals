import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "../Home"
import GlobalContextProvider from "../../context/GlobalContext"
import Collections from "../Collections"

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <div className='ordinary-market-place'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collections' element={<Collections />} />
            {/* <Route path='/about' element={About} /> */}
          </Routes>
        </div>
      </GlobalContextProvider>
    </Router>
  )
}

export default App
