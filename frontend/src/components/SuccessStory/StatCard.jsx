

const StatCard = ({ icon, iconBg, value, label, highlight, active, onClick }) => (
  <div
    className={`group flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl px-8 py-10 min-w-[220px] min-h-[200px] mx-3 border-2 border-transparent cursor-pointer transition-all duration-200
      ${highlight ? 'bg-gradient-to-br from-blue-100 via-white to-green-100 border-blue-200' : ''}
      ${active ? 'ring-4 ring-white scale-105 z-10 -translate-y-2' : ''}
      hover:ring-2 hover:ring-white hover:scale-105 hover:z-10 hover:-translate-y-2`
    }
    onClick={onClick}
    tabIndex={0}
    role="button"
    aria-pressed={active}
  >
    <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 ${iconBg}`}>
      {icon}
    </div>
    <div className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-1">{value}</div>
    <div className="text-lg text-gray-600 font-medium text-center relative">
      {label}
      <span
        className={`block w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-green-400 mx-auto mt-2 transition-opacity duration-200
          ${(active ? 'opacity-100' : 'opacity-0')} group-hover:opacity-100`}
      ></span>
    </div>
  </div>
);

export default StatCard;
