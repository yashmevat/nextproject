"use client"
import React, { useEffect, useRef } from 'react'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Section4 = () => {
    const section4ref = useRef(null)
    const section4headingref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                section4headingref.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger:0.3,
                    scrollTrigger: {
                        trigger: section4ref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },
                }
            )
            gsap.fromTo(".section4images", {
                opacity: 0, y: 100
            }, {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger:0.2,
                    scrollTrigger: {
                        trigger: section4ref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },

            })
        }, section4ref)



        return () => ctx.revert()
    }, [])
    return (
       <div className='flex flex-col my-28 gap-16 items-center justify-center w-full min-h-[80vh]' id="section4" ref={section4ref}>
  <div className='text-3xl md:text-5xl w-[90%] md:w-[40%] text-center font-bold' ref={section4headingref}>
    We offer a wide array of services aimed at simplifying your life
  </div>

  <div id="section4images" className='flex flex-col md:flex-row md:justify-around gap-3 p-3 items-center w-full'>
    {[
      "http://localhost/wordpress/wp-content/uploads/2019/09/cristian-palmer-763347-unsplash-1-small-1.jpg",
      "http://localhost/wordpress/wp-content/uploads/2019/09/thanai-manasathit-7rvQWFxJZKE-unsplash-small.jpg",
      "http://localhost/wordpress/wp-content/uploads/2019/09/adrian-cuj-69FRyWD5Rt0-unsplash.jpg",
      "http://localhost/wordpress/wp-content/uploads/2019/09/jason-briscoe-5IGprlBT5g4-unsplash-small.jpg",
    ].map((imgUrl, idx) => (
      <div
        key={idx}
        className="section4images relative flex flex-col justify-end p-5 w-[90%] md:w-[22%] h-[60vh] cursor-pointer bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <svg role="presentation" color="white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" />
        <h2 className='text-3xl md:text-4xl font-bold text-white z-10'>Exclusive Design</h2>
        <div className='bg-black opacity-35 bg-gradient-to-br absolute top-0 left-0 h-full w-full' />
      </div>
    ))}
  </div>
</div>

    )
}

export default Section4




 
