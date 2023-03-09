import React, { useContext, useEffect, useRef, useState } from "react"
import { useSearchParams, useParams, Link } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionItemType, CollectionType } from "../../types"
import "./collection-item.css"

const CollectionItem = () => {
  let { collectionId, itemId } = useParams()
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
  const [currentItem, setCurrentItem] = useState<CollectionItemType>()
  const { collections } = useContext(GlobalContext) as IGlobalContext
  const currentCollectionId = useRef<number>()
  const currentItemId = useRef<number>()

  useEffect(() => {
    if (collectionId) currentCollectionId.current = parseInt(collectionId)
    if (itemId) currentItemId.current = parseInt(itemId)
  }, [collectionId, itemId])

  useEffect(() => {
    setCurrentCollection(
      collections.filter(
        (collection) => collection.id === currentCollectionId.current
      )[0]
    )
  }, [collections])

  useEffect(() => {
    setCurrentItem(
      // eslint-disable-next-line array-callback-return
      () => {
        const currentI = currentCollection.data.filter(
          (item) => item.id === currentItemId.current
        )[0]

        return currentI
      }
    )
  }, [collections, currentCollection.data, setCurrentItem])

  return (
    <div className='collection-item-container'>
      <div className='back-btn-container'>
        <Link to={`../${collectionId}`}>BACK</Link>
      </div>
      <div className='collection-item'>
        <div className='collection-item-image-container'>
          {/* image is blurry because of the stretch in css 'collection-item-image' rule,
          to fix- find a package for resizing images */}
          <img
            src={currentItem?.image}
            alt={`${currentItem?.id}`}
            className='current-collection-item-image'
          />
        </div>
        <div className='collection-item-info-container'>
          <div className='collection-item-labels'>
            <span className='collection-owner-label'>
              {currentCollection.collectionOwner}
            </span>
            <h2 className='collection-item-name'>
              <span>{currentCollection.name}</span>&nbsp;
              <span>#{currentItem?.id}</span>
            </h2>
            <h6 className='collection-item-owner'>
              Owned by <span>{currentItem?.owner}</span>
            </h6>
          </div>
          <div className='current-price-container'></div>
          <div className='collection-item-history-n-offers'></div>
        </div>
      </div>
    </div>
  )
}

export default CollectionItem
