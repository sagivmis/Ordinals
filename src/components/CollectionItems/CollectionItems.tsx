import React from "react"
import { CollectionType } from "../../types"
import "./collection-items.css"

interface ICollectionItems {
  currentCollection: CollectionType
}

const CollectionItems = (props: ICollectionItems) => {
  const { currentCollection } = props

  return (
    <div className='collection-items-container'>
      <span className='items-title'>Items:</span>
      <span className='seperator' />
      <div className='collection-items'>
        {currentCollection.data?.map((item) => (
          <img
            src={item.image}
            alt={item.owner}
            className='collection-item-image'
          />
        ))}
      </div>
    </div>
  )
}

export default CollectionItems
