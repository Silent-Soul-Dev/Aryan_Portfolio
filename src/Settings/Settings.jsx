import React, {useState} from 'react'

const Settings = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [activeDiv, setActiveDiv] = useState(determineInitialState);
  const [windowName, setWindowName] = useState(determineWindowName)

  const handleMinimize = () => {
    setIsMinimized(true);
    setTimeout(() => {
      setIsClosing(true);
      setTimeout(onClose, 300); // Delay closing until animation is complete
    }, 300); // Delay minimize effect
  };
  return (
    <div>
      <div
        className={`flex w-8/12 h-7.5/10 bg-white rounded-ml transition-all duration-300
        ${isClosing ? 'absolute bottom-2 left-1/4 transform -translate-x-1/4 -translate-y-1/4 scale-10 opacity-0' : ''}
        ${isMinimized ? 'transform scale-50 opacity-0 translate-y-24' : 'transform scale-100 opacity-100'}`}
      >
        {/* Sidebar */}
        <div className='bg-gray-200 w-3/12 h-full rounded-l-ml'></div>
      </div>
    </div>
  )
}

export default Settings
