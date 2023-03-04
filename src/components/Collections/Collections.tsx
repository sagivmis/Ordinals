import React, { useContext } from "react"
import "./collections.css"
import Input from "@mui/material/Input"
import searchIcon from "../../assets/searchIcon.png"
import InputAdornment from "@mui/material/InputAdornment"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { Link } from "react-router-dom"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid"
import Avatar from "@mui/material/Avatar"

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
  const { collections } = useContext(GlobalContext) as IGlobalContext

  return (
    <div className='collections-container'>
      <div className='back-btn-container'>
        <Link to='/'>BACK</Link>
      </div>
      <div className='search-container'>
        <Input
          // id='input-with-icon-textfield'
          // label='TextField'

          className='search-collection-input'
          startAdornment={
            <InputAdornment position='start'>
              <img src={searchIcon} alt='search' />
            </InputAdornment>
          }
          disableUnderline
          placeholder='Search collections...'
        />
      </div>
      <DataGrid
        rows={collections}
        columns={collectionsColumns}
        className='collections-list'
        disableColumnFilter
      />
    </div>
  )
}

export default Collections
