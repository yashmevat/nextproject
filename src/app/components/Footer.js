import React from 'react'

const Footer = () => {
    return (
        <div id="footer" className="w-full min-h-[70vh] flex flex-col items-center bg-black px-4 py-8 gap-8">
  
  {/* Upper Footer */}
  <div id="upperfooter" className="w-full md:w-[70%] flex flex-col md:flex-row justify-between items-center text-white gap-6 md:h-[20vh]">
    <h4 id="upperfootertext" className="text-2xl md:text-4xl font-bold text-center md:text-left md:w-[40%]">
      Enough Talk, Let's Build Something Together
    </h4>
    <button className="bg-amber-600 text-white py-3 px-6 rounded-full text-lg md:text-xl font-medium">
      - Reach out now
    </button>
  </div>

  {/* Divider */}
  <div className="h-[1px] bg-gray-600 w-full md:w-[70%]"></div>

  {/* Lower Footer */}
  <div id="lowerfooter" className="w-full md:w-[70%] flex flex-col md:flex-row items-center md:items-start gap-8 text-white">

    {/* Left Side */}
    <div id="lowerfooterleft" className="w-full md:w-[40%] sm:text-left md:text-left space-y-2">
      <h4 className="text-base md:text-xl">
        © 2019 Salient WordPress Theme. Built with love in New York
      </h4>
      <h4 className="text-base md:text-xl">All rights reserved.</h4>
    </div>

    {/* Right Side */}
    <div id="lowerfooterright" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full sm:text-left md:text-left">
      <div>
        <ul className="text-base md:text-xl font-semibold flex flex-col gap-2">
          <li className="text-orange-500 mb-2 font-bold">Archives</li>
          <li>July 2025</li>
          <li>September 2019</li>
          <li>July 2019</li>
          <li>April 2019</li>
          <li>March 2019</li>
          <li>February 2019</li>
        </ul>
      </div>
      <div>
        <ul className="text-base md:text-xl font-semibold flex flex-col gap-2">
          <li className="text-orange-500 mb-2 font-bold">Categories</li>
          <li>Food for thought</li>
          <li>Gaming</li>
          <li>Music</li>
          <li>Uncategorized</li>
        </ul>
      </div>
      <div>
        <ul className="text-base md:text-xl font-semibold flex flex-col gap-2">
          <li className="text-orange-500 mb-2 font-bold">Recent Posts</li>
          <li>Hello world!</li>
          <li>Wake up and smell the roses</li>
          <li>Doing a cross country road trip</li>
          <li>Wake up and smell the roses</li>
          <li>March 2019</li>
          <li>February 2019</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    )
}

export default Footer
