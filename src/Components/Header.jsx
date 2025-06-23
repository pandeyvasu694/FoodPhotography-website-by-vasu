import React from 'react';
import Navbar from './Navbar';
import { motion } from "framer-motion"; // Correct import

const Header = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png.jpg')" }}
      id="Header"
    >
      {/* Greyish-Black Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-gray-900/60 z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 2.0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white z-10"
      >
        <h2
  className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 
             bg-gradient-to-r from-[#ffffff] to-[#4eabca] text-transparent bg-clip-text 
             drop-shadow-[4px_4px_8px_rgba(0,0,0,0.9)]"
>
  Where Flavors Meet Focus and Frame
</h2>



        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white text-black bg-gray-300 px-8 py-3 rounded inline-block transform transition-transform duration-300 hover:scale-[1.1]"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="border px-8 py-3 rounded inline-block bg-gradient-to-r from-[#cd1c18] to-[#66023c] transform transition-transform duration-300 hover:scale-[1.1] text-white"
            
          >
            Contact us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
