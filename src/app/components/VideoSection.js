
import React, { useEffect, useRef } from 'react'


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const VideoSection = () => {
  const videsectionref = useRef(null)
  return (
    <div
      id="videosection"
      className="relative h-[60vh] sm:h-[70vh] md:h-[100vh] w-full overflow-hidden"
      ref={videsectionref}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="auto"
        loop
        autoPlay
        muted
        playsInline
      >
        <source
          src="http://themenectar.com/demo/salient-corporate-3/wp-content/uploads/2019/09/travelpockets_iceland_land_of_fire_and_ice.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

      {/* Content on top */}
      <div className="relative z-20 flex flex-col gap-5 items-center justify-center h-full p-4 text-center">
        <span className="text-white text-xl md:text-2xl border-2 rounded-full h-12 w-12 md:h-16 md:w-16 flex justify-center items-center bg-transparent">
          &#9658;
        </span>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          See What We&apos;re About
        </h1>
      </div>
    </div>


  )
}

export default VideoSection
