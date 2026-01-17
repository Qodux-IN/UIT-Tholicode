import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Mail, Phone, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, toggleMenu, setMenuOpen }) => {
  const location = useLocation();
  const navigateTo = useNavigate();
  const currentPath = location.pathname.toLowerCase();

  const desktopNavRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileMenuContentRef = useRef(null);
  const mobileMenuItemsRef = useRef([]);

  const menuItems = [
    { label: 'HOME', value: '/' },
    { label: 'ABOUT US', value: '/about-us' },
    { label: 'ACADEMICS', value: '/academics' },
    { label: 'FACULTIES', value: '/faculties' },
    { label: 'INFRASTRUCTURE', value: '/infrastructure' },
    { label: 'ADMISSION', value: '/admission' },
    { label: 'CAREERS', value: '/careers' },
    { label: 'FYUGP', value: '/fyugp' },
    { label: 'CONTACT US', value: '/contact-us' },
  ];

  const handleNavigation = (item) => {
    if (item.label === 'ADMISSION') {
      window.open('https://admissions.keralauniversity.ac.in/', '_blank');
      return;
    }
    navigateTo(item.value);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (desktopNavRef.current) {
      gsap.fromTo(
        desktopNavRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current && mobileMenuContentRef.current) {
      const tl = gsap.timeline({ paused: true });

      tl.to(mobileMenuRef.current, { opacity: 1, duration: 0.3 }, 0);
      tl.to(mobileMenuContentRef.current, { x: 0, duration: 0.4 }, 0);
      tl.fromTo(
        [
          mobileMenuContentRef.current.querySelector('.contact-info-section'),
          mobileMenuItemsRef.current,
        ],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.3 },
        0.2
      );

      if (isMenuOpen) {
        gsap.set(mobileMenuRef.current, { display: 'block', opacity: 0 });
        gsap.set(mobileMenuContentRef.current, { x: '100%' });
        tl.play();
      } else {
        tl.reverse();
        tl.eventCallback('onReverseComplete', () => {
          gsap.set(mobileMenuRef.current, { display: 'none' });
        });
      }
    }
  }, [isMenuOpen]);

  return (
    <div>
      <div className="hidden lg:block px-4 md:px-30 py-2 w-screen bg-gradient-to-r from-blue-950 to-neutral-900">
        <ul className="flex justify-between text-white text-md font-semibold" ref={desktopNavRef}>
          {menuItems.map((item) => (
            <li
              key={item.value}
              onClick={() => handleNavigation(item)}
              className={`cursor-pointer hover:text-blue-200 transition-colors ${
                currentPath === item.value ? 'text-blue-200' : ''
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="hidden fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={toggleMenu}
          style={{ display: 'none', opacity: 0 }}
        >
          <div
            ref={mobileMenuContentRef}
            className="absolute top-0 right-0 w-80 h-full bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4 border-b">
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>

            <div className="p-4 contact-info-section bg-gray-50 border-b">
              <h3 className="font-semibold text-gray-800 mb-3">Connect with us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="border-2 border-red-500 rounded-full p-1">
                    <Mail className="text-red-500 size-4" />
                  </div>
                  <p className="text-sm text-gray-700">uittholicode@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="border-2 border-red-500 rounded-full p-1">
                    <Phone className="text-red-500 size-4" />
                  </div>
                  <p className="text-sm text-gray-700">0472 2878944</p>
                </div>
              </div>
            </div>

            <ul className="overflow-y-auto py-2">
              {menuItems.map((item, index) => (
                <li
                  key={item.value}
                  ref={(el) => (mobileMenuItemsRef.current[index] = el)}
                  className={`px-4 py-3 border-b text-gray-700 cursor-pointer hover:bg-blue-50 ${
                    currentPath === item.value ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' : ''
                  }`}
                  onClick={() => handleNavigation(item)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
