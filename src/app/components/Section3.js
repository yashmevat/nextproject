"use client"

import React, { useEffect, useRef } from 'react'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Section3 = () => {
    const section3ref = useRef(null)
    const section3imgref = useRef(null)
    const section3heading = useRef(null)
    const section3text = useRef(null)
    const section3bottom = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                section3imgref.current,
                { scale: 0.2, opacity: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: section3ref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },
                }
            )
            gsap.fromTo([section3heading.current, section3text.current, section3bottom.current], {
                opacity: 0, y: 100
            }, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section3ref.current,
                    start: "top 80%", // when top of section hits 80% of viewport height
                    toggleActions: "play none none reverse",
                    // markers: true
                },

            })
        }, section3ref)

        return () => ctx.revert()
    }, [])
    return (
       <div
  className="flex flex-col items-center justify-center px-4 py-10 text-base md:flex-row md:justify-center md:items-center md:gap-x-20 md:mt-56"
  id="section-3"
  ref={section3ref}
>
  {/* Image Section */}
  <div id="section3-img" className="mb-6 md:mb-0">
    <img
      src="/images/omar-lopez-rwF_pJRWhAI-unsplash-small.jpg"
      ref={section3imgref}
      className="w-60 md:w-[40em] h-auto"
      alt="Section"
    />
  </div>

  {/* Text Section */}
  <div id="section3Text" className="flex flex-col gap-5 max-w-xl md:w-[30%]">
    <h1
      className="text-2xl font-bold md:text-4xl sm:text-left md:text-left"
      ref={section3heading}
    >
      We can take your business to the next level
    </h1>

    <p
      className="text-sm md:text-lg sm:text-left md:text-left md:w-[80%]"
      ref={section3text}
    >
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
    </p>

    <button
      className="bg-white text-amber-500 font-semibold text-sm md:text-lg px-5 py-2 rounded-full w-fit self-center md:self-start sm:text-left"
    >
      &#8594; View Services
    </button>

    <hr className="my-4 border-gray-300" />

    <div id="section3-bottomtext" ref={section3bottom}>
      <h4 className="text-xl md:text-lg font-semibold text-justify md:w-[50%]">
        “I had a great experience with Salient from start to finish.”
      </h4>

      <div
        id="section3-bottom-img"
        className="flex items-center gap-3 mt-3 sm:justify-left md:justify-start"
      >
        <img
          src="/images/david-hurley-1321290-unsplash.jpg"
          className="w-10 h-10 rounded-full object-cover"
          alt="Author"
        />
        <div className="text-left">
          <h3 className="font-bold text-sm md:text-base">Phil Martinez</h3>
          <p className="text-xs md:text-sm">Designer, Owl Eyes</p>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}

export default Section3
