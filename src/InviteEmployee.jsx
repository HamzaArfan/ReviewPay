import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  X, 
  UserPlus,
  Users,
  Upload,
  User,
  FileSpreadsheet,
  Briefcase,
  Mail
} from 'lucide-react';
import logo from "./assets/images/loogfinal.png"
import { useNavigate } from 'react-router-dom';

const EmployeeInvitation = () => {
  const [employees, setEmployees] = useState([{
    id: 1,
    profilePic: null,
    name: '',
    identificationNumber: '',
    designation: '',
    email: ''
  }]);
  const navigate= useNavigate();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [activeField, setActiveField] = useState('');
  const [dragActiveId, setDragActiveId] = useState(null);

  const addEmployee = () => {
    setEmployees([...employees, {
      id: employees.length + 1,
      profilePic: null,
      name: '',
      identificationNumber: '',
      designation: '',
      email: ''
    }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index][field] = value;
    setEmployees(updatedEmployees);
  };

  const handleImageUpload = (index, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedEmployees = [...employees];
        updatedEmployees[index].profilePic = e.target.result;
        setEmployees(updatedEmployees);
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

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
      <div className="flex justify-center mb-8">
          <img src={logo} alt="Company Logo" className="h-16 object-contain" />
        </div>
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-['GeneralSansBold'] text-blue-950">Invite Employees</h1>
            <div className="flex items-center space-x-3">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${step === 3 ? 'bg-blue-950' : 'bg-gray-300'}`} />
                  {step < 4 && <div className={`w-8 h-0.5 ${step === 3 ? 'bg-blue-950' : 'bg-gray-300'}`} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-white/ shadow-xl rounded-xl p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-['GeneralSansMedium'] text-blue-950 mb-3">
              Add Employee Details
            </h2>
            <p className="text-gray-600">Enter the information for each employee you want to invite to the platform.</p>
          </div>

          <div className="space-y-8">
            {employees.map((employee, index) => (
              <div key={employee.id} className="border-2 rounded-xl p-6 space-y-6">
                {/* Image Upload */}
                <div 
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200
                    ${dragActiveId === employee.id ? 'border-blue-950 bg-blue-50/50 scale-[1.02]' : 'border-gray-300 hover:border-blue-950'}`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActiveId(employee.id);
                  }}
                  onDragLeave={() => setDragActiveId(null)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragActiveId(null);
                    handleImageUpload(index, e.dataTransfer.files[0]);
                  }}
                  onClick={() => document.getElementById(`fileInput-${employee.id}`).click()}
                >
                  <input
                    id={`fileInput-${employee.id}`}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(index, e.target.files[0])}
                  />
                  
                  {employee.profilePic ? (
                    <div className="flex flex-col items-center">
                      <img 
                        src={employee.profilePic} 
                        alt="Profile" 
                        className="w-24 h-24 rounded-full object-cover mb-4"
                      />
                      <p className="text-sm text-blue-950 font-['GeneralSansMedium']">
                        Click or drag to change image
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Upload className="h-8 w-8 text-blue-950" />
                      </div>
                      <p className="text-sm font-['GeneralSansMedium'] text-gray-700 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </p>
                    </>
                  )}
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputWrapper icon={User} label="Full Name">
                    <input
                      type="text"
                      value={employee.name}
                      onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                      onFocus={() => setActiveField(`name-${index}`)}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-200
                        ${activeField === `name-${index}` ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                        focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                      placeholder="Enter full name"
                    />
                  </InputWrapper>

                  <InputWrapper icon={FileSpreadsheet} label="ID Number">
                    <input
                      type="text"
                      value={employee.identificationNumber}
                      onChange={(e) => handleInputChange(index, 'identificationNumber', e.target.value)}
                      onFocus={() => setActiveField(`id-${index}`)}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-200
                        ${activeField === `id-${index}` ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                        focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                      placeholder="Enter ID number"
                    />
                  </InputWrapper>

                  <InputWrapper icon={Briefcase} label="Designation">
                    <input
                      type="text"
                      value={employee.designation}
                      onChange={(e) => handleInputChange(index, 'designation', e.target.value)}
                      onFocus={() => setActiveField(`designation-${index}`)}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-200
                        ${activeField === `designation-${index}` ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                        focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                      placeholder="Enter designation"
                    />
                  </InputWrapper>

                  <InputWrapper icon={Mail} label="Email Address">
                    <input
                      type="email"
                      value={employee.email}
                      onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                      onFocus={() => setActiveField(`email-${index}`)}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-200
                        ${activeField === `email-${index}` ? 'border-blue-950 ring-2 ring-blue-100' : 'border-gray-200'}
                        focus:outline-none focus:border-blue-950 focus:ring-2 focus:ring-blue-100`}
                      placeholder="Enter email address"
                    />
                  </InputWrapper>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addEmployee}
            className="mt-6 flex items-center px-6 py-3 border-2 border-blue-950 text-blue-950 rounded-xl font-['GeneralSansMedium'] hover:bg-blue-50 transition-all duration-300"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Add Another Employee
          </button>

          {/* Success Modal */}
          <Modal 
            isOpen={isSuccessModalOpen} 
            onClose={() => setIsSuccessModalOpen(false)}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-['GeneralSansMedium'] mb-3">
                Employees Added Successfully
              </h3>
              <p className="text-gray-600 mb-6">
                Invitation emails have been sent to the employees. They will receive instructions to set up their accounts.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-8 text-left">
                <h4 className="font-['GeneralSansMedium'] text-blue-900 mb-2">Next Steps:</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• Set up employee permissions</li>
                  <li>• Configure team settings</li>
                  <li>• Review employee documentation</li>
                </ul>
              </div>
              <button
                onClick={()=>navigate('/AddProducts')}
                className="px-8 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                Continue Setup
              </button>
            </div>
          </Modal>

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
              onClick={() => setIsSuccessModalOpen(true)}
              type="button"
              className="flex items-center px-6 py-3 bg-blue-950 text-white rounded-xl font-['GeneralSansMedium'] hover:bg-blue-900 transition-all duration-300"
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

export default EmployeeInvitation;