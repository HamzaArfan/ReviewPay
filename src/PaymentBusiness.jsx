import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  X, 
  AlertCircle, 
  ExternalLink,
  ShieldCheck,
  Lock
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import logo from "./assets/images/loogfinal.png"

import paypal from "./assets/images/paypal-icon.png"
import stripe from "./assets/images/stripe-logo.png"

const PaymentIntegration = () => {
  const [isPayPalModalOpen, setIsPayPalModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isPayPalConnected, setIsPayPalConnected] = useState(false);

const navigate = useNavigate();

  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    setIsPayPalConnected(true);
  };


  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
                {/* Header with Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Company Logo" className="h-16 object-contain" />
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-['GeneralSansBold'] text-blue-950">Payment Integration</h1>
            <div className="flex items-center space-x-3">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${step === 2 ? 'bg-blue-950' : 'bg-gray-300'}`} />
                  {step < 4 && <div className={`w-8 h-0.5 ${step === 2 ? 'bg-blue-950' : 'bg-gray-300'}`} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-white shadow-xl rounded-xl border-0 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-['GeneralSansMedium'] text-blue-950 mb-3">
              Connect Payment Provider
            </h2>
            <p className="text-gray-600">Choose your preferred payment provider to start accepting payments from your customers.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* PayPal Container */}
            <div className="flex-1 border-2 rounded-xl p-8 relative hover:border-blue-950 transition-all duration-300 hover:shadow-lg">
              {isPayPalConnected && (
                <div className="absolute -top-3 -right-3 bg-white rounded-full shadow-lg">
                  <CheckCircle className="w-8 h-8 text-yellow-500" />
                </div>
              )}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={paypal}
                    alt="PayPal Logo"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-['GeneralSansMedium'] text-xl mb-1">PayPal</h3>
                    <p className="text-gray-600">Global payment processing solution</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-blue-950 mt-1" />
                    <p className="text-sm text-gray-600">Secure payment processing with buyer and seller protection</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-blue-950 mt-1" />
                    <p className="text-sm text-gray-600">Advanced fraud prevention and security features</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsPayPalModalOpen(true)}
                  className={`w-full py-3 px-4 rounded-xl border-2 transition-all duration-300
                    ${isPayPalConnected 
                      ? 'border-green-500 text-green-500 cursor-default bg-green-50'
                      : 'border-blue-950 text-blue-950 hover:bg-blue-50'
                    }`}
                  disabled={isPayPalConnected}
                >
                  {isPayPalConnected ? 'Connected' : 'Connect PayPal'}
                </button>
              </div>
            </div>

            {/* Stripe Container */}
            <div className="flex-1 border-2 rounded-xl p-8 relative hover:border-blue-950 transition-all duration-300 hover:shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={stripe}
                    alt="Stripe Logo"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-['GeneralSansMedium'] text-xl mb-1">Stripe</h3>
                    <p className="text-gray-600">Complete payments platform</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-blue-950 mt-1" />
                    <p className="text-sm text-gray-600">Built-in fraud prevention and revenue optimization</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="w-5 h-5text-blue-950 mt-1" />
                    <p className="text-sm text-gray-600">PCI compliance and industry-leading security</p>
                  </div>
                </div>

                <button
                  className="w-full py-3 px-4 rounded-xl border-2 border-blue-950 text-blue-950 hover:bg-blue-50 transition-all duration-300"
                >
                  Connect Stripe
                </button>
              </div>
            </div>
          </div>

          {/* Terms Modal */}
          <Modal 
            isOpen={isPayPalModalOpen} 
            onClose={() => setIsPayPalModalOpen(false)}
          >
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src={paypal}
                alt="PayPal Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-['GeneralSansMedium'] mb-1">Connect PayPal</h3>
                <p className="text-gray-600">Complete account verification and setup</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                  <div className="space-y-2">
                    <h4 className="font-['GeneralSansMedium'] text-blue-900">
                      Secure Redirection
                    </h4>
                    <p className="text-sm text-blue-700">
                      You'll be securely redirected to PayPal to complete the connection process. 
                      This ensures your credentials are handled safely.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-gray-600">
                <div>
                  <h4 className="font-['GeneralSansMedium'] text-gray-900 mb-3">
                    By connecting your PayPal account, you agree to:
                  </h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Share your PayPal business account information for verification</li>
                    <li>Allow secure payment processing through your connected account</li>
                    <li>Comply with PayPal's terms of service and merchant agreements</li>
                    <li>Maintain accurate business and tax information</li>
                    <li>Follow PayPal's acceptable use and privacy policies</li>
                  </ul>
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  View PayPal's Terms of Service
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsPayPalModalOpen(false)}
                className="px-6 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsPayPalModalOpen(false);
                  setIsSuccessModalOpen(true);
                }}
                className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                Continue to PayPal
              </button>
            </div>
          </Modal>

          {/* Success Modal */}
          <Modal 
            isOpen={isSuccessModalOpen} 
            onClose={handleSuccessClose}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <img 
                src={paypal}
                alt="PayPal Logo"
                className="h-10 object-contain mx-auto mb-6"
              />
              <h3 className="text-2xl font-['GeneralSansMedium'] mb-3">
                PayPal Connected Successfully
              </h3>
              <p className="text-gray-600 mb-6">
                Your PayPal business account has been successfully connected. You can now accept payments 
                through PayPal on your platform.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-8 text-left">
                <h4 className="font-['GeneralSansMedium'] text-blue-900 mb-2">Next Steps:</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• Complete your business profile</li>
                  <li>• Set up your payment preferences</li>
                  <li>• Review PayPal's merchant guidelines</li>
                </ul>
              </div>
              <button
                onClick={handleSuccessClose}
                className="px-8 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                Continue Setup
              </button>
            </div>
          </Modal>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="flex items-center px-6 py-3 border-2 border-blue-950 text-blue-950 rounded-xl font-['GeneralSansMedium'] hover:bg-blue-50 transition-all duration-300"
              onClick={()=>navigate("/BusinessDetails")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
            {isPayPalConnected && (
              <button
                type="button"
                className="flex items-center px-6 py-3 bg-blue-950 text-white rounded-xl font-['GeneralSansMedium'] hover:bg-blue-900 transition-all duration-300"
                
                onClick={()=>navigate('/InviteEmployee')}
                >
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentIntegration;