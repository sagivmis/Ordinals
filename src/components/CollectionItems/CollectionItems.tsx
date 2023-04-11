import { Box, Button, Tab, Tabs } from "@mui/material"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { CollectionType } from "../../types"
import "./collection-items.css"
import { TabPanel } from "../../utilComponents"

interface ICollectionItems {
  filteredCurrentCollection: CollectionType
}

const CollectionItems = (props: ICollectionItems) => {
  const { filteredCurrentCollection } = props
  let navigate = useNavigate()
  const { setCurrentItem, currentCollection } = useContext(
    GlobalContext
  ) as IGlobalContext
  const [tabIndex, setTabIndex] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  const generateProps = (index: number) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`
    }
  }

  return (
    <div className='collection-items-container'>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        TabIndicatorProps={{
          children: <span className='MuiTabs-indicatorSpan' />
        }}
        className='collection-tabs'
      >
        <Tab label='Items' {...generateProps(0)} />
        <Tab label='Activity' {...generateProps(1)} />
        <Tab label='Analytics' {...generateProps(2)} />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <div className='collection-items'>
          {filteredCurrentCollection.data?.map((currentCollectionItem) => (
            <div className='current-collection-item-container'>
              <img
                src={currentCollectionItem.image}
                alt={currentCollectionItem.owner}
                className='collection-item-image'
                onClick={() => {
                  setCurrentItem(
                    currentCollection.data.filter(
                      (item) => item.id === currentCollectionItem.id
                    )[0]
                  )
                  navigate(`./${currentCollectionItem.id}`)
                }}
              />
              <div className='item-details'>
                <h6 className='item-price'>
                  {currentCollectionItem.price} BTC
                </h6>
                <span className='item-owner'>
                  {`${currentCollectionItem.owner.substring(
                    0,
                    5
                  )}.....${currentCollectionItem.owner.substring(
                    currentCollectionItem.owner.length - 5,
                    currentCollectionItem.owner.length
                  )}`}
                </span>
              </div>
              <Button className='buy-item-small-btn'>Buy</Button>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        Activity
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        Analytics
      </TabPanel>
    </div>
  )
}

export default CollectionItems
