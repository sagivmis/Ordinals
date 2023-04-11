import { Button } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import clsx from "clsx"
import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../../context/GlobalContext"
import { UserControls } from "../../../utilComponents"

const offersColumns: GridColDef[] = [
  {
    field: "price",
    headerName: "Price",
    flex: 1,
    valueFormatter: (params) => `${params.value} BTC`
  },
  { field: "from", headerName: "From", flex: 1 }
]

const historyColumns: GridColDef[] = [
  {
    field: "price",
    headerName: "Price",
    flex: 1,
    valueFormatter: (params) => `${params.value} BTC`
  },
  { field: "from", headerName: "From", flex: 1 }
]

interface ICollecionItemVariation {
  size: "mobile" | "small" | "regular" | "big"
}

const CollectionItemVariation = (props: ICollecionItemVariation) => {
  const { size } = props
  let { collectionId, itemId } = useParams()

  const {
    currentCollection,
    currentItem,
    setCurrentItem,
    setCurrentCollection,
    collections
  } = useContext(GlobalContext) as IGlobalContext

  useEffect(() => {
    setCurrentItem(
      currentCollection.data.filter(
        (item) => itemId && item.id === parseInt(itemId)
      )[0]
    )
  }, [currentCollection.data, itemId, setCurrentItem])

  useEffect(() => {
    setCurrentCollection(
      collections.filter(
        (collection) => collectionId && collection.id === parseInt(collectionId)
      )[0]
    )
  }, [collectionId, collections, setCurrentCollection])

  return (
    <div className={clsx("collection-item-container", size)}>
      <UserControls back={{ to: `../${collectionId}` }} profile />
      <div className={clsx("collection-item", size)}>
        <div className='collection-item-image-container'>
          {/* image is blurry because of the stretch in css 'collection-item-image' rule,
      to fix- find a package for resizing images */}
          <img
            src={currentItem?.image}
            alt={`${currentItem?.id}`}
            className={clsx("current-collection-item-image", size)}
          />
        </div>
        <div className={clsx("collection-item-info-container", size)}>
          <div className='collection-item-labels'>
            <span className='collection-owner-label'>
              {currentCollection.collectionOwner}
            </span>
            <h2 className='collection-item-name'>
              <span>{currentCollection.name}</span>&nbsp;
              <span>#{currentItem?.id}</span>
            </h2>
            <h6 className='collection-item-owner'>
              Owned by <span>{currentItem?.owner}</span>
            </h6>
          </div>
          <div className={clsx("current-price-container", size)}>
            <div className='current-price-stack'>
              <div className='current-price'>
                <span className='current-price-label'>Current Price</span>
                <span className='current-price-value'>
                  {`${currentItem?.price} BTC`}
                </span>
              </div>
              <Button variant='contained' className='transaction-btn buy-btn'>
                Buy
              </Button>
              <Button variant='contained' className='transaction-btn offer-btn'>
                Make Offer
              </Button>
            </div>
          </div>
          <div className={clsx("collection-item-history-n-offers", size)}>
            {currentItem?.offers && (
              <DataGrid
                columns={offersColumns}
                rows={currentItem.offers || []}
                className='offers-list'
                disableColumnFilter
                getRowId={(row) => `${row.from}/${Math.random() * row.price}`}
                hideFooter
                getRowClassName={() => `history-row`}
                classes={{ columnHeader: "history-header" }}
              />
            )}
            {/* <DataGrid
          columns={historyColumns}
          rows={currentItem?.history ? currentItem?.history : []}
          className='history-list'
          disableColumnFilter
          getRowId={(row) => `${row.from}/${row.price}`}
          hideFooter
        /> */}
            {/* add a way to change from history mode to offers mode */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionItemVariation
