import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "../Home"
import { GlobalContextProvider, UniSatContextProvider } from "../../context"
import Collection from "../Collection"
import Collections from "../Collections"
import CollectionItem from "../CollectionItem"
import Profile from "../Profile"
import CollectionContextProvider from "../../context/CollectionContext"

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <CollectionContextProvider>
          <UniSatContextProvider>
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
                <Route path='profile' element={<Profile />} />
              </Routes>
            </div>
          </UniSatContextProvider>
        </CollectionContextProvider>
      </GlobalContextProvider>
    </Router>
  )
}

export default App
