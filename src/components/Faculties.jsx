import React from 'react';

const Faculties = () => {
  // Consolidating to the 5 primary faculties
  const faculties = [
  {
    name: "Faculty of Biblical Studies",
    icon: "fas fa-book-bible",
    description:
      "Dedicated to rigorous engagement with Scripture, equipping students with exegetical competence, theological clarity, and faithful interpretive skills for preaching, teaching, research, and advanced scholarship.",
    disciplines: [
      "Biblical Studies",
      "Old Testament Studies",
      "New Testament Studies",
      "Biblical Languages"
    ],
    programs: [
      "Bachelor's",
      "Master's",
      "Ph.D."
    ]
  },

  {
    name: "Faculty of Theological Studies",
    icon: "fas fa-scroll",
    description:
      "Focused on the systematic, historical, and philosophical exploration of Christian doctrine, preparing students for leadership, teaching, theological reflection, and advanced research.",
    disciplines: [
      "Systematic Theology",
      "Historical Theology",
      "Philosophical Theology"
    ],
    programs: [
      "Bachelor's",
      "Master's",
      "Ph.D."
    ]
  },

  {
    name: "Faculty of Christian Ministry",
    icon: "fas fa-church",
    description:
      "Equips students for Spirit-led leadership in churches and Christian organizations through practical ministry training, pastoral care, counseling, discipleship, and church administration.",
    disciplines: [
      "Pastoral Ministry",
      "Practical Theology",
      "Christian Counseling",
      "Leadership & Church Administration"
    ],
    programs: [
      "Certificate",
      "Associate Degree",
      "Bachelor's",
      "Master's",
      "Ph.D."
    ]
  },

  {
    name: "Faculty of Missions & Intercultural Studies",
    icon: "fas fa-globe-africa",
    description:
      "Prepares students for effective gospel ministry across cultures through missions training, church planting, intercultural communication, contextualization, and global leadership.",
    disciplines: [
      "Missiology",
      "Intercultural Studies",
      "Global Christianity"
    ],
    programs: [
      "Certificate",
      "Associate Degree",
      "Bachelor's",
      "Master's"
    ]
  },

  {
    name: "Faculty of Christian Education",
    icon: "fas fa-graduation-cap",
    description:
      "Committed to preparing spiritually mature and pedagogically competent leaders for discipleship, teaching ministries, curriculum development, and educational leadership.",
    disciplines: [
      "Christian Education",
      "Religious Education",
      "Educational Leadership"
    ],
    programs: [
      "Bachelor's",
      "Master's",
      "Ph.D."
    ]
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
            Choose from 5 specialized faculties designed to equip you for effective ministry, leadership, and service.
          </p>
        </div>

        {/* Faculties Grid - Optimized for 5 items (3 on top row, 2 centered below on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {faculties.map((faculty, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-l-4 border-transparent hover:border-blue-500 flex flex-col justify-between"
            >
              <div>
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
              </div>

              {/* Available Programs */}
              <div className="mt-4 pt-4 border-t border-gray-100">
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
                <h4 className="font-bold text-gray-800 mb-2"> Faculty</h4>
                <p className="text-gray-600 text-sm">Learn from experienced theologians and ministry professionals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Curriculum</h4>
                <p className="text-gray-600 text-sm">Curriculum is in line with international standards</p>
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