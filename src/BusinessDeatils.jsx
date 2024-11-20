import React, { useState, useEffect } from 'react';
import { Upload, ArrowLeft, ArrowRight, Building2, MapPin, Receipt, OptionIcon } from 'lucide-react';
import logo from './assets/images/loogfinal.png';
import { useNavigate} from 'react-router-dom';

const BusinessRegistrationStep = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    address: '',
    category: '',
    subcategory: '',
    abnNumber: '',
    businessImage: null
  });
  const navigate= useNavigate();
  
  const [categories, setCategories] = useState({});
  const [subcategories, setSubcategories] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [activeField, setActiveField] = useState('');

  useEffect(() => {
    fetch('/categories.json')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => {
        console.error('Error loading categories:', error);
        setCategories({
          "Agriculture, Forestry & Fishing": {
            "sub-categories": ["Nursery Production", "Turf Growing"]
          },
          "Mining": {
            "sub-categories": ["Coal Mining", "Oil and Gas Extraction"]
          }
        });
      });
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({ ...formData, category: selectedCategory, subcategory: '' });
    setSubcategories(selectedCategory && categories[selectedCategory] ? 
      categories[selectedCategory]['sub-categories'] : []);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files[0]);
  };

  const handleFileUpload = (file) => {
    if (file) {
      setFormData({ ...formData, businessImage: file });
    }
  };

  const InputWrapper = ({ icon: Icon, label, children }) => (
    <div className="relative">
      <label className="block font-['GeneralSansMedium'] text-sm text-gray-700 mb-2 flex items-center gap-2">
        <Icon className="w-4 h-4 text-blue-950" />
        {label}
      </label>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Company Logo" className="h-16 object-contain" />
        </div>

        {/* Progress Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-['GeneralSansBold'] text-blue-950">Business Registration</h1>
            <div className="flex items-center space-x-3">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${step === 1 ? 'bg-blue-950' : 'bg-gray-300'}`} />
                  {step < 4 && <div className={`w-8 h-0.5 ${step === 1 ? 'bg-blue-950' : 'bg-gray-300'}`} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl border-0 p-8">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputWrapper icon={Building2} label="Business Name">
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  onFocus={() => setActiveField('businessName')}
                  onBlur={() => setActiveField('')}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-200
                    ${activeField === 'businessName' ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                    focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                  placeholder="Enter your business name"
                />
              </InputWrapper>

              <InputWrapper icon={Receipt} label="ABN Number">
                <input
                  type="text"
                  value={formData.abnNumber}
                  onChange={(e) => setFormData({ ...formData, abnNumber: e.target.value })}
                  onFocus={() => setActiveField('abnNumber')}
                  onBlur={() => setActiveField('')}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-200
                    ${activeField === 'abnNumber' ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                    focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                  placeholder="Enter ABN number"
                />
              </InputWrapper>

              <InputWrapper icon={MapPin} label="Business Address" className="md:col-span-2">
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  onFocus={() => setActiveField('address')}
                  onBlur={() => setActiveField('')}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-200
                    ${activeField === 'address' ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                    focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                  placeholder="Enter complete business address"
                />
              </InputWrapper>

              <InputWrapper icon={OptionIcon} label="Category">
                <select
                  value={formData.category}
                  onChange={handleCategoryChange}
                  onFocus={() => setActiveField('category')}
                  onBlur={() => setActiveField('')}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white
                    ${activeField === 'category' ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                    focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                >
                  <option value="">Select a category</option>
                  {Object.keys(categories).map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </InputWrapper>

              <InputWrapper icon={OptionIcon} label="Subcategory">
                <select
                  value={formData.subcategory}
                  onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                  disabled={!formData.category}
                  onFocus={() => setActiveField('subcategory')}
                  onBlur={() => setActiveField('')}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white
                    ${activeField === 'subcategory' ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                    focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100
                    disabled:bg-gray-50 disabled:cursor-not-allowed`}
                >
                  <option value="">Select a subcategory</option>
                  {subcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>{subcategory}</option>
                  ))}
                </select>
              </InputWrapper>
            </div>

            {/* Enhanced Image Upload */}
            <div 
              className={`mt-8 border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200
                ${isDragging ? 'border-blue-950 bg-blue-50/50 scale-[1.02]' : 'border-gray-300 hover:border-blue-950'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('fileInput').click()}
            >
              <input
                id="fileInput"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileUpload(e.target.files[0])}
              />
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-blue-950" />
              </div>
              <p className="text-sm font-['GeneralSansMedium'] text-gray-700 mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
              {formData.businessImage && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg inline-block">
                  <p className="text-sm text-blue-950 font-['GeneralSansMedium']">
                    Selected: {formData.businessImage.name}
                  </p>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
              <button
                type="button"
                className="flex items-center px-6 py-3 border-2 border-blue-950 text-blue-950 rounded-xl font-['GeneralSansMedium'] hover:bg-blue-50 transition-colors duration-200"
                onClick={()=>navigate("/CreateAccount")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
              <button
                type="submit"
                className="flex items-center px-6 py-3 bg-blue-950 text-white rounded-xl font-['GeneralSansMedium'] hover:bg-blue-900 transition-colors duration-200"
             onClick={()=> navigate('/PaymentBusiness')} >
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistrationStep;