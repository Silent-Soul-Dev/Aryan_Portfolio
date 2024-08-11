import React, { useState, useRef, useEffect } from 'react';
import Tippy from '@tippyjs/react'; // Import Tippy.js
import { FaPaperPlane, FaLinkedin } from 'react-icons/fa';
import 'tippy.js/dist/tippy.css'; // Import Tippy.js CSS for default styling

const Linkedin = () => {
  const [messages, setMessages] = useState([
    { type: 'receive', text: "Ah, Aryan! What’s the latest on your professional empire?" },
    { type: 'send', text: "Oh, just casually rewriting the rules of coding. Check out linkedin.com/in/aryan-sharma-54164b279 if you’re feeling ambitious." },
    { type: 'receive', text: 'Look at you, keeping the world in awe. What’s your new claim to fame?' },
    { type: 'send', text: "Just the usual—making magic with React and Tailwind CSS. Try not to fall off your chair." },
    { type: 'receive', text: 'I’ll make sure to update your profile’s “legendary status.” Anything else for the masses?' },
    { type: 'send', text: "Just the ongoing saga of my brilliance. Keep up, LinkedIn!" },
  ]);

  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'send', text: input }]);
      setInput(''); // Clear input after sending
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 h-full">
      <div className='flex items-center bg-[#F4F5F5] border-b border-gray-200 p-4'>
        <img src="/Linkedin.svg" alt="Linkedin logo" className='h-8 w-auto' />
        <p className='text-2xl font-semibold ml-4'>Linkedin</p>
      </div>
      <div className="flex-1 overflow-auto p-4 flex flex-col">
        <div className="flex-1 overflow-auto h-full">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`border-2 relative my-2 p-4 rounded-xl max-w-xs ${message.type === 'send' ? 'bg-blue-500 text-white self-end ml-auto' : 'bg-white text-black self-start'}`}
            >
              {message.text}
              <div
                className={`border-2 absolute ${message.type === 'send' ? 'right-2' : 'left-2'} -bottom-2 w-3.5 h-3.5 bg-transparent`}
                style={{
                  borderWidth: '8px',
                  borderColor: message.type === 'send'
                    ? `transparent #3B82F6 transparent transparent`
                    : `transparent #FFFFFF transparent transparent`,
                  borderStyle: 'solid',
                  borderRadius: '50%',
                }}
              />
            </div>
          ))}
          <div ref={endOfMessagesRef} />
        </div>
        <div className="p-4 flex justify-center border-t border-gray-200 bg-gray-100">
          <Tippy content="Visit my LinkedIn profile" placement="top">
            <a
              href="https://www.linkedin.com/in/aryan-sharma-54164b279/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </Tippy>
        </div>
      </div>
      <div className='bg-gray-100 border-t border-gray-200 p-4'>
        <div className='relative flex items-center'>
          <input
            type="text"
            placeholder='Type a message'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='w-full h-12 p-4 rounded-full border border-[#00000042] text-zinc-600 pr-12'
          />
          <button
            onClick={handleSend}
            className='absolute right-4 top-1/2 transform -translate-y-1/2'
          >
            <FaPaperPlane className='text-blue-500 text-lg' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Linkedin;
