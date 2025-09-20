
const Dots = () => (
  <div className="flex flex-col gap-1">
    <div className="flex gap-1">
      <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
      <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
    </div>
    <div className="flex gap-1 ml-2 mt-1">
      <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
      <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
    </div>
    <div className="flex gap-1 ml-4 mt-1">
      <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
      <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
    </div>
  </div>
);

const BookNow = () => {
  return (
    <section className="w-full min-h-[50vh] bg-[#d7e0e7] flex items-center justify-center py-15">
      <div className="relative w-[100vw] max-w-5xl bg-[#ecf1f5] rounded-3xl shadow-lg flex flex-col items-center justify-center px-30 md:px-30 py-16">
        {/* Top Left Dots */}
        <div className="absolute top-6 left-6"><Dots /></div>
        {/* Top Right Dots */}
        <div className="absolute top-6 right-6"><Dots /></div>
        {/* Bottom Left Dots */}
        <div className="absolute bottom-6 left-6"><Dots /></div>
        {/* Bottom Right Dots */}
        <div className="absolute bottom-6 right-6"><Dots /></div>

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-2 taxt-blue-900">
          Take the <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-green-400 bg-clip-text text-transparent">Next Step</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Towards Better Health</h3>
        <p className="text-lg md:text-lg text-gray-600 text-center mb-10 max-w-3xl">
          Empire Blue Operates in the growing health and wellness market health conscious individuals seeking natural solutions for disease prevention and immune support with increasing awareness of health risks like cancer and heart disease demand for mineral based supplements in mineral water Ready to experience our exceptional innovative water? book your first can today and discover how we can help you live your healthiest life.
        </p>
        <a
          href="#book"
          className="px-10 py-4 bg-blue-900 text-white rounded-full font-bold text-lg shadow-md hover:bg-blue-800 transition mt-2"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default BookNow;