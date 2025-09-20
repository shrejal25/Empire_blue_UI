import React, { useState } from 'react';
import './Customers.css';

const testimonials = [
  {
    initials: 'PS',
    name: 'Priya Sharma',
    title: 'Health Coach',
    location: 'Mumbai',
    rating: 5,
    text: '"Newtro-X water has completely transformed my daily routine. The non-expiry feature is a game-changer, and I can taste the difference in purity. My clients love it too!"',
  },
  // Add more testimonials as needed
];

const stats = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '10K+', label: 'Happy Customers' },
];

const Customers = () => {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full min-h-[70vh] bg-[#f1f8fe] flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-2 text-blue-900">
        What Our <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-green-400 bg-clip-text text-transparent">Customers</span> Say
      </h2>
      <p className="text-lg md:text-lg text-gray-600 text-center mb-10 max-w-2xl">
        Don't just take our word for it. Here's what our valued customers have to say about their experience with Newtro-X.
      </p>
      {/* Carousel */}
      <div className="relative w-full max-w-3xl mx-20">
        <div className="bg-[#e4e9ed] rounded-3xl shadow-xl px-10 py-12 flex flex-col items-center relative min-h-[340px]">
          {/* Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
            ))}
          </div>
          {/* Testimonial Text */}
          <div className="text-lg italic text-gray-700 text-center mb-8">
            {testimonial.text}
          </div>
          {/* Customer Initials */}
          <div className="flex flex-col items-center mb-2">
            <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mb-2">{testimonial.initials}</div>
            <div className="text-lg font-bold text-gray-900">{testimonial.name}</div>
            <div className="text-gray-500 text-base">{testimonial.title}</div>
            <div className="text-gray-400 text-sm">{testimonial.location}</div>
          </div>
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {testimonials.map((_, idx) => (
              <span key={idx} className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-900' : 'bg-gray-300'} inline-block`}></span>
            ))}
          </div>
          {/* Left Arrow */}
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-2xl text-blue-900 hover:bg-blue-100 transition">
            <span>&#8592;</span>
          </button>
          {/* Right Arrow */}
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-2xl text-blue-900 hover:bg-blue-100 transition">
            <span>&#8594;</span>
          </button>
        </div>
      </div>
      {/* Stats Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-1 mt-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg px-10 py-2 flex flex-col items-center min-w-[160px]">
            <div className="text-2xl font-bold text-blue-900 mb-1">{stat.value}</div>
            <div className="text-gray-500 text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;