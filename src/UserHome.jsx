import React, { useState, useEffect } from 'react';
import { 
  ChartBarIcon, 
  DollarSign, 
  Clock 
} from 'lucide-react';
import profile from "./assets/images/profile.png";

const UserHome = () => {
  const [currentBusinessIndex, setCurrentBusinessIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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
  );
};

export default UserHome;