'use client'

import { useEffect, useRef, useState } from 'react'

const images = [
    "/images/andre-benz-ITzzbdwnCvY-unsplash.jpg",
    "/images/blake-wisz-q3o_8MteFM0-unsplash.jpg",
    "/images/v2osk-pQ7GIGO6esE-unsplash.jpg",
    "/images/room-mt8G98XVxlg-unsplash.jpg",
    "/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
]

export default function ModernCarousel() {
    const scrollRef = useRef(null)
    const [zoomImage, setZoomImage] = useState(null)

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

    return (
       <div className="relative w-full max-w-[100vw] px-2">
  {/* Scrollable Carousel */}
  <div
    ref={scrollRef}
    className="flex overflow-x-auto space-x-4 scroll-smooth pb-4 md:ml-[10%] snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
  >
    {images.map((src, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 shadow-md overflow-hidden cursor-pointer snap-start"
        onClick={() => setZoomImage(src)}
      >
        <img
          src={src}
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

    )
}
