import React, { useContext } from "react"
import "./collections.css"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { Link } from "react-router-dom"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import Avatar from "@mui/material/Avatar"
import OrdinalSearch from "../OrdinalSearch"
import { useNavigate } from "react-router-dom"

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
    flex: 6,
    hideable: false,
    sortable: false
  },
  {
    field: "floorPrice",
    headerName: "Floor Price",
    valueFormatter: (params) => {
      return `${params.value} BTC`
    },
    flex: 6,
    hideable: false,
    sortable: false
  },
  {
    field: "volume",
    headerName: "Volume",
    valueFormatter: (params) => {
      return `${params.value} BTC`
    },
    flex: 6,
    hideable: false,
    sortable: false
  },
  {
    field: "totalSupply",
    headerName: "Total Supply",
    flex: 4,
    hideable: false,
    sortable: false
  }
]

const Collections = () => {
  let navigate = useNavigate()
  const { collections, setSelectedCollectionId } = useContext(
    GlobalContext
  ) as IGlobalContext

  return (
    <div className='collections-container'>
      <div className='back-btn-container'>
        <Link to='/'>BACK</Link>
      </div>

      <OrdinalSearch mode='collection' />
      <DataGrid
        rows={collections}
        columns={collectionsColumns}
        className='collections-list'
        disableColumnFilter
        onRowClick={(params) => {
          console.log(params.row.data)
          console.log(params.row.name)
          setSelectedCollectionId(params.row.id)
          navigate("/collection")
        }}
      />
    </div>
  )
}

export default Collections
