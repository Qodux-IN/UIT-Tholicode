import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Carousel from '../components/CarouselImg'
import Section from '../components/Section'
import { FaWhatsapp } from 'react-icons/fa'
import ChatBot from '../components/ChatBot'
import { usePage } from '../contexts/PageContext'
import Footer from '../components/Footer'
import Courses from '../components/Courses'
import FacultyIntro from '../components/FacultyIntro'
import AdModal from '../components/AdModal'

export default function Home() {
  const { page, setPage } = usePage();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    setShowAdModal(true);

    // Show every 10 minutes
    const interval = setInterval(() => {
      setShowAdModal(true);
    }, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <AdModal isOpen={showAdModal} onClose={() => setShowAdModal(false)} />
      
      <div className="overflow-x-hidden">
        <Header isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} setMenuOpen={setMenuOpen} />
        <Carousel />
        <Section />
        <Courses />
        <FacultyIntro />
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
