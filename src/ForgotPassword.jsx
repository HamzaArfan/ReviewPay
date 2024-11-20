import React from 'react';
import logo from './assets/images/loogfinal.png';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
    const navigate =useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="border rounded-lg p-10">
        <div className="max-w-sm w-full text-gray-600 space-y-8 font-['GeneralSansRegular']">
          <div className="text-center">
            <img src={logo} width={150} className="mx-auto" />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-['GeneralSansBold'] sm:text-3xl">Forgot Password</h3>
              <p className="font-['GeneralSansMedium']">
                Enter your email to reset your password.
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="font-['GeneralSansMedium']">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 mb-2 py-2 text-gray-500 bg-transparent outline-none border focus:border- shadow-sm rounded-lg"
              />
            </div>
            <button
              className="w-full mt-4 px-4 py-2 text-white font-['GeneralSansMedium'] bg-blue-950 hover:bg-blue-950 active:bg-blue-950 rounded-lg duration-150"
              onClick={() => navigate('/SavePassword')} >
              Send Reset Link
            </button>
            <div className="mt-4 text-sm font-['GeneralSansMedium'] text-center">
              Already have an account?{" "}
              <a href="#" className="font-['GeneralSansSemibold'] text-blue-950 hover:text-blue-950" onClick={() => navigate('/')}>
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;