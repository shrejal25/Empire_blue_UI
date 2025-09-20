
import droplet from '../../assets/images/water-droplet.webp';
import { motion } from 'framer-motion';

const Impact = () => {
  return (
    <section className="w-full min-h-[60vh] bg-[#d7e0e7] flex items-center justify-center">
      <div className="w-[90vw] max-w-[1250px] bg-[#e4e9ed] rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-8 border-2 border-white">
        {/* Left: Current Situation */}
        <div className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0 md:mr-6">
          <h2 className="text-lg md:text-3xl font-bold text-blue-900 mb-4">Current Situation</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-2 max-w-xl">
            Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water. This problem is increasing due to the rapidly increasing population. Poor water management has further aggravated the crisis.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria, Yemen, and Ethiopia.
          </p>
        </div>
        {/* Center: Water Drop Image */}
        <div className="flex-shrink-0 flex items-center justify-center mx-0 md:mx-8 mb-8 md:mb-0">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-61 h-61 bg-blue-200 rounded-full opacity-60" style={{zIndex:0}}></div>
            <motion.img
              src={droplet}
              alt="Water Drop"
              className="w-40 h-40 z-10 relative"
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
        </div>
        {/* Right: Health Impact */}
        <div className="flex-1 flex flex-col items-start justify-center text-center md:text-left">
          <h2 className="w-100 text-lg md:text-3xl font-bold text-blue-900 mb-4 text-justify text-right"> Health Impact of<br className="hidden md:block"/> contaminated water</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-2 max-w-xl text-justify text-right">
            Every 33 seconds a person dies from heart disease across the worldwide and around 26,300 people die from cancer every day.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl text-justify text-right">
            Contaminated water releases harmful bacteria and micro plastics which is lead to health problems like cancer and also cause high blood pressure and heart problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;