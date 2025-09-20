import React from 'react';
import excellence from '../../assets/images/excellence.svg';
import pure from '../../assets/images/pure.svg';
import eco from '../../assets/images/eco.svg';

// Card component using props
const GuaranteeCard = ({ icon, iconBg, title, description }) => (
  <div className="flex flex-col bg-[#e4e9ed] rounded-3xl shadow-xl py-5 px-8 w-full max-w-sm min-h-[220px] mx-auto">
    <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${iconBg}`}>
      <img src={icon} alt={title} className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
    <p className="w-90 text-lg text-gray-700">{description}</p>
  </div>
);

const SafeGuarantee = () => {
  const cards = [
    {
      icon: excellence,
      iconBg: 'bg-blue-100',
      title: 'Revolutionary Technology',
      description: 'Groundbreaking invention that eliminates the expiration date on bottled water',
    },
    {
      icon: pure,
      iconBg: 'bg-green-100',
      title: 'Safe & Pure',
      description: 'Ensuring lifelong freshness and health through advanced purification',
    },
    {
      icon: eco,
      iconBg: 'bg-blue-100',
      title: 'Sustainable Solution',
      description: 'Eco-friendly approach to water preservation and distribution',
    },
  ];

  return (
    <section className="w-full bg-[#e3ebf0] flex items-center justify-center py-10">
      <div className="w-[90vw] max-w-[1250px] flex flex-col md:flex-row gap-2 md:gap-10 items-stretch justify-center">
        {cards.map((card, idx) => (
          <GuaranteeCard
            key={idx}
            icon={card.icon}
            iconBg={card.iconBg}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SafeGuarantee;