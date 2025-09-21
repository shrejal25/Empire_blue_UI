import React from 'react';
import { motion } from 'framer-motion';
import earth from '../../assets/images/earth.webp';
import heart from '../../assets/images/heart.webp';
import star from '../../assets/images/star1.webp';
import right from '../../assets/images/right1.webp';
import setting from '../../assets/images/setting1.webp';
import beaker from '../../assets/images/beaker1.webp';

const advantages = [
  {
    icon: earth,
    title: "World's first non-expiry water",
    desc: 'Our revolutionary water that never expires, ensuring unmatched quality and freshness for decades, making it a unique choice in the modern world today.'
  },
  {
    icon: heart,
    title: 'Health benefits',
    desc: 'Unique water formulation helps prevent major health risks such as cancer and heart attacks while boosting the immune system for long-term vitality and daily wellness.'
  },
  {
    icon: star,
    title: 'Premium mineral enrichment',
    desc: 'Infused with essential minerals Newtro-X provides superior nourishment compared to regular bottled water, promoting overall health and energy all day long every day.'
  },
  {
    icon: right,
    title: 'Bacteria free',
    desc: 'Ensure that never release microplastic or harmful bacteria, keeping the water clean and perfectly safe for everyone, anywhere, with consistent purity at every single sip.'
  },
  {
    icon: setting,
    title: 'Technology',
    desc: 'Utilization of cutting edge - ultra purification and preservation methods to maintain water qualities, offering unmatched performance and innovation in safe hydration.'
  },
  {
    icon: beaker,
    title: 'Preservation',
    desc: 'With no expiry date consumers can store the product indefinitely without the risk of contamination or quality degradation reducing frequent repurcusing cost.'
  },
];

const Advantages = () => {
  return (
    <section className="w-full min-h-[60vh] bg-[#d7e0e7] flex flex-col items-center py-8 xs:py-10 sm:py-12 px-2 xs:px-4">
      <motion.h2
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 xs:mb-8 text-blue-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Competitive <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-green-400 bg-clip-text text-transparent">Advantage</span> Beyond The Ordinary
      </motion.h2>
      {/* Top 3 Advantages */}
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-6 xs:gap-8 mb-6 xs:mb-8 py-2 xs:py-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
      >
        {advantages.slice(0, 3).map((adv, i) => (
          <motion.div
            key={i}
            className="flex-1 flex flex-col items-center text-center px-2 py-4 bg-white/60 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 * i, ease: 'easeOut' }}
          >
            <img src={adv.icon} alt="" className="w-14 h-14 xs:w-16 xs:h-16 mb-3 xs:mb-4" />
            <div className="text-lg xs:text-xl md:text-2xl font-bold text-blue-900 mb-2">{adv.title}</div>
            <div className="text-gray-700 text-sm xs:text-base md:text-md">{adv.desc}</div>
          </motion.div>
        ))}
      </motion.div>
      {/* Stepper */}
      <motion.div
        className="w-full max-w-5xl mx-auto flex items-center justify-between mb-6 xs:mb-8 px-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        {advantages.slice(0, 6).map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full border-2 border-blue-900 flex items-center justify-center text-base xs:text-xl font-bold text-blue-900 bg-white">{i + 1}</div>
            </div>
            {i !== 5 && <div className="flex-1 h-1 bg-blue-900 mx-0.5 xs:mx-1 md:mx-2" />}
          </React.Fragment>
        ))}
      </motion.div>
      {/* Bottom 3 Advantages */}
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-6 xs:gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
      >
        {advantages.slice(3, 6).map((adv, i) => (
          <motion.div
            key={i}
            className="flex-1 flex flex-col items-center text-center px-2 py-4 bg-white/60 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 * i, ease: 'easeOut' }}
          >
            <img src={adv.icon} alt="" className="w-14 h-14 xs:w-16 xs:h-16 mb-3 xs:mb-4" />
            <div className="text-lg xs:text-xl md:text-2xl font-bold text-blue-900 mb-2">{adv.title}</div>
            <div className="text-gray-700 text-sm xs:text-base md:text-md">{adv.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Advantages;