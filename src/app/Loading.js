import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="relative flex flex-col items-center gap-6">
        {/* Spinning Gradient Ring */}
        <div className="w-20 h-20 rounded-full border-4 border-transparent border-t-amber-500 border-r-amber-500 animate-spin shadow-xl"></div>

        {/* Glowing Pulse Dot */}
        <div className="w-4 h-4 rounded-full bg-amber-500 animate-ping" />

        {/* Sexy Loading Text */}
        <p className="text-xl font-semibold tracking-wide animate-fadeIn">Preparing awesomeness...</p>
      </div>
    </div>
  );
};

export default Loading;
