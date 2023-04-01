import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionInfoType, CollectionItemType } from "../../types"
import OrdinalSearch from "../OrdinalSearch"
import "./collection-info.css"

interface ICollectionInfo {
  setFilteredID: Dispatch<SetStateAction<string>>
}

const CollectionInfo = (props: ICollectionInfo) => {
  const { setFilteredID } = props
  const { currentCollection } = useContext(GlobalContext) as IGlobalContext

  const [floorPrice, setFloorPrice] = useState(0)
  const [ownersAmount, setOwnersAmount] = useState(0)
  const [listedAmount, setListedAmount] = useState(0)
  const [listedPercent, setListedPercent] = useState("0%")

  const currentCollectionOwners = useRef<Record<string, CollectionItemType[]>>(
    {}
  ) // mapping between address and items in collection

  const currentCollectionListedItems = useRef<
    Record<string, CollectionItemType[]>
  >({}) //mapping between owner adress and listed items in collection

  useEffect(() => {
    if (currentCollection.data[0]) {
      let minPrice = currentCollection.data[0].price // arbitrary taking the furst
      currentCollection.data.forEach((item) => {
        if (item.price < minPrice) minPrice = item.price
      })
      setFloorPrice(minPrice)
    }
  }, [currentCollection, currentCollection.data])

  useEffect(() => {
    currentCollection.data.forEach((item) => {
      if (
        currentCollectionOwners.current &&
        currentCollectionOwners.current[item.owner]
      ) {
        if (!currentCollectionOwners.current[item.owner].includes(item)) {
          currentCollectionOwners.current[item.owner].push(item)
        }
      } else if (!currentCollectionOwners.current[item.owner]) {
        currentCollectionOwners.current[item.owner] = [item]
      }
    })
    setOwnersAmount(Object.keys(currentCollectionOwners.current).length)
  }, [currentCollection.data])

  useEffect(() => {
    let listed = 0
    currentCollection.data.forEach((item) => {
      if (item.price > 0) {
        listed += 1

        if (
          currentCollectionListedItems.current &&
          currentCollectionListedItems.current[item.owner]
        ) {
          if (!currentCollectionOwners.current[item.owner].includes(item)) {
            currentCollectionListedItems.current[item.owner].push(item)
          }
        } else if (!currentCollectionListedItems.current[item.owner]) {
          currentCollectionListedItems.current[item.owner] = [item]
        }
      }
    })
    setListedAmount(listed)
    setListedPercent(
      `${((listed / currentCollection.totalSupply) * 100).toFixed(1)} %`
    )
  }, [currentCollection.data, currentCollection.totalSupply])

  const collectionInfo: CollectionInfoType[] = useMemo(
    () => [
      { field: "Floor Price", value: floorPrice },
      { field: "Supply", value: currentCollection.totalSupply },
      { field: "Owners", value: ownersAmount },
      { field: "Listed", value: listedPercent },
      { field: "Total Volume", value: currentCollection.volume }
    ],
    [
      currentCollection.totalSupply,
      currentCollection.volume,
      floorPrice,
      listedPercent,
      ownersAmount
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
