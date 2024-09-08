import React from 'react'
import Profile from '../Dashboard/Profile'
import Recommendations from '../Dashboard/Recommendations'
import Notifications from '../Dashboard/Notifications'
import CoursesMain from './CoursesMain'
const ProfilePage = () => {
  return (
    <div className='grid grid-col-1 md:grid-col-2 lg:grid-col-4'>
      
      <Profile />     
      <Notifications/>
      
      
     <CoursesMain/>
      <Recommendations />
      
    </div>
  )
}

export default ProfilePage