import React, { Dispatch, SetStateAction, createContext, useState } from "react"
import { CollectionItemType, Props, UserProfile } from "../types"
import { dummyUserProfile } from "../utils/data"

export interface IGlobalContext {
  currentItem: CollectionItemType | undefined
  setCurrentItem: Dispatch<SetStateAction<CollectionItemType | undefined>>
  userProfile: UserProfile
  setUserProfile: Dispatch<SetStateAction<UserProfile>>
}

export const GlobalContext = createContext<IGlobalContext | null>(null)

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [currentItem, setCurrentItem] = useState<CollectionItemType>()

  const [userProfile, setUserProfile] = useState<UserProfile>(dummyUserProfile)

  return (
    <GlobalContext.Provider
      value={{
        currentItem,
        setCurrentItem,
        userProfile,
        setUserProfile
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
