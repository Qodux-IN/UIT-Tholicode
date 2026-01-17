import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { usePage } from "../contexts/PageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AcademicSection from "../components/AcademicSection";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import { FaWhatsapp } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

export default function Academics() {
  const { page, setPage } = usePage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setPage("/academics");
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      ).fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="overflow-x-hidden">
        <Header isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} setMenuOpen={setMenuOpen} />
        <AcademicSection/>
        <ChatBot/>
        <Footer/>
      </div>
      <a
            href="https://wa.me/919946667727"
            target="_blank"
            className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
          >
            <FaWhatsapp size={30} />
          </a>
    </div>
  );
}
