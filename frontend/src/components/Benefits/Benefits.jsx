


const Benefits = () => {
  return (
    <div className="relative bg-[#d7e0e7] pb-10" >
      {/* Top Wave SVG */}
      <div className="absolute -top-8 left-0 right-0 w-full z-25">
        <svg 
          className="w-full h-[140px] sm:h-[280px] transform scale-y-[-1] mt-12 sm:mt-0" 
          viewBox="0 0 1440 480" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <path d="M0,0  C320,320 1120,320 1440,0" stroke="#fff" strokeWidth="16" fill="none"></path>
          <path d="M0,0  C320,320 1120,320 1440,0  L1440,480 L0,480 Z" fill="#D7E0E7" filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"></path>
        </svg>
      </div>

     <div className='max-w-7xl mx-auto bg-[#E4E9ED] shadow-lg rounded-3xl py-16 md:py-24 p-6' style={{opacity: 1, transform: 'none'}}>
         {/* Header Section */}
      <div className="mb-12 mt-12">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-primary mt-5" style={{opacity: 1, transform: 'none'}}>
          <span>Health </span>
          <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">Benefits</span>
        </h2>
        <p className="text-center mt-4 text-lg md:text-2xl font-semibold text-black bg-clip-text" style={{opacity: 1, transform: 'none'}}>
          Discover the key nutrients and their powerful effects on your health
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="max-w-7xl mx-auto mb-0 md:mb-42">
        <div className="block lg:hidden">
          <div className="flex justify-center mb-8">
            <div className="relative w-[280px] sm:w-[350px] h-[280px] sm:h-[350px]">
              <svg className="w-full h-full" viewBox="0 0 350 350">
                <defs>
                  <linearGradient id="ringGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#f8fafc',stopOpacity:1}}></stop>
                    <stop offset="100%" style={{stopColor:'#e2e8f0',stopOpacity:1}}></stop>
                  </linearGradient>
                  <filter id="ringShadowMobile" x="-30%" y="-10%" width="160%" height="160%">
                    <feDropShadow dx="-2" dy="-2" stdDeviation="2" floodColor="rgba(0,0,0,0.07)"></feDropShadow>
                    <feDropShadow dx="12" dy="18" stdDeviation="16" floodColor="rgba(0,0,0,0.22)"></feDropShadow>
                  </filter>
                </defs>
                <path d="M175 50 A125 125 0 0 1 300 175 A125 125 0 0 1 175 300 A125 125 0 0 1 50 175 A125 125 0 0 1 175 50 Z M175 90 A85 85 0 0 0 90 175 A85 85 0 0 0 175 260 A85 85 0 0 0 260 175 A85 85 0 0 0 175 90 Z" fill="url(#ringGradientMobile)" stroke="#d1d5db" strokeWidth="1" filter="url(#ringShadowMobile)"></path>
              </svg>
              
              {/* Center Lung Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 md:w-48 md:h-48 h-30 bg-white rounded-full shadow-[inset_4px_4px_12px_rgba(0,0,0,0.15),inset_-4px_-4px_12px_rgba(255,255,255,0.9),8px_8px_24px_rgba(0,0,0,0.2),-8px_-4px_24px_rgba(255,255,255,0.8)] flex items-center justify-center">
                <div className="w-20 h-20">
                  <img alt="Lung Illustration" loading="lazy" width="150" height="150" decoding="async" style={{color:'transparent'}} src="/lungs.webp" />
                </div>
              </div>

              {/* Orbiting Icons */}
              <div className="absolute inset-0">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center animate-orbit-1">
                  <img alt="Anthoxanthin" loading="lazy" width="60" height="60" decoding="async" style={{color:'transparent'}} src="/capsule.webp" />
                </div>
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center animate-orbit-2">
                  <img alt="Chlorophyll" loading="lazy" width="60" height="60" decoding="async" style={{color:'transparent'}} src="/leaf.webp" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center animate-orbit-3">
                  <img alt="Lycopene" loading="lazy" width="60" height="60" decoding="async" style={{color:'transparent'}} src="/heart.webp" />
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center animate-orbit-4">
                  <img alt="Carotenoids" loading="lazy" width="60" height="60" decoding="async" style={{color:'transparent'}} src="/vitamin.webp" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Nutrient Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="w-full rounded-md p-4 bg-white/50 backdrop-blur-sm shadow-sm">
              <h3 className="font-bold text-base mb-2 text-primary bg-clip-text">Anthoxanthin</h3>
              <div className="text-[13px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-semibold mb-1">Healthy Bone</div>
              <p className="text-xs text-black leading-relaxed">Antioxidant properties beneficial for cancer treatment and heart health. Improves blood flow and reduces oxidative stress.</p>
            </div>
            <div className="w-full rounded-md p-4 bg-white/50 backdrop-blur-sm shadow-sm">
              <h3 className="font-bold text-base mb-2 text-primary bg-clip-text">Chlorophyll</h3>
              <div className="text-[13px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-semibold mb-1">Healthy Lungs</div>
              <p className="text-xs text-black leading-relaxed">Strengthens the immune system and helps block cancer-causing chemicals. Aids in weight loss and lowers cholesterol levels.</p>
            </div>
            <div className="w-full rounded-md p-4 bg-white/50 backdrop-blur-sm shadow-sm">
              <h3 className="font-bold text-base mb-2 text-primary bg-clip-text">Lycopene</h3>
              <div className="text-[13px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-semibold mb-1">Healthy Heart</div>
              <p className="text-xs text-black leading-relaxed">Powerful antioxidant that reduces oxidative damage and inflammation. Protects against various cancers and supports heart health.</p>
            </div>
            <div className="w-full rounded-md p-4 bg-white/50 backdrop-blur-sm shadow-sm">
              <h3 className="font-bold text-base mb-2 text-primary bg-clip-text">Carotenoids</h3>
              <div className="text-[13px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-semibold mb-1">Immunity Booster</div>
              <p className="text-xs text-black leading-relaxed">Essential for vitamin A production supporting immune health. Reduces inflammation and promotes eye health while aiding hair growth.</p>
            </div>
            <div className="w-full rounded-md p-4 bg-white/50 backdrop-blur-sm shadow-sm">
              <h3 className="font-bold text-base mb-2 text-primary bg-clip-text">Anthocyanin</h3>
              <div className="text-[13px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-semibold mb-1">Healthy Brains</div>
              <p className="text-xs text-black leading-relaxed">Lowers blood pressure and reduces the risk of heart disease. Protects brain function and may slow cancer growth.</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative flex justify-center items-center">
            <div className="relative w-[400px] lg:w-[550px] h-[400px] lg:h-[550px]">
              <svg className="w-full h-full" viewBox="0 0 550 550">
                <defs>
                  <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#f8fafc',stopOpacity:1}}></stop>
                    <stop offset="100%" style={{stopColor:'#e2e8f0',stopOpacity:1}}></stop>
                  </linearGradient>
                  <filter id="ringShadow" x="-20%" y="-10%" width="160%" height="180%">
                    <feDropShadow dx="-3" dy="-3" stdDeviation="3" floodColor="rgba(0,0,0,0.0)"></feDropShadow>
                    <feDropShadow dx="24" dy="32" stdDeviation="24" floodColor="rgba(0,0,0,0.14)"></feDropShadow>
                  </filter>
                </defs>
                <path d="M275 50 A225 225 0 0 1 500 275 A225 225 0 0 1 275 500 A225 225 0 0 1 50 275 A225 225 0 0 1 275 50 Z M275 120 A155 155 0 0 0 120 275 A155 155 0 0 0 275 430 A155 155 0 0 0 430 275 A155 155 0 0 0 275 120 Z" fill="url(#ringGradient)" stroke="#d1d5db" strokeWidth="1" filter="url(#ringShadow)"></path>
              </svg>

              {/* Center Lung Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-[inset_4px_4px_12px_rgba(0,0,0,0.15),inset_-4px_-4px_12px_rgba(255,255,255,0.9),8px_8px_24px_rgba(0,0,0,0.2),-8px_-4px_24px_rgba(255,255,255,0.8)] flex items-center justify-center">
                <div className="w-32 h-32">
                  <img alt="Lung Illustration" loading="lazy" width="150" height="150" decoding="async" style={{color:'transparent'}} src="/lungs.webp" />
                </div>
              </div>

              {/* Orbiting Icons */}
              <div className="absolute inset-0">
                <div className="absolute top-12 left-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-1">
                  <img alt="Anthoxanthin" loading="lazy" width="80" height="80" decoding="async" style={{color:'transparent'}} src="/capsule.webp" />
                </div>
                <div className="absolute top-12 right-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-2">
                  <img alt="Chlorophyll" loading="lazy" width="80" height="80" decoding="async" style={{color:'transparent'}} src="/leaf.webp" />
                </div>
                <div className="absolute bottom-28 -right-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-3">
                  <img alt="Lycopene" loading="lazy" width="80" height="80" decoding="async" style={{color:'transparent'}} src="/heart.webp" />
                </div>
                <div className="absolute bottom-28 -left-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-4">
                  <img alt="Carotenoids" loading="lazy" width="80" height="80" decoding="async" style={{color:'transparent'}} src="/vitamin.webp" />
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 translate-y-0 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-5">
                  <img alt="Anthocyanin" loading="lazy" width="80" height="80" decoding="async" style={{color:'transparent'}} src="/brain.webp" />
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="20%" y1="25%" x2="35%" y2="35%" stroke="#e0e0e0" strokeWidth="1"></line>
                  <line x1="80%" y1="25%" x2="65%" y2="35%" stroke="#e0e0e0" strokeWidth="1"></line>
                  <line x1="80%" y1="70%" x2="65%" y2="65%" stroke="#e0e0e0" strokeWidth="1"></line>
                  <line x1="20%" y1="70%" x2="35%" y2="65%" stroke="#e0e0e0" strokeWidth="1"></line>
                  <line x1="50%" y1="70%" x2="50%" y2="65%" stroke="#e0e0e0" strokeWidth="1"></line>
                </svg>
              </div>
            </div>

            {/* Desktop Nutrient Cards */}
            <div className="absolute w-full h-full">
              <div className="absolute top-8 left-8 w-80 rounded-md p-5">
                <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">Anthoxanthin</h3>
                <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">Healthy Bone</div>
                <p className="text-sm text-gray-800 leading-relaxed">Antioxidant properties beneficial for cancer treatment and heart health. Improves blood flow and reduces oxidative stress.</p>
              </div>
              <div className="absolute top-8 right-8 w-80 rounded-md p-5">
                <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">Chlorophyll</h3>
                <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">Healthy Lungs</div>
                <p className="text-sm text-gray-800 leading-relaxed">Strengthens the immune system and helps block cancer-causing chemicals. Aids in weight loss and lowers cholesterol levels.</p>
              </div>
              <div className="absolute bottom-8 right-8 w-80 rounded-md p-5">
                <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">Lycopene</h3>
                <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">Healthy Heart</div>
                <p className="text-sm text-gray-800 leading-relaxed">Powerful antioxidant that reduces oxidative damage and inflammation. Protects against various cancers and supports heart health.</p>
              </div>
              <div className="absolute bottom-8 left-8 w-80 rounded-md p-5">
                <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">Carotenoids</h3>
                <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">Immunity Booster</div>
                <p className="text-sm text-gray-800 leading-relaxed">Essential for vitamin A production supporting immune health. Reduces inflammation and promotes eye health while aiding hair growth.</p>
              </div>
              <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 translate-y-24 w-80 rounded-md p-5">
                <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">Anthocyanin</h3>
                <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">Healthy Brains</div>
                <p className="text-sm text-gray-800 leading-relaxed">Lowers blood pressure and reduces the risk of heart disease. Protects brain function and may slow cancer growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>

  )
}

export default Benefits