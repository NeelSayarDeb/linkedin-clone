import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  const recentItem = (topic) => (
      <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
      </div>
  )

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://media-exp1.licdn.com/dms/image/C4E16AQFduz3WQ3Rh0A/profile-displaybackgroundimage-shrink_200_800/0/1517462475956?e=1652918400&v=beta&t=L1JBlxG163nrRLv4VaC25FN-2jV4JfmG7P1cx4YMnIw" alt="" />
            <Avatar className='sidebar__avatar' src="https://avatars.githubusercontent.com/u/20562172?v=4"/>
            <h2>Neel Sayar Deb</h2>
            <h4>Technical Architect at Tata Consultancy Services</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2573</p>
            </div>
            <div className="sidebar__stat">
            <p>Views on post</p>
                <p className="sidebar__statNumber">2448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('nextjs')}
            {recentItem('programming')}
            {recentItem('software engineering')}
        </div>
    </div>
  )
}

export default Sidebar