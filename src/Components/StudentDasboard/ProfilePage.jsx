import React from 'react'
import Profile from '../Dashboard/Profile'
import Recommendations from '../Dashboard/Recommendations'
import Notifications from '../Dashboard/Notifications'
import CoursesMain from './CoursesMain'
const ProfilePage = ({userInfo}) => {
  return (
      <div className="grid grid-cols-1  overflow-hidden md:grid-cols-2 gap-4 ">
        <div className='flex flex-col gap-4 h-screen'>
        <Profile userInfo={userInfo}/>
        <CoursesMain />
        </div>
        <div className='flex flex-col gap-4 h-screen'>
        <Notifications />
        <Recommendations />
        </div>
      </div>
  )
}

export default ProfilePage