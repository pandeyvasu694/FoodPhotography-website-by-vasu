import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [showMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 75);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleNavClick = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMobileMenu(false);
  };

  const navItemStyle = `
    cursor-pointer text-white text-xl font-bold transition 
    hover:text-gray-300 
    drop-shadow-[4px_4px_10px_rgba(0,0,0,0.95)] 
    hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
  `;

  return (
    <div className={`absolute top-0 left-0 w-full z-50 transition-colors duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-5 px-6 md:px-20 lg:px-32">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={assets.logo} 
            alt="Logo" 
            className="h-14 w-auto object-contain" 
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10">
          <li className={navItemStyle} onClick={() => handleNavClick("#Header")}>Home</li>
          <li className={navItemStyle} onClick={() => handleNavClick("#About")}>About</li>
          <li className={navItemStyle} onClick={() => handleNavClick("#Projects")}>Projects</li>
          <li className={navItemStyle} onClick={() => handleNavClick("#Testimonials")}>Testimonials</li>
        </ul>

        {/* Explore Button */}
        <a
          href="https://thelastvulture.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-white text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-xl 
                     transform scale-100 hover:scale-110 transition-transform duration-300 text-center bg-gradient-to-r bg-gradient-to-r from-[#cd1c18] to-[#66023c]"
        >
          Explore
        </a>

        {/* Hamburger Icon */}
        <img 
          onClick={() => setShowMobileMenu(true)} 
          src={assets.menu_icon} 
          className='md:hidden w-8 cursor-pointer invert' 
          alt="menu" 
        />
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-cover bg-center text-white z-40 flex flex-col transition-all duration-500 ${showMobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} ease-in-out`}
        style={{ backgroundImage: `url(${assets.bg_image})` }}
      >
        <div className='flex justify-end p-6 cursor-pointer'>
          <img 
            onClick={() => setShowMobileMenu(false)} 
            src={assets.cross_icon} 
            className='w-6 invert' 
            alt="close" 
          />
        </div>
        <div className='flex flex-col items-center gap-6 mt-10 text-2xl font-bold'>
  <li className={navItemStyle} onClick={() => handleNavClick("#Header")}>Home</li>
  <li className={navItemStyle} onClick={() => handleNavClick("#About")}>About</li>
  <li className={navItemStyle} onClick={() => handleNavClick("#Projects")}>Projects</li>
  <li className={navItemStyle} onClick={() => handleNavClick("#Testimonials")}>Testimonials</li>

  {/* Explore Button for Mobile */}
  <a
    href="https://thelastvulture.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 bg-white text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-xl 
               transform scale-100 hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-[#cd1c18] to-[#66023c]" 
  >
    Explore
  </a>
</div>

      </div>
    </div>
  );
};

export default Navbar;
