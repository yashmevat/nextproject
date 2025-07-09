/* eslint-disable jsx-a11y/alt-text */
import React , { useEffect, useRef } from 'react'


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Section5 = () => {
      const section5ref = useRef(null)
    const section5headingref = useRef(null)
    const section5refimg = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo([section5headingref.current,section5refimg.current],
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger:0.3,
                    scrollTrigger: {
                        trigger: section5ref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },
                }
            )
            gsap.fromTo(["#list",".listitems","#meetbutton"], {
                opacity: 0, x: -100
            }, {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger:0.2,
                    scrollTrigger: {
                        trigger: section5ref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },

            })
        }, section5ref)
        


        return () => ctx.revert()
    }, [])
  return (
     <div
  id="section5"
  className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center p-5 md:p-7 gap-10"
  ref={section5ref}
>
  {/* Left Section */}
  <div
    id="section5left"
    className="w-full md:w-[50%] flex flex-col gap-10 md:gap-20 items-center md:items-start justify-center md:ml-20 text-center md:text-left"
  >
    <div>
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        ref={section5headingref}
      >
        Our company mission is to exceed expectations
      </h1>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-[70%] justify-center md:ml-10 sm:p-5">
      <ul className="list-disc text-left ">
        <li className="p-2 text-lg sm:text-xl">275+ premium section templates to mix and match</li>
        <li className="p-2 text-lg sm:text-xl">Page builder with front-end and back-end editing</li>
        <li className="p-2 text-lg sm:text-xl">Massive element library with extensive options</li>
      </ul>
      <ul className="list-disc text-left ">
        <li className="p-2 text-lg sm:text-xl">275+ premium section templates to mix and match</li>
        <li className="p-2 text-lg sm:text-xl">Page builder with front-end and back-end editing</li>
        <li className="p-2 text-lg sm:text-xl">Massive element library with extensive options</li>
      </ul>
    </div>

    <div>
      <button
        className="bg-white text-amber-600 font-bold text-lg sm:text-xl px-4 py-2 mt-4 md:ml-10 sm:text-left"
        id="meetbutton"
      >
        &#8594; Meet the team
      </button>
    </div>
  </div>

  {/* Right Section (Image) */}
  <div id="section4images" ref={section5refimg} className="w-full sm:w-[40%] h-80 sm:h-[70%] md:h-[60vh] bg-[url('http://localhost/wordpress/wp-content/uploads/2019/09/sheng-li-KC5x7jyd33U-unsplash-small.jpg')] bg-cover bg-center bg-no-repeat"/>
      
</div>

  )
}

export default Section5