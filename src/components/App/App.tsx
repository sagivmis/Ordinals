import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "../Home"

function App() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  )
  return (
    <Router>
      <div className='ordinary-market-place'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/contact' element={Contact} />
          <Route path='/about' element={About} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
