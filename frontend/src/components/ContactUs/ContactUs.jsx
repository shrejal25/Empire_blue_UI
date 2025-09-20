import React from 'react';
import './ContactUs.css';
import can1 from '../../assets/images/can1.webp';
import image from '../../assets/images/image.webp';

const ContactUs = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[#d7e0e7] flex items-center justify-center py-8">
      <div className="w-[90vw] max-w-[1120px] bg-[#e4e9ed] rounded-[40px] drop-shadow-[0_0px_20px_rgba(0,0,255,0.2)] flex flex-col mt-31 md:flex-row items-center justify-between px-8 md:px-20 py-10 md:py-20 relative overflow-hidden">
        {/* Left: Cans Image */}
        <div className="flex-1 flex items-center justify-center mb-10 md:mb-0 ml-1">
          <img src={can1} alt="Cans" className="w-[350px] md:w-[380px] lg:w-[480px] drop-shadow-xl" />
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start mb-2">
            <img src={image} alt="Newtro-X Logo" className="h-12 md:h-20 w-auto" />
          </div>
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            World's <span className="text-blue-900">First Non-Expiry</span> Water
          </h1>
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            Empire Blue Pvt. Ltd. We prioritize health, innovation, and sustainability we are committed to seating new industry standards and providing a safe, reliable and beneficial hydration solution for people worldwide.
          </p>
          {/* Contact Us Button */}
          <a
        href="#book"
        className="ml-35 mt-3 px-7 py-3  bg-[#000080] text-white rounded-full font-bold text-lg shadow-md hover:bg-blue-800 transition flex items-center gap-2"
      >
        Contact Us
        <span className="inline-block text-xl">&rarr;</span>
      </a>
        </div>
      </div>
    


  
  {/* Bottom curve decorative element */}
  <div className="absolute bottom-0 top-152 left-0 w-full h-[200px] z-[1] pointer-events-none drop-shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
    <svg className="w-full h-full block" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0" stroke="#fff" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0  L1440,500 L0,500 Z" fill="#D7E0E7" filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1)"></path>
    </svg>
  </div>
</section>
  );
};

export default ContactUs;