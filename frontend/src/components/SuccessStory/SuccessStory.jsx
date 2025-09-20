import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import StatCard from './StatCard';

const stats = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m13-6.13a4 4 0 11-8 0 4 4 0 018 0zm-8 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    iconBg: 'bg-blue-100',
    value: '50,000+',
    label: 'Happy Customers',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-orange-500 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-6 0a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2m-6 0v2a2 2 0 002 2h2a2 2 0 002-2v-2" />
      </svg>
    ),
    iconBg: 'bg-yellow-100',
    value: '100,000+',
    label: 'Orders Delivered',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-600 w-8 h-8">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth={2} stroke="currentColor" fill="none" />
        <path d="M16 3v4M8 3v4" strokeWidth={2} stroke="currentColor" fill="none" />
      </svg>
    ),
    iconBg: 'bg-green-100',
    value: '15+',
    label: 'Products Launched',
    highlight: true,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-pink-500 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    iconBg: 'bg-pink-100',
    value: '98%',
    label: 'Satisfaction Rate',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-rose-500 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: 'bg-rose-100',
    value: '25+',
    label: 'Industry Awards',
  },
];


const SuccessStory = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });
  return (
    <section className="w-full bg-[#d7e0e7] flex flex-col items-center justify-center py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-2 text-blue-900 px-4">
        Our <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-green-400 bg-clip-text text-transparent">Success</span> Story
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-10 max-w-2xl px-4">
        Trusted by thousands of customers across India, delivering pure and healthy water solutions
      </p>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-8">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.icon}
              iconBg={stat.iconBg}
              value={stat.value}
              label={stat.label}
              highlight={stat.highlight}
              active={activeIdx === idx}
              onClick={() => setActiveIdx(idx)}
            />
          ))}
        </div>
      </motion.div>
      <div className="w-32 sm:w-40 h-1 rounded-full bg-gradient-to-r from-blue-500 to-green-400 mx-auto mt-2" />
    </section>
  );
};

export default SuccessStory;