import React from "react"
import Input from "@mui/material/Input"
import searchIcon from "../../assets/searchIcon.png"
import InputAdornment from "@mui/material/InputAdornment"

const SearchCollection = () => {
  return (
    <div className='search-container'>
      <Input
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
  )
}

export default SearchCollection
