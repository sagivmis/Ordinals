export type ItemHistory = {
  price: number
  date: string
  from: string
}

export type ItemOffer = {
  price: number
  date: string
  from: string
}

export type CollectionItemType = {
  id: number
  price: number
  history: ItemHistory[]
  owner: string
  image: string
  offers?: ItemOffer[]
}

export type CollectionType = {
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

export type SelectedItemType = { id: number; collectionId: number }

export type UserProfile = {
  address: string
  collected: CollectionItemType[]
  name?: string
  image?: string
}

export type UniSatBalance = {
  confirmed: number
  unconfirmed: number
  total: number
}
