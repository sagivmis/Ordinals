import React, { useContext, useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionType } from "../../types"
import CollectionInfo from "../CollectionInfo"
import CollectionItems from "../CollectionItems"
import "./collection.css"

const Collection = () => {
  const { collections, setCurrentCollection } = useContext(
    GlobalContext
  ) as IGlobalContext

  const { collectionId } = useParams()
  const currentCollectionId = useRef<number>()

  useEffect(() => {
    if (collectionId) currentCollectionId.current = parseInt(collectionId)
  }, [collectionId])

  useEffect(() => {
    setCurrentCollection(
      collections.filter(
        (collection) => collection.id === currentCollectionId.current
      )[0]
    )
  }, [collections, setCurrentCollection])

  return (
    <div className='collection-container'>
      <div className='back-btn-container'>
        <Link to='/collections'>BACK</Link>
      </div>
      <div className='profile-btn-container'>
        <Link to={`/profile`}>PROFILE</Link>
      </div>
      <CollectionInfo />
      <CollectionItems />
    </div>
  )
}

export default Collection
