import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gradient-to-r from-[#cd1c18] to-[#66023c] w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>

        {/* Left section with logo and description */}
        <div className='w-full md:w-1/2 mb-8 md:mb-0'>
          <div className="flex items-center gap-4 mb-4">
            <img className="w-14 h-auto" src={assets.logo} alt="Logo" />
            <h1 className="text-white text-2xl font-bold">FoodGraphy</h1>
          </div>
          <p className='text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae et ut minima harum! Obcaecati,
            doloremque repudiandae porro maiores tempore enim expedita et, corporis laudantium dignissimos praesentium,
            maxime ea laborum?
          </p>
        </div>

        {/* Right section with links */}
        <div className='w-full md:w-1/5 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Us</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="#" className='hover:text-white'>+91 9876543210</a>
          </ul>
        </div>

        <div></div>
      </div>

      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2025 © FoodGraphy. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
