import React, { useState, useEffect } from 'react';
import { Home, Wallet, Bell, Menu, QrCode, Search, X, ChartBarIcon, DollarSign, Clock } from 'lucide-react';
import profile from "./assets/images/profile.png";
import logo from "./assets/images/loogfinal.png";

const Dashboard = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentBusinessIndex, setCurrentBusinessIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const businessInterval = setInterval(() => {
      setCurrentBusinessIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => {
      clearInterval(businessInterval);
      clearInterval(reviewInterval);
    };
  }, []);

  const NavItem = ({ icon: Icon, text }) => (
    <div className="flex items-center cursor-pointer group space-x-1 p-2 hover:bg-[#DB005F] hover:text-white rounded-lg transition-colors duration-200">
      <Icon 
        size={20} 
        className="text-[white] group-hover:text-white" 
      />
      <span className="text-sm font-['GeneralSansMedium'] text-[white] group-hover:text-white">
        {text}
      </span>
    </div>
  );

  const BusinessCard = ({ image, title, isReview = false }) => (
    <div className="bg-[#1a2942] rounded-lg p-4 sm:p-6 mb-4 flex-shrink-0 w-[300px] sm:w-[400px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
        <div className="flex items-start space-x-4 mb-2 sm:mb-0">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white">
            <img
              src={image}
              alt="Business"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="font-['GeneralSansBold'] text-white text-lg">{title}</h3>
            <p className="font-['GeneralSansRegular'] text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <span className="font-['GeneralSansRegular'] text-gray-300 text-sm">2 days ago</span>
      </div>
      
      <p className="font-['GeneralSansRegular'] text-gray-300 mb-6 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>

      {isReview && (
        <button className="w-full sm:w-auto px-4 py-2 border border-blue-500 text-blue-500 rounded-lg bg-transparent hover:bg-blue-500/10 transition-colors font-['GeneralSansMedium']">
          View Review Details
        </button>
      )}
    </div>
  );

  const AnalyticsCard = ({ title, value, icon: Icon }) => (
    <div className="bg-[#1a2942] p-4 rounded-lg flex items-center justify-between">
      <div>
        <h3 className="font-['GeneralSansSemibold'] text-base sm:text-lg text-white">{title}</h3>
        <p className="text-2xl sm:text-3xl font-['GeneralSansBold'] text-white">{value}</p>
      </div>
      <Icon size={36} className="text-[#DB005F]" />
    </div>
  );

  const businessData = [
    { image: profile, title: 'Business 1' },
    { image: profile, title: 'Business 2' },
    { image: profile, title: 'Business 3' },
    { image: profile, title: 'Business 4' },
  ];

  const reviewData = [
    { image: profile, title: 'Review 1' },
    { image: profile, title: 'Review 2' },
    { image: profile, title: 'Review 3' },
    { image: profile, title: 'Review 4' },
  ];

  return (
    <div className="min-h-screen bg-[#4D6F8F]">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-64 bg-[#B7BDCA] p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={24} className="text-[#0D182E]" />
            </button>
            <div className="mt-16 space-y-4">
              <NavItem icon={Home} text="Home" />
              <NavItem icon={QrCode} text="QR Code" />
              <NavItem icon={Wallet} text="Wallet" />
              <NavItem icon={Bell} text="Notifications" />
              <NavItem icon={Menu} text="Menu" />
            </div>
          </div>
        </div>
      )}

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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} className="text-white" />
            </button>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-6">
              <NavItem icon={Home} text="Home" />
              <NavItem icon={QrCode} text="QR Code" />
              <NavItem icon={Wallet} text="Wallet" />
              <NavItem icon={Bell} text="Notifications" />
              <NavItem icon={Menu} text="Menu" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-4">
        {/* Analytics Section */}
        <section className="mb-8 bg-[#0D182E] rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-['GeneralSansBold'] text-white mb-4">Analytics Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnalyticsCard title="Total Reviews" value="1,234" icon={ChartBarIcon} />
            <AnalyticsCard title="Earnings" value="$2,567" icon={DollarSign} />
            <AnalyticsCard title="Pending Reviews" value="45" icon={Clock} />
          </div>
        </section>

        {/* Business Directory Section with Carousel */}
        <section className="mb-8 bg-[#0D182E] rounded-lg shadow-md p-4 sm:p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#B7BDCA] scrollbar-track-[#1a2942]">
          <h2 className="text-xl sm:text-2xl font-['GeneralSansBold'] text-white mb-4">Business Directory</h2>
          <div className="flex space-x-4 snap-x">
            {businessData.map((business, index) => (
              <BusinessCard
                key={index}
                image={business.image}
                title={business.title}
              />
            ))}
          </div>
        </section>

        {/* Review History Section */}
        <section className="bg-[#0D182E] rounded-lg shadow-md p-4 sm:p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#B7BDCA] scrollbar-track-[#1a2942]">
          <h2 className="text-xl sm:text-2xl font-['GeneralSansBold'] text-white mb-4">Review History</h2>
          <div className="flex space-x-4 snap-x">
            {reviewData.map((review, index) => (
              <BusinessCard
                key={index}
                image={review.image}
                title={review.title}
                isReview
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;