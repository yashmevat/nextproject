"use client"
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
export default function Header({texts}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navref = useRef(null)
  const herotextref = useRef(null)
  const navlistref = useRef(null)
  const navimgref = useRef(null)
  const herobtnref = useRef(null)
  const svgref = useRef(null)
  const mainref = useRef(null)


  useEffect(() => {

    gsap.to(navref.current, {
      backgroundColor: 'white',
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: 'top -10px',
        toggleActions: 'play none none reverse',
      },
    })
    gsap.to(navlistref.current, {
      color: 'black',
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: 'top -10px',
        toggleActions: 'play none none reverse',
        // markers: true // (Optional) shows visual debug markers
      },
    })

     // Hamburger icon color change
  gsap.to(svgref.current, {
    stroke: 'black',
    duration: 0.5,
    scrollTrigger: {
      trigger: document.body,
      start: 'top -10px',
      toggleActions: 'play none none reverse',
    },
  });

  
    gsap.to(navimgref.current, {
      src: '/images/dark.png',
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: 'top -10px',
        onEnter: () => {
          if (navimgref.current) navimgref.current.src = '/images/dark.png' // New image on scroll
        },
        onLeaveBack: () => {
          if (navimgref.current) navimgref.current.src = '/images/light.png' // New image on scroll
        },
        toggleActions: 'play none none reverse',
        // markers: true // (Optional) shows visual debug markers
      },

    })

  }, []);


  return (
     <>
      {/* Navbar */}
          <div className="fixed top-0 left-0 w-full z-50">
            <nav
              className="flex justify-between items-center px-6 py-4 md:px-12 md:justify-around text-white relative"
              ref={navref}
            >
              {/* Logo */}
              <img
                src="/images/light.png"
                className="w-28 h-auto"
                ref={navimgref}
                alt="Logo"
              />

              {/* Desktop Nav */}
              <ul
                className="hidden md:flex space-x-8 font-medium text-lg"
                ref={navlistref}
              >
                <li className="relative group">
                  <a href="#home" className=" transition-colors">
                    Home
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>

                 <li className="relative group">
                  <a href="#features" className=" transition-colors">
                    Features
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>

                 <li className="relative group">
                  <a href="#Pricing" className=" transition-colors">
                    Pricing
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>

                 <li className="relative group">
                  <a href="#Contact" className=" transition-colors">
                    Contact
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                </ul>

              {/* Hamburger Button */}
              <button
                className="md:hidden z-50"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen)
                  // shiftleft()
                }}
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-8 h-8 "
                  fill="none"
                  stroke="#ffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={svgref}
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Mobile Slide-In Menu */}
              <div
                className={`
                            fixed top-0 right-0 h-full w-[70%] bg-orange-500 text-white transform transition-transform duration-600 ease-in-out
                            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                            md:hidden flex flex-col items-start px-6 py-20 space-y-2 font-medium text-lg
                          `}
              >
                <a href="#home" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#features" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#pricing" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                <a href="#contact" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Contact</a><br /><br />
                <div id="text-3" className="widget widget_text">			<div className="textwidget"><h4>About Salient</h4><br />
                  <div className="textwidget">
                    <p className='text-lg'>The Castle<br />
                      Unit 345<br />
                      2500 Castle Dr<br />
                      Manhattan, NY</p><br />
                    <p>T:&nbsp;<a href="http://themenectar.com/demo/salient-ascend/#">+216 (0)40 3629 4753</a><br />
                      E:&nbsp;<a href="http://themenectar.com/demo/salient-ascend/#">hello@themenectar.com</a></p>
                  </div>
                </div>
                </div>
              </div>
            </nav>
          </div>

     </>
  );
}
