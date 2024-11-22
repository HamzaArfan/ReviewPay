import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileBanner from './assets/images/banner_image.png'; // Replace with your banner image path
import imagelion from './assets/images/image_lion.png'; // Replace with your banner image path
import logoauthentic from './assets/images/logoauthentic.png'; // Replace with your banner image path
import map from './assets/images/Layer 2.png'; // Replace with your map image path
import myshoplist from './assets/images/Trolly.png';
import crownmelbourne from './assets/images/crownmelbourne.png'
import placestovisit from './assets/images/places_to_visit.png';
import shieldIcon from './assets/images/img_banner_profile.png'; // Replace with your shield icon path
import crown from './assets/images/crown.png'; // Replace with your shield icon path
import nobu from './assets/images/noburestaurent.png'; // Replace with your shield icon path
import heart from './assets/images/heart.png'; // Replace with your shield icon path
import existing from './assets/images/Existing Review.png'; // Replace with your shield icon path
import profile_user from './assets/images/Profile_user.png'; // Replace with your shield icon path
import logofinal from './assets/images/loogfinal.png'; // Replace with your shield icon path

const ProfilePage = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview'); // State for active tab

  // Progress values for 6 bars and their labels
  const progressData = [
    { progress: 40, label: 'Reviews' },
    { progress: 60, label: 'Referrals' },
    { progress: 20, label: 'Level' },
    { progress: 80, label: 'Brand Ambassador' },
    { progress: 50, label: 'Followers' },
    { progress: 70, label: 'Popularity' },
  ];

  const navigate = useNavigate();

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: '#486f8f' }}>
      {/* Banner Section */}
      <div className="relative w-full h-80">
        <img
          src={profileBanner}
          alt="Profile Banner"
          className="w-full h-full object-cover mx-auto px-8"
        />

        {/* Shield Icon on Top Right */}
        <div className="absolute top-4 right-24">
          <img src={shieldIcon} alt="Shield Icon" className="w-8 h-8" />
        </div>

        {/* Name and Follow Button Overlay */}
        <div className="absolute bottom-8 left-12 text-white">
          <h1 className="font-[VarinoRegular] text-4xl ">Nathan Williams</h1>
        </div>

        <button
          onClick={toggleFollow}
          className={`absolute bottom-8 right-16 px-6 py-2 rounded-full font-semibold text-sm
            ${isFollowing ? 'bg-gray-300 text-gray-800' : 'bg-blue-950 text-white'} transition-all`}
        >
          {isFollowing ? 'Following' : 'Follow Me'}
        </button>
      </div>

      {/* Section with full-width Map and Progress Bars Overlay */}
      <div className="relative mt-8">
        <img
          src={map}
          alt="Map"
          className="w-3/4 h-auto rounded-lg shadow-lg mx-auto"
        />

        <div className="absolute top-0 left-0 w-full px-8 py-4">
          {/* 3x2 Grid Layout for Progress Bars */}
          <div className="grid grid-cols-3 gap-8">
            {progressData.map((data, index) => (
              <div key={index} className="w-full">
                <div className="mb-4">
                  <p className="text-white text-lg mb-2">{data.label}</p>
                  <div className="relative w-full h-6 bg-gray-200 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full"
                      style={{
                        width: `${data.progress}%`,
                        backgroundColor: '#DC3DF7', // Custom color for the progress bar
                        borderRadius: 'inherit',
                      }}
                    />
                  </div>
                  <p className="text-white text-lg mt-2">{data.progress}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8 mx-auto max-w-6xl">
        {/* Tabs Navigation */}
        <div className="flex justify-center border-b border-gray-300 font-[VarinoRegular]">
          {[
            { name: 'Places to visit', image: placestovisit },
            { name: 'My Shop List', image:  myshoplist},
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex flex-col items-center mx-4 px-4 py-2 transition-all ${
                activeTab === tab.name
                  ? 'text-blue-950 font-bold'
                  : 'text-black hover:text-gray-800'
              }`}
            >
              <img
                src={tab.image}
                alt={`${tab.name} Icon`}
                className={`w-10 h-10 mb-1 rounded-full shadow-md ${
                  activeTab === tab.name ? 'border-2 border-blue-950' : ''
                }`}
              />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="mt-6 text-center">
  {activeTab === 'Places to visit' && (
    <div>
      
      {/* Updated Card Design: Grid with 3 Columns */}
      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="flex shadow-lg rounded-lg overflow-hidden items-center"
            style={{
              backgroundColor: '#B7BDCA',
            }} 
          >
            {/* Image on the Left */}
            <img
              src={crownmelbourne}
              alt="Card Image"
              className="w-40 h-36 py-2 px-2 rounded-2xl object-cover"
            />

            {/* Logo and Text on the Right */}
            <div className="">
              <img
                src={crown} // Replace with logo if needed
                alt="Logo"
                className="w-8 h-7 mb-2"
              />
              <p className="font-[GeneralSansBold] text-lg text-left">
                Crown Casino Melbourne
              </p>
              <p className="text-sm text-left">Hotel</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
  {activeTab === 'My Shop List' && (
    <div>
      <h2 className="text-lg font-semibold text-blue-950 mb-2">My Shop List</h2>
      <p className="text-gray-700 leading-relaxed">
        Explore my portfolio of projects, including web applications, designs,
        and more.
      </p>
    </div>
  )}
</div>

      </div>

      {/* Tabs Section */}
      <div className="mt-8 mx-auto max-w-6xl">
  {/* Tabs Navigation */}
  {/* <div className="flex justify-center border-b border-gray-300">
    {[
      { name: 'Favorites', image: overviewImage },
    ].map((tab) => (
      <button
        key={tab.name}
        onClick={() => setActiveTab(tab.name)}
        className={`flex flex-col items-center mx-4 px-4 py-2 transition-all ${
          activeTab === tab.name
            ? 'text-blue-950 font-bold'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <img
          src={tab.image}
          alt={`${tab.name} Icon`}
          className={`w-10 h-10 mb-1 rounded-full shadow-md ${
            activeTab === tab.name ? 'border-2 border-blue-950' : ''
          }`}
        />
        <span>{tab.name}</span>
      </button>
    ))}
  </div> */}

<div className="flex items-center space-x-4 mb-2">
  <img
    src={heart} // Replace with your banner image source
    alt="Project Icon"
    className="w-10 h-10 object-cover"
  />
  <h1 className="text-lg font-semibold  mb-2 font-[VarinoRegular]">Favorites</h1>
</div>

  {/* Tabs Content */}
  <div className="mt-6 text-center">
    <div>
      {/* Updated Card Design: Image Above, Data Below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className=" shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            style={{
             
              backgroundColor: '#B7BDCA', // Custom color for the progress bar
  
            }}
          >
            {/* Image on Top */}
            <img
              src={nobu} // Replace with your image source
              alt="Card Image"
              className="w-full h-40 object-cover"
            />

            {/* Logo and Text Below */}
            <div className="p-4 text-center">
             
              <p className="font-[GeneralSansBold] font-semibold text-gray-700 text-lg">
                Nobu Restaurent
              </p>
              <p className="font-[GeneralSansRegular] text-gray-600 text-md">Restaurent</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
{/* Banner Image (Outside of Black Background) */}
<div className="mt-12 relative w-full h-48">
<div className="flex items-center space-x-4 mb-2">
  <img
    src={existing} // Replace with your banner image source
    alt="Project Icon"
    className="w-10 h-10 object-cover"
  />
  <h1 className="text-lg font-[VarinoRegular] font-semibold mb-2">Existing Reviews</h1>
</div>

  <img
    src={imagelion} // Replace with your banner image source
    alt="Banner"
    className="w-full h-full object-cover"
  />
</div>

{/* Profile Section with Black Background */}
<div className="bg-black py-8 mt-8">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex justify-between items-center">
      {/* Left Side: Profile Image and Review Details */}
      <div className="flex items-center space-x-4">
        {/* Diamond Shape Profile Image */}
        <div className="relative w-16 h-16">
          <div
            className="w-16 h-16 transform rotate-45 bg-gray-700 overflow-hidden flex items-center justify-center"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          >
            <img
              src={profile_user} // Replace with your profile image
              alt="Profile"
              className="w-full h-full object-cover transform -rotate-45"
            />
          </div>
        </div>

        {/* Text: Name and Review Details */}
        <div className="text-white">
          <h3 className=" font-[VarinoRegular] text-lg font-bold">Jenny Wilson</h3>
          <p className="text-sm text-gray-300">84 Reviews 45 Referrals - Brand Ambassador</p>
        </div>
      </div>

      {/* Right Side: Time Text */}
      <div className="text-gray-400 text-sm">
        <p>1 month ago</p>
      </div>
    </div>

    {/* New Section Below Left Side: 5 Images Horizontally with Single Image on the Right */}
    <div className="flex space-x-4 mt-6">
      {/* Left Side: 5 Images + Small Text Below */}
      <div className="flex flex-col w-2/3 space-y-2">
        {/* 5 Images */}
        <div className="flex space-x-4">
          {/* Image 1 */}
          <div className="w-12 h-12 bg-gray-700 overflow-hidden flex items-center justify-center">
            <img
              src={logofinal} // Using profileBanner for all images
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="w-12 h-12 bg-gray-700 overflow-hidden flex items-center justify-center">
            <img
              src={logofinal} // Using profileBanner for all images
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="w-12 h-12 bg-gray-700 overflow-hidden flex items-center justify-center">
            <img
              src={logofinal} // Using profileBanner for all images
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 4 */}
          <div className="w-12 h-12 bg-gray-700 overflow-hidden flex items-center justify-center">
            <img
              src={logofinal} // Using profileBanner for all images
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 5 */}
          <div className="w-12 h-12 bg-gray-700 overflow-hidden flex items-center justify-center">
            <img
              src={logofinal} // Using profileBanner for all images
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Small Text Below 5 Images */}
        <div className="text-white text-xs ">
          <p>This is a small text below the images on the left side.</p>
        </div>
      </div>

      {/* Right Side: Single Image */}
      <div className="w-1/3">
        <div className="w-64 overflow-hidden flex items-center float-right">
          <img
            src={logoauthentic} // Replace with the desired image source for the right side
            alt="Right Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* Lorem Ipsum Text Below the Whole Section */}
    <div className="mt-8 text-white text-center">
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque auctor purus, id sollicitudin sapien dignissim sed. Fusce vel elit in arcu varius posuere. Integer placerat, tortor vitae tincidunt suscipit, lorem dui auctor justo, non aliquet odio sem euismod sapien. Aliquam erat volutpat. Integer ut turpis euismod, luctus eros id, vehicula augue.
      </p>
    </div>

    {/* New Section with Progress Bars */}
    <div className="grid grid-cols-5 gap-8 mt-8">
      {/* Reviews */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Quality</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '40%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">9/10</p>
        </div>
      </div>

      {/* Referrals */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Performance</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '60%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">9/10</p>
        </div>
      </div>

      {/* Level */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Easy to use</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '20%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">20%</p>
        </div>
      </div>

      {/* Brand Ambassador */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Durability</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '80%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">9/10</p>
        </div>
      </div>

      {/* Followers */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Responsiveness</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '50%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">9/10</p>
        </div>
      </div>

      {/* Popularity */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Expertise</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '70%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">9/10</p>
        </div>
      </div>

      {/* Popularity */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Professionality</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '70%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">9/10</p>
        </div>
      </div>

      {/* Popularity */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Delivery Time</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '70%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">9/10</p>
        </div>
      </div>

      {/* Popularity */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Business Layout</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '70%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">9/10</p>
        </div>
      </div>

      {/* Popularity */}
      <div className="w-full">
        <div className="mb-4">
          <p className="text-white text-lg mb-2">Price vs Value</p>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '70%',
                backgroundColor: '#65D4B0',
                borderRadius: 'inherit',
              }}
            ></div>
          </div>
          <p className="text-white text-lg mt-2">9/10</p>
        </div>
      </div>

      {/* New Section for Buttons */}
      <div class="mt-8 flex justify-center space-x-4 w-64">
  <button class="w-64 px-4 py-2 bg-gray-400 text-black font-medium rounded-md hover:bg-gray-500">
    Like
  </button>
  <button class="w-64 px-4 py-2 bg-black text-white font-medium rounded-md border border-white hover:bg-gray-800">
    Report
  </button>
</div>


    </div>
  </div>
</div>


</div>

    </div>
  );
};

export default ProfilePage;
