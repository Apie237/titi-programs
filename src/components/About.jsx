import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  const features = [
    {
      icon: assets.books,
      title: 'Affordable Courses',
      description: 'Quality affordable theological education'
    },
    {
      icon: assets.rocket,
      title: 'Accelerated Programs',
      description: 'Complete your degree in weeks or months with our special study arrangements.'
    },
    {
      icon: assets.rocket,
      title: 'Flexible Learning',
      description: 'Choose between correspondence studies or distance learning to fit your schedule.'
    },
    {
      icon: assets.airplane,
      title: 'Travel Opportunities',
      description: 'Study abroad options and travel assistance for education and work opportunities.'
    }
  ];

  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About TITI
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              The International Theological Institute (TITI)
            </h3>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                An on-campus, correspondence and distance learning Biblical and theological education, 
                committed to providing quality studies.
              </p>
              <p>
                We offer comprehensive programs across 8 different faculties, from Certificate 
                level to Ph.D., with flexible study arrangements that accommodate your schedule 
                and learning preferences.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="flex items-center justify-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-gray-800">Open to Everyone</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-gray-800">Payment Plans Available</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-semibold text-gray-800">Credit Transfer Options</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;