import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs
} from "@mui/material"
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import {
  CollectionContext,
  ICollectionContext
} from "../../context/CollectionContext"
import { CollectionType } from "../../types"
import "./collection-items.css"
import { TabPanel } from "../../utilComponents"

interface ICollectionItems {
  filteredCurrentCollection: CollectionType
  setFilteredCurrentCollection: Dispatch<SetStateAction<CollectionType>>
}

const CollectionItems = (props: ICollectionItems) => {
  const { filteredCurrentCollection, setFilteredCurrentCollection } = props
  let navigate = useNavigate()

  const { setCurrentItem } = useContext(GlobalContext) as IGlobalContext
  const { currentCollection } = useContext(
    CollectionContext
  ) as ICollectionContext

  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  const generateProps = (index: number) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`
    }
  }
  type SortType = "low2high" | "high2low" | "id" | ""
  const [sortBy, setSortBy] = useState<SortType>("")

  const handleSortTypeChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as SortType)
    const sortedCollection = filteredCurrentCollection
    if (event.target.value === "low2high") {
      sortedCollection.data.sort((a, b) => a.price - b.price)
      setFilteredCurrentCollection(sortedCollection)
    }
    if (event.target.value === "high2low") {
      sortedCollection.data.sort((a, b) => b.price - a.price)
      setFilteredCurrentCollection(sortedCollection)
    }
    if (event.target.value === "id") {
      sortedCollection.data.sort((a, b) => a.id - b.id)
      setFilteredCurrentCollection(sortedCollection)
    }
  }

  useEffect(() => {
    console.log("initial sort")

    let sortedCollection: CollectionType = filteredCurrentCollection
    sortedCollection.data.sort((a, b) => a.id - b.id)
    setFilteredCurrentCollection(sortedCollection)
  }, [filteredCurrentCollection, setFilteredCurrentCollection])

  return (
    <div className='collection-items-container'>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
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
        <Box
          sx={{
            minWidth: 35,
            maxWidth: "8%",
            m: 1,
            position: "fixed",
            right: "1em",
            zIndex: 2
          }}
        >
          <FormControl fullWidth>
            <Select
              value={sortBy}
              onChange={handleSortTypeChange}
              disableUnderline
              // displayEmpty
              defaultValue='id'
              size='small'
              // multiline
            >
              <MenuItem value={"low2high"}>Price: Low to High</MenuItem>
              <MenuItem value={"high2low"}>Price: High to Low</MenuItem>
              <MenuItem value={"id"}>Inscription ID#</MenuItem>
            </Select>
          </FormControl>
        </Box>

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
              <h5 className='inscription-id'>{`${currentCollection.name} #${currentCollectionItem.id}`}</h5>
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
