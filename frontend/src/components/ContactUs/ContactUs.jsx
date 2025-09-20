
import can1 from '../../assets/images/can1.webp';
import image from '../../assets/images/image.webp';

const ContactUs = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[#d7e0e7] flex items-center justify-center py-4 sm:py-8 relative">
      <div className="w-[95vw] sm:w-[90vw] max-w-[1120px] bg-[#e4e9ed] rounded-[20px] sm:rounded-[40px] drop-shadow-[0_0px_20px_rgba(0,0,255,0.2)] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-8 sm:py-10 lg:py-20 relative overflow-hidden">
        {/* Left: Cans Image */}
        <div className="flex-1 flex items-center justify-center mb-6 lg:mb-0 order-2 lg:order-1">
          <img 
            src={can1} 
            alt="Cans" 
            className="w-[280px] sm:w-[350px] md:w-[380px] lg:w-[480px] drop-shadow-xl" 
          />
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
          
          {/* Logo and tagline */}
          <div className="flex flex-col items-center lg:items-start mb-4">
            <img 
              src={image} 
              alt="Newtro-X Logo" 
              className="h-10 sm:h-12 lg:h-20 w-auto" 
            />
          </div>
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            World's <span className="text-blue-900">First Non-Expiry</span> Water
          </h1>
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-xl">
            Empire Blue Pvt. Ltd. We prioritize health, innovation, and sustainability we are committed to seating new industry standards and providing a safe, reliable and beneficial hydration solution for people worldwide.
          </p>
          {/* Contact Us Button */}
          <a
            href="#book"
            className="px-6 sm:px-7 py-3 bg-[#000080] text-white rounded-full font-bold text-base sm:text-lg shadow-md hover:bg-blue-800 transition flex items-center gap-2 w-fit"
          >
            Contact Us
            <span className="inline-block text-lg sm:text-xl">&rarr;</span>
          </a>
        </div>
      </div>
    


  
      {/* Bottom curve decorative element */}
      <div className="absolute bottom-10 sm:bottom-0 left-0 w-full h-[150px] sm:h-[200px] z-[1] pointer-events-none">
        <svg 
          className="w-full h-full block" 
          viewBox="0 0 1440 500" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C240,200 480,280 720,280 C960,280 1200,200 1440,0" 
            stroke="#fff" 
            strokeWidth="16" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M0,0 C240,200 480,280 720,280 C960,280 1200,200 1440,0 L1440,500 L0,500 Z" 
            fill="#D7E0E7" 
            filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
          />
        </svg>
  </div>
</section>
  );
};

export default ContactUs;