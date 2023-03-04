import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionInfo, CollectionType } from "../../types"
import "./collection.css"

const Collection = () => {
  const { collections, selectedCollectionId, setSelectedCollectionId } =
    useContext(GlobalContext) as IGlobalContext

  const [currentCollection, setCurrentCollection] = useState<CollectionType>({
    id: 0,
    floorPrice: 0,
    image: "",
    name: "",
    totalSupply: 0,
    volume: 0,
    collectionOwner: "PhoenixCo"
  })
  useEffect(() => {
    setCurrentCollection(
      collections.filter(
        (collection) => collection.id === selectedCollectionId
      )[0]
    )
  }, [collections, selectedCollectionId])

  const collectionInfo: CollectionInfo[] = [
    { field: "Floor Price", value: currentCollection.floorPrice },
    { field: "Supply", value: currentCollection.totalSupply },
    { field: "Owners", value: currentCollection.totalSupply },
    { field: "Listed", value: currentCollection.totalSupply },
    { field: "Total Volume", value: currentCollection.volume }
  ]
  return (
    <div className='collection-container'>
      <div className='back-btn-container'>
        <Link to='/'>BACK</Link>
      </div>
      <div className='collection-info-container'>
        <div className='collection-image-container'>
          <img
            src={currentCollection.image}
            alt={currentCollection.name}
            className='collection-image'
          />
        </div>
        <span className='selected-collection-name'>
          {currentCollection.name}
        </span>
        <span className='selected-collection-owner'>
          {currentCollection.collectionOwner}
        </span>
        <div className='collection-info'>
          {collectionInfo.map((info) => {
            const parsedField = info.field.toLowerCase().split(" ").join("-")

            return (
              <div className={`collection-${parsedField}`}>
                <span className={`collection-${parsedField}-field`}>
                  {info.field}
                </span>
                <span className={`collection-${parsedField}-value`}>
                  {info.value}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='collection-items-container'></div>
    </div>
  )
}

export default Collection
