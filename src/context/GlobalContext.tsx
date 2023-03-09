import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import ordinalsPunks from "../assets/image 1.png"
import phoenixParrots from "../assets/image 3.png"
import ordinalsPenguins from "../assets/image 4.png"
import deGods from "../assets/image 2.png"
import { CollectionItemType, CollectionType } from "../types"

export interface IGlobalContext {
  collections: CollectionType[]
  setCollections: Dispatch<React.SetStateAction<CollectionType[]>>
  highlightedCollections: CollectionType[]
  setHighlightedCollections: Dispatch<React.SetStateAction<CollectionType[]>>
  currentCollection: CollectionType
  setCurrentCollection: Dispatch<SetStateAction<CollectionType>>
  currentItem: CollectionItemType | undefined
  setCurrentItem: Dispatch<SetStateAction<CollectionItemType | undefined>>
  updateSelectedCollection: (newCollectionId: CollectionType) => void
}

interface Props {
  children: React.ReactNode
}

const dummyPhoenixData: CollectionItemType[] = [
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
const dummyPunksData: CollectionItemType[] = [
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
    image: ordinalsPunks,
    offers: [
      { date: "date", from: "sagiv", price: 10 },
      { date: "date", from: "sagiv", price: 10 },
      { date: "date", from: "sagiv", price: 10 }
    ]
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
const dummyDeGodsData: CollectionItemType[] = [
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
const dummyPenguinsData: CollectionItemType[] = [
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

  const [currentCollection, setCurrentCollection] = useState<CollectionType>({
    id: 0,
    floorPrice: 0,
    image: "",
    name: "",
    totalSupply: 0,
    volume: 0,
    collectionOwner: "",
    data: []
  })
  const [currentItem, setCurrentItem] = useState<CollectionItemType>()

  const updateSelectedCollection = (newCollection: CollectionType) => {
    setCurrentCollection(newCollection)
  }

  return (
    <GlobalContext.Provider
      value={{
        currentCollection,
        currentItem,
        setCurrentCollection,
        setCurrentItem,
        collections,
        setCollections,
        highlightedCollections,
        setHighlightedCollections,
        updateSelectedCollection
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
