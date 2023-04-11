import React from "react"

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
      style={{ overflowY: "auto" }}
      className={`tabpanel`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

export default TabPanel
