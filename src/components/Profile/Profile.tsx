import { Tab, Tabs } from "@mui/material"
import React, { useContext, useState } from "react"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import { TabPanel, UserControls } from "../../utilComponents"
import "./profile.css"

const Profile = () => {
  const { userProfile } = useContext(GlobalContext) as IGlobalContext
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
    <div className='profile-container'>
      <UserControls home />
      <div className='profile-details-container'>
        <div className='profile-image'>
          <span className='dot' />
        </div>
        <span className='profile-name'>
          {userProfile.name || userProfile.address}
        </span>
      </div>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        TabIndicatorProps={{
          children: <span className='MuiTabs-indicatorSpan' />
        }}
        className='collection-tabs'
      >
        <Tab label='Collected' {...generateProps(0)} />
        <Tab label='Activity' {...generateProps(1)} />
        <Tab label='Analytics' {...generateProps(2)} />
      </Tabs>

      <div className='collected-items-container'>
        <TabPanel value={tabIndex} index={0}>
          <span className='seperator' />
          <div className='collected-items-images-container'>
            {userProfile.collected.map((collectedItem) => (
              <div className='collected-item'>
                <img
                  src={collectedItem.image}
                  alt={collectedItem.owner}
                  className='collected-item-image'
                />
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
    </div>
  )
}

export default Profile
