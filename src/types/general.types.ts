export type ItemHistoryRow = {
  price: number
  date: string
  from: string
}

export type CollectionItem = {
  id: number
  price: number
  history: ItemHistoryRow[]
  owner: string
  image: string
}

export type CollectionType = {
  id: number
  name: string
  floorPrice: number
  volume: number
  totalSupply: number
  image: string
  data?: CollectionItem[]
  collectionOwner: string
}

export type CollectionInfo = { field: string; value: number | string }

export type SelectedItemType = { id: number; collectionId: number }
