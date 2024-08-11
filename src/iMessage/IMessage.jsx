import React, { useState } from 'react'
import Github from '../Components/Github'
import Linkedin from '../Components/Linkedin'
import Email from '../Components/Email'

const IMessage = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [activeDiv, setActiveDiv] = useState(1);
  const [windowName, setWindowName] = useState('Github');

  const handleMinimize = () => {
    setIsMinimized(true);
    setTimeout(() => {
      setIsClosing(true);
      setTimeout(onClose, 300);
    }, 300)
  };

  return (
    <div className={`flex w-8/12 h-7.5/10 bg-white rounded-ml transition-all duration-300
      ${isClosing ? 'absolute bottom-2 left-1/4 transform -translate-x-1/4 -translate-y-1/4 scale-10 opacity-0' : ''}
      ${isMinimized ? 'transform scale-50 opacity-0 translate-y-24' : 'transform scale-100 opacity-100'}`} >
      <div className='bg-gray-200 w-3/12 h-full flex flex-col  rounded-l-ml'>

        {/* Icons */}
        <div className='flex gap-1 ml-4 pt-4'>
          <div className='cursor-pointer bg-red-400 w-6 h-6 rounded-full border border-neutral-400'>
            <img
              src="/RedClose.svg"
              alt=""
              className='w-6 h-6 opacity-0 hover:opacity-100'
              onClick={handleMinimize}
            />
          </div>
          <div className='cursor-pointer bg-yellow-400 w-6 h-6 rounded-full border border-neutral-400'>
            <img
              src="/YellowMinimize.svg"
              alt=""
              className='w-6 h-6 opacity-0 hover:opacity-100'
              onClick={handleMinimize}
            />
          </div>
          <div className='cursor-pointer bg-green-700 w-6 h-6 rounded-full border border-neutral-400'>
            <img
              src="/GreenFullScreen.svg"
              alt=""
              className='w-6 h-6 opacity-0 hover:opacity-100'
            />
          </div>
        </div>

        <div className='border-black mb-12 mt-4 flex flex-col justify-between h-5/6 ' >
          <div className='flex flex-col h-2/5 gap-10' >
            <div className='flex flex-col gap-2' >
              <div className='py-4 px-2' >
                <form className="relative flex items-center justify-center gap-8 w-full p-0 bg-white rounded-md">
                  <label htmlFor="search" className="relative flex items-center w-full h-10">
                    <input
                      required
                      autoComplete="off"
                      placeholder="Search iMessage"
                      id="search"
                      type="text"
                      className="w-full pl-[calc(1.5em+2em)] pr-8 outline-none bg-transparent border-none placeholder:text-[#949faa] peer text-zinc-600"
                    />
                    <div className="absolute left-7 flex items-center justify-center transition-transform duration-300 peer-focus:rotate-[80deg] peer-focus:scale-125 peer-focus:text-[#15A986] peer-valid:rotate-[80deg] peer-valid:scale-125 peer-valid:text-[#15A986]">
                      <svg
                        strokeWidth="2"
                        stroke="#4285F4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute h-4 w-4 transition-opacity duration-300 peer-focus:opacity-0 peer-valid:opacity-0"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>

                    </div>
                    <button
                      type="reset"
                      className="absolute right-4 flex items-center justify-center w-5 h-5 bg-[#1b9bee] text-white rounded-full opacity-0 transition-opacity duration-300 peer-valid:opacity-100"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path
                          clipRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </label>
                </form>


              </div>

              <div className={`flex items-center justify-start w-full py-1 px-4 gap-2 cursor-pointer transition-transform duration-300 overflow-hidden  ${activeDiv === 1 ? 'bg-stone-300 scale-105 rounded-lg' : 'white'} `} onClick={() => { setActiveDiv(1); setWindowName('Github') }} >
                <img src="/Github.svg" alt="" className='w-10' />
                <div>
                  <p className='text-lg'>Github</p>
                  <p className='text-sm' >Turning ideas into code reality!</p>
                </div>
              </div>

              <div className={`flex items-center justify-start w-full py-1 px-4 gap-2 cursor-pointer transition-transform duration-300 overflow-hidden  ${activeDiv === 2 ? 'bg-stone-300 scale-105 rounded-lg' : 'white'} `} onClick={() => { setActiveDiv(2); setWindowName('Linkedin') }} >
                <img src="/Linkedin.svg" alt="" className='w-10' />
                <div>
                  <p className='text-lg' >LinkedIn</p>
                  <p className='text-sm' >Shaping the future with digital innovation.</p>
                </div>
              </div>

              <div className={`flex items-center justify-start w-full py-1 px-4 gap-2 cursor-pointer transition-transform duration-300 overflow-hidden  ${activeDiv === 3 ? 'bg-stone-300 scale-105 rounded-lg' : 'white'} `} onClick={() => { setActiveDiv(3); setWindowName('Email') }} >
                <img src="/Email.svg" alt="" className='w-10' />
                <div>
                  <p className='text-lg'>Email</p>
                  <p className='text-sm' >Connect me via email!</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {windowName === 'Github' &&
        (<div className='flex flex-col w-9/12' >
          <Github></Github>
        </div>)}

      {windowName === 'Linkedin' &&
        (<div className='flex flex-col w-9/12' >
          <Linkedin></Linkedin>
        </div>)}

      {windowName === 'Email' &&
        (<div className='flex flex-col w-9/12' >
          <Email></Email>
        </div>)}
      <div>

      </div>
    </div>
  )
}

export default IMessage;
