import React, { useState } from "react";

const Programs = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const cycles = [
    {
      title: "First Cycle",
      subtitle: "Foundation & Undergraduate Studies",
      color: "from-green-500 to-emerald-600",
      programs: [
        {
          title: "Certificate in Theology & Ministry",
          duration: "9 Months",
          credits: "30–36 Credits",
          icon: "📜",
          pdf: "/pdfs/certificate.pdf",
        },
        {
          title: "Associate Degree in Theology & Ministry",
          duration: "18 Months",
          credits: "60–66 Credits",
          icon: "🎓",
          pdf: "/pdfs/associate-degree.pdf",
        },
        {
          title: "Bachelor's Degree Programs",
          duration: "3 Years",
          credits: "120 Credits",
          icon: "🏛️",
          pdf: "/pdfs/bachelors.pdf",
        },
      ],
    },

    {
      title: "Second Cycle",
      subtitle: "Postgraduate Studies",
      color: "from-blue-500 to-indigo-600",
      programs: [
        {
          title: "Post Graduate Certificate",
          duration: "9 Months",
          credits: "60–80 Credits",
          icon: "📘",
          pdf: "/pdfs/postgraduate-certificate.pdf",
        },
        {
          title: "Post Graduate Diploma",
          duration: "12–18 Months",
          credits: "60–100 Credits",
          icon: "📗",
          pdf: "/pdfs/postgraduate-diploma.pdf",
        },
        {
          title: "Master's Degree Programs",
          duration: "18–24 Months",
          credits: "54–66 Credits",
          icon: "🎖️",
          pdf: "/pdfs/masters.pdf",
        },
      ],
    },

    {
      title: "Third Cycle",
      subtitle: "Doctoral Studies",
      color: "from-purple-600 to-pink-600",
      programs: [
        {
          title: "Doctor of Philosophy (Ph.D.)",
          duration: "3–5 Years",
          credits: "Research Based",
          icon: "👨‍🎓",
          pdf: "/pdfs/phd.pdf",
        },
      ],
    },
  ];

  const openPreview = (pdf) => {
    setSelectedPdf(pdf);
  };

  const downloadPdf = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="programs"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Academic Programs
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Academic Programs
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our programs are structured into three academic cycles designed
            to equip students with biblical knowledge, theological depth,
            practical ministry skills, and advanced research competence.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-4xl font-bold text-blue-600">3</h3>
            <p className="text-gray-600 mt-2">Academic Cycles</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-4xl font-bold text-green-600">7+</h3>
            <p className="text-gray-600 mt-2">Programs</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-4xl font-bold text-purple-600">120</h3>
            <p className="text-gray-600 mt-2">Bachelor Credits</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-4xl font-bold text-red-600">100%</h3>
            <p className="text-gray-600 mt-2">Flexible Learning</p>
          </div>
        </div>

        {/* Cycles */}
        {cycles.map((cycle, cycleIndex) => (
          <div key={cycleIndex} className="mb-20">
            {/* Cycle Header */}
            <div
              className={`bg-gradient-to-r ${cycle.color} rounded-3xl p-8 text-white mb-10`}
            >
              <h3 className="text-3xl font-bold mb-2">
                {cycle.title}
              </h3>

              <p className="text-white/90 text-lg">
                {cycle.subtitle}
              </p>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cycle.programs.map((program, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Card Header */}
                  <div
                    className={`bg-gradient-to-r ${cycle.color} p-6 text-white`}
                  >
                    <div className="text-5xl mb-4">
                      {program.icon}
                    </div>

                    <h4 className="text-xl font-bold">
                      {program.title}
                    </h4>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-500">
                          Duration
                        </span>

                        <span className="font-semibold text-gray-800">
                          {program.duration}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="font-medium text-gray-500">
                          Credits
                        </span>

                        <span className="font-semibold text-gray-800">
                          {program.credits}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => openPreview(program.pdf)}
                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
                      >
                        Preview
                      </button>

                      <button
                        onClick={() => downloadPdf(program.pdf)}
                        className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* PDF Preview Modal */}
        {selectedPdf && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">

            <div className="bg-white rounded-3xl w-full max-w-6xl h-[90vh] overflow-hidden relative">

              {/* Top Bar */}
              <div className="flex justify-between items-center p-4 border-b bg-white">
                <h3 className="font-bold text-lg">
                  Program Curriculum Preview
                </h3>

                <button
                  onClick={() => setSelectedPdf(null)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>

              {/* PDF Viewer */}
              <iframe
                src={selectedPdf}
                title="PDF Preview"
                className="w-full h-[calc(100%-80px)]"
              />

              {/* Download Floating Button */}
              <div className="absolute bottom-6 right-6">
                <button
                  onClick={() => downloadPdf(selectedPdf)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg font-semibold"
                >
                  Download PDF
                </button>
              </div>

            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Programs;

