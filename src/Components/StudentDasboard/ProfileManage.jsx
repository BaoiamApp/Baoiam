import React, { useEffect, useState } from 'react';

const ProfileManage = ({ userInfo, setUserInfo }) => {

  // name: 'John Doe',
  // email: 'example@mail.com',
  // college: 'ABC University',
  // mobile: '1234567890',
  // dob: '01/01/2000',
  // location: 'Noida, In',
  const [fName, mName, lName] = userInfo.name.split(" ");

  const [formData, setFormData] = useState(() => {
    return {
      first: fName || '',
      middle: lName ? mName : '',
      last: lName || '',
      mobile: userInfo.mobile,
      dob: userInfo.dob,
      college: userInfo.college,
      location: userInfo.location,
    }
  })

  const [isEditable, setIsEditable] = useState({
    personalInfo: false,
    socialLinks: false,
    email: false,
    password: false,
  });

  const handleEditToggle = (section) => {
    setIsEditable((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const validateEmail=(name,value)=>{
    
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(old => {
      if (name === 'email' && validateEmail(name,value)) {
        return {
          ...old,
          [name]: [value],
        }
      }
      return {
        ...old,
        [name]: [value],
      }
    })
  } 

  useEffect(() => {
    setUserInfo((old) => {
      console.log(formData.first, formData.middle, formData.last)
      return {
        name: `${formData.first} ${formData.middle} ${formData.last}`,
        ...formData,
      }
    })
  }, [formData])
  useEffect(() => {
    console.log("userInfo - ", userInfo)
  }, [userInfo])

  return (
    <section className="max-w-4xl mx-auto p-6">
      <form className="space-y-8">
        {/* Personal Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>
          <button
            type="button"
            onClick={() => handleEditToggle('personalInfo')}
            className="absolute top-6 right-6 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            {isEditable.personalInfo ? 'Save' : 'Edit'}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2 text-gray-700">{formData.first}</label> :
                <input
                  type="text"
                  className="py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="First Name"
                  onChange={handleInputChange}
                  name="first"

                />}
            </div>
            {/* Middle Name */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2 text-gray-700">{formData.middle}</label> :
                <input
                  type="text"
                  className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Middle Name"
                  onChange={handleInputChange}
                  name="middle"

                />
              }
            </div>
            {/* Last Name */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2 text-gray-700">{formData.last}</label> :
                <input
                  type="text"
                  className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                  name="last"
                />
              }
            </div>
            {/* Mobile Number */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2 text-gray-700">{userInfo.mobile || "Enter Mobile Number"}</label> : <input
                type="tel"
                className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Mobile Number"
                onChange={handleInputChange}
                name="mobile"
              />
              }
            </div>
            {/* Date of Birth */}
            <div>
              {!isEditable.personalInfo ?
                <label className="block py-1 px-2 text-gray-700">{userInfo.dob}</label> : <input
                  type="date"
                  className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  name='dob'
                  onChange={handleInputChange}

                />
              }
            </div>
            {/* College/School */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2 text-gray-700">{userInfo.college}</label> : <input
                type="text"
                className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="College or School Name"
                onChange={handleInputChange}
                name="college"

              />
              }
            </div>
            {/* Location */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2 text-gray-700">{userInfo.location}</label> : <input
                type="text"
                className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Location"
                onChange={handleInputChange}
                name="location"
              />
              }
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Email</h3>
          <button
            type="button"
            onClick={() => handleEditToggle('email')}
            className="absolute top-6 right-6 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            {isEditable.email ? 'Save' : 'Edit'}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Current Email */}
            {!isEditable.email ? <div className="col-span-1 sm:col-span-2">
              {!isEditable.email ? <label className="block text-gray-700">Current Email</label> :
                <input
                  type="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Current Email Address"
                  onChange={handleInputChange}
                  name='oldEmail'
                />}
            </div>
              : <div>
                {/* New Email */}
                <div>
                  {!isEditable.email ? <label className="block text-gray-700">New Email</label> :
                    <input
                      type="newEmail"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      placeholder="New Email Address"
                      onChange={handleInputChange}
                      name='email'
                    />}
                </div>
                {/* Confirm Email */}
                <div>
                  {!isEditable.email ? <label className="block text-gray-700">Confirm New Email</label> :
                    <input
                      type="confirmEmail"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      placeholder="Confirm New Email"
                    />}
                </div>
              </div>}
          </div>
        </div>


        {/* Password Section */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Password</h3>
          <button
            type="button"
            onClick={() => handleEditToggle('password')}
            className="absolute top-6 right-6 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            {isEditable.password ? 'Save' : 'Edit'}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Current Password */}
            <div>
              {!isEditable.password ? <label className="block text-gray-700">Current Password</label> :
                <input
                  type="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Current Password"
                />
              }
            </div>
            {/* New Password */}
            <div>
              {!isEditable.password ? <label className="block text-gray-700">New Password</label> :
                <input
                  type="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="New Password"
                />
              }
            </div>
            {/* Confirm New Password */}
            <div>
              {!isEditable.password ? <label className="block text-gray-700">Confirm New Password</label> :
                <input
                  type="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Confirm New Password"
                />
              }
            </div>
          </div>
        </div>
        {/* Social Links Section */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Social Links</h3>
          <button
            type="button"
            onClick={() => handleEditToggle('socialLinks')}
            className="absolute top-6 right-6 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            {isEditable.socialLinks ? 'Save' : 'Edit'}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* LinkedIn */}
            <div>
              {!isEditable.socialLinks ? <label className="block py-1 px-4 text-gray-700">LinkedIn</label> :
                <input
                  type="url"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="LinkedIn Profile URL"

                />
              }
            </div>
            {/* GitHub */}
            <div>
              {!isEditable.socialLinks ? <label className="block py-1 px-4 text-gray-700">GitHub</label> :
                <input
                  type="url"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="GitHub Profile URL"

                />
              }
            </div>
            {/* LeetCode */}
            <div>
              {!isEditable.socialLinks ? <label className="block py-1 px-4 text-gray-700">LeetCode</label> :
                <input
                  type="url"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="LeetCode Profile URL"

                />
              }
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfileManage;