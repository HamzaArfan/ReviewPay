import React, { useState } from 'react';
import { ChevronLeft, Search, Upload, ChevronsRight } from 'lucide-react';

const SettingsScreen = () => {
  // State for form inputs and toggles
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('Anyone');

  // Image pick handler (mock function)
  const pickImage = () => {
    alert('Image picker would be implemented here');
  };

  // Custom Toggle Component
  const Toggle = ({ isChecked, onToggle }) => {
    return (
      <div 
        className={`w-14 h-7 rounded-full p-1 cursor-pointer transition-colors duration-300 
        ${isChecked ? 'bg-[#04A6A8]' : 'bg-gray-400'}`}
        onClick={onToggle}
      >
        <div 
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 
          ${isChecked ? 'translate-x-7' : 'translate-x-0'}`}
        ></div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#4D6F8F] pb-20">
      {/* Header */}
      <div className="flex justify-between items-center p-4 pt-20 pb-10">
       
      </div>

      {/* Settings Title */}
      <div className="bg-[#527DE6] p-4 mx-4 mb-4 rounded-lg">
        <h1 className="text-white text-2xl font-bold font-['VarinoRegular']">SETTINGS</h1>
      </div>

      {/* Profile Information Section */}
      <div className="bg-[#0D182E] rounded-2xl mx-4 p-4 mb-4">
        <h2 className="text-white text-xl font-bold mb-6 font-['GeneralSansMedium']">Profile Information</h2>
        
        {/* Input Fields */}
        <div className="space-y-4">
          {/* First Name Input */}
          <div className="relative">
            <input 
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              className="w-full bg-transparent border border-[#959DB0] rounded-lg p-4 text-white placeholder-[#959DB0]"
            />
            <label className="absolute -top-2 left-3 bg-[#0D182E] px-1 text-white text-sm">First Name</label>
          </div>

          {/* Last Name Input */}
          <div className="relative">
            <input 
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="w-full bg-transparent border border-[#959DB0] rounded-lg p-4 text-white placeholder-[#959DB0]"
            />
            <label className="absolute -top-2 left-3 bg-[#0D182E] px-1 text-white text-sm">Last Name</label>
          </div>

          {/* Username Input */}
          <div className="relative">
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full bg-transparent border border-[#959DB0] rounded-lg p-4 text-white placeholder-[#959DB0]"
            />
            <label className="absolute -top-2 left-3 bg-[#0D182E] px-1 text-white text-sm">Username</label>
          </div>

          {/* About Me Input */}
          <div className="relative">
            <textarea 
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              placeholder="Enter About Yourself"
              className="w-full bg-transparent border border-[#959DB0] rounded-lg p-4 text-white placeholder-[#959DB0] h-24"
            />
            <label className="absolute -top-2 left-3 bg-[#0D182E] px-1 text-white text-sm">About Me</label>
          </div>
        </div>

        {/* Profile Image Upload */}
        <div className="mt-6">
          <h3 className="text-white text-lg font-bold mb-6 font-['GeneralSansMedium']">Add Profile Image</h3>
          <div 
            onClick={pickImage}
            className="border border-[#E2E8F0] rounded-2xl h-44 flex flex-col justify-center items-center cursor-pointer"
          >
            <div className="mb-4">
              <Upload className="w-12 h-12 text-white" />
            </div>
            <p className="text-white text-base font-['GeneralSansMedium'] mb-1">
              Click to upload <span className="text-[#959DB0] text-sm">or drag and drop</span>
            </p>
            <p className="text-[#959DB0] text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</p>
          </div>
        </div>
      </div>

      {/* Account Security Section */}
      <div className="bg-[#0D182E] rounded-2xl mx-4 p-4 mb-4">
        <h2 className="text-white text-xl font-bold mb-4 font-['GeneralSansMedium']">Account Security</h2>
        
        {/* Two-Factor Authentication */}
        <div className="flex justify-between items-center py-3 border-b border-[#959DB0]">
          <span className="text-white text-base font-['GeneralSansRegular']">
            Enable Two-factor Authentication
          </span>
          <Toggle 
            isChecked={is2FAEnabled} 
            onToggle={() => setIs2FAEnabled(!is2FAEnabled)} 
          />
        </div>

        {/* Change Password */}
        <div className="flex justify-between items-center py-3 border-b border-[#959DB0]">
          <span className="text-white text-base font-['GeneralSansRegular']">
            Change Password
          </span>
          <ChevronsRight className="text-white w-6 h-6" />
        </div>

        {/* Manage Connected Accounts */}
        <div className="flex justify-between items-center py-3 border-b border-[#959DB0]">
          <span className="text-white text-base font-['GeneralSansRegular']">
            Manage Connected Accounts
          </span>
          <ChevronsRight className="text-white w-6 h-6" />
        </div>

        {/* Profile Visibility */}
        <div className="flex justify-between items-center py-3">
          <span className="text-white text-base font-['GeneralSansRegular']">
            Who can view your profile
          </span>
          <select 
            value={profileVisibility}
            onChange={(e) => setProfileVisibility(e.target.value)}
            className="bg-[#0D182E] text-white border-none"
          >
            <option value="Anyone">Anyone</option>
            <option value="Private">Private</option>
          </select>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-[#0D182E] rounded-2xl mx-4 p-4 mb-4">
        <h2 className="text-white text-xl font-bold mb-4 font-['GeneralSansMedium']">Notifications</h2>
        
        {/* Push Notifications */}
        <div className="flex justify-between items-center py-3 border-b border-[#959DB0]">
          <span className="text-white text-base font-['GeneralSansRegular']">
            Push Notifications
          </span>
          <Toggle 
            isChecked={pushNotifications} 
            onToggle={() => setPushNotifications(!pushNotifications)} 
          />
        </div>

        {/* Email Notifications */}
        <div className="flex justify-between items-center py-3">
          <span className="text-white text-base font-['GeneralSansRegular']">
            Email Notifications
          </span>
          <Toggle 
            isChecked={emailNotifications} 
            onToggle={() => setEmailNotifications(!emailNotifications)} 
          />
        </div>
      </div>

      {/* Logout Button */}
      <button className="bg-[#B7BDCA] mx-4 p-4 rounded-lg">
        <span className="text-[#0D182E] text-base font-bold font-['GeneralSansMedium']">
          Logout
        </span>
      </button>
    </div>
  );
};

export default SettingsScreen;