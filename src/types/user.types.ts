import { CollectionItemType } from "./collection.types"

export type UserProfile = {
  address: string
  collected: CollectionItemType[]
  name?: string
  image?: string
}
