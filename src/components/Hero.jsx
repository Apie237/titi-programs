import React from 'react';

const Hero = () => {
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
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Motto */}
        <div className="text-lg md:text-xl font-medium mb-4 text-yellow-300 uppercase tracking-wider">
          Truth for All
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Ministry Through 
          <span className="text-yellow-300"> Biblical Education</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Tuition-free correspondence and distance learning programs in Biblical and Theological Studies
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => scrollToSection('admission')}
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-blue-800 transition-colors duration-300"
          >
            Apply Now
          </button>
          <button 
            onClick={() => scrollToSection('programs')}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-colors duration-300"
          >
            View Programs
          </button>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm opacity-80">Tuition Free</div>
          </div>
          <div>
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm opacity-80">Faculties</div>
          </div>
          <div>
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm opacity-80">Programs</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Fast</div>
            <div className="text-sm opacity-80">Track Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;