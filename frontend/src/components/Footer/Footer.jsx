import React from 'react';
import './Footer.css';
import logo1 from '../../assets/images/logo1.webp';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-0 pb-8 border-b border-gray-200">
        {/* Logo and Description */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <img src={logo1} alt="Empire Blue Logo" className="h-12 w-auto" />
          </div>
          <p className="text-gray-500 text-base max-w-xs">
            Providing clean and safe water solutions <br/> for a healthier tomorrow. Our <br/> commitment to quality and innovation makes us the trusted choice in water treatment.
          </p>
          <div className="flex gap-4 mt-2 text-gray-400 text-2xl">
            <a href="#" className="hover:text-blue-900" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="#" className="hover:text-blue-900" aria-label="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
            </a>
            <a href="#" className="hover:text-blue-900" aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C19.45.425 18.277.131 17 .072 15.721.013 15.312 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="#" className="hover:text-blue-900" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/></svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#about" className="hover:text-blue-900 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-blue-900 transition">Our Services</a></li>
            <li><a href="#news" className="hover:text-blue-900 transition">Latest News</a></li>
          </ul>
        </div>
        {/* Our Services */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Water Testing</li>
            <li>Water Purification</li>
            <li>Water Treatment</li>
            <li>Expert Consultation</li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-500">
            <li className="flex items-start gap-2"><span className="text-blue-900 mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span> Empire Blue Pvt. Ltd.<br/>Chhindwara, Madhya Pradesh<br/>India</li>
            <li className="flex items-center gap-2"><span className="text-blue-900"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C7.61 21 3 16.39 3 11a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg></span> +91 8867268719</li>
            <li className="flex items-center gap-2"><span className="text-blue-900"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5v12h16V6zm-8 7L4.5 6.5h15L12 13z"/></svg></span> info@empireblue.in</li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-6 pb-2 text-gray-500 text-sm gap-2">
        <div>© 2025 Empire Blue. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-blue-900">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;