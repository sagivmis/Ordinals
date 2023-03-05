import React from "react"
import Input from "@mui/material/Input"
import searchIcon from "../../assets/searchIcon.png"
import InputAdornment from "@mui/material/InputAdornment"

interface ISearch {
  mode: "collection" | "item"
}
const OrdinalSearch = (props: ISearch) => {
  const { mode } = props
  return (
    <div className='search-container'>
      <Input
        className={`search-${mode}-input`}
        startAdornment={
          <InputAdornment position='start'>
            <img src={searchIcon} alt='search' />
          </InputAdornment>
        }
        disableUnderline
        placeholder={`Search ${mode}s...`}
      />
    </div>
  )
}

export default OrdinalSearch
