import { MoveRight } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const navigateTo = useNavigate();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50, rotationX: 45 },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1,
          ease: "power3.out"
        }
      )
      .fromTo(paragraphRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.5"
      )
      .fromTo(buttonRef.current,
        { opacity: 0, scale: 0.5, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }, "-=0.3");

      const highlights = paragraphRef.current?.querySelectorAll('span') || [];
      gsap.fromTo(highlights,
        { backgroundColor: "transparent", scale: 1 },
        {
          backgroundColor: "#dbeafe",
          scale: 1.02,
          duration: 0.4,
          stagger: 0.15,
          delay: 1.5,
          yoyo: true,
          repeat: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
          }
        }
      );

    }, containerRef);

    const button = buttonRef.current;
    if (button) {
      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          backgroundColor: "#1e3a8a",
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(button.querySelector('svg'), {
          x: 8,
          rotate: 10,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          backgroundColor: "#1e40af",
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(button.querySelector('svg'), {
          x: 0,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        ctx.revert();
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return () => ctx.revert();
  }, []);
  // <span className='font-extrabold text-blue-950'></span>
  return (
    <div ref={containerRef}>
      <div className="flex flex-col justify-center items-center max-w-3xl sm:px-15 px-8 py-10 sm:ml-20">
        <p ref={titleRef} className='sm:text-[30px] text-xl sm:font-bold font-extrabold font-serif text-[#6E260E]'>
          A FEW WORDS ABOUT US....
        </p>
        <p ref={paragraphRef} className='mt-5 sm:text-lg text-sm sm:text-justify'>
          Nestled in the serenc villagc of Tholicode (Pulimoodu) in Tholicode Panchayath, our collcge
          offers a peaccful lcarning cnvironmcnt away from the hustlc and bustle of the city. Locatcd
          just 13 kilometers from Nedumangad town, the college is surrounded by lush greenery,
          rolling hills, and the refreshing charm of nature.
          <br /><br />
          Established in 2017, the college startcd with two undcrgraduate programsB.Sc. Computer
          Science and B.Com. Commerce with Computer Applications. Committed to academic
          excellence, we provide quality cducation with modern facilities while preserving the beauty
          of our rural surroundings. The calm and pollution-free environment enhances the learning
          experience, making it an ideal place for students to grow academically and personally.
          <br /><br />
          Join us and be a part of a journey that blends knowledge with nature! 
        </p>
        <button 
          ref={buttonRef}
          onClick={() => navigateTo('/about-us')} 
          className='hover:bg-blue-900 cursor-pointer sm:text-lg text-sm  flex gap-2 mt-5 border px-25 py-3 rounded-3xl bg-blue-950 text-white items-center'
        >
          LEARN MORE<MoveRight size={16} />
        </button>
      </div> 
    </div>
  )
}

export default Section
