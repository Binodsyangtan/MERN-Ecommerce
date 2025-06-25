import React, { useContext } from 'react';
import Navbar from '../../pages/Navbar';
import AppContext from '../../context/AppContext';
import { FiUser, FiMail, FiKey, FiEdit } from 'react-icons/fi';

function Profile() {
  const { user } = useContext(AppContext);

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center text-blue-500 text-3xl font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{user?.name}</h1>
                    <p className="text-blue-100">{user?.role}</p>
                  </div>
                </div>
                {/* <button className="flex items-center space-x-1 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                  <FiEdit className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button> */}
              </div>
            </div>
            
            {/* Profile Details */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiUser className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{user?.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FiMail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium">{user?.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FiKey className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Type</p>
                    <p className="font-medium capitalize">{user?.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Sections */}
              {/* <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Activity</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-indigo-600">12</p>
                    <p className="text-sm text-gray-600">Projects</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">24</p>
                    <p className="text-sm text-gray-600">Tasks</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600">8</p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;