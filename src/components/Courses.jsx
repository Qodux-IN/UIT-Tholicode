import React from 'react'
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigateTo = useNavigate();
  const courseData = [
    {
      title: 'B.Sc Computer Science (AI & ML)',
      image: '/students/Bsc.png',
      description:
        'A solid foundation in computer science with a focus on Artificial Intelligence and Machine Learning. Learn to build smart systems and solve real-world problems.',
    },
    {
      title: 'B.Com Commerce',
      image: '/students/Bcom.png',
      description:
        'Gain a deep understanding of business principles, financial management, and marketing strategies for a successful career in commerce.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">Our Courses</h2>
        <p className="text-gray-500 mt-3 text-lg">Empowering students with industry-relevant skills</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-10 grid-cols-1 md:grid-cols-2">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 line-clamp-4">{course.description}</p>
              <div className="mt-4 flex ">
                <button onClick={() => navigateTo('/academics')}  className="px-5 py-2 bg-blue-950 text-white rounded-full text-sm hover:bg-blue-900 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses
