import React from 'react';

const Faculties = () => {
  const faculties = [
    {
      name: 'Christian Ministry',
      icon: 'fas fa-cross',
      description: 'Develop practical ministry skills and pastoral leadership for effective Christian service.',
      programs: ['Certificate', 'Diploma', 'Advanced Diploma', 'Bachelor\'s', 'Master\'s', 'Ph.D.']
    },
    {
      name: 'Biblical Studies',
      icon: 'fas fa-book-open',
      description: 'Deep study of Scripture with historical, cultural, and theological perspectives.',
      programs: ['Certificate', 'Diploma', 'Advanced Diploma', 'Bachelor\'s', 'Master\'s', 'Ph.D.']
    },
    {
      name: 'Christian Missions',
      icon: 'fas fa-globe',
      description: 'Prepare for cross-cultural ministry and global evangelization efforts.',
      programs: ['Certificate', 'Diploma', 'Advanced Diploma', 'Bachelor\'s', 'Master\'s', 'Ph.D.']
    },
    {
      name: 'Theology',
      icon: 'fas fa-pray',
      description: 'Systematic study of God, faith, and religious doctrine and practice.',
      programs: ['Diploma', 'Advanced Diploma', 'Bachelor\'s', 'Master\'s', 'Ph.D.']
    },
    {
      name: 'Christian Education',
      icon: 'fas fa-chalkboard-teacher',
      description: 'Learn to teach and disciple others in Christian faith and biblical principles.',
      programs: ['Bachelor\'s', 'Master\'s', 'Ph.D.']
    },
    {
      name: 'Christian Apologetics',
      icon: 'fas fa-shield-alt',
      description: 'Defend the Christian faith through reasoned argument and intellectual discourse.',
      programs: ['Master\'s', 'Ph.D.']
    },
    {
      name: 'Theology and Religion',
      icon: 'fas fa-church',
      description: 'Comprehensive study of religious thought, practices, and comparative theology.',
      programs: ['Master\'s', 'Ph.D.']
    },
    {
      name: 'Religion and Science',
      icon: 'fas fa-atom',
      description: 'Explore the intersection of faith and scientific understanding.',
      programs: ['Ph.D.']
    }
  ];

  return (
    <section id="faculties" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Faculties
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Choose from 8 specialized faculties designed to equip you for effective ministry and service
          </p>
        </div>

        {/* Faculties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculties.map((faculty, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-l-4 border-transparent hover:border-blue-500"
            >
              {/* Icon */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className={`${faculty.icon} text-white text-2xl`}></i>
                </div>
              </div>

              {/* Faculty Name */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
                {faculty.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                {faculty.description}
              </p>

              {/* Available Programs */}
              <div className="mt-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Available Programs:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {faculty.programs.map((program, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Our Faculties?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Expert Faculty</h4>
                <p className="text-gray-600 text-sm">Learn from experienced theologians and ministry professionals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Accredited Programs</h4>
                <p className="text-gray-600 text-sm">All programs meet international theological education standards</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Personal Support</h4>
                <p className="text-gray-600 text-sm">Dedicated mentorship and guidance throughout your studies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculties;