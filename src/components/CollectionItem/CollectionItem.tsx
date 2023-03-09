import { DataGrid, GridColDef, GridOverlay } from "@mui/x-data-grid"
import React, { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import "./collection-item.css"

const offersColumns: GridColDef[] = [
  { field: "price", headerName: "Price", flex: 1 },
  { field: "from", headerName: "From", flex: 1 }
]

const historyColumns: GridColDef[] = [
  { field: "price", headerName: "Price", flex: 1 },
  { field: "from", headerName: "From", flex: 1 }
]

const CollectionItem = () => {
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
    <div className='collection-item-container'>
      <div className='back-btn-container'>
        <Link to={`../${collectionId}`}>BACK</Link>
      </div>
      <div className='collection-item'>
        <div className='collection-item-image-container'>
          {/* image is blurry because of the stretch in css 'collection-item-image' rule,
          to fix- find a package for resizing images */}
          <img
            src={currentItem?.image}
            alt={`${currentItem?.id}`}
            className='current-collection-item-image'
          />
        </div>
        <div className='collection-item-info-container'>
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
          <div className='current-price-container'></div>
          <div className='collection-item-history-n-offers'>
            {currentItem?.offers && (
              <DataGrid
                columns={offersColumns}
                rows={currentItem?.offers}
                className='offers-list'
                disableColumnFilter
                getRowId={(row) => `${row.from}/${row.price}`}
                // components={{
                //   NoRowsOverlay: () => <></>,
                //   Pagination: () => <></>
                // }}
                hideFooter
                // slots={{ footer: () => <></> }}
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

export default CollectionItem
