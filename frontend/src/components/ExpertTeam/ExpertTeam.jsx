import React from 'react';
import gagan from '../../assets/images/gagan.webp';

const ExpertTeam = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-20 bg-white">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-blue-900">
        Meet Our <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-green-400 bg-clip-text text-transparent">Expert</span> Team
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-30 w-full max-w-5xl mx-auto">
        {/* Founder Image and Name */}
        <div className="flex flex-col items-center mt-10">
          <div className="bg-[#f5fafd] rounded-2xl shadow-xl p-2 mb-0">
            <img src={gagan} alt="Dr. Gagan Mahalwanshi" className="w-90 h-110 object-cover rounded-2xl" />
          </div>
          <div className="bg-white rounded-xl shadow-lg px-8 py-4 -mt-8 z-10 text-center">
            <div className="text-xl font-bold text-blue-900">Dr. Gagan Mahalwanshi</div>
            <div className="text-gray-500 text-sm">Founder & CEO</div>
          </div>
        </div>
        {/* Founder Description */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">About the Founder</h3>
          <p className="text-xl text-gray-700 mb-6">
            With over 15 years of experience in the water industry, Dr. Gagan Mahalwanshi has pioneered revolutionary water purification technologies. His vision for Newtro-X is to create water solutions that are both sustainable and beneficial for health.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/></svg>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
            </a>
          </div>
        </div>
      </div>


    </section>
  );
};

export default ExpertTeam;