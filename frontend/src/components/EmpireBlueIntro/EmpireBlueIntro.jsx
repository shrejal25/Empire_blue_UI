
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import detail from '../../assets/images/detail.webp';

const EmpireBlueIntro = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });
  return (
    <section className="w-full min-h-[60vh] bg-[#d7e0e7] flex items-center justify-center pt-25">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-[90vw] max-w-[1250px] bg-[#e4e9ed] rounded-[32px] shadow-2xl flex  flex-col md:flex-row items-center justify-between gap-2 px-4 md:px-8 py-10 md:py-10 border-2 border-white"
      >
        {/* Left: Illustration */}
        <div className="flex-1 flex items-center justify-center mb-10 md:mb-0 md:mr-8">
          <img src={detail} alt="Water Drop Illustration" className="w-[380px] md:w-[420px]" />
        </div>
        {/* Right: Heading and Description */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-lg text-3xl md:text-4xl font-bold text-blue-900 mb-6">Empire Blue Pvt. Ltd.</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            Our revolutionary water technology is a groundbreaking invention that eliminates the expiration date on bottled water. By using a unique combination of innovative ingredients, we prevent reactions in bottled water—especially when exposed to sunlight—that produce microplastics and harmful bacteria. This addresses major health risks associated with bottled water, including diseases like cancer and heart disease. Our innovation not only maintains water purity and freshness for life, but also provides health benefits such as cancer prevention, heart attack protection, and boosted immunity. With a global reach, we aim to transform the water industry and provide safe drinking water to the billions of people who currently lack access.
          </p>
        </div>
  </motion.div>
    </section>
  );
};

export default EmpireBlueIntro;