import React, { useState } from 'react';
import { Feather, MoreHorizontal, Search, X, CheckCheck, Trash2, BellOff, ChevronLeft } from 'lucide-react';
import avatar2 from "./assets/images/avatar2.png"
import avatar3 from "./assets/images/avatar3.png"

const notifications = [
  {
    id: 1,
    src: avatar2, // Use imported image directly
    text: "Crown Casino is inviting you for reviewing their business, Review it now and get a cashback of 9%",
    time: "2h ago",
    type: "review"
  },
  {
    id: 2,
    src: avatar3, // Use the same imported image
    text: "Your film idea 'Morning Glory' has received 50 likes!",
    time: "5h ago",
    type: "standard"
  },
  {
    id: 3,
    src: avatar2, // Use imported image directly
    text: "Crown Casino is inviting you for reviewing their business, Review it now and get a cashback of 9%",
    time: "2h ago",
    type: "review"
  },
  {
    id: 4,
    src: avatar3, // Use the same imported image
    text: "Your film idea 'Morning Glory' has received 50 likes!",
    time: "5h ago",
    type: "standard"
  },
  {
    id: 5,
    src: avatar2, // Use imported image directly
    text: "Crown Casino is inviting you for reviewing their business, Review it now and get a cashback of 9%",
    time: "2h ago",
    type: "review"
  },
  {
    id: 6,
    src: avatar3, // Use the same imported image
    text: "Your film idea 'Morning Glory' has received 50 likes!",
    time: "5h ago",
    type: "standard"
  },
];

const NotificationItem = ({ notification, isLast }) => {
  const [showOptions, setShowOptions] = useState(false);

  const renderActionButtons = () => {
    if (notification.type === 'review') {
      return (
        <div className="flex gap-2 mt-2">
          <button className="border border-white text-white px-3 py-1 rounded-md text-xs">
            Review Now
          </button>
          <button className="text-white px-3 py-1 rounded-md text-xs">
            Decline
          </button>
        </div>
      );
    }
    return null;
  };

  const OptionsPopover = () => (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setShowOptions(false)}
      />
      <div className={`
        absolute right-4 top-16 bg-white rounded-lg p-2 z-50 
        shadow-lg w-48 ${isLast ? 'bottom-0' : ''}
      `}>
        <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <CheckCheck size={20} className="mr-2 text-slate-900" />
          <span className="text-sm text-slate-900">Mark as read</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <Trash2 size={20} className="mr-2 text-slate-900" />
          <span className="text-sm text-slate-900">Delete notification</span>
        </div>
        <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <BellOff size={20} className="mr-2 text-slate-900" />
          <span className="text-sm text-slate-900">Mute notification</span>
        </div>
      </div>
    </>
  );

  return (
    <div className={`
      flex p-4 border-b border-slate-600 relative
      ${showOptions ? 'z-30' : ''}
    `}>
      <img 
        src={notification.src} 
        alt="Avatar" 
        className="w-12 h-12 rounded-full mr-4 -ml-2" 
      />
      <div className="flex-1 mr-2">
        <p className="text-white text-sm font-['GeneralSansRegular']">
          {notification.text}
        </p>
        {renderActionButtons()}
      </div>
      <div className="flex flex-col items-end w-16">
        <span className="text-slate-400 text-xs mb-2">
          {notification.time}
        </span>
        <button 
          onClick={() => setShowOptions(!showOptions)}
          className="p-1"
        >
          <MoreHorizontal size={24} className="text-white" />
        </button>
      </div>
      {showOptions && <OptionsPopover />}
    </div>
  );
};

const NotificationScreen = () => {
  return (
    <div className="bg-[#4D6F8F] min-h-screen pb-16">
      <div className="bg-[#4D6F8F]">
        <div className="flex justify-between items-center p-4 pt-16 pb-8">
        </div>

        <div className="bg-[#527DE6] rounded-lg mx-4 mb-4 p-4">
          <h1 className="text-white text-2xl font-bold font-['VarinoRegular']">
            Notifications
          </h1>
        </div>

        <div className="bg-[#0D182E] rounded-2xl m-4 p-4">
          {notifications.map((notification, index) => (
            <NotificationItem 
              key={notification.id}
              notification={notification}
              isLast={index === notifications.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationScreen;