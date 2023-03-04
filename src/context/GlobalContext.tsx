import React, { Dispatch, useState } from "react"
import ordinalsPunks from "../assets/image 1.png"
import phoenixParrots from "../assets/image 3.png"
import ordinalsPenguins from "../assets/image 4.png"
import deGods from "../assets/image 2.png"

type Collection = {
  id: number
  name: string
  floorPrice: number
  volume: number
  totalSupply: number
  image: string
}
export interface IGlobalContext {
  collections: Collection[]
  setCollections: Dispatch<React.SetStateAction<Collection[]>>
  highlightedCollections: Collection[]
  setHighlightedCollections: Dispatch<React.SetStateAction<Collection[]>>
  selectedCollection: string | null
  setSelectedCollection: Dispatch<React.SetStateAction<string | null>>
  updateSelectedCollection: (newCollection: string) => void
  removeSelectedCollection: () => void
}

interface Props {
  children: React.ReactNode
}

const highlightedCollectionsData: Collection[] = [
  {
    id: 0,
    name: "Ordinals Punks",
    floorPrice: 2.15,
    volume: 125,
    totalSupply: 100,
    image: ordinalsPunks
  },

  {
    id: 1,
    name: "Phoenix Parrots",
    floorPrice: 0.15,
    volume: 5,
    totalSupply: 999,
    image: phoenixParrots
  },
  {
    id: 2,
    name: "Ordinals Penguins",
    floorPrice: 3,
    volume: 2.36,
    totalSupply: 333,
    image: ordinalsPenguins
  },
  {
    id: 3,
    name: "DeGods",
    floorPrice: 0.63,
    volume: 333,
    totalSupply: 50,
    image: deGods
  }
]

export const GlobalContext = React.createContext<IGlobalContext | null>(null)

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [highlightedCollections, setHighlightedCollections] = useState(
    highlightedCollectionsData
  )
  const [collections, setCollections] = useState<Collection[]>([
    ...highlightedCollections,
    ...highlightedCollections,
    ...highlightedCollections
  ])

  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  )

  const updateSelectedCollection = (newCollection: string) => {
    setSelectedCollection(newCollection)
  }

  const removeSelectedCollection = () => {
    setSelectedCollection(null)
  }

  return (
    <GlobalContext.Provider
      value={{
        collections,
        setCollections,
        highlightedCollections,
        setHighlightedCollections,
        selectedCollection,
        setSelectedCollection,
        updateSelectedCollection,
        removeSelectedCollection
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
