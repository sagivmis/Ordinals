import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionType } from "../../types"
import CollectionInfo from "../CollectionInfo"
import CollectionItems from "../CollectionItems"
import "./collection.css"

const Collection = () => {
  const { collections, selectedCollectionId } = useContext(
    GlobalContext
  ) as IGlobalContext

  const [currentCollection, setCurrentCollection] = useState<CollectionType>({
    id: 0,
    floorPrice: 0,
    image: "",
    name: "",
    totalSupply: 0,
    volume: 0,
    collectionOwner: ""
  })

  useEffect(() => {
    setCurrentCollection(
      collections.filter(
        (collection) => collection.id === selectedCollectionId
      )[0]
    )
  }, [collections, selectedCollectionId])

  return (
    <div className='collection-container'>
      <div className='back-btn-container'>
        <Link to='/'>BACK</Link>
      </div>
      <CollectionInfo currentCollection={currentCollection} />
      <CollectionItems currentCollection={currentCollection} />
    </div>
  )
}

export default Collection
