import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, CheckCircle, ChevronRight, GraduationCap, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    studyMethod: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Us',
      value: '(+237) 671630408',
      description: 'Speak directly with our admissions team',
      action: () => window.open('tel:+237671630408'),
      bg: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      value: '(+237) 671630408',
      description: 'Quick chat for instant responses',
      action: () => window.open('https://wa.me/237671630408'),
      bg: 'from-green-500 to-green-600'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      value: 'Contact for details',
      description: 'Send detailed inquiries',
      action: () => window.open('tel:+237671630408'),
      bg: 'from-purple-500 to-purple-600'
    }
  ];

  const programs = [
    'Certificate (9 months)',
    'Diploma (9-18 months)',
    'Advanced Diploma (18-27 months)',
    'Bachelor\'s Degree (27-36 months)',
    'Post Graduate Certificate (9 months)',
    'Post Graduate Diploma (9-18 months)',
    'Master\'s Degree (18+ months)',
    'Doctorate/Ph.D. (18-36 months)'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', program: '', studyMethod: '', message: '' });
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ministry? Contact us now and begin your theological education journey with TITI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Contact Methods</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    onClick={method.action}
                    className="group cursor-pointer bg-gray-800 hover:bg-gray-700 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.bg} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{method.title}</h4>
                        <p className="text-lg font-semibold text-blue-400 mb-1">{method.value}</p>
                        <p className="text-sm text-gray-400">{method.description}</p>
                      </div>
                      <div className="text-gray-400 group-hover:text-white transition-colors">
                        <ChevronRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/20">
              <h4 className="text-2xl font-bold mb-6 text-white">Why Students Choose TITI</h4>
              <div className="space-y-4">
                {[
                  '100% Tuition-Free Education',
                  'Flexible Study Options',
                  'Fast-Track Programs Available',
                  'Study From Anywhere',
                  'Credit Transfer Accepted',
                  'Travel Opportunities'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Start Your Application</h3>
            <p className="text-gray-600 mb-8">Fill out this form and we'll contact you within 24 hours</p>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
                <div className="flex items-center">
                  <div className="text-green-500 text-2xl mr-3">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-green-800">Application Submitted!</p>
                    <p className="text-green-600 text-sm">We'll call you within 24 hours to discuss next steps.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Name */}
              <div>
                <div className="text-sm font-bold text-gray-700 mb-2">Full Name *</div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-lg"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <div className="text-sm font-bold text-gray-700 mb-2">Phone Number *</div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-lg"
                  placeholder="+237 XXX XXX XXX"
                />
              </div>

              {/* Email */}
              <div>
                <div className="text-sm font-bold text-gray-700 mb-2">Email (Optional)</div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-lg"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Program */}
              <div>
                <div className="text-sm font-bold text-gray-700 mb-2">Program of Interest</div>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-lg"
                >
                  <option value="">Select a program</option>
                  {programs.map((program, index) => (
                    <option key={index} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              {/* Study Method */}
              <div>
                <div className="text-sm font-bold text-gray-700 mb-3">Preferred Study Method</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setFormData({...formData, studyMethod: 'correspondence'})}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.studyMethod === 'correspondence'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        formData.studyMethod === 'correspondence' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                      } flex items-center justify-center`}>
                        {formData.studyMethod === 'correspondence' && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Correspondence</p>
                        <p className="text-xs text-gray-600">Traditional mail-based</p>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setFormData({...formData, studyMethod: 'distance'})}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.studyMethod === 'distance'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        formData.studyMethod === 'distance' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                      } flex items-center justify-center`}>
                        {formData.studyMethod === 'distance' && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Distance Learning</p>
                        <p className="text-xs text-gray-600">Digital materials</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="text-sm font-bold text-gray-700 mb-2">Additional Information</div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-900 resize-none"
                  placeholder="Tell us about your ministry background, goals, or any questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.name || !formData.phone}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <Loader className="w-6 h-6 animate-spin" />
                    Processing...
                  </div>
                ) : (
                  'Submit Application'
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                * We'll contact you within 24 hours to discuss your application
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
            <div className="text-blue-400">
              <GraduationCap className="w-12 h-12" />
            </div>
            <div className="text-left">
              <p className="text-xl font-bold text-white">Questions? Call us now!</p>
              <p className="text-blue-300">Our admissions team is ready to help</p>
            </div>
            <a
              href="tel:+237671630408"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              (+237) 671630408
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;