import React, { useEffect, useRef, useState } from 'react'


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchWpImageById } from '@/utils/getImage';

gsap.registerPlugin(ScrollTrigger);

const SalientSection = ({ texts }) => {

  const salientsectionref = useRef(null)
  const salientsectionheadingref = useRef(null)
  const salientImgref = useRef([])
  salientImgref.current = [];

  let headtext = texts.filter((txt) => txt.type === "text_content")[6]
  let [images, setImages] = useState([])
  useEffect(() => {

    const loadBackgroundImage = () => {
      const img = texts.filter((txt) => txt.type === 'image_url').slice(16, 26)
      setImages(img)

    }

    loadBackgroundImage()
  }, [texts])

  console.log(images)


  useEffect(() => {
    if (!images.length) return; // wait until images are loaded

    const ctx = gsap.context(() => {
      gsap.fromTo(
        salientsectionheadingref.current,
        { opacity: 0, y: 300 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: salientsectionref.current,
            start: 'top 10%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        salientImgref.current,
        { opacity: 0, scale: 0.2 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: salientsectionref.current,
            start: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, salientsectionref);

    return () => ctx.revert();
  }, [images]); // depend on images





  return (

    <div id="salientsection" className='mt-[10%] w-[100%] flex flex-col justify-center items-center gap-20' ref={salientsectionref}>
      <div className='md:w-[30%] sm:w-[100%] md:ml-[-37%]'>
        <h4 className='text-3xl sm:text-4xl md:text-5xl text-center md:text-left font-bold' ref={salientsectionheadingref}>{headtext?.value}</h4>
      </div>

      <div className="grid grid-cols-5 gap-4 w-[70%]">
        {
          images && images.map((img, idx) => {
            return <div key={idx}><img src={img?.value} className="salientimages" alt="alt" key={idx} ref={(el) => (salientImgref.current[idx] = el)} /></div>
          })
        }
      </div>

      <div>

      </div>
    </div>
  )
}

export default SalientSection
