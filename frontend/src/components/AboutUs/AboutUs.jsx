import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import about from '../../assets/images/about.webp';

const AboutUs = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });
  return (
    <section className="w-full min-h-[70vh] bg-[#d7e0e7] flex items-center justify-center">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-[90vw] max-w-[1500px] bg-[#d7e0e7] rounded-[40px] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 md:pt-20"
      >
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0 md:mr-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-900">
            About <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-green-400 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
            Empire Blue Pvt. Ltd. Established July 2025 Based on Chhindwara Madhya Pradesh is a pioneering company in the bottled water industry recognized as the world's first manufacturer of non-expiry bacteria free water bottles.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.
          </p>
          <a
            href="#about"
            className="px-10 py-4 bg-blue-900 text-white rounded-full font-bold text-lg shadow-md hover:bg-blue-800 transition flex items-center gap-2"
          >
            Learn More
            <span className="inline-block text-xl">&rarr;</span>
          </a>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img src={about} alt="About Empire Blue" className="w-[480px] h-[450px] object-cover rounded-[32px] border-8 border-white shadow-xl" />
        </div>
  </motion.div>
    </section>
  );
};

export default AboutUs;