import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faculties = {
  'Department of Computer Science': [
    { name: 'Athira R S', role: 'Head of the Department', photo: '/images/athira.jfif' },
    { name: 'Muhammed Roshan A', role: 'Assistant Professor', photo: '/images/roshan.png' },
    { name: 'Remya S Das', role: 'Assistant Professor', photo: '/images/remya.jfif' },
    { name: 'Rakhi Gopan R', role: 'Assistant Professor', photo: '/images/rakhi.jfif' },
    { name: 'Lekshmi P', role: 'Lab Instructor', photo: '/images/lekshmi.jfif' },
  ],
  'Department of Commerce': [
    { name: 'Chandralekha K S', role: 'Head of the Department', photo: '/images/principal.png' },
    { name: 'Reeja Vijayan', role: 'Assistant Professor', photo: '/images/reeja.jfif' },
    { name: 'Shani Raj D', role: 'Assistant Professor', photo: '/images/shani.png' },
    { name: 'Sujitha I S', role: 'Assistant Professor', photo: '/images/sujitha.png' },
  ],
};

const FacultyCard = ({ name, role, photo }) => (
  <div className="faculty-card bg-white shadow-lg rounded-2xl p-4 text-center transition duration-300 hover:shadow-2xl cursor-pointer">
    <img
      src={photo}
      alt={name}
      className="w-35 sm:w-40 h-35 sm:h-40 mx-auto rounded-full object-cover mb-4"
    />
    <h3 className="text-lg mt-3 font-semibold">{name}</h3>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

const FacultySection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(paraRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top 85%',
        },
      });

      gsap.utils.toArray('.faculty-title').forEach((title) => {
        gsap.from(title, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
          },
        });
      });

      gsap.utils.toArray('.faculty-card').forEach((card, i) => {
        gsap.from(card, {
          scale: 0.9,
          opacity: 0,
          duration: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          }
        });

        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.03, duration: 0.3, ease: 'power1.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-950 to-indigo-950 text-white">
        <div className="relative z-10 px-6 py-28 text-center">
          <h1 ref={headingRef} className="text-4xl sm:text-5xl font-bold mb-4">
            Meet Our Faculty
          </h1>
          <p ref={paraRef} className="text-lg max-w-3xl mx-auto">
            Our faculty members are highly qualified and dedicated to providing high-quality
            education, mentorship, and research guidance.
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="px-6 md:px-20 py-10 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">

          {Object.entries(faculties).map(([department, members]) => (
            <div key={department} className="mb-16">
              <div className="flex justify-center sm:justify-start">
                <h3 className="faculty-title sm:text-2xl text-xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block">
                  {department}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                {members.map((faculty, idx) => (
                  <FacultyCard key={idx} {...faculty} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FacultySection;
