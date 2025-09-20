
import droplet from '../../assets/images/water-droplet.webp';
import { motion } from 'framer-motion';

const Impact = () => {
  return (
    <section className="w-full min-h-[60vh] bg-[#d7e0e7] flex items-center justify-center px-2 sm:px-0">
      <motion.div
        className="w-full sm:w-[90vw] max-w-[1250px] bg-[#e4e9ed] rounded-[24px] sm:rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center justify-between px-3 xs:px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-10 md:py-8 border-2 border-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left: Current Situation */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0 md:mr-6 w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <h2 className="text-base xs:text-lg md:text-3xl font-bold text-blue-900 mb-3 xs:mb-4">Current Situation</h2>
          <p className="text-sm xs:text-base md:text-xl text-gray-700 mb-2 max-w-xl">
            Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water. This problem is increasing due to the rapidly increasing population. Poor water management has further aggravated the crisis.
          </p>
          <p className="text-sm xs:text-base md:text-xl text-gray-700 max-w-xl">
            The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria, Yemen, and Ethiopia.
          </p>
        </motion.div>
        {/* Center: Water Drop Image */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center mx-0 md:mx-8 mb-6 md:mb-0 w-full sm:w-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="relative flex items-center justify-center w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40">
            <div className="absolute w-full h-full bg-blue-200 rounded-full opacity-60" style={{zIndex:0}}></div>
            <motion.img
              src={droplet}
              alt="Water Drop"
              className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 z-10 relative"
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.05, 1, 0.98, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </motion.div>
        {/* Right: Health Impact */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-center text-center md:text-left w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <h2 className="w-full text-base xs:text-lg md:text-3xl font-bold text-blue-900 mb-3 xs:mb-4 text-justify md:text-right"> Health Impact of<br className="hidden md:block"/> contaminated water</h2>
          <p className="text-sm xs:text-base md:text-xl text-gray-700 mb-2 max-w-xl text-justify md:text-right">
            Every 33 seconds a person dies from heart disease across the worldwide and around 26,300 people die from cancer every day.
          </p>
          <p className="text-sm xs:text-base md:text-xl text-gray-700 max-w-xl text-justify md:text-right">
            Contaminated water releases harmful bacteria and micro plastics which is lead to health problems like cancer and also cause high blood pressure and heart problems.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Impact;