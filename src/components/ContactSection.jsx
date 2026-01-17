import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      tl.from('.contact-title', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from('.contact-text', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
        }, "-=0.4")
        .from('.contact-item', {
          opacity: 0,
          x: -30,
          duration: 0.4,
          stagger: 0.2,
          ease: 'power2.out',
        }, "-=0.4")
        .from('.contact-form', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'back.out(1.5)',
        }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4 contact-title">Contact Us</h2>
          <p className="text-gray-700 mb-6 contact-text">
            We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out.
          </p>

          <div className="space-y-6 text-gray-800">
            <div className="flex items-start gap-4 contact-item">
              <MapPin className="text-blue-700 mt-1" />
              <div>
                <p className="font-semibold text-blue-800">Address</p>
                <p>UIT Tholicode, Pulimoodu, Kerala, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4 contact-item">
              <Phone className="text-blue-700 mt-1" />
              <div>
                <p className="font-semibold text-blue-800">Phone</p>
                <p>+91 9946667727</p>
              </div>
            </div>
            <div className="flex items-start gap-4 contact-item">
              <Mail className="text-blue-700 mt-1" />
              <div>
                <p className="font-semibold text-blue-800">Email</p>
                <p>uittholicode@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 contact-form">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 uppercase">Get In Touch</h2>
          <form className="space-y-6">
            {['Name', 'Email', 'Phone number', 'Message'].map((placeholder, i) =>
              placeholder === 'Message' ? (
                <textarea
                  key={i}
                  placeholder={placeholder}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-600 transition text-gray-800 placeholder-gray-500 py-2"
                ></textarea>
              ) : (
                <input
                  key={i}
                  type={placeholder === 'Email' ? 'email' : placeholder === 'Phone number' ? 'tel' : 'text'}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-600 transition text-gray-800 placeholder-gray-500 py-2"
                />
              )
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
