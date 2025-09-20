import React from 'react';
import logo1 from '../../assets/images/logo1.webp';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-none px-8 py-4 flex items-center">
      
      {/* Logo and Tagline */}
      <div className="ml-30">
        <img src={logo1} alt='empire blue logo' className='h-10'/>
      </div>
      
      <div className="flex items-center gap-10 ml-100">
        <a href="#home" className="text-lg text-gray-600 font-medium hover:text-blue-900 transition">Home</a>
        <a href="#about" className="text-lg text-gray-600 font-medium hover:text-blue-900 transition">About Us</a>
        <a href="#service" className="text-lg text-gray-600 font-medium hover:text-blue-900 transition">Service</a>
        <a href="#contact" className="text-lg text-gray-600 font-medium hover:text-blue-900 transition">Contact</a>
        
        <a
        href="#book"
        className="ml-5 px-7 py-2  bg-[#000080] text-white rounded-full font-bold text-lg shadow-md hover:bg-blue-800 transition flex items-center gap-2"
      >
        Book Now
        <span className="inline-block text-xl">&rarr;</span>
      </a>
      
      </div>
      
    </nav>
  );
};

export default Navbar;