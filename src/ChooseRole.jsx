import React, { useState } from 'react';
import logo from './assets/images/loogfinal.png';
import { Building, User } from 'lucide-react';
import { useNavigate, useNavigation } from 'react-router-dom';

const RoleSelectionPage = () => {
    const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Continue as</h2>
        </div>
        <div className="space-y-4">
          <button
            className={`flex items-center justify-between w-full bg-white border rounded-lg px-6 py-4 hover:bg-gray-50 transition-colors ${
              selectedRole === 'business'
                ? 'border-blue-950 ring-2 ring-blue-950'
                : 'border-gray-300'
            }`}
            onClick={() => setSelectedRole('business')}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-blue-950/10">
                <Building className="text-blue-950" />
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">Business</h4>
                <p className="text-sm text-gray-500">Continue as a Business Account</p>
              </div>
            </div>
            {selectedRole === 'business' && (
              <div className="text-blue-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.616a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </button>
          <button
            className={`flex items-center justify-between w-full bg-white border rounded-lg px-6 py-4 hover:bg-gray-50 transition-colors ${
              selectedRole === 'customer'
                ? 'border-blue-950 ring-2 ring-blue-950'
                : 'border-gray-300'
            }`}
            onClick={() => setSelectedRole('customer')}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-blue-950/10">
                <User className="text-blue-950" />
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">Customer</h4>
                <p className="text-sm text-gray-500">Continue as a Customer Account</p>
              </div>
            </div>
            {selectedRole === 'customer' && (
              <div className="text-blue-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.616a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>
        <button
          className={`w-full mt-6 px-4 py-3 text-white font-medium bg-blue-950 hover:bg-blue-900 active:bg-blue-950 rounded-lg transition-colors ${
            !selectedRole && 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!selectedRole}
          onClick={() => navigate('/CreateAccount')}
        >
          Continue
        </button>
        <div className="mt-4 text-sm font-medium text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-950 hover:text-blue-900 font-semibold">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;