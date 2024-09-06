import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import InfoCard from './InfoCard';
import CertificateCard from './CertificateCard';
import CoursesCard from './CoursesCard';
import EditFormModal from './EditFormModal';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(()=>{
      const savedData = localStorage.getItem('formData');
      return savedData?JSON.parse(savedData):{
        name: 'Anuj Tiwari',
        profileImage: '',
        email: 'anuj@gmail.com',
        college: 'ABC University',
        mobile: '1234567890',
        dob: '01/01/2000',
        location: 'Noida, In',
      }
    });
  const [certificates] = useState([]);
  const [courses] = useState([]);

  const handleEditClick = () => setIsEditing(true);
  const handleClose = () => setIsEditing(false);
  const handleSave = (data) => setUserInfo(data);
  useEffect(()=>{ console.log("changed",userInfo.name )},[userInfo])

  return (
    <div className="flex dark:bg-black dark:text-white">
      <div className="w-full">
          <div className="flex flex-col mb-5 lg:flex-row justify-center gap-4">
            <div className="lg:flex-row">
              <ProfileCard
                name={userInfo.name}
                profileImage={userInfo.profileImage}
                editUserInfo={setUserInfo}
                onEdit={handleEditClick}
              />
            </div>
            <div className="flex-1">
              <InfoCard {...userInfo} onEdit={handleEditClick} />
            </div>
          
        </div>
        <CertificateCard certificates={certificates} />
          <CoursesCard courses={courses} />
        <EditFormModal
          isOpen={isEditing}
          onClose={handleClose}
          onSave={handleSave}
          initialData={userInfo}
        />
      </div>
    </div>
  );
}
  

export default ProfilePage;
