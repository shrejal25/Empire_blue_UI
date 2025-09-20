import React from "react";
import img2026 from "../../assets/images/2026.webp";
import img2027 from "../../assets/images/2027.webp";
import img2028 from "../../assets/images/2028.webp";
import img2029 from "../../assets/images/2029.webp";
import img2030 from "../../assets/images/2030.webp";

const milestones = [
  {
    img: img2026,
    title: "Black Plum Premium Segment",
    desc: "Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner.",
  },
  {
    img: img2027,
    title: "Black Plum Premium Segment",
    desc: "Launch of our premium brand with enhanced minerals and benefits. Premium glass bottle packaging, professional branding.",
  },
  {
    img: img2028,
    title: "Newtro-X Project Kickoff",
    desc: "Launch of Newtro-X, our base segment brand. Introducing the world's first non-expiry water bottle.",
  },
  {
    img: img2029,
    title: "Our Vehicle Care Segment Launch",
    desc: "Introduction of DM Water (battery), Coolant, and DEF Water.",
  },
  {
    img: img2030,
    title: "Java-X Major Achievement",
    desc: "Launch of our highest premium segment brand with top enhancements. Super premium glass bottle, elite branding.",
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

        {/* Mobile/Tablet Timeline */}
        <div className="block lg:hidden space-y-8">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="flex items-start gap-4 relative">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white border-2 border-blue-500 rounded-xl flex items-center justify-center shadow-md overflow-hidden">
                  <img src={milestone.img} alt={milestone.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold mb-1">
                  {milestone.title.split(' ').map((word, i) => {
                    if (word === 'Black' || word === 'Newtro-X' || word === 'Java-X' || word === 'Our' || word === 'Vehicle' || word === 'Care') {
                      return (
                        <span key={i} className="text-blue-900">
                          {word}
                          {i !== milestone.title.split(' ').length - 1 ? ' ' : ''}
                        </span>
                      );
                    } else if (word === 'Plum') {
                      return (
                        <span key={i} className="text-blue-500">
                          {word}
                          {i !== milestone.title.split(' ').length - 1 ? ' ' : ''}
                        </span>
                      );
                    } else {
                      return word + (i !== milestone.title.split(' ').length - 1 ? ' ' : '');
                    }
                  })}
                </h3>
                <p className="text-sm text-gray-700">{milestone.desc}</p>
              </div>
              {idx < milestones.length - 1 && (
                <div className="absolute left-8 top-16 w-px h-8 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          {/* Top Milestones */}
          <div className="w-full max-w-5xl mx-auto py-6 flex flex-row justify-between mb-8">
            {milestones.slice(0, 2).map((m, i) => (
              <div key={i} className="flex-1 text-left">
                <div className="text-lg font-bold mb-1">
                  {m.title.split(' ').map((word, i) => {
                    if (word === 'Black' || word === 'Newtro-X' || word === 'Java-X' || word === 'Our' || word === 'Vehicle' || word === 'Care') {
                      return (
                        <span key={i} className="text-blue-900">
                          {word}
                          {i !== m.title.split(' ').length - 1 ? ' ' : ''}
                        </span>
                      );
                    } else if (word === 'Plum') {
                      return (
                        <span key={i} className="text-blue-500">
                          {word}
                          {i !== m.title.split(' ').length - 1 ? ' ' : ''}
                        </span>
                      );
                    } else {
                      return word + (i !== m.title.split(' ').length - 1 ? ' ' : '');
                    }
                  })}
                </div>
                <div className="text-lg text-gray-700">{m.desc}</div>
              </div>
            ))}
          </div>
          {/* Images Timeline */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-8 py-8">
            {milestones.map((m, i) => (
              <React.Fragment key={i}>
                <span className="flex items-center justify-center overflow-hidden">
                  <img src={m.img} alt={m.title} className="w-full h-full object-contain" />
                </span>
                {i !== milestones.length - 1 && <span className="text-4xl md:text-5xl text-blue-700">&#8594;</span>}
              </React.Fragment>
            ))}
          </div>
          {/* Bottom Milestones */}
          <div className="w-full max-w-5xl mx-auto flex flex-row justify-between gap-8 py-6">
            {milestones.slice(2).map((m, i) => (
              <div key={i} className="flex-1 text-left">
                <div className="text-lg font-bold mb-1">
                  {m.title.split(' ').map((word, i) => {
                    if (word === 'Black' || word === 'Plum' || word === 'Newtro-X' || word === 'Java-X' || word === 'Our' || word === 'Vehicle' || word === 'Care') {
                      return (
                        <span key={i} className="text-blue-900">
                          {word}
                          {i !== m.title.split(' ').length - 1 ? ' ' : ''}
                        </span>
                      );
                    } else if (word === 'Plum') {
                      return (
                        <span key={i} className="text-blue-800">
                          {word}
                          {i !== m.title.split(' ').length - 1 ? ' ' : ''}
                        </span>
                      );
                    } else {
                      return word + (i !== m.title.split(' ').length - 1 ? ' ' : '');
                    }
                  })}
                </div>
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