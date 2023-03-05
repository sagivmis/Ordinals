import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionType } from "../../types"
import "./collection-items.css"

interface ICollectionItems {
  currentCollection: CollectionType
}

const CollectionItems = (props: ICollectionItems) => {
  const { currentCollection } = props
  let navigate = useNavigate()
  const { setSelectedItemId, selectedItemId } = useContext(
    GlobalContext
  ) as IGlobalContext

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
            onClick={() => {
              setSelectedItemId({
                id: item.id,
                collectionId: currentCollection.id
              })
              navigate(`./${item.id}`)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default CollectionItems
