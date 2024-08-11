import React, { useState, useRef } from 'react';
import Filemanager from '../FileManager/Filemanager';
import IMessage from '../iMessage/IMessage';
import Settings from '../Settings/Settings';
import './Dock.css';

const Dock = () => {
  const [showFileManager, setShowFileManager] = useState(false);
  const [showThrash, setShowThrash] = useState(false);
  const [showFinder, setShowFinder] = useState(false);
  const [showiMessage, setShowiMessage] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const clickTimeoutRef = useRef(null);

  const handleIconClick = (setter) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }

    clickTimeoutRef.current = setTimeout(() => {
      setter(false);
      clickTimeoutRef.current = null;
    }, 250);
  };

  const handleIconDoubleClick = (setter) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }
    setter(true);
  };

  const handleCloseWindow = () => {
    setShowFileManager(false);
    setShowThrash(false);
    setShowFinder(false);
    setShowiMessage(false);
    setShow(false);
  };

  return (
    <>
      {(showFileManager || showThrash || showFinder) && (
        <div className='flex items-center justify-center h-full w-11/12'>
          <Filemanager
            onClose={handleCloseWindow}
            thrash={showThrash}
            finder={showFinder}
          />
        </div>
      )}

      {showiMessage && (<div className='flex items-center justify-center h-full w-11/12'>
        <IMessage onClose={handleCloseWindow} />
      </div>)}

      {showSettings && (<div className='flex items-center justify-center h-full w-11/12'>
        <Settings onClose={handleCloseWindow} />
      </div>)}


      <div className='fixed bottom-2 bg-stone-500 bg-opacity-50 flex flex-row rounded-ml px-2 py-1'>
        {/* Settings Button */}
        <button className='dock-icon w-20 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 active:scale-110 active-translate-y-0'
          onDoubleClick={() => handleIconDoubleClick(setShowSettings)}
          onClick={() => handleIconClick(setShowSettings)}>
          <img src="/Settings.png" alt="" />
        </button>

        {/* Finder Button */}
        <button
          className='dock-icon w-20 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 active:scale-110 active-translate-y-0'
          onDoubleClick={() => handleIconDoubleClick(setShowFinder)}
          onClick={() => handleIconClick(setShowFinder)}
        >
          <img src="/Finder.png" alt="" />
        </button>

        {/* iMessage Button */}
        <button className='dock-icon w-20 cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-2 active:scale-110 active-translate-y-0'
          onDoubleClick={() => handleIconDoubleClick(setShowiMessage)}
          onClick={() => handleIconClick(setShowiMessage)}>
          <img src="/iMessage.png" alt="" />
        </button>

        <span className="h-16 w-px my-2 bg-slate-200"></span>

        {/* Files Button */}
        <button
          className='dock-icon w-20 cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-2 active:scale-110 active-translate-y-0'
          onDoubleClick={() => handleIconDoubleClick(setShowFileManager)}
          onClick={() => handleIconClick(setShowFileManager)}
        >
          <img src="/Files.png" alt="" />
        </button>

        {/* Thrash Icon */}
        <button
          className='dock-icon w-20 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 active:scale-110 active-translate-y-0'
          onDoubleClick={() => handleIconDoubleClick(setShowThrash)}
          onClick={() => handleIconClick(setShowThrash)}
        >
          <img src="/Thrash.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default Dock;
