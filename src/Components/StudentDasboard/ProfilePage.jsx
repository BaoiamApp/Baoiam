import React from 'react'
import Profile from '../Dashboard/Profile'
import Recommendations from '../Dashboard/Recommendations'
import Notifications from '../Dashboard/Notifications'
import CoursesMain from './CoursesMain'
const ProfilePage = ({userInfo}) => {
  return (
    <div className=''>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Profile userInfo={userInfo}/>
        <Notifications />
        <CoursesMain />
        <Recommendations />
      </div>

    </div>
  )
}

export default ProfilePage