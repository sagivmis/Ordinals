import React, { useCallback, useContext, useEffect, useState } from "react"
import "./collections.css"
import {
  CollectionContext,
  ICollectionContext
} from "../../context/CollectionContext"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import Avatar from "@mui/material/Avatar"
import { OrdinalSearch, UserControls } from "../../utilComponents"
import { useNavigate } from "react-router-dom"
import { CollectionType } from "../../types"

const collectionsColumns: GridColDef[] = [
  {
    field: "image",
    headerName: " ",
    renderCell: (params) => (
      <>
        <Avatar src={params.value} />
      </>
    ),
    flex: 1,
    sortable: false
  },
  {
    field: "name",
    headerName: "Name",
    flex: 8,
    hideable: false,
    sortable: false
  },
  {
    field: "floorPrice",
    headerName: "Floor",
    valueFormatter: (params) => {
      return `${params.value} BTC`
    },
    flex: 8,
    hideable: false,
    sortable: false
  },
  {
    field: "volume",
    headerName: "Volume",
    valueFormatter: (params) => {
      return `${params.value} BTC`
    },
    flex: 8,
    hideable: false,
    sortable: false
  },
  {
    field: "totalSupply",
    headerName: "Supply",
    flex: 8,
    hideable: false,
    sortable: false
  }
]

const Collections = () => {
  let navigate = useNavigate()
  const { collections, setCurrentCollection } = useContext(
    CollectionContext
  ) as ICollectionContext

  const [searchOpen, setSearchOpen] = useState(false)
  const [filterBy, setFilterBy] = useState<"name" | "address">("address")
  const [filterQuery, setFilterQuery] = useState("")

  const [filteredCollections, setFilteredCollections] =
    useState<CollectionType[]>(collections)

  const filterCollections = useCallback(() => {
    const newFilteredCollections: CollectionType[] = []
    collections.forEach((collection) => {
      if (
        collection.address.toLowerCase().includes(filterQuery.toLowerCase()) ||
        collection.name.toLowerCase().includes(filterQuery.toLowerCase())
      ) {
        newFilteredCollections.push(collection)
      }
    })
    return newFilteredCollections
  }, [collections, filterQuery])

  useEffect(() => {
    setFilteredCollections(filterCollections())
    console.log(filterQuery)
  }, [collections, filterCollections, filterQuery])

  return (
    <div className='collections-container'>
      <UserControls home profile />

      <OrdinalSearch
        mode='collection'
        open={searchOpen}
        setOpen={setSearchOpen}
        setText={setFilterQuery}
      />
      <DataGrid
        rows={filteredCollections}
        columns={collectionsColumns}
        className='collections-list'
        disableColumnFilter
        onRowClick={(params) => {
          //  change to hash when provided
          setCurrentCollection(
            collections.filter(
              (collection) => collection.id === parseInt(params.row.id)
            )[0]
          )
          navigate(`../collection/${params.row.id}`)
        }}
      />
    </div>
  )
}

export default Collections
