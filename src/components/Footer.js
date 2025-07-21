
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Footer = ({ texts }) => {
  const footerRef = useRef(null)
  const footerHeadRef = useRef(null)
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerHeadRef.current,
        { opacity: 0, scale: 0.3 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 1.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top -40%", // when top of section hits 80% of viewport height
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      )
    }, footerRef)
 
    return () => ctx.revert()
  }, [])

  const headText = texts.filter(txt => txt.type === "text_content")[7]
  const linkText = texts.filter(txt => txt.type === "link_text")[4]

  return (
    <div id="footer" className="w-full min-h-[70vh] flex flex-col items-center bg-black px-4 py-8 gap-8" ref={footerRef}>

      {/* Upper Footer */}
      <div id="upperfooter" className="w-full md:w-[70%] flex flex-col md:flex-row justify-between items-center text-white gap-6 md:h-[20vh]">
        <h4 id="upperfootertext" className="text-2xl md:text-4xl font-bold text-center md:text-left md:w-[40%]" ref={footerHeadRef}>
          {headText?.value}
        </h4>
        <button className="bg-amber-600 text-white py-3 px-6 rounded-full text-lg md:text-xl font-medium">
          - {linkText?.value}
        </button>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gray-600 w-full md:w-[70%]"></div>

      {/* Lower Footer */}
      <div id="lowerfooter" className="w-full md:w-[70%] flex flex-col md:flex-row items-center md:items-start gap-8 text-white">

        {/* Left Side */}
        <div id="lowerfooterleft" className="w-full md:w-[40%] sm:text-left md:text-left space-y-2">
          <h4 className="text-base md:text-xl">
            © 2019 Salient WordPress Theme. Built with love in New York
          </h4>
          <h4 className="text-base md:text-xl">All rights reserved.</h4>
        </div>

        {/* Right Side */}
        <div id="lowerfooterright" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full sm:text-left md:text-left">
          <div>
            <ul className="text-base md:text-xl font-semibold flex flex-col gap-2">
              <li className="text-orange-500 mb-2 font-bold">Archives</li>
              <li className="relative group inline-block cursor-pointer">
                <a href="#july2025" className="text-white transition-colors duration-300 relative">
                  July 2025
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#September2019" className="text-white transition-colors duration-300 relative">
                  September 2019
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#July2019" className="text-white transition-colors duration-300 relative">
                  July 2019
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#April2019" className="text-white transition-colors duration-300 relative">
                  April 2019
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#March2019" className="text-white transition-colors duration-300 relative">
                  March 2019
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#February2019" className="text-white transition-colors duration-300 relative">
                  February 2019
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

            </ul>
          </div>
          <div>
            <ul className="text-base md:text-xl font-semibold flex flex-col gap-2">
              <li className="text-orange-500 mb-2 font-bold">Categories</li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#foodforthough" className="text-white transition-colors duration-300 relative">
                  <span className="relative">
                    Food for thought
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#gaming" className="text-white transition-colors duration-300 relative">
                  <span className="relative">
                    Gaming
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#Music" className="text-white transition-colors duration-300 relative">
                  <span className="relative">
                    Music
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#Uncategorized" className="text-white transition-colors duration-300 relative">
                  <span className="relative">
                    Uncategorized
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>

            </ul>
          </div>
          <div>
            <ul className="text-base md:text-xl font-semibold flex flex-col gap-2">
              <li className="text-orange-500 mb-2 font-bold">Recent Posts</li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#Helloworld" className="text-white transition-colors duration-300 relative">
                  <span className="relative">
                    Hello world!
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#Wakeupandsmelltheroses" className="text-white transition-colors duration-300 relative">
                  <span className="relative">
                    Wake up and smell the roses
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#Doingacrosscountryroadtrip" className="text-white transition-colors duration-300 relative">
                  <span className="relative">
                    Doing a cross country road trip
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>

              <li className="relative group inline-block cursor-pointer">
                <a href="#Weencounteredafoodparadise" className="text-white transition-colors duration-300 relative">
                  <span className="relative">
                    We encountered a food paradise
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer
