import React from 'react'

const placements = [
  { name: 'Student 1', company: 'IBM', img: '/students/student1.webp' },
  { name: 'Student 2', company: 'IBM', img: '/students/student2.jpg' },
  { name: 'Student 3', company: 'IBM', img: '/students/student3.jpg' },
  { name: 'Student 4', company: 'IBM', img: '/students/student4.jpg' },
]

const CareerCard = ({ title, careers }) => (
  <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
    {/* <div className="flex justify-center">
        <p>Career Opportunity of</p>
    </div> */}
    <h2 className="text-xl font-bold text-blue-900 mb-4">{title}</h2>
    <ul className="space-y-2 list-disc list-inside text-gray-700">
      {careers.map((career, index) => (
        <li key={index} className="hover:text-blue-800 transition-all">
          {career}
        </li>
      ))}
    </ul>
  </div>
)

const CareerContent = () => {
  return (
    <>
        <div className="relative bg-gradient-to-r from-blue-950 to-indigo-950 text-white py-24">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center">
              <h2 className="sm:text-8xl text-4xl md:text-5xl font-bold text-white mb-3">Careers</h2>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 min-h-screen px-6 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <CareerCard
              title="B.Sc. Computer Science (with ML Specialization)"
              careers={[
                'Software Developer - Design and develop applications and software solutions.',
                'Web Developer - Build and maintain websites and web applications.',
                'Data Analyst - Interpret and analyze data to assist in decision-making.',
                'Cybersecurity Analyst - Protect systems and networks from cyber threats.',
                'Cloud Engineer - Work with cloud-based technologies and infrastructure.',
                'AI & Machine Learning Engineer - Develop intelligent systems and automation solutions.',
                'IT Support & System Administrator - Manage and maintain IT infrastructure.',
                'Data Scientist - Analyze and interpret complex data for decision-making.',
                'AI Developer - Develop intelligent systems and automation solutions.',
                'IT Consultant - Provide technological solutions for businesses.',
                'Entrepreneurship - Start tech-based businesses.',
              ]}
            />

            <CareerCard
              title="B.Com. Finance with Minor in CS"
              careers={[
                'Financial Analyst - Analyze market trends for investment decisions.',
                'Accountant - Manage financial records, taxation, and audits.',
                'Banking & Insurance Professional - Handle loans, investments, and policies.',
                'FinTech Specialist - Develop digital financial applications.',
                'Data Analyst in Finance - Use analytics to improve financial strategies.',
                'Business Consultant - Optimize financial and tech operations.',
                'Tax Consultant - Provide taxation advice and planning.',
                'Investment Banker - Handle capital markets, mergers, acquisitions.',
                'Entrepreneur - Start finance-tech businesses.',
              ]}
            />
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">Student Placements</h2>
            <p className="text-center text-gray-600 mb-8">Our students have been placed at top companies.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {placements.map((student, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                      <p className="text-sm text-blue-600">Placed at {student.company}</p>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        </div>
    </>
  )
}

export default CareerContent
