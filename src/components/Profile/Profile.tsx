import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext, IGlobalContext } from "../../context/GlobalContext"
import "./profile.css"

const Profile = () => {
  const { userProfile } = useContext(GlobalContext) as IGlobalContext
  return (
    <div className='profile-container'>
      <div className='back-btn-container'>
        <Link to='/'>BACK</Link>
      </div>
      <div className='profile-details-container'>
        <div className='profile-image'>
          <span className='dot' />
        </div>
        <span className='profile-name'>
          {userProfile.name || userProfile.address}
        </span>
      </div>
      <div className='collected-items-container'>
        <span className='collected-title'>Collected:</span>
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
      </div>
    </div>
  )
}

export default Profile
