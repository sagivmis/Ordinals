import { ItemHistory, ItemOffer } from "./item.types"

export type CollectionItemType = {
  id: number
  price: number
  history: ItemHistory[]
  owner: string
  image: string
  offers?: ItemOffer[]
}

export type CollectionType = {
  address: string
  id: number
  name: string
  floorPrice: number
  volume: number
  totalSupply: number
  image: string
  data: CollectionItemType[]
  collectionOwner: string
}

export type CollectionInfoType = { field: string; value: number | string }
