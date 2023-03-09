import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import "./collection-items.css"

interface ICollectionItems {}

const CollectionItems = (props: ICollectionItems) => {
  let navigate = useNavigate()
  const { setCurrentItem, currentCollection } = useContext(
    GlobalContext
  ) as IGlobalContext

  return (
    <div className='collection-items-container'>
      <span className='items-title'>Items:</span>
      <span className='seperator' />
      <div className='collection-items'>
        {currentCollection.data?.map((currentCollectionItem) => (
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
        ))}
      </div>
    </div>
  )
}

export default CollectionItems
