import React from 'react';

const Infrasection = () => {
  return (
       <>
        <div className="relative bg-gradient-to-r from-blue-950 to-indigo-950 text-white py-24">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Infrastructure</h2>
            <p className="text-gray-400 text-lg">Experience our modern and resource-rich learning environment</p>
            </div>
          </div>
        </div>
        <section className="py-18 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto space-y-16">

            <div className="bg-white rounded-3xl shadow-md p-8 md:flex items-center gap-10">
              <img src="/collegeimg/Front.jfif" alt="College Front" className="rounded-2xl w-full md:w-1/2 h-64 object-cover mb-6 md:mb-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our College Offers:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Well-equipped Computer Laboratories</li>
                  <li>Advanced Academic Library</li>
                  <li>Dedicated Lab Instructors and Support Staff</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8 space-y-8">
              <h3 className="text-3xl font-bold text-green-800">Computer Lab</h3>
              <div className="md:flex items-start gap-10">
                <div className="flex-1 space-y-4">
                  <p className="text-gray-700">
                    Our computer labs are equipped with individual systems, open to all students with valid identity cards. Practical sessions support theoretical knowledge in subjects like Programming, Data Structures, and AI.
                  </p>
                  <div className="bg-green-50 rounded-xl p-4 shadow-sm">
                    <h4 className="text-green-700 font-semibold">Lab Hours</h4>
                    <p className="text-gray-600">Monday to Friday: 10:00 AM – 3:30 PM</p>
                  </div>
                </div>
                <img src="/collegeimg/college2.jpeg" alt="Computer Lab" className="rounded-2xl w-full md:w-1/2 h-64 object-cover mt-6 md:mt-0" />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8 space-y-8">
              <h3 className="text-3xl font-bold text-indigo-800">Library</h3>
              <div className="md:flex items-start gap-10">
                <div className="flex-1 space-y-4">
                  <p className="text-gray-700">
                    Our library is a hub of academic resources including books, digital media, and internet access. It supports silent study and group collaboration alike.
                  </p>
                  <div className="bg-indigo-50 rounded-xl p-4 shadow-sm">
                    <h4 className="text-indigo-700 font-semibold">Library Hours</h4>
                    <p className="text-gray-600">Monday to Friday: 10:00 AM – 3:30 PM</p>
                  </div>
                </div>
                <img src="/collegeimg/prison.jpeg" alt="Library" className="rounded-2xl w-full md:w-1/2 h-64 object-cover mt-6 md:mt-0" />
              </div>
            </div>
          </div>
        </section>
       </>
  );
};

export default Infrasection;
