'use client'

import { fetchWpImageById } from '@/utils/getImage';
import { useEffect, useRef, useState } from 'react'

import gsap from 'gsap';

export default function ModernCarousel({ texts }) {
  const scrollRef = useRef(null)
  const [zoomImage, setZoomImage] = useState(null)
  const cursorRef = useRef(null)
  const [cursorVisible, setCursorVisible] = useState(false)
  const crouselRef = useRef(null)
  const crouselHeadRef = useRef(null)
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(crouselHeadRef.current,
        { opacity: 0, scale: 0.3 , y: 200 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 1.2,
          scrollTrigger: {
            trigger: crouselRef.current,
            start: "top 10%", // when top of section hits 80% of viewport height
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      )
    }, crouselRef)
 
    return () => ctx.revert()
  }, [])
 

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current
        const scrollWidth = container.scrollWidth
        const scrollLeft = container.scrollLeft
        const containerWidth = container.clientWidth

        if (scrollLeft + containerWidth >= scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: containerWidth, behavior: 'smooth' })
        }
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scroll = (dir) => {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = container.clientWidth
    container.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }




  //fetching images and texts
  let [images, setImages] = useState([])
  useEffect(() => {
    const loadBackgroundImage = async () => {
      const imageText = texts.find((txt) => txt.type === 'images');
      if (!imageText || !imageText.value) {
        console.warn("No image text or value found");
        return;
      }

      const imgIds = imageText.value.split(",").map((id) => id.trim()).filter(Boolean);

      const imagePromises = imgIds.map(async (id) => {
        const imageData = await fetchWpImageById(id);
        return imageData?.url;
      });

      const resolvedImages = await Promise.all(imagePromises);
      setImages(resolvedImages.filter(Boolean));
    };

    if (texts && texts.length > 0) {
      loadBackgroundImage();
    }
  }, [texts]);


  const headText = texts.filter((txt) => txt.type === "text_content")[5]


  return (
    <>
      <div className='md:w-[40vw] w-[90vw] my-30' ref={crouselRef}>
        <h1 className='font-bold md:text-5xl text-2xl text-center' ref={crouselHeadRef}>{headText?.value}</h1>
      </div>
      <div className="relative w-full max-w-[100vw] px-2">
        {/* Scrollable Carousel */}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scroll-smooth pb-4 md:ml-[10%] snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
        >
          {images && images.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 shadow-md overflow-hidden cursor-pointer snap-start"
              onClick={() => setZoomImage(img)}
              onMouseEnter={() => gsap.to(cursorRef.current, { scale: 2, duration: 0.2 })}
              onMouseLeave={() => gsap.to(cursorRef.current, { scale: 1, duration: 0.2 })}
            >

              <img
                src={img}
                alt={`img-${idx}`}
                className="w-auto h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-1 sm:p-2 text-white text-3xl sm:text-5xl z-10 opacity-30 font-bold"
        >
          &lt;
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-1 sm:p-2 text-white text-3xl sm:text-5xl z-10 opacity-30 font-bold"
        >
          &gt;
        </button>

        {/* Zoom Modal */}
        {zoomImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <img
              src={zoomImage}
              className="max-w-[95vw] max-h-[80vh] rounded shadow-lg"
              alt="Zoomed"
            />
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-5 text-white text-3xl sm:text-4xl font-bold"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </>

  )
}
