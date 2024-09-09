import React from 'react'
import Profile from './Profile'
import Recommendations from './Recommendations'
import Notifications from './Notifications'
import CoursesMain from './CoursesMain'
const ProfilePage = ({userInfo}) => {
  return (
      <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-4 ">
        <div className='flex flex-col gap-4'>
        <Profile userInfo={userInfo}/>
        <CoursesMain />
        </div>
        <div className='flex flex-col gap-4'>
        <Notifications />
        <Recommendations />
        </div>
      </div>
  )
}

export default ProfilePage