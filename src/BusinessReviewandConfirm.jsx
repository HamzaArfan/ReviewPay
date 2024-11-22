import React from 'react';
import { Mail, MapPin, Building2, Briefcase, Image,ArrowLeft,ArrowRight } from 'lucide-react';
import paypal from "./assets/images/paypal-icon.png";
import profile from "./assets/images/profile.png";
import product from "./assets/images/imagestatic1.png";
import product2 from "./assets/images/imagestatic2.png";
import logo from "./assets/images/loogfinal.png";
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {
  // Sample data - replace with actual 
  const navigate =useNavigate();
  const userData = {
    email: "john.doe@example.com",
    fullName: "John Doe",
    businessName: "Acme Solutions",
    address: "123 Business Street, Sydney NSW 2000",
    abnNumber: "12 345 678 901",
    category: "Technology Services",
    paypalEmail: "business@acme.com",
    employees: [
      { id: 1, name: "Sarah Johnson", email: "sarah.j@acme.com", image: profile },
      { id: 2, name: "Mike Smith", email: "mike.s@acme.com", image: profile },
      { id: 3, name: "Emma Davis", email: "emma.d@acme.com", image: profile },
    ],
    products: [
      { 
        id: 1, 
        name: "Product 1", 
        image: product,
        price: "$99.99",
        description: "High-quality product with amazing features"
      },
      { 
        id: 2, 
        name: "Product 2", 
        image: product,
        price: "$149.99",
        description: "Premium product for professional use"
      },
      { 
        id: 3, 
        name: "Product 3", 
        image: product,
        price: "$79.99",
        description: "Affordable solution for everyday needs"
      },
      { 
        id: 4, 
        name: "Product 4", 
        image: product,
        price: "$199.99",
        description: "Advanced features for power users"
      },
      { 
        id: 5, 
        name: "Product 5", 
        image: product,
        price: "$129.99",
        description: "Perfect for small businesses"
      },
    ],
    gallery: [
      { id: 1, image: product2, title: "Office Space" },
      { id: 2, image: product2, title: "Team Meeting" },
      { id: 3, image: product2, title: "Product Launch" },
      { id: 4, image: product2, title: "Customer Service" },
      { id: 5, image: product2, title: "Innovation Lab" },
    ]
  };

  const handleBack = () => {
    // Add your back navigation logic here
    console.log('Back clicked');
  };

  const handleContinue = () => {
    // Add your continue navigation logic here
    console.log('Continue clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <img src={logo} alt="Company Logo" className="h-16 object-contain" />
        </div>
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-['GeneralSansBold'] text-blue-950">Review And Confirm</h1>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl border-0 p-8">
          {/* Business Profile Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-['GeneralSansBold'] text-blue-950 mb-6">
              Business Profile
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-950" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-blue-950">{userData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-blue-950" />
                  <div>
                    <p className="text-sm text-gray-500">Business Name</p>
                    <p className="text-blue-950">{userData.businessName}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-950" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-blue-950">{userData.address}</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-blue-950" />
                  <div>
                    <p className="text-sm text-gray-500">ABN Number</p>
                    <p className="text-blue-950">{userData.abnNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-blue-950" />
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="text-blue-950">{userData.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PayPal Section */}
          <div className="mb-4 p-6 rounded-xl">
            <div className="flex items-center space-x-4 mb-4">
              <img src={paypal} alt="PayPal" className="h-12 w-16 object-contain" />
              <div>
                <p className="text-sm text-gray-500">PayPal Email</p>
                <p className="text-blue-950">{userData.paypalEmail}</p>
              </div>
            </div>
          </div>

          {/* Employees Section */}
          <div className="mb-8">
            <h3 className="text-3xl font-['GeneralSansBold'] text-blue-950 mb-6">
              Employees
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {userData.employees.map(employee => (
                <div key={employee.id} className="flex items-center space-x-4">
                  <div className="w-16 h-16 rotate-45 overflow-hidden bg-[#527DE6] rounded-xl">
                    <img 
                      src={employee.image} 
                      alt={employee.name}
                      className="-rotate-45 scale-150"
                      width={40}
                      height={60}
                    />
                  </div>
                  <div>
                    <p className="font-['GeneralSansMedium'] text-blue-950">{employee.name}</p>
                    <p className="text-sm text-gray-500">{employee.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Products Section - Enhanced */}
          <div className="mb-8">
            <h3 className="text-3xl font-['GeneralSansBold'] text-blue-950 mb-6">
              Products
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {userData.products.map(product => (
                <div key={product.id} className="group relative">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="font-medium">{product.price}</p>
                        <p className="text-sm truncate">{product.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow px-3 py-2 mt-2">
                    <p className="text-sm text-blue-950 text-center font-medium">{product.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section - Enhanced */}
          <div className="mb-8">
            <h3 className="text-3xl font-['GeneralSansBold'] text-blue-950 mb-6">
              Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {userData.gallery.map(item => (
                <div key={item.id} className="group relative overflow-hidden rounded-xl">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="flex items-center px-6 py-3 border-2 border-blue-950 text-blue-950 rounded-xl font-['GeneralSansMedium'] hover:bg-blue-50 transition-all duration-300"
             onClick={()=>navigate("/PaymentBusiness")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
            <button
              type="button"
              className="flex items-center px-6 py-3 bg-blue-950 text-white rounded-xl font-['GeneralSansMedium'] hover:bg-blue-900 transition-all duration-300"
            
              onClick={()=>navigate("/BusinessDashboard")}
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;