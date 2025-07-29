import React, { useState } from 'react';

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('requirements');

  const admissionFeatures = [
    {
      icon: '🚪',
      title: 'Open Admission',
      description: 'Admissions are open to EVERYONE WHO IS READY TO STUDY Biblical and/or Theological Studies.',
      highlight: true
    },
    {
      icon: '📋',
      title: 'Simple Application',
      description: 'Fill out an application form manually or by phone call. We can start with just a few questions.',
      highlight: false
    },
    {
      icon: '🎓',
      title: 'Travel Assistance',
      description: 'Travel opportunities for education, work, and specific arrangements through our affiliates.',
      highlight: false
    }
  ];

  const applicationSteps = [
    {
      step: '01',
      title: 'Contact Us',
      description: 'Call (+237) 671630408 or request application materials',
      icon: '📞'
    },
    {
      step: '02',
      title: 'Choose Your Program',
      description: 'Select from Certificate to Ph.D. programs across 8 faculties',
      icon: '📚'
    },
    {
      step: '03',
      title: 'Submit Application',
      description: 'Complete application form manually or over the phone',
      icon: '📝'
    },
    {
      step: '04',
      title: 'Pay Registration',
      description: 'Pay registration fee and choose study method',
      icon: '💳'
    },
    {
      step: '05',
      title: 'Start Learning',
      description: 'Receive materials and begin your theological journey',
      icon: '🎯'
    }
  ];

  const studyOptions = [
    {
      title: 'Correspondence Studies',
      description: 'Traditional mail-based learning with physical materials',
      features: ['Physical study materials', 'Mail-based submission', 'Lower cost option', 'Self-paced learning'],
      icon: '📬',
      popular: false
    },
    {
      title: 'Distance Learning',
      description: 'Modern online learning with digital resources',
      features: ['Digital materials', 'Online submission', 'Interactive elements', 'Faster communication'],
      icon: '💻',
      popular: true
    }
  ];

  const requirements = [
    {
      category: 'General Requirements',
      items: [
        'Readiness to study Biblical and/or Theological Studies',
        'Commitment to complete chosen program',
        'Access to study materials (physical or digital)',
        'Ability to communicate in English'
      ]
    },
    {
      category: 'For Advanced Programs',
      items: [
        'Previous educational credentials (for credit transfer)',
        'Ministry experience (recommended)',
        'References (for doctoral programs)',
        'Research proposal (for Ph.D. programs)'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Do I need previous theological education?',
      answer: 'No! Our programs are open to everyone ready to study. We offer programs from beginner Certificate level to advanced Ph.D.'
    },
    {
      question: 'Can I transfer credits from other institutions?',
      answer: 'Yes, we offer credit transfer options from previous studies, which can reduce your program duration and costs.'
    },
    {
      question: 'What are the payment options?',
      answer: 'We offer flexible payment plans. You only pay registration fees and material costs - no tuition fees!'
    },
    {
      question: 'How quickly can I complete a program?',
      answer: 'With our fast-track arrangements, degrees can be completed in weeks or months, depending on your dedication and chosen program.'
    }
  ];

  const tabs = [
    { id: 'requirements', label: 'Requirements', icon: '📋' },
    { id: 'process', label: 'Application Process', icon: '🔄' },
    { id: 'options', label: 'Study Options', icon: '📚' },
    { id: 'faq', label: 'FAQ', icon: '❓' }
  ];

  return (
    <section id="admission" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Admission & Registration
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of students worldwide in advancing their theological education. Our admission process is designed to be simple and accessible to everyone.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {admissionFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`${
                feature.highlight 
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200' 
                  : 'bg-gray-50'
              } p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden`}
            >
              {feature.highlight && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  OPEN TO ALL
                </div>
              )}
              
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
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

        {/* Tabbed Content */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200 bg-white">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-0 px-4 py-4 text-center font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Requirements Tab */}
            {activeTab === 'requirements' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Admission Requirements</h3>
                  <p className="text-gray-600">Simple requirements designed to welcome everyone ready to learn.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {requirements.map((req, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        {req.category}
                      </h4>
                      <ul className="space-y-3">
                        {req.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Application Process Tab */}
            {activeTab === 'process' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Process</h3>
                  <p className="text-gray-600">Follow these simple steps to begin your theological education journey.</p>
                </div>

                <div className="relative">
                  {applicationSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                      {/* Step Number */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {step.step}
                        </div>
                        {index < applicationSteps.length - 1 && (
                          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-300"></div>
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{step.icon}</div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Study Options Tab */}
            {activeTab === 'options' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Study Method</h3>
                  <p className="text-gray-600">Select the learning approach that best fits your lifestyle and preferences.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {studyOptions.map((option, index) => (
                    <div 
                      key={index} 
                      className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 ${
                        option.popular ? 'border-blue-200' : 'border-gray-100'
                      }`}
                    >
                      {option.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                            POPULAR
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <div className="text-5xl mb-4">{option.icon}</div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h4>
                        <p className="text-gray-600">{option.description}</p>
                      </div>

                      <ul className="space-y-3">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                  <p className="text-gray-600">Find answers to common questions about our admission process.</p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-start gap-3">
                        <span className="text-blue-500 text-xl flex-shrink-0">Q:</span>
                        {faq.question}
                      </h4>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-500 text-xl flex-shrink-0">A:</span>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Don't wait! Begin your theological education today with our simple admission process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+237671630408"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                <span>📞</span>
                Call Now: (+237) 671630408
              </a>
              <div className="text-sm text-gray-600">
                <p>Or request application materials via phone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;