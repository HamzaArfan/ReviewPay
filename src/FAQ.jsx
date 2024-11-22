import React, { useState } from 'react';
import { ChevronLeft, Search, ChevronUp, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-4 border border-[#959DB0] rounded-xl p-3">
      <button 
        className="w-full flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-white text-base font-['GeneralSansMedium'] mr-4 text-left">
          {question}
        </span>
        {isExpanded ? 
          <ChevronUp color="white" size={24} /> : 
          <ChevronDown color="white" size={24} />
        }
      </button>
      {isExpanded && (
        <div className="mt-3 px-2">
          <p className="text-[#B7BDCA] text-sm font-['GeneralSansRegular'] leading-5">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQScreen = () => {
  const faqData = [
    {
      question: "How do I create and upload a film idea?",
      answer: "To create and upload a film idea, click the 'Add +' Button title, description, and upload a video pitch. Once completed, submit your idea for review and it will be posted on the platform."
    },
    {
      question: "How do I audition for a role?",
      answer: "You can update your profile information by navigating to Settings > Profile. There you can edit your personal details, profile picture, and other information."
    },
    {
      question: "What are the different subscription plans available?",
      answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers."
    },
    {
      question: "How can I manage the support I've received for my idea?",
      answer: "You can reach our customer support team through the Help section in the app, or by sending an email to support@example.com. We typically respond within 24 hours."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "To delete your account, go to Settings > Privacy > Delete Account. Please note that this action is permanent and cannot be undone."
    }
  ];

  return (
    <div className="bg-[#4D6F8F] min-h-screen pb-[102px] flex flex-col">
      <div className="px-4 pt-20 pb-8 flex justify-between items-center">

      </div>
      
      <div className="bg-[#527DE6] py-4 px-4 rounded-lg mx-4 mb-4">
        <h1 className="text-white text-2xl font-bold font-['VarinoRegular']">FAQ</h1>
      </div>

      <div className="bg-[#0D182E] rounded-2xl p-4 mx-4">
        {faqData.map((faq, index) => (
          <FAQItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>

    </div>
  );
};

export default FAQScreen;