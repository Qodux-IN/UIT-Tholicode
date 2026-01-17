import { Facebook, Mail, Phone, X, Menu } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const Header = ({ isMenuOpen, toggleMenu }) => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contactRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!hasAnimated) {
        const tl = gsap.timeline({ 
          onComplete: () => setHasAnimated(true) 
        });

        tl.fromTo(logoRef.current,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)"
          }
        )
        .fromTo(titleRef.current,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out"
          }, "-=0.5"
        )
        .fromTo(subtitleRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.3"
        )
        .fromTo(contactRef.current,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out"
          }, "-=0.6"
        )
        .fromTo(menuButtonRef.current,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
          }, "-=0.3");

        const contactIcons = contactRef.current?.querySelectorAll('.contact-icon');
        if (contactIcons) {
          gsap.fromTo(contactIcons,
            { scale: 0, rotation: 180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.2,
              ease: "back.out(1.7)",
              delay: 1.5
            }
          );
        }
      }

    }, headerRef);

    return () => ctx.revert();
  }, [hasAnimated]);

  useEffect(() => {
    if (menuButtonRef.current) {
      const icon = menuButtonRef.current.querySelector('svg');
      gsap.to(icon, {
        rotation: isMenuOpen ? 180 : 0,
        scale: isMenuOpen ? 1.1 : 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const contactIcons = contactRef.current?.querySelectorAll('.contact-icon');
    
    if (contactIcons) {
      contactIcons.forEach(icon => {
        const handleMouseEnter = () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 10,
            borderColor: "#ef4444",
            backgroundColor: "#fee2e2",
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            borderColor: "#ef4444",
            backgroundColor: "transparent",
            duration: 0.3,
            ease: "power2.out"
          });
        };

        icon.addEventListener('mouseenter', handleMouseEnter);
        icon.addEventListener('mouseleave', handleMouseLeave);
      });
    }
  }, []);

  return (
    <div 
      ref={headerRef}
      className="flex justify-between items-center sm:px-28 px-4 sm:py-3 py-2"
    >
      <div className="flex gap-4">
        <img 
          ref={logoRef}
          className='sm:w-25 w-12' 
          src="/images/UIT-Logo.svg" 
          alt="UIT Logo" 
        />
        <div className="flex-col my-4">
          <p 
            ref={titleRef}
            className='sm:text-4xl text-xl font-serif'
          >
            UIT-THOLICODE
          </p>
          <hr className='sm:mt-2 mt-1 sm:mb-2 mb-1'/>
          <p 
            ref={subtitleRef}
            className='sm:text-lg text-[10px] text-red-500'
          >
            REGIONAL CENTRE THOLICODE,NEDUMANGAD
          </p>
        </div>
      </div>
      
      <div ref={contactRef} className="hidden lg:flex">
        <div className="flex items-center justify-center w-8 mr-2">
          <p className='rotate-270 whitespace-nowrap text-lg font-semibold'>CONTACT</p>
        </div>
        <div className="flex-col">
          <div className="flex gap-3">
            <div className="flex gap-4">
              <div className="contact-icon border-2 border-red-500 rounded-3xl p-1 cursor-pointer">
                <Mail className='text-red-500 size-5'/>
              </div>
              <p className='text-sm mt-2 underline hover:text-red-500 transition-colors cursor-pointer'>
                uittholicode@gmail.com
              </p>
            </div>
          </div>
          <hr className='mt-2'/>
          <div className="flex gap-3 mt-2">
            <div className="flex gap-4">
              <div className="contact-icon border-2 border-red-500 rounded-3xl p-1 cursor-pointer">
                <Phone className='text-red-500 size-5'/>
              </div>
              <p className='text-sm mt-2 hover:text-red-500 transition-colors cursor-pointer'>
                0472 2878944
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <button 
          ref={menuButtonRef}
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  )
}

export default Header
