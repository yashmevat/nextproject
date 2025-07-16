"use client"
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ModernCarousel from '../components/ModernCarousel';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import VideoSection from '../components/VideoSection';
import TeamSection from '../components/TeamSection';
import SalientSection from '../components/SalientSection';
import Footer from '../components/Footer';
import axios from 'axios';
import he from 'he';
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [left, setLeft] = useState(false);
  const navref = useRef(null)
  const herotextref = useRef(null)
  const navlistref = useRef(null)
  const navimgref = useRef(null)
  const herobtnref = useRef(null)
  const svgref = useRef(null)
  const mainref = useRef(null)

  const [images,setImages]=useState([])

   useEffect(() => {
     axios.get("/api/posts")
     .then((res)=>{

      if(res){
        setImages(res.data);
      }

     })
  }, []);

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

    gsap.to(svgref.current, {
      scrollTrigger: {
        trigger: document.body,       // Trigger after hero section
        start: "top -10px",        // When bottom of hero hits top of viewport
        toggleActions: "play reverse play reverse",
        onEnter: () => {
          gsap.to(svgref.current, { stroke: "#000000", duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(svgref.current, { stroke: "#ffffff", duration: 0.3 });
        },
      }
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
    gsap.fromTo([herotextref.current, "#dicoverbtn"],
      { y: 100, opacity: 0 },  // start 100px below, hidden
      {
        y: 0, opacity: 1,       // move to normal position, visible
        duration: 1,
        ease: "power2.out",
        stagger: 0.5
      }
    );

    console.log("images are : ",images)
    
    
  }, []);
  


  useEffect(() => {
    axios.get("http://localhost/wordpress/wp-json/custom-api/v1/images")
      .then((res) => {
        console.log("Image data:", res.data);
      });
  }, []);



  const [content, setContent] = useState("");
const [extractedTexts, setExtractedTexts] = useState([]);
  function extractAttributeBlocks(content) {
  if (!content) return [];

    // 1. Decode HTML entities
  const decoded = he.decode(content);
  // Replace smart quotes with standard quotes
  const normalized = decoded
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");

  // 2. Extract values of text_content and link_text attributes
  const textContentMatches = [...normalized.matchAll(/text_content="([^"]+)"/g)];
  const linkTextMatches = [...normalized.matchAll(/link_text="([^"]+)"/g)];

  // 3. Combine extracted values
  return [
    ...textContentMatches.map(match => match[1]),
    ...linkTextMatches.map(match => match[1])
  ];
}


 useEffect(() => {
  axios
    .get("http://localhost/wordpress/wp-json/wp/v2/pages?slug=corporate-3-landing")
    .then((res) => {
      if (res.data?.[0]?.content?.rendered) {
        console.log("data from api",res.data)
        console.log("rendered",res.data[0].content.rendered)
        setContent(res.data[0].content.rendered);
        
      }
    });
}, []);

useEffect(()=>{
  const extractedTexts = extractAttributeBlocks(content)
  setExtractedTexts(extractedTexts)
  console.log("extracted texts",extractedTexts)

},[content])




   const bgImage = images.find(img => img.id===5877)


  return (
    <>
      <div
        className="relative min-h-[40vh] md:min-h-[93vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/kai-pilger-mgFzfrrmGKI-unsplash.jpg')",
        }}
        ref={mainref}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content Above Background */}
        <div className="relative">

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
                <li><a href="#home" className="hover:text-amber-400">Home</a></li>
                <li><a href="#features" className="hover:text-amber-400">Features</a></li>
                <li><a href="#pricing" className="hover:text-amber-400">Pricing</a></li>
                <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
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







          {/* Hero Section */}
          <section className="flex flex-col items-center md:items-start justify-center px-6 md:px-24 py-40 text-white min-h-[40vh] md:min-h-[93vh]  md:ml-70">
            <h2
              className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl lg:w-[30%] font-bold leading-tight text-left md:text-left max-w-3xl mb-6 md:w-[60%]"
              id="herotext"
              ref={herotextref}
            >
            {extractedTexts[0]}
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
      <section>

        <Section3 images={images} texts={extractedTexts}/>
      </section>
      {/* section 4 */}
      <section>

        <Section4 images={images} texts={extractedTexts}/>
      </section>

      {/*section 5*/}
      <section>

        <Section5 images={images} texts={extractedTexts}/>
      </section>


      {/*section video*/}
      <section>


        <VideoSection texts={extractedTexts}/>
      </section>

      {/*team section*/}

      <section>
        <TeamSection images={images} texts={extractedTexts}/>
      </section>

      {/* corousel section*/}


      <section className="min-h-screen flex items-center justify-center flex-col ">
        <div className='md:w-[40vw] w-[90vw] my-30'>
          <h1 className='font-bold md:text-5xl text-2xl text-center'>{extractedTexts[5]}</h1></div>
        <ModernCarousel images={images} texts={extractedTexts}/>
      </section>

      {/*salient section*/}
      <section>

        <SalientSection texts={extractedTexts}/>
      </section>

      {/* last section or footer section */}
      <section>

        <Footer texts={extractedTexts}/>
      </section>
    </>



  );
}
