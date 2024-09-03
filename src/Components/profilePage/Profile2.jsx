import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '1234567890',
        birthday: '2000-01-01',
        github: '',
        linkedin: '',
    });

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) setGreeting('Good Morning');
        else if (currentHour < 18) setGreeting('Good Afternoon');
        else if (currentHour < 21) setGreeting('Good Evening');
        else setGreeting('Good Night');
    }, []);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col md:flex-row dark:bg-black dark:text-white h-full">
            {/* Dashboard */}
            <div className="bg-indigo-700 text-white p-6 md:w-1/5 w-full flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
                    <div className="flex items-center mb-4 cursor-pointer">
                        <CgProfile className="text-2xl mr-3" />
                        <span>My Profile</span>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer">
                    <MdLogout className="text-2xl mr-3" />
                    <span>Logout</span>
                </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">{greeting}</h1>
                    <button
                        className="text-indigo-700 bg-white border border-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white flex items-center"
                        onClick={handleEditToggle}
                    >
                        <FaEdit className="mr-2" /> {isEditing ? 'Save' : 'Edit'}
                    </button>
                </div>

                {/* Profile Picture */}
                <div className="flex items-center mb-8">
                    <img
                        className="w-24 h-24 rounded-full border-4 border-indigo-700 mr-8"
                        src="https://via.placeholder.com/100"
                        alt="Profile"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold">{profile.name}</h2>
                        <p className="text-gray-600">{profile.email}</p>
                    </div>
                </div>

                {/* Profile Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                            type="tel"
                            name="contact"
                            value={profile.contact}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Birthday</label>
                        <input
                            type="date"
                            name="birthday"
                            value={profile.birthday}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">GitHub (Optional)</label>
                        <input
                            type="url"
                            name="github"
                            value={profile.github}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">LinkedIn (Optional)</label>
                        <input
                            type="url"
                            name="linkedin"
                            value={profile.linkedin}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
