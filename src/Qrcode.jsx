import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import { Share2, Download } from 'lucide-react';
import logo from "./assets/images/loogfinal.png"; 
import profilePhoto from "./assets/images/profile.png"; 

const QRCodePage = () => {
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: profilePhoto,
    qrCodeData: "https://reviewpay.com/profile/johndoe"
  };

  const handleShareQRCode = () => {
    navigator.clipboard.writeText(userData.qrCodeData)
      .then(() => alert('QR Code link copied to clipboard!'));
  };

  const handleDownloadQRCode = () => {
    const svgElement = document.getElementById('qr-code-svg');
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const link = document.createElement('a');
      link.download = `${userData.name}_QRCode.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="min-h-screen bg-[#4D6F8F] py-10 flex flex-col items-center p-4">
            <div className="w-full bg-[#527DE6] rounded-2xl mb-8 mt-12">
          <div className="max-w-full text-left p-6 sm:p-8">
            <h1 className="text-3xl font-[VarinoRegular] text-white">
              Scan QR
            </h1>
          </div>
        </div>
      <div className="w-full max-w-4xl">


        <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-40 h-40 bg-[#65D4B0] transform rotate-45 relative overflow-hidden shadow-lg rounded-lg border-4 border-black">
              <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center"> 
                <img 
                  src={userData.profilePicture} 
                  alt="Profile" 
                  className="w-full h-full object-contain mt-16" 
                />
              </div>
            </div>
            <div className="text-center text-white">
              <h1 className="text-2xl font-['VarinoRegular']">{userData.name}</h1>
              <p className="text-base font-['GeneralSansRegular']">{userData.email}</p>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-80 h-80 bg-[#0D182E] border-4 border-[#DC3DF7] rounded-3xl flex items-center justify-center">
              <QRCode
                id="qr-code-svg"
                value={userData.qrCodeData}
                size={250}
                logoImage={logo}
                logoWidth={65}
                logoHeight={55}
                logoPadding={5}
                logoPaddingStyle='square'
                logoOpacity={1}
                quietZone={8}
                fgColor="#ffffff"
                bgColor="#0D182E"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button 
                onClick={handleShareQRCode}
                className="flex items-center bg-[#0D182E] text-white px-6 py-3 rounded-lg hover:bg-[#0D182E]/90 transition-colors"
              >
                <Share2 size={20} className="mr-2" />
                Share QR
              </button>
              <button 
                onClick={handleDownloadQRCode}
                className="flex items-center bg-transparent text-[white] px-6 py-3 rounded-lg hover:bg-transparent transition-colors border-white border-2"
              >
                <Download size={20} className="mr-2" />
                Download QR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;