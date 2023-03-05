import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "../Home"
import GlobalContextProvider from "../../context/GlobalContext"
import Collection from "../Collection"
import Collections from "../Collections"
import CollectionItem from "../CollectionItem"

//TODO: -Collection -CollectionItem

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <div className='ordinary-market-place'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='collections' element={<Collections />} />
            {/* change to hash when provided */}
            <Route path='collection'>
              <Route path=':collectionId' element={<Collection />} />
              <Route
                path=':collectionId/:itemId'
                element={<CollectionItem />}
              />
            </Route>
          </Routes>
        </div>
      </GlobalContextProvider>
    </Router>
  )
}

export default App
