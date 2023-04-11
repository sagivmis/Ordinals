import React, { Dispatch, SetStateAction, useState } from "react"
import Input from "@mui/material/Input"
import searchIcon from "../../assets/searchIcon.png"
import InputAdornment from "@mui/material/InputAdornment"
import clsx from "clsx"
import { CloseRounded } from "@mui/icons-material"

interface ISearch {
  mode: "collection" | "item"
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setText: Dispatch<SetStateAction<string>>
}

const OrdinalSearch = (props: ISearch) => {
  const { mode, open, setOpen, setText } = props
  const [currentText, setCurrentText] = useState("")

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
        endAdornment={
          <InputAdornment position='start'>
            {open && (
              <CloseRounded
                className='undo-input'
                onClick={() => {
                  setText("")
                  setCurrentText("")
                }}
              />
            )}
          </InputAdornment>
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value)
          setCurrentText(event.target.value)
        }}
        value={currentText}
        disableUnderline
        placeholder={`Search ${mode}s...`}
      />
    </div>
  )
}

export default OrdinalSearch
