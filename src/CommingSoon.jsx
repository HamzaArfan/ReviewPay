import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/images/loogfinal.png'; // Make sure to use the same logo

const ComingSoonPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex items-center justify-center px-4 bg-white">
      <div className="border rounded-lg p-10 text-center max-w-xl">
        <div className="space-y-8 font-['GeneralSansRegular']">
          {/* Logo */}
          <img src={logo} width={150} className="mx-auto mb-6" alt="Review Pay Logo" />
          <h1 className="text-blue-950 text-4xl font-['GeneralSansBold'] mb-4">
            Review Pay
          </h1>

          {/* Coming Soon Heading */}
          <h1 className="text-blue-950 text-2xl font-['GeneralSansBold'] mb-4">
            Coming Soon
          </h1>

          {/* Descriptive Text */}
          <p className="text-gray-600 font-['GeneralSansMedium'] text-lg mb-6">
            We're working hard to bring the Review Pay platform to life. 
            Stay tuned for an innovative solution that will transform how businesses 
            manage payroll and reviews.
          </p>

          {/* Footer Text */}
          <p className="text-gray-500 font-['GeneralSansRegular'] text-sm mt-6">
            © {new Date().getFullYear()} Review Pay. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;