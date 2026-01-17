import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import FacultySection from '../components/FacultySection'
import Footer from '../components/Footer'
import ChatBot from '../components/ChatBot'
import { FaWhatsapp } from 'react-icons/fa'

const Faculties = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="relative">
      <div className="overflow-x-hidden">
        <Header isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} setMenuOpen={setMenuOpen} />
        <FacultySection />
        <ChatBot />
        <Footer />
      </div>

      <a
        href="https://wa.me/919946667727"
        target="_blank"
        className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  )
}

export default Faculties
