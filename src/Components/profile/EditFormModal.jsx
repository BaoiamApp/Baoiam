import React, { useState } from 'react';

const EditFormModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.college.trim()) {
      newErrors.college = 'College is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.profileImage) {
      newErrors.profileImage = 'Profile image is required';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black dark:bg-black dark:text-white dark:border dark:border-gray-200 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-500 dark:text-black p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Edit Information</h2>
        <form className="space-y-4">
          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              type="file"
              onChange={handleFileChange}
              className={`w-full p-2 border rounded ${errors.profileImage ? 'border-red-500' : ''}`}
              required
            />
            {errors.profileImage && <p className="text-red-500 text-sm">{errors.profileImage}</p>}
          </div>
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="College"
              className={`w-full p-2 border rounded ${errors.college ? 'border-red-500' : ''}`}
              required
            />
            {errors.college && <p className="text-red-500 text-sm">{errors.college}</p>}
          </div>
          <div>
            <input
              name="mobile"
              type='numeric'
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              className={`w-full p-2 border rounded ${errors.mobile ? 'border-red-500' : ''}`}
              required
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>
          <div>
            <input
              name="dob"
              type='date'
              value={formData.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              className={`w-full p-2 border rounded ${errors.dob ? 'border-red-500' : ''}`}
              required
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>
          <div>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className={`w-full p-2 border rounded ${errors.location ? 'border-red-500' : ''}`}
              required
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>
        </form>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditFormModal;
