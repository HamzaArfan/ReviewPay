import React, { useState } from 'react';
import { ChevronLeft, Search } from 'lucide-react';

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

const HelpScreen = () => {
  const [formData, setFormData] = useState({
    objective: '',
    additionalComments: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="bg-[#4D6F8F] min-h-screen pb-[102px] flex flex-col">
      <div className="px-4 pt-20 pb-8 flex justify-between items-center">
        <div className="flex items-center">
       </div>
      </div>

      <div className="bg-[#527DE6] py-4 px-4 rounded-lg mx-4 mb-4">
        <h1 className="text-white text-2xl font-bold font-['VarinoRegular']">HELP</h1>
      </div>

      <div className="bg-[#0D182E] rounded-2xl p-4 mx-4">
        <InputField
          label="Objective"
          value={formData.objective}
          onChangeText={(value) => handleInputChange('objective', value)}
          placeholder="Example"
          multiline={false}
        />
        <InputField
          label="Additional Comments"
          value={formData.additionalComments}
          onChangeText={(value) => handleInputChange('additionalComments', value)}
          multiline={true}
          placeholder="Example"
        />
      </div>

      <button className="bg-[#0D182E] py-5 rounded-xl w-[98%] mx-auto mt-8 flex items-center justify-center">
        <span className="text-white text-lg font-bold font-['GeneralSansMedium']">Submit</span>
      </button>

    </div>
  );
};

export default HelpScreen;