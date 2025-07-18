import React, { useEffect, useRef, useState } from 'react';

const VideoSection = ({texts}) => {
  const videoRef = useRef(null);

  const handleFullScreenPlay = () => {
    if (videoRef.current) {
      // Play video (if not already playing)
      videoRef.current.play();

      // Request fullscreen
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

     const [videoUrl, setvideoUrl] = useState(null);
            useEffect(() => {
              const loadVideo = () => {
                const video = texts.filter((txt)=>txt.type==="video_mp4")[0]
                if(video?.value){
                  setvideoUrl(video.value)
                }
                
              };
              loadVideo();
            }, [texts]);

     const videoText = texts.filter((txt)=> txt.type==="link_text")[3]

     if(!videoUrl) return null
  return (
    <div
      id="videosection"
      className="relative h-[60vh] sm:h-[70vh] md:h-[100vh] w-full overflow-hidden group"
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="auto"
        loop
        autoPlay
        muted
        playsInline
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />

      {/* Play Button and Heading */}
      <div className="relative z-20 flex flex-col gap-5 items-center justify-center h-full p-4 text-center">
        <span
          onClick={handleFullScreenPlay}
          className="text-white text-xl md:text-2xl border-2 rounded-full h-12 w-12 md:h-16 md:w-16 flex justify-center items-center bg-transparent cursor-pointer hover:scale-150 transition-all duration-300"
        >
          &#9658;
        </span>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          {videoText?.value}
        </h1>
      </div>
    </div>
  );
};

export default VideoSection;
