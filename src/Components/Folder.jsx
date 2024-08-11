import React, { useState } from 'react';

const Folder = ({ link, appName }) => {
  const [showWeb, setShowWeb] = useState(false);

  const handleClose = () => {
    setShowWeb(false);
  };

  return (
    <>
      <div onClick={() => setShowWeb(!showWeb)}>
        <div className='flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-200 active:bg-zinc-300 transition-all ease-linear px-3 pb-1 rounded-lg active:scale-90 duration-100'>
          <img src="src/assets/Folder.svg" alt="" className='w-24' />
          <p>{appName}</p>
        </div>
      </div>

      {showWeb && (
        <div className='absolute bg-white shadow-lg border rounded-lg w-[800px] h-[600px]'>
          {/* Safari-like Title Bar */}
          <div className='flex items-center justify-between p-2 border-b border-gray-300 rounded-t-lg'>
            {/* Window Controls */}
            <div className='flex space-x-2'>
              <button onClick={handleClose} className='w-4 h-4 rounded-full bg-red-600 hover:bg-red-700 focus:outline-none' aria-label="Close" />
              <button className='w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none' aria-label="Minimize" />
              <button className='w-4 h-4 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none' aria-label="Maximize" />
            </div>
            {/* Title */}
            <span className='text-sm font-medium text-gray-700'>{appName}</span>
          </div>

          {/* Content Area */}
          <div className='w-full h-full'>
            <object
              type="text/html"
              data={link}
              className='w-full h-full rounded-b-lg'
            ></object>
          </div>
        </div>
      )}
    </>
  );
};

export default Folder;
