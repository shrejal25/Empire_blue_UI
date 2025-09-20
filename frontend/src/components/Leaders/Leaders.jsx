import React from 'react';
import sandhya from '../../assets/images/sandhya.webp';
import khobariya from '../../assets/images/1.webp';
import mukesh from '../../assets/images/2.webp';

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
    <section className="w-full flex flex-col items-center justify-center py-12 bg-white">
      {/* Upper horizontal line */}
      <div className="w-300 border-t border-gray-300 mb-8"></div>
      <h2 className="text-2xl md:text-3xl text-center mb-12 text-blue-900">Leadership Team</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-50 w-full max-w-6xl mx-auto">
        {leaders.map((leader, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="bg-[#f5fafd] rounded-2xl shadow-xl p-2 mb-0">
              <img src={leader.img} alt={leader.name} className="w-50 h-65 object-cover rounded-2xl" />
            </div>
            <div className="bg-white rounded-xl shadow-lg px-5 py-1 -mt-8 z-10 text-center">
              <div className="text-sm font-bold text-blue-900">{leader.name}</div>
              <div className="text-gray-500 text-sm">{leader.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaders;