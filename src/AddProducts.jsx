import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Upload,
  Pencil,
  PackageSearch,
  TextQuote,
  DollarSign,
  Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductManagement = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([{
    id: 1,
    image: null,
    name: '',
    description: '',
    price: ''
  }]);
  const [activeField, setActiveField] = useState('');
  const [dragActiveId, setDragActiveId] = useState(null);

  const addProduct = () => {
    setProducts([...products, {
      id: products.length + 1,
      image: null,
      name: '',
      description: '',
      price: ''
    }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handleImageUpload = (index, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedProducts = [...products];
        updatedProducts[index].image = e.target.result;
        setProducts(updatedProducts);
      };
      reader.readAsDataURL(file);
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
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-['GeneralSansBold'] text-blue-950">Add Products</h1>
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

        <div className="bg-white shadow-xl rounded-xl p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-['GeneralSansMedium'] text-blue-950 mb-3">
              Add Product Details
            </h2>
            <p className="text-gray-600">Enter the information for each product you want to add to the platform.</p>
          </div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <div key={product.id} className="border-2 rounded-xl p-6 space-y-6">
                {/* Full-width Image Upload */}
                <div className="relative">
                  <div 
                    className={`border-2 border-dashed rounded-xl overflow-hidden transition-all duration-200
                      ${dragActiveId === product.id ? 'border-blue-950 bg-blue-50/50 scale-[1.02]' : 'border-gray-300 hover:border-blue-950'}`}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragActiveId(product.id);
                    }}
                    onDragLeave={() => setDragActiveId(null)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragActiveId(null);
                      handleImageUpload(index, e.dataTransfer.files[0]);
                    }}
                    onClick={() => document.getElementById(`productImage-${product.id}`).click()}
                  >
                    <input
                      id={`productImage-${product.id}`}
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(index, e.target.files[0])}
                    />
                    
                    {product.image ? (
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt="Product" 
                          className="w-full h-64 object-cover"
                        />
                        <button 
                          className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById(`productImage-${product.id}`).click();
                          }}
                        >
                          <Pencil className="w-4 h-4 text-blue-950" />
                        </button>
                      </div>
                    ) : (
                      <div className="h-64 flex flex-col items-center justify-center">
                        <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                          <Upload className="h-8 w-8 text-blue-950" />
                        </div>
                        <p className="text-sm font-['GeneralSansMedium'] text-gray-700 mb-1">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          SVG, PNG, JPG or GIF
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputWrapper icon={PackageSearch} label="Product Name">
                    <input
                      type="text"
                      value={product.name}
                      onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                      onFocus={() => setActiveField(`name-${index}`)}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-200
                        ${activeField === `name-${index}` ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                        focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                      placeholder="Enter product name"
                    />
                  </InputWrapper>

                  <InputWrapper icon={DollarSign} label="Price">
                    <input
                      type="number"
                      value={product.price}
                      onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                      onFocus={() => setActiveField(`price-${index}`)}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-200
                        ${activeField === `price-${index}` ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                        focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                      placeholder="Enter price"
                    />
                  </InputWrapper>

                  <div className="md:col-span-2">
                    <InputWrapper icon={TextQuote} label="Description">
                      <textarea
                        value={product.description}
                        onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                        onFocus={() => setActiveField(`description-${index}`)}
                        onBlur={() => setActiveField('')}
                        className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 min-h-[100px]
                          ${activeField === `description-${index}` ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                          focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                        placeholder="Enter product description"
                      />
                    </InputWrapper>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addProduct}
            className="mt-6 flex items-center px-6 py-3 border-2 border-blue-950 text-blue-950 rounded-xl font-['GeneralSansMedium'] hover:bg-blue-50 transition-all duration-300"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Another Product
          </button>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="flex items-center px-6 py-3 border-2 border-blue-950 text-blue-950 rounded-xl font-['GeneralSansMedium'] hover:bg-blue-50 transition-all duration-300"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
            <button
              type="button"
              className="flex items-center px-6 py-3 bg-blue-950 text-white rounded-xl font-['GeneralSansMedium'] hover:bg-blue-900 transition-all duration-300"
              onClick={() => navigate('/BusinessReviewandConfirm')}
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

export default ProductManagement;