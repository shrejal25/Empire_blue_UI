import React from 'react';
import innovation from '../../assets/images/innovation.webp';

const LearnMore = () => {
  return (
    <section className="w-full min-h-[60vh] bg-[#d7e0e7] flex items-center justify-center py-40">
      <div className="w-[90vw] max-w-6xl bg-transparent flex flex-col md:flex-row items-center justify-between gap-30">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6 text-lg">• Water Innovation</span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Revolutionizing <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent relative">Water
              <span className="absolute left-0 right-0 -bottom-2 h-2 bg-blue-100 rounded-full w-full"></span>
            </span>
            <br />Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-500 my-10 max-w-xl">
            We're pioneering the future of water technology with our groundbreaking innovation that eliminates expiration dates from bottled water, ensuring pure and safe drinking water for generations to come.
          </p>
          <div className="flex gap-6">
            <a href="#explore" className="px-10 py-4 bg-blue-900 text-white rounded-2xl font-bold text-lg shadow-md hover:bg-blue-800 transition">Explore Technology</a>
            <a href="#learn" className="px-10 py-4 border-2 border-blue-900 text-blue-900 rounded-2xl font-bold text-lg bg-white hover:bg-blue-50 transition">Learn More</a>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="absolute -top-8 -right-8 w-[420px] h-[420px] bg-blue-100 rounded-3xl opacity-40 z-5 hidden md:block"></div>
          <div className="bg-white rounded-3xl shadow-xl p-4 z-10 relative flex items-center justify-center">
            <img src={innovation} alt="Water Technology" className="w-[270px] md:w-[350px] h-100 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;