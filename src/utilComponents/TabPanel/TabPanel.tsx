import React from "react"
import "./tabpanel.css"
interface ITabPanel {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = (props: ITabPanel) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={`tabpanel`}
      style={{ overflowY: "auto" }}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

export default TabPanel
