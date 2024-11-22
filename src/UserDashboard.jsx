import React, { useState, useEffect } from 'react';
import { 
  Home, Wallet, Bell, Menu, QrCode, Search, X, 
  User, History, Share2, HelpCircle, Settings, 
  BookOpen, FileText 
} from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from "./assets/images/loogfinal.png";

const Dashboard = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSideSliderOpen, setIsSideSliderOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Resize Event Listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Side Slider Menu Item Component
  const SideSliderMenuItem = ({ icon: Icon, text, onClick }) => (
    <div 
      className="flex items-center cursor-pointer group space-x-3 p-3 hover:bg-[#DB005F] hover:text-[#DB005F] transition-colors duration-200 hover:rounded-lg"
      onClick={onClick}
    >
      <Icon 
        size={24} 
        className="text-[white] group-hover:text-[white]" 
      />
      <span className="text-base font-['GeneralSansMedium'] text-[white] group-hover:text-[white]">
        {text}
      </span>
    </div>
  );

  // Navigation Item Component
  const NavItem = ({ icon: Icon, text, onClick }) => (
    <div 
      className="flex items-center cursor-pointer group space-x-1 p-2 hover:bg-[#DB005F] hover:text-white rounded-lg transition-colors duration-200"
      onClick={onClick}
    >
      <Icon 
        size={20} 
        className="text-[white] group-hover:text-white" 
      />
      <span className="text-sm font-['GeneralSansMedium'] text-[white] group-hover:text-white">
        {text}
      </span>
    </div>
  );

  // Navigation handlers
  const handleTermsAndConditions = () => {
    navigate('TermsandConditions');
    setIsMobileMenuOpen(false);
    setIsSideSliderOpen(false);
  };

  const handleQRCodeNavigation = () => {
    navigate('QRCode');
    setIsMobileMenuOpen(false);
    setIsSideSliderOpen(false);
  };
  const handlewalletNavigation = () => {
    navigate('wallet');
    setIsMobileMenuOpen(false);
    setIsSideSliderOpen(false);
  };
  const handlenotificationnavigation = () => {
    navigate('notifications');
    setIsMobileMenuOpen(false);
    setIsSideSliderOpen(false);
  };
  const handlehelp = () => {
    navigate('help');
    setIsMobileMenuOpen(false);
    setIsSideSliderOpen(false);
  };
  const handleFeedback = () => {
    navigate('feedback');
    setIsMobileMenuOpen(false);
    setIsSideSliderOpen(false);
  };

  const handlefaqs = () => {
    navigate('faqs');
    setIsMobileMenuOpen(false);
    setIsSideSliderOpen(false);
  };
  const handlesettings = () => {
    navigate('settings');
    setIsMobileMenuOpen(false);
    setIsSideSliderOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#4D6F8F] relative">
      {/* Side Slider Menu for Web */}
      {!isMobile && isSideSliderOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-[#0D182E]  shadow-lg z-50 overflow-y-auto">
          <div className="p-4 border-b-4 border-[#DB005F] flex justify-between items-center">
            <h2 className="text-xl font-['GeneralSansBold'] text-[white]">Menu</h2>
            <button onClick={() => setIsSideSliderOpen(false)}>
              <X size={24} className="text-[white]" />
            </button>
          </div>
          <div className="p-4 space-y-3 text-white">
            <SideSliderMenuItem icon={User} text="Profile" />
            <SideSliderMenuItem icon={History} text="Review History" />
            <SideSliderMenuItem icon={QrCode} text="QR Code" onClick={handleQRCodeNavigation} />
            <SideSliderMenuItem icon={Share2} text="Referrals" />
            <SideSliderMenuItem icon={Wallet} text="Wallet"  onClick={handlewalletNavigation}/>
            <SideSliderMenuItem icon={Settings} text="Settings" onClick={handlesettings} />
            <SideSliderMenuItem icon={HelpCircle} text="Help and Support" onClick={handlehelp}/>
            <SideSliderMenuItem icon={BookOpen} text="FAQs" onClick={handlefaqs} />
            <SideSliderMenuItem icon={FileText} text="Feedback" onClick={handleFeedback}/>
            <SideSliderMenuItem 
              icon={FileText} 
              text="Privacy Policy" 
            />
            <SideSliderMenuItem 
              icon={FileText} 
              text="Terms and Conditions" 
              onClick={handleTermsAndConditions} 
            />
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-hidden">
    <div className="fixed right-0 top-0 h-full w-64 bg-[#0D182E] p-4 overflow-y-auto">
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="absolute top-4 right-4"
      >
        <X size={24} className="text-white" />
      </button>
      <div className="mt-16 space-y-4 pb-20">
        <NavItem icon={User} text="Profile" />
        <NavItem icon={QrCode} text="QR Code" onClick={handleQRCodeNavigation} />
        <NavItem icon={Bell} text="Notifications" onClick={handlewalletNavigation} />
        <NavItem icon={History} text="Review History" />
        <NavItem icon={Share2} text="Referrals" />
        <NavItem icon={Wallet} text="Wallet"  onClick={handlenotificationnavigation}/>
        <NavItem icon={Settings} text="Settings" onClick={handlesettings}  />
        <NavItem icon={HelpCircle} text="Help and Support"   onClick={handlehelp} />
        <NavItem icon={BookOpen} text="FAQs" onClick={handlefaqs} />
        <NavItem icon={FileText} text="Feedback" onClick={handleFeedback}/>
        <NavItem icon={FileText} text="Privacy Policy" />
        <NavItem 
          icon={FileText} 
          text="Terms and Conditions" 
          onClick={handleTermsAndConditions} 
        />
      </div>
    </div>
  </div>
)}
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full bg-[#0D182E] border-b-2 border-[#DB005F] shadow-lg z-40 transition-transform duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img src={logo} alt="Company Logo" className="h-8 sm:h-10" />
              <span className="text-xl sm:text-2xl font-['GeneralSansBold'] text-white">ReviewPay</span>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex relative items-center w-1/3">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB005F] focus:border-transparent font-['GeneralSansRegular'] text-[#0D182E]"
              />
              <Search size={20} className="absolute left-3 text-gray-500" />
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-6">
              <NavItem icon={Home} text="Home" />
              <NavItem icon={QrCode} text="QR Code" onClick={handleQRCodeNavigation} />
              <NavItem icon={Wallet} text="Wallet" onClick={handlewalletNavigation} />
              <NavItem icon={Bell} text="Notifications" onClick={handlenotificationnavigation} />
            </div>

            {/* Menu Button for Web and Mobile */}
            {isMobile ? (
              <button onClick={() => setIsMobileMenuOpen(true)}>
                <NavItem icon={Menu} text="Menu" />
              </button>
            ) : (
              <button onClick={() => setIsSideSliderOpen(!isSideSliderOpen)}>
                <NavItem icon={Menu} text="Menu" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <Outlet />
    </div>
  );
};

export default Dashboard;