import SpinnerMain from '@/components/common/SpinnerMain';
import { AuthContext } from '@/contexts/AuthContext';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaUserEdit,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCamera,
  FaBuilding,
  FaStar,
} from 'react-icons/fa';

const UserProfile = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext);

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const secureApi = useAxiosSecure();

  const { data: myListings = [], isLoading } = useQuery({
    queryKey: ['my-listing', user?.email],
    queryFn: async () => {
      try {
        const result = await secureApi.get(`/my-listing?email=${user.email}`);
        return result.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const onSubmit = async data => {
    const formData = new FormData();
    if (selectedFile) {
      const imageUrl = await uploadToImgBB(selectedFile);
      formData.append('photoUrl', imageUrl);
    } else {
      formData.append('photoUrl', user.photoURL);
    }
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    console.log(formData);

    await updateUserProfile(
      formData.get('name'),
      formData.get('photoUrl'),
      formData.get('phone')
    ).then(res => console.log('User profile updated successfully.', res));
  };

  const createdAtDate = new Date(Number(user?.metadata?.createdAt));
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    if (file.size > 2 * 1024 * 1024) return;

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    console.log(file);
  };
  const uploadToImgBB = async imageFile => {
    const formData = new FormData();
    formData.append('image', imageFile);
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: 'POST',
        body: formData,
      }
    );
    const data = await response.json();
    if (!data.success) {
      throw new Error('Image upload failed');
    }
    return data.data.url;
  };

  if (loading || isLoading) {
    return <SpinnerMain></SpinnerMain>;
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="h-32 md:h-48 bg-secondary relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <button className="absolute bottom-4 right-4 btn btn-sm btn-ghost text-white bg-black/20 hover:bg-black/40 border-none">
            <FaCamera /> Change Cover
          </button>
        </div>

        <div className="px-6 md:px-10 pb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end -mt-12 md:-mt-16 gap-6">
            <div className="relative group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full ring-4 ring-white overflow-hidden bg-base-200">
                <img
                  src={preview || user.photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-colors cursor-pointer"
                >
                  <FaCamera className="text-sm" />
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            <div className="flex-1 mt-2 md:mt-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-secondary flex items-center gap-2">
                    {user.displayName}
                    <span className="badge badge-primary text-white text-xs px-2 py-1 uppercase">
                      {user.role}
                    </span>
                  </h1>
                  <p className="text-gray-500 text-sm mt-1">
                    Member since: {createdAtDate.toLocaleString()}
                  </p>
                </div>

                <button className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white gap-2">
                  <FaUserEdit /> Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-secondary mb-4">
              Account Overview
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl text-center border border-gray-100">
                <FaBuilding className="text-2xl text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-secondary">
                  {myListings?.length}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Properties
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl text-center border border-gray-100">
                <FaStar className="text-2xl text-warning mx-auto mb-2" />
                <div className="text-2xl font-bold text-secondary">4.8</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Rating
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-secondary mb-4">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-secondary/80">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaEnvelope />
                </div>
                <span className="text-sm">{user.email}</span>
              </li>
              <li className="flex items-center gap-3 text-secondary/80">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaPhone />
                </div>
                <span className="text-sm">
                  {user.phone ? user.phone : 'N/A'}
                </span>
              </li>
              <li className="flex items-center gap-3 text-secondary/80">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-sm">
                  {user.emailVerified ? 'User Verified' : 'User Not Verified'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-secondary mb-6 pb-4 border-b border-gray-100">
              Update Profile
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-secondary">
                      Full Name
                    </span>
                  </label>
                  <input
                    {...register('name', {
                      required: 'Name is required',
                    })}
                    type="text"
                    placeholder="Your Name"
                    defaultValue={user.displayName}
                    className="input input-bordered focus:border-primary focus:outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-secondary">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="input input-bordered bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-secondary">
                      Phone Number
                    </span>
                  </label>
                  <input
                    {...register('phone', {
                      pattern: /((01){1}[3456789]{1}(\d){8})$/,
                    })}
                    type="tel"
                    disabled
                    placeholder="Your Phone"
                    defaultValue={user.phone}
                    className="input input-bordered focus:border-primary focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-red-500">
                      Phone number must be like this formate +8801762127576
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-secondary">
                      Email Verified
                    </span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Email Verifed"
                    defaultValue={user.emailVerified ? 'Yes' : 'No'}
                    className="input input-bordered focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="btn btn-primary text-white px-8"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
