import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

const ContactUs = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <div className="overflow-x-hidden">
        <Header isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} setMenuOpen={setMenuOpen} />
        <ContactSection/>
        <Footer/>
      </div>
    </div>
  )
}

export default ContactUs
