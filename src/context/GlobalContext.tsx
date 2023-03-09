import React, { Dispatch, useState } from "react"
import ordinalsPunks from "../assets/image 1.png"
import phoenixParrots from "../assets/image 3.png"
import ordinalsPenguins from "../assets/image 4.png"
import deGods from "../assets/image 2.png"
import { CollectionType, SelectedItemType } from "../types"

export interface IGlobalContext {
  collections: CollectionType[]
  setCollections: Dispatch<React.SetStateAction<CollectionType[]>>
  highlightedCollections: CollectionType[]
  setHighlightedCollections: Dispatch<React.SetStateAction<CollectionType[]>>
  selectedCollectionId: number | null
  setSelectedCollectionId: Dispatch<React.SetStateAction<number | null>>
  selectedItemId: SelectedItemType | null
  setSelectedItemId: Dispatch<React.SetStateAction<SelectedItemType | null>>
  updateSelectedCollection: (newCollectionId: number) => void
  removeSelectedCollection: () => void
}

interface Props {
  children: React.ReactNode
}

const dummyPhoenixData = [
  {
    id: 1,
    price: 2,
    history: [{ price: 0.5, date: "date", from: "0x8484848" }],
    owner: "0x121212",
    image: phoenixParrots
  },
  {
    id: 2,
    price: 3,
    history: [
      { price: 0.2, date: "date", from: "0x8484848" },
      { price: 0.25, date: "date", from: "0x8482333" },
      { price: 0.33, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: phoenixParrots
  },
  {
    id: 3,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: phoenixParrots
  }
]
const dummyPunksData = [
  {
    id: 1,
    price: 2,
    history: [{ price: 0.5, date: "date", from: "0x8484848" }],
    owner: "0x121212",
    image: ordinalsPunks
  },
  {
    id: 2,
    price: 3,
    history: [
      { price: 0.2, date: "date", from: "0x8484848" },
      { price: 0.25, date: "date", from: "0x8482333" },
      { price: 0.33, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPunks
  },
  {
    id: 3,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPunks
  },
  {
    id: 4,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPunks
  },
  {
    id: 5,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPunks
  },
  {
    id: 6,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPunks
  },
  {
    id: 7,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPunks
  },
  {
    id: 8,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPunks
  },
  {
    id: 9,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPunks
  },
  {
    id: 10,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPunks
  }
]
const dummyDeGodsData = [
  {
    id: 1,
    price: 2,
    history: [{ price: 0.5, date: "date", from: "0x8484848" }],
    owner: "0x121212",
    image: deGods
  },
  {
    id: 2,
    price: 3,
    history: [
      { price: 0.2, date: "date", from: "0x8484848" },
      { price: 0.25, date: "date", from: "0x8482333" },
      { price: 0.33, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: deGods
  },
  {
    id: 3,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: deGods
  }
]
const dummyPenguinsData = [
  {
    id: 1,
    price: 2,
    history: [{ price: 0.5, date: "date", from: "0x8484848" }],
    owner: "0x121212",
    image: ordinalsPenguins
  },
  {
    id: 2,
    price: 3,
    history: [
      { price: 0.2, date: "date", from: "0x8484848" },
      { price: 0.25, date: "date", from: "0x8482333" },
      { price: 0.33, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPenguins
  },
  {
    id: 3,
    price: 2,
    history: [
      { price: 0.1, date: "date", from: "0x8484848" },
      { price: 0.15, date: "date", from: "0x8482333" },
      { price: 0.23, date: "date", from: "0x8661233" }
    ],
    owner: "0x121212",
    image: ordinalsPenguins
  }
]

const highlightedCollectionsData: CollectionType[] = [
  {
    id: 0,
    name: "Ordinals Punks",
    floorPrice: 2.15,
    volume: 125,
    totalSupply: 100,
    image: ordinalsPunks,
    data: dummyPunksData,
    collectionOwner: "Ordinals ©"
  },

  {
    id: 1,
    name: "Phoenix Parrots",
    floorPrice: 0.15,
    volume: 5,
    totalSupply: 999,
    image: phoenixParrots,
    data: dummyPhoenixData,
    collectionOwner: "PhoenixCo"
  },
  {
    id: 2,
    name: "Ordinals Penguins",
    floorPrice: 3,
    volume: 2.36,
    totalSupply: 333,
    image: ordinalsPenguins,
    data: dummyPenguinsData,
    collectionOwner: "Ordinals ©"
  },
  {
    id: 3,
    name: "DeGods",
    floorPrice: 0.63,
    volume: 333,
    totalSupply: 50,
    image: deGods,
    data: dummyDeGodsData,
    collectionOwner: "DeGods com"
  }
]

const dummyCollections: CollectionType[] = [
  {
    id: 0,
    name: "Ordinals Punks",
    floorPrice: 2.15,
    volume: 125,
    totalSupply: 100,
    image: ordinalsPunks,
    data: dummyPunksData,
    collectionOwner: "Ordinals ©"
  },

  {
    id: 1,
    name: "Phoenix Parrots",
    floorPrice: 0.15,
    volume: 5,
    totalSupply: 999,
    image: phoenixParrots,
    data: dummyPhoenixData,
    collectionOwner: "PhoenixCo"
  },
  {
    id: 2,
    name: "Ordinals Penguins",
    floorPrice: 3,
    volume: 2.36,
    totalSupply: 333,
    image: ordinalsPenguins,
    data: dummyPenguinsData,
    collectionOwner: "Ordinals ©"
  },
  {
    id: 3,
    name: "DeGods",
    floorPrice: 0.63,
    volume: 333,
    totalSupply: 50,
    image: deGods,
    data: dummyDeGodsData,
    collectionOwner: "DeGods com"
  }
]

export const GlobalContext = React.createContext<IGlobalContext | null>(null)

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [highlightedCollections, setHighlightedCollections] = useState(
    highlightedCollectionsData
  )

  const [collections, setCollections] =
    useState<CollectionType[]>(dummyCollections)

  const [selectedCollectionId, setSelectedCollectionId] = useState<
    number | null
  >(null)

  const [selectedItemId, setSelectedItemId] = useState<SelectedItemType | null>(
    null
  )
  const updateSelectedCollection = (newCollectionId: number) => {
    setSelectedCollectionId(newCollectionId)
  }

  const removeSelectedCollection = () => {
    setSelectedCollectionId(null)
  }

  return (
    <GlobalContext.Provider
      value={{
        collections,
        setCollections,
        highlightedCollections,
        setHighlightedCollections,
        selectedCollectionId,
        setSelectedCollectionId,
        selectedItemId,
        setSelectedItemId,
        updateSelectedCollection,
        removeSelectedCollection
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
