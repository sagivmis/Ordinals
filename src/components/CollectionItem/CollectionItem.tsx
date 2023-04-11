import React, { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import MediaQuery from "react-responsive"
import "./collection-item.css"
import CollectionItemVariation from "./CollectionItemVariation"

const CollectionItem = () => {
  return (
    <>
      <MediaQuery maxWidth={450}>
        <CollectionItemVariation size='mobile' />
      </MediaQuery>
      <MediaQuery maxWidth={850}>
        <CollectionItemVariation size='small' />
      </MediaQuery>
      <MediaQuery minWidth={2144}>
        <CollectionItemVariation size='big' />
      </MediaQuery>
      <MediaQuery minWidth={850} maxWidth={2144}>
        <CollectionItemVariation size='regular' />
      </MediaQuery>
    </>
  )
}

export default CollectionItem
