'use client'

import { useEffect, useState } from 'react'

const images = [
  "/images/andre-benz-ITzzbdwnCvY-unsplash.jpg",
  "/images/blake-wisz-q3o_8MteFM0-unsplash.jpg",
  "/images/v2osk-pQ7GIGO6esE-unsplash.jpg",
  "/images/room-mt8G98XVxlg-unsplash.jpg",
  "/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [zoomImage, setZoomImage] = useState(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-[90vw] ml-2">
      <div className="flex transition-transform duration-700 ease-in-out overflow-hidden" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className="min-w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            onClick={() => setZoomImage(src)}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="text-6xl text-white font-bold absolute top-1/2 left-4 transform -translate-y-1/2 p-2  cursor-pointer opacity-15">
        &lt;
      </button>
      <button onClick={nextSlide} className=" text-6xl text-white font-bold absolute top-1/2 right-4 transform -translate-y-1/2 p-2 cursor-pointer opacity-15">
        &gt;
      </button>

      {/* Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img src={zoomImage} className="max-w-full max-h-full rounded" />
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-6 right-8 text-white text-4xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  )
}
