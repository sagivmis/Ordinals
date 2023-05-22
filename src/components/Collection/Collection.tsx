import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react"
import { Link, useParams } from "react-router-dom"
import {
  CollectionContext,
  ICollectionContext
} from "../../context/CollectionContext"
import { CollectionItemType } from "../../types"
import CollectionInfo from "../CollectionInfo"
import CollectionItems from "../CollectionItems"
import "./collection.css"

const Collection = () => {
  const { collections, currentCollection, setCurrentCollection } = useContext(
    CollectionContext
  ) as ICollectionContext

  const [filteredID, setFilteredID] = useState("")
  const { collectionId } = useParams()
  const currentCollectionId = useRef<number>()
  const [filteredCurrentCollection, setFilteredCurrentCollection] =
    useState(currentCollection)

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

  const filterCollectionItem = useCallback(() => {
    const newFilteredCollectionData: CollectionItemType[] = []
    currentCollection.data.map((item) => {
      if (item.id.toString().toLowerCase().includes(filteredID)) {
        newFilteredCollectionData.push(item)
      }
    })
    return { ...currentCollection, data: newFilteredCollectionData }
  }, [currentCollection, filteredID])

  useEffect(() => {
    setFilteredCurrentCollection(filterCollectionItem())
  }, [filterCollectionItem])
  return (
    <div className='collection-container'>
      <div className='back-btn-container'>
        <Link to='/collections'>BACK</Link>
      </div>
      <div className='profile-btn-container'>
        <Link to={`/profile`}>PROFILE</Link>
      </div>
      <CollectionInfo setFilteredID={setFilteredID} />
      <CollectionItems
        filteredCurrentCollection={filteredCurrentCollection}
        setFilteredCurrentCollection={setFilteredCurrentCollection}
      />
    </div>
  )
}

export default Collection
