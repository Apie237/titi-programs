import React from 'react';

const Programs = () => {
  const cycles = {
  firstCycle: {
    title: "First Cycle (Foundation)",
    programs: [
      {
        title: "Certificate in Theology & Ministry",
        file: "/pdfs/certificate.pdf",
        duration: "9 months",
        credits: "30–36"
      },
      {
        title: "Diploma in Theology & Ministry",
        file: "/pdfs/diploma.pdf",
        duration: "9–18 months",
        credits: "20–60"
      },
      {
        title: "Advanced Diploma in Theology & Ministry",
        file: "/pdfs/advanced-diploma.pdf",
        duration: "18–27 months",
        credits: "60–100"
      }
    ]
  },

  secondCycle: {
    title: "Second Cycle (Bachelor’s Degree)",
    programs: [
      {
        title: "B.A. Biblical Studies",
        file: "/pdfs/ba-biblical-studies.pdf"
      },
      {
        title: "B.A. Theology",
        file: "/pdfs/ba-theology.pdf"
      },
      {
        title: "B.A. Missions & Intercultural Studies",
        file: "/pdfs/ba-missions.pdf"
      },
      {
        title: "B.A. Christian Education",
        file: "/pdfs/ba-education.pdf"
      },
      {
        title: "Bachelor of Christian Pastoral Ministry",
        file: "/pdfs/ba-pastoral.pdf"
      }
    ]
  },

  thirdCycle: {
    title: "Third Cycle (Postgraduate)",
    programs: [
      {
        title: "Postgraduate Certificate",
        file: "/pdfs/pg-certificate.pdf"
      },
      {
        title: "Postgraduate Diploma",
        file: "/pdfs/pg-diploma.pdf"
      },
      {
        title: "Master’s Degrees",
        file: "/pdfs/masters.pdf"
      },
      {
        title: "Doctorate / PhD",
        file: "/pdfs/phd.pdf"
      }
    ]
  }
};

const handleDownload = (file) => {
  const link = document.createElement("a");
  link.href = file;
  link.download = file.split("/").pop();
  link.click();
};

  

  return (
    <section className="py-16 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">

    {Object.values(cycles).map((cycle, i) => (
      <div key={i} className="mb-16">

        {/* Cycle Title */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          {cycle.title}
        </h2>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {cycle.programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => handleDownload(program.file)}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {program.title}
              </h3>

              {program.duration && (
                <p className="text-sm text-gray-500 mt-2">
                  Duration: {program.duration}
                </p>
              )}

              {program.credits && (
                <p className="text-sm text-gray-500">
                  Credits: {program.credits}
                </p>
              )}

              <button className="mt-4 text-blue-600 font-medium">
                Download PDF ↓
              </button>
            </div>
          ))}

        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default Programs;