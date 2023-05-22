import React, { useState } from "react"
import { Dispatch, SetStateAction, createContext } from "react"
import { CollectionType, Props } from "../types"
import {
  dummyCollections,
  emptyCollection,
  highlightedCollectionsData
} from "../utils/data"

export interface ICollectionContext {
  collections: CollectionType[]
  setCollections: Dispatch<SetStateAction<CollectionType[]>>
  highlightedCollections: CollectionType[]
  setHighlightedCollections: Dispatch<SetStateAction<CollectionType[]>>
  currentCollection: CollectionType
  setCurrentCollection: Dispatch<SetStateAction<CollectionType>>
  updateSelectedCollection: (newCollectionId: CollectionType) => void
}

export const CollectionContext = createContext<ICollectionContext | null>(null)

const CollectionContextProvider: React.FC<Props> = ({ children }) => {
  const [highlightedCollections, setHighlightedCollections] = useState(
    highlightedCollectionsData
  )

  const [collections, setCollections] =
    useState<CollectionType[]>(dummyCollections)

  const [currentCollection, setCurrentCollection] =
    useState<CollectionType>(emptyCollection)

  const updateSelectedCollection = (newCollection: CollectionType) => {
    setCurrentCollection(newCollection)
  }
  return (
    <CollectionContext.Provider
      value={{
        collections,
        setCollections,
        highlightedCollections,
        setHighlightedCollections,
        updateSelectedCollection,
        currentCollection,
        setCurrentCollection
      }}
    >
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionContextProvider
