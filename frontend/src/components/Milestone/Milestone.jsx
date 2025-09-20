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
    <section className="w-full min-h-[60vh] bg-[#d7e0e7] py-8 sm:py-12">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-blue-900 text-center">
          <span role="img" aria-label="trophy">🏆</span>
          <span> Our <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-green-400 bg-clip-text text-transparent">Milestone</span></span>
        </h2>
        
        {/* Mobile/Tablet Timeline View */}
        <div className="block lg:hidden space-y-6 sm:space-y-8">
          {[...milestonesTop, ...milestonesBottom].map((milestone, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-blue-500 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-sm sm:text-base font-bold text-blue-600">{years[index] || 2030 + index}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
              {index < [...milestonesTop, ...milestonesBottom].length - 1 && (
                <div className="absolute left-8 sm:left-10 top-16 sm:top-20 w-px h-6 sm:h-8 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Original Layout */}
        <div className="hidden lg:block">
          {/* Top Milestones */}
          <div className="w-full max-w-5xl mx-auto py-6 flex flex-row justify-between mb-8">
            {milestonesTop.map((m, i) => (
              <div key={i} className="flex-1 text-left">
                <div className="text-lg font-bold mb-1">{m.title}</div>
                <div className="text-lg text-gray-700">{m.desc}</div>
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
          <div className="w-full max-w-5xl mx-auto flex flex-row justify-between gap-8 py-6">
            {milestonesBottom.map((m, i) => (
              <div key={i} className="flex-1 text-left">
                <div className="text-lg font-bold mb-1">{m.title}</div>
                <div className="text-lg text-gray-700">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;