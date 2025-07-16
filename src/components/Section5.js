
import React , { useEffect, useRef, useState } from 'react'


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getImage } from '@/utils/getImage';

gsap.registerPlugin(ScrollTrigger);
const Section5 = ({images,texts}) => {
  


  const [imageUrl, setImageUrl] = useState(null);
  const [imageAlt, setImageAlt] = useState('');

  useEffect(() => {
    const fetchLatestImage = async () => {
      try {
        const response = await fetch(
          'http://localhost/wordpress/wp-json/wp/v2/media?per_page=1&orderby=date&order=desc'
        );
        const data = await response.json();

        if (data.length > 0) {
          setImageUrl(data[0].source_url);
          setImageAlt(data[0].alt_text || data[0].title.rendered || 'Latest Image');
        }
      } catch (error) {
        console.error('Error fetching latest image:', error);
      }
    };

    fetchLatestImage();
  }, []);


  console.log("section 5 image",imageUrl)


      const section5ref = useRef(null)
    const section5headingref = useRef(null)
    const section5refimg = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(section5headingref.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger:0.3,
                    scrollTrigger: {
                        trigger: section5ref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },
                }
            )
            gsap.fromTo(section5refimg.current,{

              scale:0.3,
              opacity:0
            },{
                   opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger:0.3,
                    scrollTrigger: {
                        trigger: section5ref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },


            })
            gsap.fromTo(["#list",".listitems","#meetbutton"], {
                opacity: 0, x: -100
            }, {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger:0.2,
                    scrollTrigger: {
                        trigger: section5ref.current,
                        start: "top 80%", // when top of section hits 80% of viewport height
                        toggleActions: "play none none reverse",
                        // markers: true
                    },

            })
        }, section5ref)
        


        return () => ctx.revert()
    }, [])

    const section5Image = getImage(12,images)
    console.log(section5Image)

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
        {texts[3]}
      </h1>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-[70%] justify-center md:ml-10 sm:p-5">
      <ul className="list-disc text-left">
        <li className="p-2 text-lg sm:text-xl listitems">275+ premium section templates to mix and match</li>
        <li className="p-2 text-lg sm:text-xl listitems">Page builder with front-end and back-end editing</li>
        <li className="p-2 text-lg sm:text-xl listitems">Massive element library with extensive options</li>
      </ul>
      <ul className="list-disc text-left ">
        <li className="p-2 text-lg sm:text-xl listitems">275+ premium section templates to mix and match</li>
        <li className="p-2 text-lg sm:text-xl listitems">Page builder with front-end and back-end editing</li>
        <li className="p-2 text-lg sm:text-xl listitems">Massive element library with extensive options</li>
      </ul>
    </div>

    <div>
      <button
        className="bg-white text-amber-600 font-bold text-lg sm:text-xl px-4 py-2 mt-4 md:ml-10 sm:text-left"
        id="meetbutton"
      >
        &#8594; Meet the team
      </button>
    </div>
  </div>

  {/* Right Section (Image) */}
  <div id="section4images" ref={section5refimg} className={`w-full sm:w-[40%] h-80 sm:h-[70%] md:h-[60vh] bg-cover bg-center bg-no-repeat`}>
    <img src={`${imageUrl}`} alt={`${imageAlt}`} className='w-full h-full object-cover'/>
    </div>
      
</div>

  )
}

export default Section5