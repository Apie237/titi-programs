import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Replace these with your actual image URLs
  const slides = [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Motto */}
          <div className="text-lg md:text-xl font-medium mb-4 text-yellow-300 uppercase tracking-wider animate-fade-in">
            Truth for All
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Ministry Through 
            <span className="text-yellow-300"> Biblical Education</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Affordable Theological training and distance learning programs in Biblical and Theological Studies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('admission')}
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply Now
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Programs
            </button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">Fully</div>
              <div className="text-sm opacity-80">Affordable</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm opacity-80">Faculties</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm opacity-80">Programs</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">Fast</div>
              <div className="text-sm opacity-80">Track Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-300 w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;