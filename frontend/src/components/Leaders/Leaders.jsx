
import sandhya from '../../assets/images/sandhya.webp';
import khobariya from '../../assets/images/1.webp';
import mukesh from '../../assets/images/2.webp';
import { motion } from 'framer-motion';

const leaders = [
  {
    img: sandhya,
    name: 'Sandhya Mahalwanshi',
    title: 'Managing Director',
  },
  {
    img: khobariya,
    name: 'U. S. Khobariya',
    title: 'Sub-Director',
  },
  {
    img: mukesh,
    name: 'Mukesh Dixit',
    title: 'CFO',
  },
];

const Leaders = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 xs:py-10 sm:py-12 bg-white px-2 xs:px-4">
      {/* Upper horizontal line */}
      <div className="w-full max-w-6xl border-t border-gray-300 mb-6 xs:mb-8"></div>
      <motion.h2
        className="text-xl xs:text-2xl md:text-3xl text-center mb-8 xs:mb-10 md:mb-12 text-blue-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Leadership Team
      </motion.h2>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
      >
        {leaders.map((leader, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center w-full max-w-xs"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 * idx, ease: 'easeOut' }}
          >
            <div className="bg-[#f5fafd] rounded-2xl shadow-xl p-1 xs:p-2 mb-0 w-full">
              <img src={leader.img} alt={leader.name} className="w-full h-[220px] xs:h-[260px] sm:h-[300px] object-cover rounded-2xl" />
            </div>
            <div className="bg-white rounded-xl shadow-lg px-3 xs:px-5 py-2 xs:py-3 -mt-8 z-10 text-center w-[90%] max-w-xs">
              <div className="text-xs xs:text-sm font-bold text-blue-900">{leader.name}</div>
              <div className="text-gray-500 text-xs xs:text-sm">{leader.title}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Leaders;