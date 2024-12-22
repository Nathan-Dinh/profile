import { useState } from 'react';

const SliderToggle = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleToggle = () => {
    setActiveTab((prevTab) => (prevTab === 'experience' ? 'projects' : 'experience'));
  };

  return (
      <div
        className="relative w-full h-10 bg-gray-700 rounded-md cursor-pointer mx-auto p-1 flex items-center"
        onClick={handleToggle}
      >
        <div
          className={`w-[50%] h-8  bg-[#020610] rounded-md transition-transform duration-300 ${
            activeTab != 'experience' ? 'translate-x-0' : 'translate-x-full'
          }`}
        ></div>
        <div className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center text-sm font-medium">
          <span
            className={`transition-opacity duration-300 ${
              activeTab === 'experience' &&  'text-gray-400'
            }`}
          >
            Experience
          </span>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center text-sm font-medium">
          <span
            className={`transition-opacity duration-300 ${
              activeTab != 'experience' &&  'text-gray-400'
            }`}
          >
            Projects
          </span>
        </div>
      </div>
  );
};

export default SliderToggle;
