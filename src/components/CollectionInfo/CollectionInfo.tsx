import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState
} from "react"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionInfoType } from "../../types"
import OrdinalSearch from "../OrdinalSearch"
import "./collection-info.css"

interface ICollectionInfo {
  setFilteredID: Dispatch<SetStateAction<string>>
}

const CollectionInfo = (props: ICollectionInfo) => {
  const { setFilteredID } = props
  const { currentCollection } = useContext(GlobalContext) as IGlobalContext

  const collectionInfo: CollectionInfoType[] = useMemo(
    () => [
      { field: "Floor Price", value: currentCollection.floorPrice },
      { field: "Supply", value: currentCollection.totalSupply },
      { field: "Owners", value: currentCollection.totalSupply },
      { field: "Listed", value: currentCollection.totalSupply },
      { field: "Total Volume", value: currentCollection.volume }
    ],
    [
      currentCollection.floorPrice,
      currentCollection.totalSupply,
      currentCollection.volume
    ]
  )

  return (
    <div className='collection-info-container'>
      <div className='collection-image-container'>
        <img
          src={currentCollection.image}
          alt={currentCollection.name}
          className='collection-image'
        />
      </div>
      <span className='selected-collection-name'>{currentCollection.name}</span>
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
      <OrdinalSearch
        mode='item'
        open={true}
        setOpen={() => {}}
        setText={setFilteredID}
      />
    </div>
  )
}

export default CollectionInfo
