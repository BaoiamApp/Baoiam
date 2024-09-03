import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { LuDoorOpen } from "react-icons/lu";


const MyProfilePage = () => {
  const [picture, setPicture] = useState(
    localStorage.getItem('picture') || "https://ideogram.ai/assets/progressive-image/balanced/response/0VQSifToSfCe9btjHyEzUw"
  );
  const [name, setName] = useState(localStorage.getItem('name') || "");
  const [email, setEmail] = useState(localStorage.getItem('email') || "");
  const [contact, setContact] = useState(localStorage.getItem('contact') || "");
  const [birthday, setBirthday] = useState(localStorage.getItem('birthday') || "");
  const [gender, setGender] = useState(localStorage.getItem('gender') || "");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    birthday: '',
    gender: '',
  });

  useEffect(() => {
    localStorage.setItem('picture', picture);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('contact', contact);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('gender', gender);

    if (name === "" && email === "") {
      setIsEditing(true);
    }
  }, [picture, name, email, contact, birthday, gender]);

  useEffect(() => {
    if (isEditing) {
      setProfile({
        name,
        email,
        phoneNumber: contact,
        birthday,
        gender
      });
    }
  }, [isEditing, name, email, contact, birthday, gender]);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePicture = () => {
    setPicture(null);
  };

  const handleSave = () => {
    setIsEditing(false);
    setName(profile.name);
    setEmail(profile.email);
    setContact(profile.phoneNumber);
    setBirthday(profile.birthday);
    setGender(profile.gender);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <>
      <div className="dark:bg-black dark:text-white bg-white/50 backdrop-blur-[100%] bg-opacity-20 drop-shadow-lg border-white/20  relative max-w-screen-3xl border border-amber-500 rounded-3xl md:p-10 m-4 px-4 py-4">
        <div className="flex flex-col">
          <img
            className="md:w-24 md:h-24 w-20 h-20 rounded-full object-cover mt-2 md:mt-5 mb-3"
            src={picture}
            alt=""
          />
          <div>
            <button
              className="md:mr-10 bg-indigo-500 text-white hover:bg-indigo-400 py-1 md:px-8 px-3 rounded-md mr-3"
              onClick={() => document.getElementById("pictureInput").click()}
            >
              <div className="sm:hidden">
                <FaRegEdit />
              </div>
              <div className="hidden sm:block">Change Picture</div>
            </button>
            <button
              className="bg-indigo-500 text-white hover:bg-indigo-400 py-1 md:px-8 px-3 rounded-md"
              onClick={handleDeletePicture}
            >
              <div className="sm:hidden">
                <AiOutlineDelete />
              </div>
              <div className="hidden sm:block">Delete Picture</div>
            </button>
            <input
              id="pictureInput"
              type="file"
              className="hidden"
              onChange={handlePictureChange}
            />
          </div>

          <div className="flex mt-2">
            <label className="text-xl block">Name :</label>
            <input
              type="text"
              name="name"
              value={isEditing ? profile.name : name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-1/2 ml-3 text-xl bg-transparent border border-none rounded-md"
            />
          </div>

          <div className="flex mt-2">
            <label className="block text-xl">E-mail :</label>
            <input
              type="email"
              name="email"
              value={isEditing ? profile.email : email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-1/2 ml-3 text-xl bg-transparent border border-none rounded-md"
            />
          </div>

          <div className="flex mt-2">
            <label className="block text-xl">Phone :</label>
            <input
              name="phoneNumber"
              type="tel"
              value={isEditing ? profile.phoneNumber : contact}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-1/2 ml-3 text-xl bg-transparent border border-none rounded-md"
            />
          </div>

          <div className="flex mt-2">
            <label className="block text-xl py-1">Birthday :</label>
            <input
              name="birthday"
              type="date"
              value={isEditing ? profile.birthday : birthday}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-1/2 ml-3 text-xl bg-transparent border border-none rounded-md"
            />
          </div>

          <div className="flex mt-2">
            <label className="text-xl block">Gender :</label>
            <div className="flex w-1/2 ml-3 border border-none rounded-md">
              <select
                name="gender"
                value={isEditing ? profile.gender : gender}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full text-xl bg-transparent border border-none rounded-md"
              >
                <option value="" disabled>Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
          </div>

          <div className="flex ml-3 mt-5">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-gradient-to-r from-indigo-800 to-indigo-500 text-white rounded-md hover:bg-gradient-to-l"
              >
                Save
              </button>
            ) : null}

            <button
              onClick={toggleEdit}
              className="ml-3 flex items-center border-amber-500 border py-2 px-4 rounded-md hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {isEditing ? 'Cancel' : `Edit ✏️`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
