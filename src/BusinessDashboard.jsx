import React, { useState, useEffect } from 'react';
import { Home, Users, MessageSquare, Bell, Menu, Search, Send, X } from 'lucide-react';
import profile from "./assets/images/profile.png";
import logo from "./assets/images/loogfinal.png";
import logo2 from "./assets/images/logoauthentic.png";

const Dashboard = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const PerformanceBar = ({ label, value, percentage }) => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 w-full">
      <div className="w-full sm:w-1/4 mb-2 sm:mb-0">
        <span className="text-white text-base sm:text-lg font-['GeneralSansRegular']">{label}</span>
      </div>
      <div className="flex items-center space-x-4 w-full sm:w-3/4">
        <div className="flex-grow bg-gray-700 h-3 rounded-full">
          <div 
            className="bg-[#65D4B0] h-full rounded-full transition-all duration-300" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-white text-base sm:text-lg font-['GeneralSansRegular'] min-w-[60px] text-right">
          {value}/10
        </span>
      </div>
    </div>
  );

  const NavItem = ({ icon: Icon, text }) => (
    <div className="flex items-center cursor-pointer group space-x-1 p-2">
      <Icon 
        size={20} 
        className="text-[#0D182E] group-hover:text-[#0D182E] transition-colors duration-200" 
      />
      <span className="text-sm font-['GeneralSansMedium'] text-[#0D182E] group-hover:text-[#DB005F]">
        {text}
      </span>
    </div>
  );

  const CustomerRow = ({ name, email, image }) => (
    <tr className="hover:bg-[#1a2942] flex flex-col sm:table-row mb-4 sm:mb-0">
      <td className="px-4 sm:px-6 py-4 flex items-center">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-['GeneralSansRegular'] text-white">{name}</p>
            <p className="font-['GeneralSansRegular'] text-gray-400 text-sm">{email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 sm:px-6 py-2 sm:py-4 font-['GeneralSansRegular'] text-white">Product Review</td>
      <td className="px-4 sm:px-6 py-2 sm:py-4">
        <span className="px-2 py-1 text-xs font-['GeneralSansMedium'] rounded-full bg-green-900 text-green-100">
          Completed
        </span>
      </td>
      <td className="px-4 sm:px-6 py-2 sm:py-4">
        <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 border border-white rounded-lg text-white bg-transparent hover:bg-white/10 transition-colors">
          <Send size={16} />
          <span className="font-['GeneralSansMedium']">Contact</span>
        </button>
      </td>
    </tr>
  );

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
              <NavItem icon={Users} text="Customers" />
              <NavItem icon={MessageSquare} text="Reviews" />
              <NavItem icon={Bell} text="Notifications" />
              <NavItem icon={Menu} text="Menu" />
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full bg-[#B7BDCA] border-b-2 border-[#DB005F] shadow-lg z-40 transition-transform duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img src={logo} alt="Company Logo" className="h-8 sm:h-10" />
              <span className="text-xl sm:text-2xl font-['VerminViva'] text-[#0D182E]">ReviewPay</span>
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
              <Menu size={24} className="text-[#0D182E]" />
            </button>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-6">
              <NavItem icon={Home} text="Home" />
              <NavItem icon={Users} text="Customers" />
              <NavItem icon={MessageSquare} text="Reviews" />
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
            <div className="bg-[#1a2942] p-4 rounded-lg">
              <h3 className="font-['GeneralSansSemibold'] text-base sm:text-lg text-white">Total Reviews</h3>
              <p className="text-2xl sm:text-3xl font-['GeneralSansBold'] text-white">1,234</p>
            </div>
            <div className="bg-[#1a2942] p-4 rounded-lg">
              <h3 className="font-['GeneralSansSemibold'] text-base sm:text-lg text-white">Earnings</h3>
              <p className="text-2xl sm:text-3xl font-['GeneralSansBold'] text-white">$2,567</p>
            </div>
            <div className="bg-[#1a2942] p-4 rounded-lg">
              <h3 className="font-['GeneralSansSemibold'] text-base sm:text-lg text-white">Pending Reviews</h3>
              <p className="text-2xl sm:text-3xl font-['GeneralSansBold'] text-white">45</p>
            </div>
          </div>
        </section>

        {/* Latest Reviews Section */}
        <section className="mb-8 bg-[#0D182E] rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-['GeneralSansBold'] text-white mb-4">Latest Reviews</h2>
          <div className="space-y-6">
            <div className="bg-[#1a2942] rounded-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div className="flex items-start space-x-4 mb-2 sm:mb-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={profile}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-['GeneralSansBold'] text-white text-lg">Floyd Miles</h3>
                    <p className="font-['GeneralSansRegular'] text-gray-300 text-sm">
                      147 Reviews 23 Referrals - Brand Ambassador
                    </p>
                  </div>
                </div>
                <span className="font-['GeneralSansRegular'] text-gray-300 text-sm">1 Month Ago</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <img
                      key={item}
                      src={logo}
                      alt="Rating"
                      className="w-6 sm:w-8 h-4 sm:h-6"
                    />
                  ))}
                </div>
                <img
                  src={logo2}
                  alt="Authentic"
                  className="w-28 sm:w-36 h-8 sm:h-10"
                />
              </div>

              <div className="mb-4">
                <h4 className="text-white font-['GeneralSansBold'] text-base sm:text-lg mb-2">
                  Customer Experience : 99/100
                </h4>
              </div>

              <p className="font-['GeneralSansRegular'] text-gray-300 mb-6 text-sm sm:text-base">
                First of all I want to start off by Thanking the team at Authentink as everyone was always super friendly and helpful with our enquiries and booking.
                However a HUGE Thank you to Mertim, who not only did an absolutely amazing job with my tattoo but I genuinely walked out of the studio feeling like I had made a great friend.
              </p>

              <div className="space-y-2">
                <PerformanceBar label="Quality" value="9" percentage={90} />
                <PerformanceBar label="Service" value="10" percentage={100} />
                <PerformanceBar label="Cleanliness" value="9.5" percentage={95} />
                <PerformanceBar label="Value" value="8.5" percentage={85} />
                <PerformanceBar label="Communication" value="9.8" percentage={98} />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Customers Section */}
        <section className="bg-[#0D182E] rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-['GeneralSansBold'] text-white mb-4">Latest Customers</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="hidden sm:table-header-group">
                <tr className="bg-[#1a2942]">
                  <th className="px-6 py-3 text-left text-sm font-['GeneralSansSemibold'] text-white">Customer</th>
                  <th className="px-6 py-3 text-left text-sm font-['GeneralSansSemibold'] text-white">Review Type</th>
                  <th className="px-6 py-3 text-left text-sm font-['GeneralSansSemibold'] text-white">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-['GeneralSansSemibold'] text-white">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <CustomerRow 
                  name="John Doe"
                  email="john.doe@example.com"
                  image={profile}
                />
                <CustomerRow 
                  name="Jane Smith"
                  email="jane.smith@example.com"
                  image={profile}
                />
                <CustomerRow 
                  name="Mike Johnson"
                  email="mike.johnson@example.com"
                  image={profile}
                />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;