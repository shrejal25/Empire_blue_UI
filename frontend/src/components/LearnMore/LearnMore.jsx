import React from 'react';
import './LearnMore.css';
import innovation from '../../assets/images/innovation.webp';

const LearnMore = () => {
  return (
    <section className="w-full min-h-[60vh] bg-[#d7e0e7] flex items-center justify-center py-8 sm:py-16 lg:py-20 xl:py-40">
      <div className="w-[95vw] sm:w-[90vw] max-w-6xl bg-transparent flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-2 lg:order-1">
          <span className="inline-block px-4 sm:px-6 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">• Water Innovation</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Revolutionizing <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent relative">Water
              <span className="absolute left-0 right-0 -bottom-1 sm:-bottom-2 h-1 sm:h-2 bg-blue-100 rounded-full w-full"></span>
            </span>
            <br />Technology
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 my-6 sm:my-8 lg:my-10 max-w-xl">
            We're pioneering the future of water technology with our groundbreaking innovation that eliminates expiration dates from bottled water, ensuring pure and safe drinking water for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <a href="#explore" className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-blue-900 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-md hover:bg-blue-800 transition text-center">Explore Technology</a>
            <a href="#learn" className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-blue-900 text-blue-900 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg bg-white hover:bg-blue-50 transition text-center">Learn More</a>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center relative order-1 lg:order-2">
          <div className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] bg-blue-100 rounded-2xl sm:rounded-3xl opacity-40 z-5 hidden sm:block"></div>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-3 sm:p-4 z-10 relative flex items-center justify-center">
            <img 
              src={innovation} 
              alt="Water Technology" 
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto rounded-xl sm:rounded-2xl wave-animation" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;