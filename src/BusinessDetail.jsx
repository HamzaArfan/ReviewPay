import React from "react";
import { useNavigate } from "react-router-dom";
import businessframe from "./assets/images/business_frame.png"; // Replace with your banner image path
import logoanimation from "./assets/images/logo_animation.png"; // Replace with your logo image path
import bargray from "./assets/images/bargray.png"; // Replace with your first QR code image path
import barblack from "./assets/images/barblack.png"; // Replace with your second QR code image path
import handmobile from './assets/images/hand_mobile.png'; // Replace with your mobile image path
import reviews from './assets/images/referral_image.png'; // Replace with your referral image path
import shop from './assets/images/Shop.png'; // Replace with your icon path
import phone from './assets/images/phone.png'; // Replace with your icon path
import link from './assets/images/link-03.png'; // Replace with your icon path
import markerpin from './assets/images/marker-pin-01.png'; // Replace with your icon path
import mail from './assets/images/mail-02.png'; // Replace with your icon path
import facebook from './assets/images/fb.png'; // Replace with your icon path
import insta from './assets/images/insta.png'; // Replace with your icon path
import handshake from './assets/images/Handshake.png'; // Replace with your icon path
import existing from './assets/images/Existing Review.png'; // Replace with your shield icon path
import profile_user from './assets/images/Profile_user.png'; // Replace with your shield icon path
import logofinal from './assets/images/loogfinal.png'; // Replace with your shield icon path
import imagelion from './assets/images/image_lion.png'; // Replace with your banner image path
import logoauthentic from './assets/images/logoauthentic.png'; // Replace with your banner image path
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);



