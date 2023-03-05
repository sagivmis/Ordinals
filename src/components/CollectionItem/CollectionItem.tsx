import React, { useEffect } from "react"
import { useSearchParams, useParams } from "react-router-dom"
import "./collection-item.css"

const CollectionItem = () => {
  let params = useParams()

  useEffect(() => {
    console.log(params)
  }, [params])

  return <div className='collection-item-container'>{params.itemId}</div>
}

export default CollectionItem
