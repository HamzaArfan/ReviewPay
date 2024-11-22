import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/images/loogfinal.png';

const ComingSoonPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="w-full min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background: 'radial-gradient(862.98% 189.02% at 92.82% 100%, #182B53 3.09%, #4D6F8F 39.35%, #DB005F 100%)'
      }}
    >
      <div className="text-center max-w-xl mb-8">
        <div className="space-y-8 font-['GeneralSansRegular']">
          {/* Logo */}
          <img src={logo} width={150} className="mx-auto mb-6" alt="Review Pay Logo" />
          <h1 className="text-white text-4xl font-['GeneralSansBold'] mb-4">
            Review Pay
          </h1>

          {/* Coming Soon Heading */}
          <h1 className="text-white text-3xl font-['GeneralSansBold'] mb-4">
            COMING SOON 2025
          </h1>

          {/* Descriptive Text */}
          <p className="text-gray-200 font-['GeneralSansMedium'] text-lg mb-6">
            We're working hard to bring the Review Pay platform to life. 
            Stay tuned for an innovative solution that will transform how businesses 
            manage payroll and reviews.
          </p>
        </div>
      </div>

      {/* Login Box - Redesigned with glassmorphism effect */}
      <div className="backdrop-blur-md bg-white/10 rounded-xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
        <h2 className="text-white text-2xl font-['GeneralSansBold'] mb-6 text-center">Login</h2>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                       text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                       focus:ring-white/30 focus:border-transparent backdrop-blur-sm
                       transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                       text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                       focus:ring-white/30 focus:border-transparent backdrop-blur-sm
                       transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                     py-3 px-4 rounded-lg font-['GeneralSansBold'] hover:opacity-90 
                     transition-all duration-300 shadow-lg hover:shadow-xl 
                     hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Footer Text */}
      <p className="text-gray-200 font-['GeneralSansRegular'] text-sm mt-8">
        © {new Date().getFullYear()} Review Pay. All rights reserved.
      </p>
    </div>
  );
};

export default ComingSoonPage;