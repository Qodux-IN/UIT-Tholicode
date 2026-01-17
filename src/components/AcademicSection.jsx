import React, { useState } from 'react';
import { ChevronRight,Code, Calculator, } from 'lucide-react';

const AcademicSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-r from-blue-950 to-indigo-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center">
            <h1 className="sm:text-6xl text-4xl md:text-7xl font-semibold mb-6 tracking-tight">
              ACADEMICS
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 relative ">
        <section className="bg-white rounded-2xl shadow-2xl p-12 mb-16 border border-gray-100">
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Since its established in 2017, our college has been offering B.Sc.Computer Science and B.Com. Commerce with Computer Application providing students with a strong academic foundation and practical skills.
              </p>
              <p className="text-lg leading-relaxed">
                Education Policy (NEP) 2020, we introduced In 2024, in alignment with the National students to specialize in their chosen fields. four-year undergraduate programs, allowing With this upgrade, we now offer
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:p-8 p-5">
              <h3 className="sm:text-xl text-2xl font-semibold text-blue-900 mb-6">Our Programs</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Code className="sm:w-5 w-20 sm:h-5 h-20 text-blue-600" />
                  <span>B.Sc. Computer Science (Specialization in Machine Learning)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calculator className="sm:w-5 w-20 sm:h-5 h-20 text-green-600" />
                  <span>B.Com. Finance with a Minor in Computer Science</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-gray-700 text-lg">
            <p>
              These new programs equip students with advanced knowledge and skills, enhancing their career prospects in emerging fields.
            </p>
            <p>
              At our college, we are committed to fostering academic excellence, innovation, and holistic development while preserving the natural beauty and cultural essence of our rural surroundings. Our students benefit from a technology-driven learning environment, dedicated faculty, and an ecosystem that nurtures creativity and critical thinking
            </p>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Courses We offer</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="group">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="sm:w-16 sm:h-16 w-12 h-8 bg-white/20 sm:rounded-2xl rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Code className="sm:w-8 sm:h-8 w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="sm:text-2xl text-xl font-bold text-white">B.Sc. Computer Science</h4>
                      <p className="text-blue-100 sm:text-sm text-xs">Specialization in Machine Learning</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveSection(activeSection === 'cs' ? null : 'cs')}
                    className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className={`w-6 h-6 text-white transition-transform ${activeSection === 'cs' ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The B.Sc. Computer Science (Specialization in Machine Learning) program is designed to provide students with a strong foundation in computer science along with in-depth knowledge of machine learning and artificial intelligence. This four-year undergraduate program, introduced in 2024 under NEP 2020, equips students with the skills needed to analyze data, develop intelligent systems, and solve real-world problems using cutting-edge technologies.
                </p>

                {activeSection === 'cs' && (
                  <div className="space-y-8 animate-in slide-in-from-top duration-300">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <p className="font-semibold text-blue-800 mb-4">Key Highlights</p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                          <li>Core subjects in Computer Science, including Programming, Data Structures, and Algorithms.</li>
                          <li>Specialized courses in Machine Learning, Deep Learning, and Data Science.</li>
                          <li>Hands-on experience with Python, TensorFlow, and AI-based projects.</li>
                          <li>Exposure to real-world applications of AI in healthcare, finance, and automation.</li>
                          <li>Internship and research opportunities to enhance industry readiness.</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-2xl p-6">
                        <p className="font-semibold text-blue-800 mb-4">Career Opportunities</p>
                        <p className="text-gray-700 mb-4">
                          Graduates of B.Sc. Computer Science have a wide range of career opportunities in both IT and non-IT sectors. Some popular job roles include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                          <li>Software Developer - Design and develop applications and software solutions.</li>
                          <li>Web Developer - Build and maintain websites and web applications.</li>
                          <li>Data Analyst - Interpret and analyze data to assist in decision-making</li>
                          <li>Cybersecurity Analyst - Protect systems and networks from cyber threats.</li>
                          <li>Cloud Engineer - Work with cloud-based technologies and infrastructure.</li>
                          <li>AI & Machine Learning Engineer - Develop intelligent systems and automation solutions.</li>
                          <li>IT Support & System Administrator - Manage and maintain IT infrastructure.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                      <p className="text-gray-700 mb-6">
                        Our college provides high-quality education, expert faculty, state-of-the-art labs, and hands-on experience to ensure that students are industry-ready. With a focus on both theoretical knowledge and practical application, we prepare our students to excel in the competitive world of technology. Join us and take the first step toward a rewarding career in Computer Science!
                      </p>
                      <p className="text-gray-700 mb-6">
                        This program prepares students for careers as Machine Learning Engineers, Data Scientists, AI Developers, and Software Engineers, with opportunities for higher studies in Artificial Intelligence and related fields.
                      </p>
                      <p className="text-blue-900 font-medium text-lg">Join us to explore the future of intelligent computing!</p>
                    </div>

                    <div className="bg-white border-2 border-blue-100 rounded-2xl p-8">
                      <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <div className="flex items-center justify-center text-white text-xl font-bold ">
                          <div className="flex flex-col items-center">
                            <img className='w-32 h-32  rounded-full shadow-lg shadow-blue-500 mb-4' src="/images/athira.jfif" alt="" />
                            <p className="text-lg font-bold text-blue-900 ">Athira R S</p>
                            <p className='text-xs text-gray-400'>Head of the Department</p>
                          </div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <p className="text-gray-700 leading-relaxed italic">
                            "Welcome to the Department of Computer Science! In today's digital age, computer science plays a vital role in shaping the future. Our department is committed to providing a comprehensive education that blends theoretical knowledge with hands-on experience. With a focus on artificial intelligence, machine learning, and software development, we ensure that our students are well-prepared for the challenges of the tech industry. We invite you to join us on this exciting journey of learning and innovation!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="group mb-10">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="sm:w-16 sm:h-16 w-12 h-9 bg-white/20 sm:rounded-2xl rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Calculator className="sm:w-8 sm:h-8 w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="sm:text-2xl text-xl font-bold text-white">B.Com. Finance</h4>
                      <p className="text-green-100 sm:text-sm text-xs">with Minor in Computer Science</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveSection(activeSection === 'commerce' ? null : 'commerce')}
                    className="bg-white/20 p-3  rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className={`w-6 h-6 text-white transition-transform ${activeSection === 'commerce' ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <p className="text-xl font-semibold text-blue-800 mb-4">B.Com. Finance with Minor in Computer Science</p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The B.Com. Finance with Minor in Computer Science program is designed to provide students with a strong foundation in financial management, accounting, and business operations, along with essential computer science skills. This unique combination prepares students for careers in finance, banking, fintech, and data-driven business management.
                </p>

                {activeSection === 'commerce' && (
                  <div className="space-y-8 animate-in slide-in-from-top duration-300">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-green-50 rounded-2xl p-6">
                        <p className="font-semibold text-blue-800 mb-4">Course Highlights</p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                          <li>Core subjects in Accounting, Financial Management, Investment Analysis, and Taxation.</li>
                          <li>Minor in Computer Science, covering Programming, Data Analytics, and Financial Technology (FinTech).</li>
                          <li>Hands-on training in business analytics, digital banking, and accounting software.</li>
                          <li>Practical exposure through internships, case studies, and financial modeling.</li>
                          <li>Industry-relevant skills in data-driven decision-making and business automation.</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 rounded-2xl p-6">
                        <p className="font-semibold text-blue-800 mb-4">Career Opportunities</p>
                        <p className="text-gray-700 mb-4">
                          Graduates of B.Com. Finance with Minor in Computer Science have diverse career prospects in both finance and technology-driven industries. Some potential job roles include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                          <li>Financial Analyst - Analyze market trends and help businesses make investment decisions.</li>
                          <li>Accountant - Manage financial records, taxation, and audits.</li>
                          <li>Banking & Insurance Professional - Work in financial institutions managing loans, investments, and policies.</li>
                          <li>FinTech Specialist - Develop and manage digital payment systems and financial applications.</li>
                          <li>Data Analyst in Finance - Use data science and analytics to improve financial strategies.</li>
                          <li>Business Consultant - Help organizations optimize financial and technological operations.</li>
                          <li>Tax Consultant - Provide expertise in taxation laws and financial planning.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                      <p className="text-gray-700 mb-4">
                        Graduates can also pursue higher studies like M.Com., MBA (Finance), CA, CFA, and Data Science in Finance, leading to advanced career opportunities.
                      </p>
                      <p className="font-semibold text-blue-800 mb-3">Why Choose Us?</p>
                      <p className="text-gray-700 mb-6">
                        Our college offers a well-balanced curriculum that integrates finance and technology, preparing students for the digital transformation in the financial sector. With expert faculty, industry exposure, and modern learning resources, we ensure that our students are career-ready and equipped with future-proof skills. Join us and shape your future in finance and technology!
                      </p>
                      <p className="text-blue-900 font-medium text-lg">Join us to explore the future of Business</p>
                    </div>

                    <div className="bg-white border-2 border-green-100 rounded-2xl p-8">
                      <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <div className="flex items-center justify-center text-white text-xl font-bold ">
                          <div className="flex flex-col items-center">
                            <img className='w-32 h-32  rounded-full shadow-lg shadow-emerald-300 mb-4' src="/images/principal.png" alt="" />
                            <p className="text-lg font-bold text-blue-900 ">Chandralekha K S</p>
                            <p className='text-xs text-gray-400'>Head of the Department</p>
                          </div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <p className="text-gray-700 leading-relaxed italic">
                            "Welcome to the Department of Commerce! Finance plays a crucial role in every business, and with the rise of technology, finance professionals need digital skills too. Our program blends finance with computer science, giving students the knowledge and tools to succeed in modern finance careers. We focus on practical learning, industry exposure, and skill development to prepare students for banking, investment, and financial technology roles. Join us to build a strong foundation for a successful future in finance!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicSection;