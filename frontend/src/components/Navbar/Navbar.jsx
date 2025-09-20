
import React, { useState } from 'react';
import logo1 from '../../assets/images/logo1.webp';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-0 w-full bg-white shadow-none px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
      <div className="flex items-center">
        <img src={logo1} alt="empire blue logo" className="h-10" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center ml-auto focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Nav Links */}
      <div
        className={`flex-col md:flex-row flex md:items-center gap-6 md:gap-10 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none px-4 md:px-0 py-4 md:py-0 transition-all duration-300 z-40 ${menuOpen ? 'flex' : 'hidden'} md:flex`}
      >
        <a href="#home" className="text-lg text-gray-600 font-medium hover:text-blue-900 transition block md:inline">Home</a>
        <a href="#about" className="text-lg text-gray-600 font-medium hover:text-blue-900 transition block md:inline">About Us</a>
        <a href="#service" className="text-lg text-gray-600 font-medium hover:text-blue-900 transition block md:inline">Service</a>
        <a href="#contact" className="text-lg text-gray-600 font-medium hover:text-blue-900 transition block md:inline">Contact</a>
        <a
          href="#book"
          className="mt-2 md:mt-0 px-7 py-2 bg-[#000080] text-white rounded-full font-bold text-lg shadow-md hover:bg-blue-800 transition flex items-center gap-2 w-fit"
        >
          Book Now
          <span className="inline-block text-xl">&rarr;</span>
        </a>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;