const BusinessDetail = () => {

    const horizontalLinePlugin = {
        id: "horizontalLines",
        beforeDraw: (chart) => {
          const { ctx, chartArea, scales } = chart;
          const stepSize = 5;
    
          for (let value = scales.y.min; value <= scales.y.max; value += stepSize) {
            const lineY = scales.y.getPixelForValue(value);
    
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(chartArea.left, lineY);
            ctx.lineTo(chartArea.right, lineY);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.restore();
          }
        },
      };


    const splitBarPlugin = {
        id: "splitBarPlugin",
        beforeDatasetsDraw(chart) {
          const { ctx, chartArea, scales } = chart;
          const dataset = chart.data.datasets[0];
          const dataLength = dataset.data.length;
    
          chart.getDatasetMeta(0).data.forEach((bar, index) => {
            const value1 = dataset.referrals[index];
            const value2 = dataset.reviews[index];
            const total = value1 + value2;
    
            const barWidth = bar.width;
            const barHeight1 = (value1 / total) * bar.height;
            const barHeight2 = (value2 / total) * bar.height;
    
            const x = bar.x - barWidth / 2; // Bar's starting x-coordinate
            const y1 = bar.y; // Y for referrals
            const y2 = bar.y + barHeight1; // Y for reviews
    
            // Referrals (top half)
            ctx.fillStyle = "#65D4B0";
            ctx.fillRect(x, y1, barWidth, barHeight1);
    
            // Reviews (bottom half)
            ctx.fillStyle = "#Dc3DF7";
            ctx.fillRect(x, y2, barWidth, barHeight2);
          });
        },
      };
    
      const createChartData = (labels, referrals, reviews) => ({
        labels,
        datasets: [
          {
            label: "Activity",
            referrals,
            reviews,
            data: referrals.map((ref, i) => ref + reviews[i]),
            backgroundColor: "#ffffff00", // Set transparent to let the plugin control the colors
            borderRadius: 20, // Rounded corners for bars
          },
        ],
      });
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5,
            },
            max: 75,
          },
        },
        plugins: {
          legend: {
            display: false, // Legend handled by plugin colors
          },
        },
      };
    
      const data12Months = createChartData(
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        [10, 20, 15, 25, 30, 40, 35, 45, 50, 55, 60, 65], // Referrals
        [5, 15, 10, 20, 25, 35, 30, 40, 45, 50, 55, 60] // Reviews
      );
    
      const data30Days = createChartData(
        Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        Array.from({ length: 30 }, () => Math.floor(Math.random() * 50 + 1)), // Referrals
        Array.from({ length: 30 }, () => Math.floor(Math.random() * 30 + 1)) // Reviews
      );
    
      const data7Days = createChartData(
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        [5, 10, 15, 20, 25, 30, 35], // Referrals
        [3, 8, 13, 18, 23, 28, 33] // Reviews
      );
  
    
      

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: "#486f8f" }}>
      {/* Banner Section */}
      <div className="relative w-full h-80 px-8">
        <img
          src={businessframe}
          alt="Profile Banner"
          className="w-full h-full object-cover mx-auto"
        />

        {/* Name Overlay */}
        <div className="absolute bottom-8 left-12 flex items-center text-white space-x-4">
          <img
            src={logoanimation}
            alt="Profile Thumbnail"
            className="w-16 h-16 object-cover rounded-full"
          />
          <h1 className="font-[GeneralSansRegular] text-4xl font-bold">
            Crown Casino Melbourne
          </h1>
        </div>
      </div>

      {/* QR Codes Section */}
      <div className="flex justify-between items-center mt-8 px-44">
        {/* Left QR Code */}
        <div className="flex flex-col items-center">
          <img
            src={bargray}
            alt="Left QR Code"
            className="w-64 h-86 object-contain"
          />
          <p className="font-[VarinoRegular] mt-2 text-lg text-white">Review $5</p>
        </div>

        {/* Center Content */}
        <div className="text-center text-white">
          <p className="font-semibold text-xl">
            From acclaimed restaurants and award-winning hotels, to world-class
            table games and endless entertainment, Crown Rewards helps you to
            discover the world of Crown
          </p>
        </div>

        {/* Right QR Code */}
        <div className="flex flex-col items-center">
          <img
            src={barblack}
            alt="Right QR Code"
            className="w-64 h-86 object-contain"
          />
          <p className="font-[VarinoRegular] mt-2 text-md text-white">Referral 9%</p>
        </div>
      </div>

      {/* New Section */}
      <div className="flex mt-8 h-auto px-8">
        {/* Left 50% Section */}
        <div className="w-1/2 bg-black flex flex-col py-8 px-4 rounded">
          <div className="flex w-full justify-around space-x-4">
            {/* Left Image - 33% of the Left Half */}
            <div className="flex flex-col items-center w-1/3">
              <img
                src={handmobile}
                alt="Left Image"
                className="w-full h-auto object-contain"
              />
              <p style={{color:'#C238DE',}} className="font-[VarinoRegular] mt-2 text-white text-center">Total Reviews</p>
              <p style={{color:'#65D4B0',}} className="font-[VarinoRegular] mt-2 text-white text-center">2001</p>
            </div>

            {/* Right Image - 33% of the Left Half */}
            <div className="flex flex-col items-center w-1/3 mt-4">
              <img
                src={reviews}
                alt="Right Image"
                className="w-full h-auto object-contain"
              />
              <p style={{color:'#C238DE',}} className="font-[VarinoRegular] mt-2 text-white text-center">Total Referrals</p>
              <p style={{color:'#65D4B0',}} className="font-[VarinoRegular] mt-2 text-white text-center">1984</p>
            </div>
          </div>
        </div>

        {/* Right 50% Section */}
        <div className="w-1/2 flex flex-col items-center justify-center px-8 py-8">
          {/* Grid Layout for 8 Fields */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Row 1 */}
            <div className="flex items-center space-x-2 text-white">
              <img src={shop} alt="Icon 1" className="w-10 h-10 object-contain" />
              <p>Restaurent</p>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <img src={phone} alt="Icon 2" className="w-10 h-10 object-contain" />
              <p>(+1) 4695322382</p>
            </div>

            {/* Row 2 */}
            <div className="flex items-center space-x-2 text-white">
              <img src={link} alt="Icon 3" className="w-10 h-10 object-contain" />
              <p>https://www.crownmelbourne.com.au</p>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <img src={markerpin} alt="Icon 4" className="w-10 h-10 object-contain" />
              <p>6391 Elgin St. Celina, Delaware 10299</p>
            </div>

            {/* Row 3 */}
            <div className="flex items-center space-x-2 text-white">
              <img src={mail} alt="Icon 5" className="w-10 h-10 object-contain" />
              <p>debbie.baker@example.com</p>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <img src={facebook} alt="Icon 6" className="w-10 h-10 object-contain" />
              <p>facebook.com/crownmelbourne</p>
            </div>

            {/* Row 4 */}
            <div className="flex items-center space-x-2 text-white">
              <img src={insta} alt="Icon 7" className="w-10 h-10 object-contain" />
              <p>crownmelbourne</p>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <img src={handshake} alt="Icon 8" className="w-10 h-10 object-contain" />
              <p>Work with us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="flex justify-center items-center space-x-6 px-8 mt-4">
        {/* 12 Months Chart */}
        <div className="bg-black p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-white text-xl font-semibold mb-4 text-center">
            Revenue Growth - 12 Months
          </h2>
          {/* Labels for Referrals and Reviews */}
          <div className="flex justify-center space-x-6 mb-4">
            <div className="flex items-center">
              <span
                className="block w-6 h-6 mr-2"
                style={{ backgroundColor: "#65D4B0", borderRadius: "50%" }}
              ></span>
              <span className="text-white font-semibold">Referrals</span>
            </div>
            <div className="flex items-center">
              <span
                className="block w-6 h-6 mr-2"
                style={{ backgroundColor: "#DC3DF7", borderRadius: "50%" }}
              ></span>
              <span className="text-white font-semibold">Reviews</span>
            </div>
          </div>
          <Bar data={data12Months} options={options} plugins={[splitBarPlugin, horizontalLinePlugin]} />
        </div>

        {/* 30 Days Chart */}
        <div className="bg-black p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-white text-xl font-semibold mb-4 text-center">
            Revenue Growth - 30 Days
          </h2>
          {/* Labels for Referrals and Reviews */}
          <div className="flex justify-center space-x-6 mb-4">
            <div className="flex items-center">
              <span
                className="block w-6 h-6 mr-2"
                style={{ backgroundColor: "#65D4B0", borderRadius: "50%" }}
              ></span>
              <span className="text-white font-semibold">Referrals</span>
            </div>
            <div className="flex items-center">
              <span
                className="block w-6 h-6 mr-2"
                style={{ backgroundColor: "#Dc3DF7", borderRadius: "50%" }}
              ></span>
              <span className="text-white font-semibold">Reviews</span>
            </div>
          </div>
          <Bar data={data30Days} options={options} plugins={[splitBarPlugin, horizontalLinePlugin]} />
        </div>

        {/* 7 Days Chart */}
        <div className="bg-black p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-white text-xl font-semibold mb-4 text-center">
            Revenue Growth - 7 Days
          </h2>
          {/* Labels for Referrals and Reviews */}
          <div className="flex justify-center space-x-6 mb-4">
            <div className="flex items-center">
              <span
                className="block w-6 h-6 mr-2"
                style={{ backgroundColor: "#65D4B0", borderRadius: "50%" }}
              ></span>
              <span className="text-white font-semibold">Referrals</span>
            </div>
            <div className="flex items-center">
              <span
                className="block w-6 h-6 mr-2"
                style={{ backgroundColor: "#Dc3DF7", borderRadius: "50%" }}
              ></span>
              <span className="text-white font-semibold">Reviews</span>
            </div>
          </div>
          <Bar data={data7Days} options={options} plugins={[splitBarPlugin, horizontalLinePlugin]} />
        </div>
      </div>

        {/* Banner Image (Outside of Black Background) */}
<div className="mt-12 relative w-full h-48 px-6">
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
<div className="py-8 mt-4 px-6">
  <div className="bg-black max-w-8xl mx-auto px-6 py-6">
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
  );
};

export default BusinessDetail;
