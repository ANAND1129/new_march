import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [instagramColor, setInstagramColor] = useState('#000');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setInstagramColor(getRandomColor());
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsButtonActive(e.target.value.includes('@') && e.target.value.includes('.com'));
  };

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div className='border '>
      <div className='lg:flex'>
        <div className='border w-[100%]'>
          <div className='p-[10%] sm:w-screen md:w-screen lg:w-[80%]'>
            <h1 className='text-4xl'>Join our mailing List</h1>
            <select className='p-5 text-xl mt-6 w-[95%] border rounded-2xl'>
              <option>Everything</option>
              <option>For Him</option>
              <option>For Her</option>
            </select>
            <div className=''>
              <input
                type='email'
                placeholder='Your Email'
                className={`border p-5 text-xl mt-6 w-[95%] rounded-2xl ${isFocused ? 'focus:outline-none focus:shadow-xl focus:shadow-blue-500  ' : ''}`}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
            <div className='mt-6'>
              <button
                className={`p-5 border w-[95%] rounded-2xl text-xl ${
                  isButtonActive ? 'bg-blue-500 text-white cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isButtonActive}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className='border w-full grid grid-cols-2 px-[3%]'>
          <div className='py-12 left-[10%] '>
            <h4 className='p-3 border-b-2 text-xl'>About Us</h4>
            <h4 className='p-3 border-b-2 text-xl'>Hiring</h4>
            <h4 className='p-3 border-b-2 text-xl'>Blog</h4>
            <h4 className='p-3 border-b-2 text-xl'>Review</h4>
            <h4 className='p-3 border-b-2 text-xl'>Care</h4>
            <h4 className='p-3 text-xl'>International</h4>
          </div>
          <div>
            <div className='px-7 py-12 '>
            <h4 className='p-3 border-b-2 text-xl'>Return</h4>
              <h4 className='p-3 border-b-2 text-xl'>Terms</h4>
              <h4 className='p-3 border-b-2 text-xl'>Support</h4>
              <h4 className={`p-3 text-xl`} style={{ color: instagramColor }}>
                Instagram
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
