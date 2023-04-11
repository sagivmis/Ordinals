import React from "react"
import { Link } from "react-router-dom"
import "./user-controls.css"

interface IUserControls {
  back?: { to: string }
  profile?: boolean
  home?: boolean
}
const UserControls = (props: IUserControls) => {
  const { back, home, profile } = props

  return (
    <div className='user-controls-container'>
      {back && (
        <div className='back-btn-container'>
          <Link to={back.to}>BACK</Link>
        </div>
      )}
      {profile && (
        <div className='profile-btn-container'>
          <Link to={`/profile`}>PROFILE</Link>
        </div>
      )}
      {home && (
        <div className='home-btn-container'>
          <Link to={`/`}>HOME</Link>
        </div>
      )}
    </div>
  )
}

export default UserControls
