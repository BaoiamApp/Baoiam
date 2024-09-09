import React from 'react'
import Profile from '../Dashboard/Profile'
import Recommendations from '../Dashboard/Recommendations'
import Notifications from '../Dashboard/Notifications'
import CoursesMain from './CoursesMain'
const ProfilePage = ({userInfo}) => {
  return (
    <div className=''>
      <div className="grid grid-cols-1 h-screen overflow-hidden md:grid-cols-2 gap-4 ">
        <div className='flex flex-col gap-4'>
        <Profile userInfo={userInfo}/>
        <CoursesMain />
        </div>
        <div className='flex flex-col gap-4'>
      
        <Notifications />
        <Recommendations />
        </div>
      </div>

    </div>
  )
}

export default ProfilePage