import React, { Dispatch, SetStateAction } from "react"
import Input from "@mui/material/Input"
import searchIcon from "../../assets/searchIcon.png"
import InputAdornment from "@mui/material/InputAdornment"
import clsx from "clsx"

interface ISearch {
  mode: "collection" | "item"
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
const OrdinalSearch = (props: ISearch) => {
  const { mode, open, setOpen } = props
  return (
    <div className={clsx("search-container", open ? "open" : "")}>
      <Input
        className={clsx(`search-${mode}-input`)}
        startAdornment={
          <InputAdornment position='start'>
            <img
              src={searchIcon}
              alt='search'
              onClick={() => setOpen((prevOpen) => !prevOpen)}
              className='search-icon'
            />
          </InputAdornment>
        }
        disableUnderline
        placeholder={`Search ${mode}s...`}
      />
    </div>
  )
}

export default OrdinalSearch
