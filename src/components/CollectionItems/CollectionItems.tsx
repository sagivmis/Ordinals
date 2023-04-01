import { Button } from "@mui/material"
import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionType } from "../../types"
import "./collection-items.css"

interface ICollectionItems {
  filteredCurrentCollection: CollectionType
}

const CollectionItems = (props: ICollectionItems) => {
  const { filteredCurrentCollection } = props
  let navigate = useNavigate()
  const { setCurrentItem, currentCollection } = useContext(
    GlobalContext
  ) as IGlobalContext

  return (
    <div className='collection-items-container'>
      <span className='items-title'>Items:</span>
      <span className='seperator' />
      <div className='collection-items'>
        {filteredCurrentCollection.data?.map((currentCollectionItem) => (
          <div className='current-collection-item-container'>
            <img
              src={currentCollectionItem.image}
              alt={currentCollectionItem.owner}
              className='collection-item-image'
              onClick={() => {
                setCurrentItem(
                  currentCollection.data.filter(
                    (item) => item.id === currentCollectionItem.id
                  )[0]
                )
                navigate(`./${currentCollectionItem.id}`)
              }}
            />
            <div className='item-details'>
              <h6 className='item-price'>{currentCollectionItem.price} BTC</h6>
              <span className='item-owner'>
                {`${currentCollectionItem.owner.substring(
                  0,
                  5
                )}.....${currentCollectionItem.owner.substring(
                  currentCollectionItem.owner.length - 5,
                  currentCollectionItem.owner.length
                )}`}
              </span>
            </div>
            <Button className='buy-item-small-btn'>Buy</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollectionItems
