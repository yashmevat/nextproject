
import React, { useEffect, useRef, useState } from 'react'


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchWpImageById, getImage } from '@/utils/getImage';

gsap.registerPlugin(ScrollTrigger);
const Section5 = ({ images, texts }) => {

  const section5ref = useRef(null)
  const section5headingref = useRef(null)
  const section5refimg = useRef(null)
  const listRef = useRef([])
  const listRef2 = useRef([])

  console.log("listref",listRef.current)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(section5headingref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: section5ref.current,
            start: "top 60%", // when top of section hits 80% of viewport height
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      )
      gsap.fromTo(section5refimg.current, {

        scale: 0.3,
        opacity: 0
      }, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: section5ref.current,
          start: "top 50%", // when top of section hits 80% of viewport height
          toggleActions: "play none none reverse",
          // markers: true
        },


      })

      // Combine all list items + the button
      const allListElements = [
        ...listRef.current,
        ...listRef2.current,
        document.querySelector("#meetbutton")
      ].filter(Boolean); // remove nulls


      gsap.fromTo(allListElements, {
        opacity: 0, x: -100
      }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section5ref.current,
          start: "top 50%", // when top of section hits 80% of viewport height
          toggleActions: "play none none reverse",
          // markers: true
        },

      })
    }, section5ref)



    return () => ctx.revert()
  }, [])


  const [section4BgUrl, setSection4BgUrl] = useState(null);
  const [section4Alt, setSection4Alt] = useState(null);
  useEffect(() => {
    const loadBackgroundImage = async () => {
      const img = texts.filter(item => item.type === 'background_image')[1];
      if (img?.value) {
        const imageData = await fetchWpImageById(img.value);
        setSection4BgUrl(imageData?.url || null);
        setSection4Alt(imageData?.alt || null);
      }
    };

    loadBackgroundImage();
  }, [texts]);

  const headtext = texts.filter((txt) => txt.type === "text_content")[3]
  const linktext = texts.filter((txt) => txt.type === "link_text")[2]
  const litext = texts.filter((txt) => txt.type === "li").slice(0, 6)

  console.log(litext.slice(3, 6))


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
            {headtext?.value}
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 w-full md:w-[70%] justify-center md:ml-10 sm:p-5">
          <ul className="list-disc text-left">
            {
              litext?.slice(0, 3).map((txt, idx) => {

                return <li className="p-2 text-lg sm:text-xl listitems" key={idx} ref={(el) => (listRef.current[idx] = el)}>{txt?.value}</li>
              })
            }
          </ul>
          <ul className="list-disc text-left ">
            {
              litext?.slice(3, 6).map((txt, idx) => {
                const gblidx = idx + 3
                return <li className="p-2 text-lg sm:text-xl listitems" key={gblidx} ref={(el) => (listRef2.current[gblidx] = el)}>{txt?.value}</li>
              })
            }
          </ul>
        </div>

        <div>
          <button
            className="bg-white text-amber-600 font-bold text-lg sm:text-xl px-4 py-2 mt-4 md:ml-10 sm:text-left"
            id="meetbutton"
          >
            &#8594; {linktext?.value}
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div id="section4images" ref={section5refimg} className={`w-full sm:w-[40%] h-80 sm:h-[70%] md:h-[60vh] bg-cover bg-center bg-no-repeat`}>
        <img src={section4BgUrl} alt={section4Alt} className='w-full h-full object-cover' />
      </div>

    </div>

  )
}

export default Section5