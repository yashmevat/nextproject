import React , { useEffect, useRef } from 'react'


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SalientSection = () => {
    
        const salientsectionref = useRef(null)
        const salientsectionheadingref = useRef(null)
        
         useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(salientsectionheadingref.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger:0.3,
                    scrollTrigger: {
                        trigger: salientsectionref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },
                }
            )
            gsap.fromTo(".salientimages", {
                opacity: 0, scale: 0.2
            }, {
                    opacity: 1,
                    scale:1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: salientsectionref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },

            })
        }, salientsectionref)
        


        return () => ctx.revert()
    }, [])
  return (
    
      <div id="salientsection" className='mt-[10%] w-[100%] flex flex-col justify-center items-center gap-20' ref={salientsectionref}>
        <div className='md:w-[30%] sm:w-[100%] md:ml-[-37%]'>
          <h4 className='text-3xl sm:text-4xl md:text-5xl text-center md:text-left font-bold' ref={salientsectionheadingref}>We&apos;ve worked with some of the biggest brands</h4>
        </div>

        <div className="grid grid-cols-5 gap-4 w-[70%]">
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
          <div><img src="http://themenectar.com/demo/dummy-data-imgs/tn-sample-logo-grey.png" className="salientimages" alt="alt" /></div>
        </div>

        <div>

        </div>
      </div>
  )
}

export default SalientSection
