import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchWpImageById } from '@/utils/getImage';
 
gsap.registerPlugin(ScrollTrigger);
 
const TeamSection = ({texts }) => {
  const teamsectionref = useRef(null)
  const teamsectionheadingref = useRef(null)
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(teamsectionheadingref.current,
        { opacity: 0, scale: 0.3 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 1.2,
          scrollTrigger: {
            trigger: teamsectionref.current,
            start: "top 20%", // when top of section hits 80% of viewport height
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
          start: "top 20%", // when top of section hits 80% of viewport height
          toggleActions: "play none none reverse",
          // markers: true
        },
 
      })
    }, teamsectionref)
 
    return () => ctx.revert()
  }, [])
 
 
 
 
  const names = texts.filter((txt) => txt.type === "name")?.slice(1, 7)
  console.log("names are", names)
 
  const cardTexts = texts.filter((txt) => txt.type === "team_member_mini_bio")
  console.log("names are", cardTexts)
 
  const position = texts.filter((txt) => txt.type === "job_position")
  console.log("names are", position)
 
  const headText = texts.filter((txt) => txt.type === "text_content")[4]
  console.log("names are", headText)
 
 
 
 
 
 let [images, setImages] = useState([]);
 
useEffect(() => {
  const loadBackgroundImage = async () => {
    const imageText = texts.filter((txt) => txt.type === 'image_url')?.slice(4, 15);
 
    if (!imageText || imageText.length === 0) {
      console.warn("No image text entries found");
      return;
    }
 
    const imagePromises = imageText.map(async (imgobj) => {
      const id = imgobj?.value?.trim();
      if (!isNaN(id) && id !== '') {
        const imageData = await fetchWpImageById(id);
        return imageData?.url;
      }
      return null;
    });
 
    const resolvedImages = await Promise.all(imagePromises);
    setImages(resolvedImages.filter(Boolean));
  };
 
  if (texts && texts.length > 0) {
    loadBackgroundImage();
  }
}, [texts]);
 
 
 
const teamsectiondata = [
  [
    { designation: position[0]?.value, img: images[0], name: names[0]?.value, text: cardTexts[0]?.value },
    { designation: position[1]?.value, img: images[1], name: names[1]?.value, text: cardTexts[1]?.value }
  ],
 
  [
    { designation: position[2]?.value, img: images[2], name: names[2]?.value, text: cardTexts[2]?.value },
    { designation: position[3]?.value, img: images[3], name: names[3]?.value, text: cardTexts[3]?.value }
  ],
  [
    { designation: position[4]?.value, img: images[4], name: names[4]?.value, text: cardTexts[4]?.value },
    { designation: position[5]?.value, img: images[5], name: names[5]?.value, text: cardTexts[5]?.value }
  ]
]
 
return (
  <div id="teamsection" className="flex flex-col mt-[10%] gap-[5em] items-center px-4" ref={teamsectionref}>
    <div className="w-full md:w-[50%] mb-5">
      <h4 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-left font-bold" ref={teamsectionheadingref}>
        {headText?.value}
      </h4>
    </div>
 
    <div id="teamsectioncards" className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-30 w-full">
      {/* Card Column 1 */}
      {
 
        teamsectiondata && teamsectiondata.map((data, idx) => {
          return (idx % 2 === 1) ? (<div key={`div1-${idx}`} className="w-full md:w-[20%] flex flex-col gap-10 md:translate-y-[-6%]">
            {/* Card 3 */}
            <div key={idx} className="flex flex-col gap-2 teamimages text-center md:text-left ">
              <img
                src={data[0].img}
                className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-95 cursor-pointer shadow-lg"
              />
              <p className="font-medium text-xs">{data[0].designation}</p>
              <div>
                <h4 className="font-semibold text-2xl sm:text-3xl mb-2">
                  {data[0].name}
                </h4>
                <p className="text-lg">
                  {data[0].text}
                </p>
              </div>
            </div>
 
            {/* Card 4 */}
            <div key={`div2-${idx}`} className="flex flex-col gap-2 teamimages text-center md:text-left ">
              <img
                src={data[1].img}
                className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-95 cursor-pointer shadow-lg"
              />
              <p className="font-medium text-xs">{data[1].designation}</p>
              <div>
                <h4 className="font-semibold text-2xl sm:text-3xl mb-2">{data[1].name}</h4>
                <p className="text-lg">
                  {data[1].text}
                </p>
              </div>
            </div>
          </div>)
 
            : (<div key={`div3-${idx}`} className="w-full md:w-[20%] flex flex-col gap-10">
              {/* Card 1 */}
              <div className="flex flex-col gap-2 teamimages text-center md:text-left ">
                <img src={data[0].img} className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-95 cursor-pointer shadow-lg" />
                <p className="font-medium text-xs">{data[0].designation}</p>
                <div>
                  <h4 className="font-semibold text-2xl sm:text-3xl mb-2">{data[0].name}</h4>
                  <p className="text-lg">
                    {data[0].text}
                  </p>
                </div>
              </div>
 
              {/* Card 2 */}
              <div key={`div4-${idx}`} className="flex flex-col gap-2 teamimages text-center md:text-left ">
                <img
                  src={data[1].img}
                  className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-95 cursor-pointer shadow-lg"
                />
                <p className="font-medium text-xs">{data[1].designation}</p>
                <div>
                  <h4 className="font-semibold text-2xl sm:text-3xl mb-2">{data[1].name}</h4>
                  <p className="text-lg">
                    {data[1].text}
                  </p>
                </div>
              </div>
            </div>)
        })
      }
 
 
    </div>
  </div>
 
)
}
 
export default TeamSection