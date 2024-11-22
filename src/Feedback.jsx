import React, { useState } from 'react';
import { ChevronLeft, Search } from 'lucide-react';
import feedbackdone from "./assets/images/feedbackdone.png" 

const urgencyLevels = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' }
];

const InputField = ({ label, value, onChangeText, multiline = false, placeholder }) => (
  <div className="relative mb-6">
    <label 
      className={`absolute left-4 text-white font-medium bg-[#0D182E] px-1 z-10 
        ${value ? '-top-2 text-xs text-[#B7BDCA]' : '-top-3'}`}
    >
      {label}
    </label>
    <textarea 
      className={`w-full border border-[#959DB0] rounded-lg p-4 bg-[#0D182E] 
        text-white placeholder-[#959DB0] font-['GeneralSansRegular'] 
        ${multiline ? 'h-32' : 'h-16'}`}
      value={value}
      onChange={(e) => onChangeText(e.target.value)}
      placeholder={placeholder}
      multiline={multiline}
    />
  </div>
);

const Dropdown = ({ label, value, onValueChange, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-6">
      <label 
        className={`absolute left-4 text-white font-medium bg-[#0D182E] px-1 z-10 
          ${value ? '-top-2 text-xs text-[#B7BDCA]' : '-top-3'}`}
      >
        {label}
      </label>
      <div 
        className="w-full border border-[#959DB0] rounded-lg bg-[#0D182E] text-white p-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{items.find(item => item.value === value)?.label || 'Select'}</span>
        <ChevronLeft className="transform rotate-90" size={20} color="white" />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0D182E] rounded-lg mt-1 z-50 border border-[#4A5568]">
          {items.map((item) => (
            <div 
              key={item.value} 
              className="p-4 border-b border-[#4A5568] last:border-b-0"
              onClick={() => {
                onValueChange(item.value);
                setIsOpen(false);
              }}
            >
              <span className="text-white">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FeedbackScreen = () => {
  const [formData, setFormData] = useState({
    issueCategory: '',
    description: '',
    urgencyLevel: ''
  });
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    setModalVisible(true);
  };

  return (
    <div className="bg-[#4D6F8F] min-h-screen pb-[102px] flex flex-col">
      <div className="px-4 pt-20 pb-8 flex justify-between items-center">
        <div className="flex items-center">
         
         </div>
      </div>

      <div className="bg-[#527DE6] py-4 px-4 rounded-lg mx-4 mb-4">
        <h1 className="text-white text-2xl font-bold font-['VarinoRegular']">FEEDBACK</h1>
      </div>

      <div className="bg-[#0D182E] rounded-2xl p-4 mx-4">
        <InputField
          label="Issue Category"
          value={formData.issueCategory}
          onChangeText={(value) => handleInputChange('issueCategory', value)}
          placeholder="Enter issue category"
        />
        
        <InputField
          label="Description"
          value={formData.description}
          onChangeText={(value) => handleInputChange('description', value)}
          multiline={true}
          placeholder="Describe your issue"
        />
        
        <Dropdown
          label="Urgency Level"
          value={formData.urgencyLevel}
          onValueChange={(value) => handleInputChange('urgencyLevel', value)}
          items={urgencyLevels}
        />
      </div>
      
      <button 
        className="bg-[#0D182E] py-5 rounded-xl w-[98%] mx-auto mt-8 flex items-center justify-center"
        onClick={handleSubmit}
      >
        <span className="text-white text-lg font-bold font-['GeneralSansMedium']">Submit</span>
      </button>

      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#B7BDCA] rounded-2xl p-6 w-[30%] flex flex-col items-center">
            <h2 className="text-lg font-['GeneralSansSemibold'] text-[#0D182E] mb-4 -mt-2">
              Feedback Submitted
            </h2>
            <img 
              src={feedbackdone}
              alt="Feedback Done" 
              className="w-32 h-32 my-4" 
            />
            <p className="text-center mb-6 font-['GeneralSansRegular'] text-[#0D182E] text-base">
              Thanks for the Feedback. Our support team will contact you soon by the email, support@curtain.com
            </p>
            <button 
              className="bg-[#0D182E] py-3.5 rounded-full w-[90%] flex items-center justify-center"
              onClick={() => setModalVisible(false)}
            >
              <span className="text-white text-base font-['GeneralSansMedium']">Continue</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FeedbackScreen;