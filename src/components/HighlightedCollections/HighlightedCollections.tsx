import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"

const HighlightedCollections = () => {
  const { highlightedCollections, setCurrentCollection, collections } =
    useContext(GlobalContext) as IGlobalContext

  const navigate = useNavigate()
  return (
    <div className='highlighted-collections'>
      {highlightedCollections.map((highlightedCollection) => (
        <div
          className='collection'
          onClick={() => {
            setCurrentCollection(
              collections.filter(
                (collection) => collection.id === highlightedCollection.id
              )[0]
            )
            navigate(`/collection/${highlightedCollection.id}`)
          }}
        >
          <span className='collection-name-home'>
            {highlightedCollection.name}
          </span>
          <img
            src={highlightedCollection.image}
            alt='collectionImage'
            className='collection-image'
          />
        </div>
      ))}
    </div>
  )
}

export default HighlightedCollections
