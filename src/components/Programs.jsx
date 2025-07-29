import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: 'Certificate',
      duration: '3 semesters (9 months)',
      creditHours: '18',
      courses: '18 courses',
      faculties: ['Christian Missions', 'Christian Ministry', 'Biblical Studies'],
      level: 'entry'
    },
    {
      title: 'Diploma',
      duration: '3-6 semesters (9-18 months)',
      creditHours: '20-60',
      courses: 'Variable',
      faculties: ['Christian Missions', 'Theology', 'Christian Ministry', 'Biblical Studies'],
      level: 'intermediate'
    },
    {
      title: 'Advanced Diploma',
      duration: '6-9 semesters (18-27 months)',
      creditHours: '60-100',
      courses: 'Variable',
      faculties: ['Christian Missions', 'Theology', 'Christian Ministry', 'Biblical Studies'],
      level: 'intermediate'
    },
    {
      title: 'Bachelor\'s Degree',
      duration: '9-12 semesters (27-36 months)',
      creditHours: '120',
      courses: 'Variable',
      faculties: ['Christian Missions', 'Theology', 'Christian Ministry', 'Christian Education', 'Biblical Studies'],
      level: 'undergraduate'
    },
    {
      title: 'Post Graduate Certificate',
      duration: '3 semesters (9 months)',
      creditHours: '60-80',
      courses: 'Variable',
      faculties: ['Christian Missions', 'Theology', 'Christian Ministry', 'Christian Education', 'Biblical Studies'],
      level: 'postgraduate'
    },
    {
      title: 'Post Graduate Diploma',
      duration: '3-6 semesters (9-18 months)',
      creditHours: '60-100',
      courses: 'Variable',
      faculties: ['Christian Missions', 'Theology', 'Christian Ministry', 'Christian Education', 'Biblical Studies'],
      level: 'postgraduate'
    },
    {
      title: 'Master\'s Degree',
      duration: '6+ semesters (18 months)',
      creditHours: '180',
      courses: 'Variable',
      faculties: ['Christian Missions', 'Theology', 'Christian Ministry', 'Christian Education', 'Christian Apologetics', 'Biblical Studies', 'Theology and Religion'],
      level: 'graduate'
    },
    {
      title: 'Doctorate/Ph.D.',
      duration: '6-12 semesters (18-36 months)',
      creditHours: '200-220',
      courses: 'Research Based',
      faculties: ['All faculties including Religion and Science'],
      level: 'doctoral'
    }
  ];

  const specialArrangements = [
    'Study for shorter periods with approved credit hours',
    'Fast-track programs - complete degrees in weeks or months',
    'Credit transfer from previous studies',
    'Individual subject certifications (e.g., Christian Counseling)',
    'Study abroad opportunities (Bachelor\'s to Ph.D.)',
    'Exam-only options for experienced students'
  ];

  const getLevelColor = (level) => {
    const colors = {
      entry: 'from-green-500 to-emerald-600',
      intermediate: 'from-blue-500 to-blue-600',
      undergraduate: 'from-purple-500 to-purple-600',
      postgraduate: 'from-orange-500 to-orange-600',
      graduate: 'from-red-500 to-red-600',
      doctoral: 'from-gray-700 to-gray-800'
    };
    return colors[level] || 'from-gray-500 to-gray-600';
  };

  const getLevelBadgeColor = (level) => {
    const colors = {
      entry: 'bg-green-100 text-green-800',
      intermediate: 'bg-blue-100 text-blue-800',
      undergraduate: 'bg-purple-100 text-purple-800',
      postgraduate: 'bg-orange-100 text-orange-800',
      graduate: 'bg-red-100 text-red-800',
      doctoral: 'bg-gray-100 text-gray-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="programs" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Academic Programs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of theological programs designed to meet your educational goals and ministry calling.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${getLevelColor(program.level)} p-6 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold leading-tight">
                    {program.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelBadgeColor(program.level)} bg-white bg-opacity-20 text-white`}>
                    {program.level}
                  </span>
                </div>
                <p className="text-sm opacity-90">
                  {program.duration}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Program Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Credit Hours:</span>
                    <span className="text-sm font-bold text-gray-800">{program.creditHours}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Courses:</span>
                    <span className="text-sm font-bold text-gray-800">{program.courses}</span>
                  </div>
                </div>

                {/* Faculties */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-bold text-gray-800 mb-2">Available Faculties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.faculties.map((faculty, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-white text-gray-700 px-2 py-1 rounded-full border"
                      >
                        {faculty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Study Arrangements */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Special Study Arrangements
              </h3>
              <p className="text-lg text-gray-700">
                Flexible options designed to accommodate your unique circumstances and learning preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialArrangements.map((arrangement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {arrangement}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm">
                <div className="text-2xl">🎓</div>
                <div>
                  <p className="font-bold text-gray-800">Ready to begin your theological journey?</p>
                  <p className="text-sm text-gray-600">Contact us to discuss the best program for your goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;