import React, { useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setProfile1 } from "../../Redux/user/userSlice.js";

const apiUrl = import.meta.env.VITE_API_URL;

const ProfileManage = () => {
  const dispatch = useDispatch();

  // accessing user data from Redux store
  const userInfo = useSelector((state) => state.user.profile);
  console.log(userInfo, 'profile management userinfo state check')

  // const [email, setEmail] = useState({
  //   newEmail: "",
  //   confirmEmail: "",
  // });

  const [formData, setFormData] = useState({
    first: userInfo.first_name || "",
    last: userInfo.last_name || "",
    email: userInfo.email || "",
    mobile: userInfo.mobile_number || "",
    dob: userInfo.dob || "",
    college: userInfo.college_name || "",
    school: userInfo.school_name || "",
    location: userInfo.location || "",
    socialLinks: {
      linkedIn: userInfo.linkedin || "",
      gitHub: userInfo.github || "",
      instagram: userInfo.instagram || "",
    },
  });

  const [isEditable, setIsEditable] = useState({
    personalInfo: false,
    otherInfo: false,
    socialLinks: false,
    email: false,
    password: false,
  });

  const handleEditToggle = (section) => {
    if (section === "email" && isEditable.email) {
      if (validateEmail()) {
        setFormData((prev) => ({
          ...prev,
          email: email.newEmail,
        }));
        setIsEditable((prevState) => ({
          ...prevState,
          [section]: !prevState[section],
        }));
      }
      return;
    }
    setIsEditable((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const validateEmail = () => {
    return (
      email.newEmail &&
      email.confirmEmail &&
      email.newEmail === email.confirmEmail
    );
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "url") {
      setFormData((prev) => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = async (section) => {
    try {
      let transformedData = {};

      console.log(`Saving ${section}...`);

      if (section === "personalInfo") {
        transformedData = {
          first_name: formData.first,
          last_name: formData.last,
          email: formData.email,
        };

        console.log("Personal Info Data:", transformedData);

        const { data } = await axios.patch(`${apiUrl}/api/auth/users/me/`, transformedData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.getItem("access_token")}`,
          },
        });

        // dispatching updated data to Redux
        dispatch(setProfile1(data));

        setFormData((prev) => ({
          ...prev,
          ...transformedData,
        }));

      } else {
        transformedData = {
          mobile_number: formData.mobile,
          college_name: formData.college,
          school_name: formData.school,
          linkedin: formData.socialLinks.linkedIn,
          github: formData.socialLinks.gitHub,
          instagram: formData.socialLinks.instagram,
        };

        console.log("Other Info Data:", transformedData);

        await axios.put(`${apiUrl}/api/profile/`, transformedData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.getItem("access_token")}`,
          },
        });

        // dispatching updated data to Redux
        dispatch(setProfile1({ ...userInfo, ...transformedData }));

        setFormData((prev) => ({
          ...prev,
          ...transformedData,
        }));
      }

    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (

    <section className="max-w-4xl dark:bg-black dark:text-white mx-auto p-6">
      <form className="space-y-8">
        {/* Personal Information Section */}
        <div className="dark:bg-black dark:text-white dark:border dark:border-white p-6 rounded-lg shadow-md relative bg-indigo-500 text-white">
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>
          <button
            type="button"
            onClick={() => {
              handleEditToggle("personalInfo");
              if (isEditable.personalInfo) handleSave("personalInfo");
            }}
            className="absolute top-6 right-6 py-1 px-3 rounded bg-white text-indigo-600"
          >
            {isEditable.personalInfo ? "Save" : "Edit"}
          </button>

          <div className="grid grid-cols-1 gap-6">
            {/* Email */}
            <div className="space-x-2">
              <label><span className="font-bold px-2">Email</span>{formData.email || "Email not provided"}</label>
              <FaCheckCircle className="text-green-500 inline" size={20} />
            </div>

            {/* First and Last Name */}
            <div className="flex flex-row items-center">
              {/* First Name */}
              {!isEditable.personalInfo ? (
                <label className="py-1"><span className="font-bold px-2">First Name:</span> {formData.first}</label>
              ) : (
                <>
                  <label className="py-1 px-2 font-bold">First Name:</label>
                  <input
                    type="text"
                    className="py-1 px-2 block border-b border-white shadow-sm text-white bg-transparent outline-none"
                    placeholder="First Name"
                    value={formData.first}
                    onChange={handleInputChange}
                    name="first"
                  />
                </>
              )}
              {/* Last Name */}
              {!isEditable.personalInfo ? (
                <label className="py-1"><span className="font-bold px-2">Last Name:</span> {formData.last}</label>
              ) : (
                <>
                  <label className="py-1 px-2 font-bold">Last Name: </label>
                  <input
                    type="text"
                    className="py-1 px-2 block border-b border-white shadow-sm text-white bg-transparent outline-none"
                    placeholder="Last Name"
                    value={formData.last}
                    onChange={handleInputChange}
                    name="last"
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Other Information Section */}
        <div className="dark:bg-black dark:text-white dark:border dark:border-white p-6 rounded-lg shadow-md relative bg-indigo-500 text-white">
          <h3 className="text-xl py-1 px-2 font-bold mb-4">Other Information</h3>
          <button
            type="button"
            onClick={() => {
              handleEditToggle("otherInfo");
              if (isEditable.otherInfo) handleSave("otherInfo");
            }}
            className="absolute top-6 right-6 py-1 px-3 rounded bg-white text-indigo-600"
          >
            {isEditable.otherInfo ? "Save" : "Edit"}
          </button>
          <div className="flex flex-col gap-y-2">
            {/* Mobile Number */}
            <div>
              {!isEditable.otherInfo ? (
                <label className="block py-1 px-2"><span className="font-bold px-2">Mobile:</span> {formData.mobile || "Enter Mobile Number"}</label>
              ) : (
                <div className="flex items-center">
                  <label className="py-1 px-2 font-bold w-full">Mobile: </label>
                  <input
                    type="tel"
                    className="py-1 px-2 block w-full border-b border-white shadow-sm text-white bg-transparent outline-none"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    name="mobile"
                  />
                </div>
              )}
            </div>

            {/* College */}
            <div>
              {!isEditable.otherInfo ? (
                <label className="block py-1 px-2"><span className="font-bold px-2">College:</span> {formData.college}</label>
              ) : (
                <div className="flex items-center">
                  <label className="py-1 px-2 font-bold w-full">College: </label>
                  <input
                    type="text"
                    className="py-1 px-2 block w-full border-b border-white shadow-sm text-white bg-transparent outline-none"
                    placeholder="College Name"
                    value={formData.college}
                    onChange={handleInputChange}
                    name="college"
                  />
                </div>
              )}
            </div>

            {/* School */}
            <div>
              {!isEditable.otherInfo ? (
                <label className="block py-1 px-2"><span className="font-bold px-2">School:</span> {formData.school}</label>
              ) : (
                <div className="flex items-center">
                  <label className="py-1 px-2 font-bold w-full">School: </label>
                  <input
                    type="text"
                    className="py-1 px-2 block w-full border-b border-white shadow-sm text-white bg-transparent outline-none"
                    placeholder="School Name"
                    value={formData.school}
                    onChange={handleInputChange}
                    name="school"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="dark:bg-black dark:text-white dark:border dark:border-white p-6 rounded-lg shadow-md relative bg-indigo-500 text-white">
          <h3 className="text-xl font-bold mb-4">Social Links</h3>
          <button
            type="button"
            onClick={() => {
              handleEditToggle("socialLinks");
              if (isEditable.socialLinks) handleSave("socialLinks");
            }}
            className="absolute top-6 right-6 py-1 px-3 rounded bg-white text-indigo-600"
          >
            {isEditable.socialLinks ? "Save" : "Edit"}
          </button>

          <div className="grid grid-cols-1 gap-6">
            {/* LinkedIn */}
            <div className="flex items-center w-full">
              <label className="block py-1 px-2 font-bold">LinkedIn:</label>
              {!isEditable.socialLinks ? (
                <span className="block">{formData.socialLinks.linkedIn || "Not Provided"}</span>
              ) : (
                <input
                  type="url"
                  className="py-1 px-2 block w-full border-b border-white shadow-sm text-white bg-transparent outline-none placeholder:text-white"
                  placeholder="LinkedIn URL"
                  value={formData.socialLinks.linkedIn}
                  onChange={handleInputChange}
                  name="linkedIn"
                />
              )}
            </div>

            {/* GitHub */}
            <div className="flex items-center w-full">
              <label className="block py-1 px-2 font-bold">GitHub:</label>
              {!isEditable.socialLinks ? (
                <span className="block">{formData.socialLinks.gitHub || "Not Provided"}</span>
              ) : (
                <input
                  type="url"
                  className="py-1 px-2 block w-full border-b border-white shadow-sm text-white bg-transparent outline-none placeholder:text-white"
                  placeholder="GitHub URL"
                  value={formData.socialLinks.gitHub}
                  onChange={handleInputChange}
                  name="gitHub"
                />
              )}
            </div>

            {/* Instagram */}
            <div className="flex items-center w-full">
              <label className="block py-1 px-2 font-bold">Instagram:</label>
              {!isEditable.socialLinks ? (
                <span className="block">{formData.socialLinks.instagram || "Not Provided"}</span>
              ) : (
                <input
                  type="url"
                  className="py-1 px-2 block w-full border-b border-white shadow-sm text-white bg-transparent outline-none placeholder:text-white"
                  placeholder="Instagram URL"
                  value={formData.socialLinks.instagram}
                  onChange={handleInputChange}
                  name="instagram"
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </section>

  );
};

export default ProfileManage;
