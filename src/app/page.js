"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ModernCarousel from './components/ModernCarousel';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import VideoSection from './components/VideoSection';
import TeamSection from './components/TeamSection';
import SalientSection from './components/SalientSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const navref = useRef(null)
  const herotextref = useRef(null)
  const navlistref = useRef(null)
  const navimgref = useRef(null)
  const herobtnref = useRef(null)
  useEffect(() => {

    gsap.to(navref.current, {
      backgroundColor: 'white',
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: 'top -10px',
        toggleActions: 'play none none reverse',
        // markers: true // (Optional) shows visual debug markers
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
    gsap.to(navimgref.current, {
      src: 'http://localhost/wordpress/wp-content/uploads/2019/09/dark.png',
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: 'top -10px',
        onEnter: () => {
          if (navimgref.current) navimgref.current.src = 'http://localhost/wordpress/wp-content/uploads/2019/09/dark.png' // New image on scroll
        },
        onLeaveBack: () => {
          if (navimgref.current) navimgref.current.src = 'http://localhost/wordpress/wp-content/uploads/2019/09/light.png' // New image on scroll
        },
        toggleActions: 'play none none reverse',
        // markers: true // (Optional) shows visual debug markers
      },

    })
    gsap.fromTo([herotextref.current,"#dicoverbtn"],
      { y: 100, opacity: 0 },  // start 100px below, hidden
      {
        y: 0, opacity: 1,       // move to normal position, visible
        duration: 1,
        ease: "power2.out",
        stagger:0.5
      }
    );

    

  }, []);
  return (
    <>
     <div
  className="relative min-h-[40vh] md:min-h-[93vh] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('http://localhost/wordpress/wp-content/uploads/2019/09/kai-pilger-mgFzfrrmGKI-unsplash.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45 z-0" />

  {/* Content Above Background */}
  <div className="relative z-10">

    {/* Navbar */}
    <div className="fixed top-0 left-0 w-full z-50">
      <nav
        className="flex justify-between items-center px-6 py-4 md:px-12 md:justify-around text-white"
        ref={navref}
      >
        <img
          src="http://localhost/wordpress/wp-content/uploads/2019/09/light.png"
          className="w-28 h-auto"
          ref={navimgref}
          alt="Logo"
        />
        <ul
          className="hidden md:flex space-x-8 font-medium text-lg"
          ref={navlistref}
        >
          <li><a href="#home" className="hover:text-amber-400">Home</a></li>
          <li><a href="#features" className="hover:text-amber-400">Features</a></li>
          <li><a href="#pricing" className="hover:text-amber-400">Pricing</a></li>
          <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
        </ul>
      </nav>
    </div>

    {/* Hero Section */}
    <section className="flex flex-col items-center md:items-start justify-center px-6 md:px-24 py-40 text-white min-h-[40vh] md:min-h-[93vh]  md:ml-70">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left md:text-left max-w-3xl mb-6 md:w-[40%]"
        id="herotext"
        ref={herotextref}
      >
        Breathing life into brands through stunning design
      </h2>
      <a
        href="#get-started"
        className="text-lg sm:text-xl px-6 py-3 bg-amber-600 text-white rounded-full font-semibold mt-4 "
        ref={herobtnref}
        id="dicoverbtn"
      >
        &#8594; Discover More
      </a>
    </section>

  </div>
</div>



      {/* Section 3*/}
     <Section3/>
      {/* section 4 */}
     <Section4/>

      {/*section 5*/}

     <Section5/>


      {/*section video*/}


      <VideoSection/>

      {/*team section*/}

      <TeamSection/>

      {/* corousel section*/}


      <section className="min-h-screen flex items-center justify-center flex-col ">
        <div className='md:w-[40vw] w-[90vw] my-30'>
          <h1 className='font-bold md:text-5xl text-2xl text-center'>A vibrant work culture that flows with creativity is our secret</h1></div>
        <ModernCarousel />
      </section>

      {/*salient section*/}
      <SalientSection/>

      {/* last section or footer section */}
      <Footer/>
    </>


  );
}
