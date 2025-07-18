import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
const Hero = ({ texts }) => {
  const herotextref = useRef(null)
  const herobtnref = useRef(null)
  const mainref = useRef(null)

  useEffect(() => {

    gsap.fromTo([herotextref.current, "#dicoverbtn"],
      { y: 100, opacity: 0 },  // start 100px below, hidden
      {
        y: 0, opacity: 1,       // move to normal position, visible
        duration: 1,
        ease: "power2.out",
        stagger: 0.5
      }
    );

  }, []);
  return (
    <div className='h-80' id="hero-section">
      <section className="flex flex-col items-center md:items-start justify-center px-6 md:px-24 py-40 text-white min-h-[60vh] md:min-h-[93vh]  md:ml-70">
        <h2
          className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl lg:w-[30%] font-bold leading-tight text-left md:text-left max-w-3xl mb-6 md:w-[60%]"
          id="herotext"
          ref={herotextref}
        >
          {texts[0]?.value}
        </h2>
        <a
          href="#get-started"
          className="group text-lg sm:text-xl px-6 py-3 bg-amber-600 text-white rounded-full font-semibold mt-4 inline-flex items-center gap-2"
          ref={herobtnref}
          id="dicoverbtn"
        >
          <span
            className="transform transition-transform duration-300 group-hover:translate-x-2 text-4xl"
          >
            &#8594;
          </span>
          {texts.filter((txt) => txt.type === 'link_text')[0]?.value}
        </a>

      </section>
    </div>
  )
}

export default Hero
