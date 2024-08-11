import React, { useState, useEffect } from 'react'

const Experience = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosing, setIsClosing] = useState(false)

  const handleMinimize = () => {
    setIsMinimized(true);
    setTimeout(() => {
      setIsClosing(true);
      setTimeout(onClose, 300); // Delay closing until animation is complete
    }, 300); // Delay minimize effect
  };

  return (
    <div className={`absolute -top-40 flex flex-col w-full h-fit bg-neutral-50 rounded-ml  transition-all duration-300 ${isClosing ? 'absolute bottom-2 left-1/4 transform -translate-x-1/4 -translate-y-1/4 scale-10 opacity-0' : ''}
    ${isMinimized ? 'transform scale-50 opacity-0 translate-y-24' : 'transform scale-100 opacity-100'}`}>
      <div className={`relative flex w-full h-full bg-zinc-300 rounded-t-ml transition-all duration-300`}  >
        <div className='flex justify-between items-center w-[25vw] p-3 ' >
          <div className='flex gap-1 ml-1 items-center '>
            <div className='cursor-pointer bg-red-400 rounded-full border border-neutral-400'>
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
          <div className='flex items-center gap-2 justify-center ' >
            <img src="src/assets/EmptyFile.svg" alt="" />
            <p>intro.txt</p>
          </div>
        </div>
      </div>

      <div className='w-full h-fit p-1'>
        <div
          placeholder=''
          className='w-full focus:outline-transparent border-transparent focus:border-l-zinc-300 h-[75vh] p-4 shadow-sm font-sans text-base text-black resize-none'
        >
          <p className='text-3xl' >Frontend Developer Intern</p>
          <p className='text-xl' >Duration: <span className='underline' > 2 Months</span></p>
          <p>OneVarsity</p>
          <p>Gurugram, India</p>
          <br />

        </div>
      </div>

    </div>
  )
}

export default Experience;
