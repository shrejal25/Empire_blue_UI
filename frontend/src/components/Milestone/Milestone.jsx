import React from 'react';

const milestonesTop = [
  {
    title: <><span className="text-xl font-bold text-blue-900">Black Plum</span> Premium Segment</>,
    desc: 'Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner.'
  },
  {
    title: <><span className="text-xl font-bold text-blue-900">Black Plum</span> Premium Segment</>,
    desc: 'Launch of our premium brand with enhanced minerals and benefits. Premium glass bottle packaging, professional branding.'
  },
];

const years = [2026, 2027, 2028, 2029, 2030];

const milestonesBottom = [
  {
    title: <><span className="text-xl font-bold text-blue-900">Newtro-X</span> Project Kickoff</>,
    desc: "Launch of Newtro-X, our base segment brand. Introducing the world's first non-expiry water bottle."
  },
  {
    title: <><span className="text-xl font-bold text-blue-900">Our Vehicle Care</span> Segment Launch</>,
    desc: 'Introduction of DM Water (battery), Coolant, and DEF Water.'
  },
  {
    title: <><span className="text-xl font-bold text-blue-900">Java-X</span> Major Achievement</>,
    desc: 'Launch of our highest premium segment brand with top enhancements. Super premium glass bottle, elite branding.'
  },
];

const Milestone = () => {
  return (
    <section className="w-full min-h-[60vh] bg-[#d7e0e7] py-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900 ml-30">
        <span role="img" aria-label="trophy">🏆</span>
        <span>Our <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-green-400 bg-clip-text text-transparent">Milestone</span></span>
      </h2>
      {/* Top Milestones */}
      <div className="w-full max-w-5xl ml-110 py-6 flex flex-col md:flex-row justify-between mb-8">
        {milestonesTop.map((m, i) => (
          <div key={i} className="flex-1">
            <div className="text-lg font-bold mb-1">{m.title}</div>
            <div className="text-lg text-gray-700 text-base">{m.desc}</div>
          </div>
        ))}
      </div>
      {/* Years Timeline */}
      <div className="flex items-center justify-center gap-6 md:gap-10 mb-8 py-15">
        {years.map((year, i) => (
          <React.Fragment key={year}>
            <span className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-400 to-purple-300 drop-shadow-md">{year}</span>
            {i !== years.length - 1 && <span className="text-4xl md:text-5xl text-blue-700">&#8594;</span>}
          </React.Fragment>
        ))}
      </div>
      {/* Bottom Milestones */}
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8 py-6">
        {milestonesBottom.map((m, i) => (
          <div key={i} className="flex-1">
            <div className="text-lg font-bold mb-1">{m.title}</div>
            <div className="text-lg text-gray-700 text-base">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestone;