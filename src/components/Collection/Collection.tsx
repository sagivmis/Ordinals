import React, { useContext, useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionType } from "../../types"
import CollectionInfo from "../CollectionInfo"
import CollectionItems from "../CollectionItems"
import "./collection.css"

const Collection = () => {
  const { collections } = useContext(GlobalContext) as IGlobalContext

  const { collectionId } = useParams()
  const currentCollectionId = useRef<number>()

  useEffect(() => {
    if (collectionId) currentCollectionId.current = parseInt(collectionId)
  }, [collectionId])

  const [currentCollection, setCurrentCollection] = useState<CollectionType>({
    id: 0,
    floorPrice: 0,
    image: "",
    name: "",
    totalSupply: 0,
    volume: 0,
    collectionOwner: "",
    data: []
  })

  useEffect(() => {
    setCurrentCollection(
      collections.filter(
        (collection) => collection.id === currentCollectionId.current
      )[0]
    )
  }, [collections])

  return (
    <div className='collection-container'>
      <div className='back-btn-container'>
        <Link to='/collections'>BACK</Link>
      </div>
      <CollectionInfo currentCollection={currentCollection} />
      <CollectionItems currentCollection={currentCollection} />
    </div>
  )
}

export default Collection
