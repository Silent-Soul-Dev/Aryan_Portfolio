import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Make sure to install react-icons package

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const formData = new FormData();
    formData.append('name', inputName);
    formData.append('email', inputEmail);
    formData.append('message', inputMessage);

    try {
      await fetch('https://formspree.io/f/mvgprreg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Add message to chat
      setMessages([...messages, { type: 'send', text: inputMessage, name: inputName }]);
      setInputName('');
      setInputEmail('');
      setInputMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 h-screen">
      <div className='flex items-center bg-[#F4F5F5] border-b border-gray-200 p-4'>
        <img src="/Email.svg" alt="Contact logo" className='h-8 w-auto' />
        <p className='text-2xl font-semibold ml-4'>Chat with us</p>
      </div>
      <div className="flex-1 overflow-auto p-4 flex flex-col">
        <div className="flex-1 overflow-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`relative my-2 p-4 rounded-xl max-w-xs ${message.type === 'send' ? 'bg-blue-500 text-white self-end ml-auto' : 'bg-white text-black self-start'}`}
            >
              <div className="font-bold">{message.name}</div>
              {message.text}
              <div
                className={`absolute ${message.type === 'send' ? 'right-2' : 'left-2'} -bottom-2 w-3.5 h-3.5 bg-transparent`}
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
      </div>
      <div className='bg-gray-100 border-t border-gray-200 p-4'>
        <form onSubmit={handleSubmit} className="relative flex flex-col space-y-4">
          <div className='flex gap-4' >
            <input
              type="text"
              placeholder='Your Name'
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              required
              className='w-full h-12 p-4 rounded-xl border border-[#00000042] text-zinc-600'
            />
            <input
              type="email"
              placeholder='Your Email'
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              required
              className='w-full h-12 p-4 rounded-xl border border-[#00000042] text-zinc-600'
            />
          </div>
          <textarea
            placeholder='Your Message'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            required
            className='w-full p-4 rounded-xl border border-[#00000042] text-zinc-600'
            rows="4"
          />
          <button
            type="submit"
            disabled={isSending}
            className={`flex items-center justify-center m-auto w-fit px-6 h-12 rounded-full ${isSending ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
          >
            {isSending ? 'Sending...' : 'Send Message'}
            <FaPaperPlane className='ml-2' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
