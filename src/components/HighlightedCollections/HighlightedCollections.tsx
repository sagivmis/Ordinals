import React, { useContext, useEffect } from "react"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"

const HighlightedCollections = () => {
  const {
    highlightedCollections,
    selectedCollectionId,
    setSelectedCollectionId,
    updateSelectedCollection
  } = useContext(GlobalContext) as IGlobalContext

  return (
    <div className='highlighted-collections'>
      {highlightedCollections.map((collection) => (
        <div
          className='collection'
          onClick={() => {
            updateSelectedCollection(collection.id)
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
  )
}

export default HighlightedCollections
