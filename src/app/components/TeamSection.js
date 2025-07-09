import React, { useEffect, useRef } from 'react'


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const teamsectionref = useRef(null)
  const teamsectionheadingref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(teamsectionheadingref.current,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 1.2,
          scrollTrigger: {
            trigger: teamsectionref.current,
            start: "top 80%", // when top of section hits 80% of viewport height
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      )
      gsap.fromTo(".teamimages", {
        opacity: 0, y: 200
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamsectionref.current,
          start: "top 80%", // when top of section hits 80% of viewport height
          toggleActions: "play none none reverse",
          // markers: true
        },

      })
    }, teamsectionref)



    return () => ctx.revert()
  }, [])
  return (
    <div id="teamsection" className="flex flex-col mt-[10%] gap-[5em] items-center px-4" ref={teamsectionref}>
      <div className="w-full md:w-[50%]">
        <h4 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-left font-bold" ref={teamsectionheadingref}>
          Our team is comprised of genuinely gifted minds
        </h4>
      </div>

      <div id="teamsectioncards" className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 w-full">
        {/* Card Column 1 */}
        <div className="w-full md:w-[20%] flex flex-col gap-10">
          {/* Card 1 */}
          <div className="flex flex-col gap-2 teamimages text-center md:text-left">
            <img src="/images/albert-dera-ILip77SbmOE-unsplash-1.jpg" className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-90 cursor-pointer shadow-lg" />
            <p className="font-medium">CEO, Founder</p>
            <div>
              <h4 className="font-bold text-2xl sm:text-3xl mb-2">James Warren</h4>
              <p className="font-medium text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-2 teamimages text-center md:text-left">
            <img
              src="/images/team5.jpg"
              className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-90 cursor-pointer shadow-lg"
            />
            <p className="font-medium">CEO, Founder</p>
            <div>
              <h4 className="font-bold text-2xl sm:text-3xl mb-2">James Warren</h4>
              <p className="font-medium text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-[20%] flex flex-col gap-10 md:translate-y-[-6%]">
          {/* Card 3 */}
          <div className="flex flex-col gap-2 teamimages text-center md:text-left">
            <img
              src="/images/team-6.jpg"
              className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-90 cursor-pointer shadow-lg"
            />
            <p className="font-medium">CEO, Founder</p>
            <div>
              <h4 className="font-bold text-2xl sm:text-3xl mb-2">James Warren</h4>
              <p className="font-medium text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-2 teamimages text-center md:text-left">
            <img
              src="/images/team2.jpg"
              className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-90 cursor-pointer shadow-lg"
            />
            <p className="font-medium">CEO, Founder</p>
            <div>
              <h4 className="font-bold text-2xl sm:text-3xl mb-2">James Warren</h4>
              <p className="font-medium text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-[20%] flex flex-col gap-10">
          {/* Card 5 */}
          <div className="flex flex-col gap-2 teamimages text-center md:text-left">
            <img
              src="/images/team7.jpg"
              className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-90 cursor-pointer shadow-lg"
            />
            <p className="font-medium">CEO, Founder</p>
            <div>
              <h4 className="font-bold text-2xl sm:text-3xl mb-2">James Warren</h4>
              <p className="font-medium text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col gap-2 teamimages text-center md:text-left">
            <img
              src="/images/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg"
              className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-90 cursor-pointer shadow-lg"
            />
            <p className="font-medium">CEO, Founder</p>
            <div>
              <h4 className="font-bold text-2xl sm:text-3xl mb-2">James Warren</h4>
              <p className="font-medium text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TeamSection
