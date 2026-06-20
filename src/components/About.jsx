import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  const features = [
    {
      icon: assets.books,
      title: "Affordable Education",
      description:
        "Access quality theological and biblical education at an affordable cost without compromising academic excellence.",
    },
    {
      icon: assets.rocket,
      title: "Accelerated Programs",
      description:
        "Fast-track study options allow qualified students to complete programs within shorter timeframes.",
    },
    {
      icon: assets.laptop,
      title: "Flexible Learning",
      description:
        "Study on-campus, through correspondence, or online from anywhere in the world at your own pace.",
    },
    {
      icon: assets.airplane,
      title: "International Opportunities",
      description:
        "Explore study abroad opportunities, ministry exposure, and global academic partnerships.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About TITI
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The International Theological Institute
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Providing accessible, Christ-centered theological education
            through on-campus, correspondence, and distance learning
            programs designed to equip leaders for ministry and service.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                {feature.title}
              </h3>

              <p className="text-center text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main About Card */}
        <div className="bg-white rounded-3xl shadow-lg border overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-10 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Christian Leaders Worldwide
            </h3>

            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              TITI is committed to preparing spiritually mature,
              academically competent, and ministry-focused leaders
              through rigorous theological education and practical
              ministry training.
            </p>
          </div>

          {/* Content */}
          <div className="p-10">

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                We offer comprehensive theological and ministry programs
                through five specialized faculties, covering studies from
                Certificate and Associate Degree levels through Bachelor's,
                Master's, and Ph.D. programs.
              </p>

              <p className="text-lg text-gray-700">
                Our flexible study options allow students from around the
                world to pursue biblical and theological education while
                balancing ministry, work, and family responsibilities.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h4 className="text-4xl font-bold text-blue-600">
                  5
                </h4>
                <p className="text-gray-600 mt-2">
                  Faculties
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h4 className="text-4xl font-bold text-green-600">
                  3
                </h4>
                <p className="text-gray-600 mt-2">
                  Academic Cycles
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h4 className="text-4xl font-bold text-purple-600">
                  7+
                </h4>
                <p className="text-gray-600 mt-2">
                  Programs
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h4 className="text-xl md:text-2xl font-bold text-orange-600">
                  Online & Campus
                </h4>
                <p className="text-gray-600 mt-2">
                  Study Modes
                </p>
              </div>

            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Open to Everyone
                </h4>
                <p className="text-gray-600 text-sm">
                  Students from all nations and church backgrounds are welcome.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">💳</div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Flexible Payment Plans
                </h4>
                <p className="text-gray-600 text-sm">
                  Affordable tuition with flexible payment arrangements.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Credit Transfer
                </h4>
                <p className="text-gray-600 text-sm">
                  Approved credits from previous studies may be transferred.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

