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
          stagger: 0.3,
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
        stagger: 0.2,
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
          {img:"/images/cristian-palmer-763347-unsplash-1-small-1.jpg" ,text:"Exclusive Design"},
          {img:"/images/thanai-manasathit-7rvQWFxJZKE-unsplash-small.jpg",text:"Visual Builder"},
          {img:"/images/adrian-cuj-69FRyWD5Rt0-unsplash.jpg",text:"Powerful Tools"},
          {img:"/images/jason-briscoe-5IGprlBT5g4-unsplash-small.jpg",text:"Quick Importer"}
        ].map((imgUrl, idx) => (
          // <div
          //   key={idx}
          //   className="section4images relative flex flex-col justify-end p-5 w-[90%] md:w-[22%] h-[60vh] cursor-pointer bg-cover bg-center bg-no-repeat transition-all duration-500 hover:bg-[length:110%_110%]"
          //   style={{ backgroundImage: `url(${imgUrl})` }}
          // >
          <div
            key={idx}
            className="section4images relative flex flex-col justify-end p-5 w-[90%] md:w-[22%] h-[60vh] cursor-pointer overflow-hidden">
            <img src={`${imgUrl.img}`} alt="image" className="section4imagestag w-full h-full object-cover absolute top-0 left-0" />

            <svg role="presentation" color="white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" />
            <h2 className='text-3xl md:text-4xl absolute font-bold text-white z-10 section4imagestext'>{imgUrl.text}</h2>
            <div className='bg-black bg-gradient-to-br absolute top-0 opacity-40 left-0 h-full w-full'/>
            <div className='bg-orange-400 bg-gradient-to-br absolute -bottom-[350px] left-0 h-full w-full section4overlay flex flex-col justify-end items-center'>
              <div className="text-l md:text-2xl absolute text-white bottom-10 left-15 italic overlaytext px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Section4





