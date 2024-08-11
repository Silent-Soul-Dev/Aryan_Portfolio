import React, { useState, useEffect } from 'react';
import TopProjects from '../Components/TopProjects'
import RecentProjects from '../Components/RecentProjects'
import CompanyProjects from '../Components/CompanyProjects'
import Thrash from '../Components/Thrash'
import Introduction from '../Components/Introduction'
import { AnimatePresence } from 'framer-motion'

const Filemanager = ({ onClose, thrash, finder }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const determineInitialState = () => {
    if (thrash) return 4;
    if (finder) return 5;
    return 1;
  };

  const determineWindowName = () => {
    if (thrash) return 'Thrash';
    if (finder) return 'Introduction';
    return 'Top Projects';
  }

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
    <div
      className={`flex w-8/12 h-7.5/10 bg-white rounded-ml transition-all duration-300
        ${isClosing ? 'absolute bottom-2 left-1/4 transform -translate-x-1/4 -translate-y-1/4 scale-10 opacity-0' : ''}
        ${isMinimized ? 'transform scale-50 opacity-0 translate-y-24' : 'transform scale-100 opacity-100'}`}
    >
      {/* Sidebar */}
      <div className='bg-gray-200 w-3/12 h-full rounded-l-ml'>

        {/* Icons */}
        <div className='flex gap-1 ml-4 pt-4'>
          <div className='cursor-pointer bg-red-400 w-6 h-6 rounded-full border border-neutral-400'>
            <img
              src="src/assets/RedClose.svg"
              alt=""
              className='w-6 h-6 opacity-0 hover:opacity-100'
              onClick={handleMinimize}
            />
          </div>
          <div className='cursor-pointer bg-yellow-400 w-6 h-6 rounded-full border border-neutral-400'>
            <img
              src="src/assets/YellowMinimize.svg"
              alt=""
              className='w-6 h-6 opacity-0 hover:opacity-100'
              onClick={handleMinimize}
            />
          </div>
          <div className='cursor-pointer bg-green-700 w-6 h-6 rounded-full border border-neutral-400'>
            <img
              src="src/assets/GreenFullScreen.svg"
              alt=""
              className='w-6 h-6 opacity-0 hover:opacity-100'
            />
          </div>
        </div>

        {/* Directory Area */}
        <div className='border-black my-12 flex flex-col justify-between h-5/6 ' >
          <div className='flex flex-col h-2/5 gap-10' >
            <div className='flex flex-col' >
              <div className='text-zinc-700 mx-4' >
                <p>Favourites</p>
              </div>
              <div className={`flex items-center justify-start w-full py-1 px-4 gap-2 cursor-pointer transition-transform duration-300 overflow-hidden  ${activeDiv === 1 ? 'bg-stone-300 scale-105 rounded' : 'white'} `} onClick={() => { setActiveDiv(1); setWindowName('Top Projects') }} >
                <img src="src/assets/TopProjects.svg" alt="" />
                <p>Top Projects</p>
              </div>

              <div className={`flex items-center justify-start w-full py-1 px-4 gap-2 cursor-pointer transition-transform duration-300 overflow-hidden ${activeDiv === 2 ? 'bg-stone-300 scale-105 rounded' : 'white'} `} onClick={() => { setActiveDiv(2); setWindowName('Recent Projects') }} >
                <img src="src/assets/RecentProjects.svg" alt="" />
                <p>Recent Projects</p>
              </div>

              <div className={`h-9 flex items-center justify-start w-full py-1 px-4 gap-2 cursor-pointer transition-transform duration-300 overflow-hidden ${activeDiv === 3 ? 'bg-stone-300 scale-105 rounded' : 'white'} `} onClick={() => { setActiveDiv(3); setWindowName('Company Projects') }} >
                <img src="src/assets/CompanyProjects.svg" alt="" className='w-6 h-5 ' />
                <p>Company Projects</p>
              </div>
            </div>

            {finder ? (<div className='flex flex-col'>
              <div className='text-zinc-700 mx-4'>
                <p>About me</p>
              </div>
              <div className={`h-9 flex items-center justify-start w-full py-1 px-4 gap-2 cursor-pointer transition-transform duration-300 overflow-hidden ${activeDiv === 5 ? 'bg-stone-300 scale-105 rounded' : 'white'} `} onClick={() => { setActiveDiv(5); setWindowName('Introduction') }} >
                <img src="src/assets/Info.svg" alt="" className='w-6 h-5' />
                <p>Introduction</p>
              </div>
            </div>) : null}

          </div>

          {thrash ?
            (<div className='flex flex-col'>
              <div className='text-zinc-700 mx-4'>
                <p>Recycle Bin</p>
              </div>
              <div className={`h-9 flex items-center justify-start w-full py-1 px-4 gap-2 cursor-pointer transition-transform duration-300 overflow-hidden ${activeDiv === 4 ? 'bg-stone-300 scale-105 rounded' : 'white'} `} onClick={() => { setActiveDiv(4); setWindowName('Thrash') }} >
                <img src="src/assets/Thrash.svg" alt="" className='w-6 h-5' />
                <p>Thrash</p>
              </div>
            </div>) : null}
        </div>
      </div>

      {/* Folder Area */}
      <div className='flex flex-col w-full p-4 pt-6 pb-2 pl-8 mr-10 gap-7' >

        <div className='flex ml-4 '>
          <div className='flex gap-11 mr-8 items-center justify-center' >
            <img src="src/assets/LeftChevron.svg" alt="" />
            <img src="src/assets/RightChevron.svg" alt="" />
          </div>
          <div className='text-xl'>
            <p>{windowName}</p>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence
          initial={false}
        >
          {windowName === 'Top Projects' && (
            <div className='relative flex w-full h-full ml-4 flex-wrap'>
              <TopProjects> </TopProjects>
            </div>
          )}

          {windowName === 'Recent Projects' && (
            <div className='relative flex w-full h-full ml-4 flex-wrap'>
              <RecentProjects></RecentProjects>
            </div>
          )}

          {windowName === 'Company Projects' && (
            <div className='relative flex w-full h-full ml-4 flex-wrap'>
              <CompanyProjects></CompanyProjects>
            </div>
          )}

          {windowName === 'Thrash' && (
            <div className='relative flex w-full h-full ml-4 flex-wrap'>
              <Thrash></Thrash>
            </div>
          )}

          {windowName === 'Introduction' && (
            <div className='relative flex w-full h-full ml-4 flex-wrap'>
              <Introduction></Introduction>
            </div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default Filemanager;
