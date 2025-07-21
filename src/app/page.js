"use client"
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ModernCarousel from '../components/ModernCarousel';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import VideoSection from '../components/VideoSection';
import TeamSection from '../components/TeamSection';
import SalientSection from '../components/SalientSection';
import Footer from '../components/Footer';
import axios from 'axios';
import he from 'he';
import { fetchWpImageById } from '@/utils/getImage';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Loading from './Loading';
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  
  

  const [content, setContent] = useState("");
  const [extractedTexts, setExtractedTexts] = useState([]); 
  const [loading, setLoading] = useState(true);
  function extractAttributeBlocks(content) {
    if (!content) return [];

    const decoded = he.decode(content);
    const normalized = decoded
      .replace(/\\+"/g, '"') // convert \" → "
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'");

    const results = [];

    // Extract values from these attributes including team_member_bio
    const attributes = ['text_content', 'link_text', 'title', 'heading', 'label', 'alt', 'team_member_bio', 'quote', 'hover_content',
      'name', 'subtitle', 'bg_image', 'image','image_url', 'images', 'video_mp4', 'background_image', 'team_member_mini_bio', 'job_position', 'bio_alt_image_url'];
    attributes.forEach(attr => {
      const regex = new RegExp(`${attr}="([^"]+)"`, 'g');
      for (const match of normalized.matchAll(regex)) {
        results.push({ type: attr, value: match[1].trim() });
      }
    });

    // Extract text inside [vc_...] shortcodes
    const regex = /\[vc_column_text[^\]]*](.*?)\[\/vc_column_text]/gis;

    for (const match of content.matchAll(regex)) {
      const text = match[1].trim();
      if (text) {
        results.push({ type: "inner_text", value: text });
      }
    }

    // Extract text inside HTML content tags
    const tagNames = ['p', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'strong', 'em', 'b', 'i'];
    tagNames.forEach(tag => {
      const regex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, 'gis');
      for (const match of normalized.matchAll(regex)) {
        const textContent = match[1].trim().replace(/<[^>]+>/g, '').trim(); // Remove nested tags
        if (textContent) {
          results.push({ type: tag, value: textContent });
        }
      }
    });

    return results;
  }



  useEffect(() => {
    axios
      .get("https://staging.ekarigar.com/wordpress/wp-json/custom/v1/wpbakery-page/5909")
      .then((res) => {
        if (res.data) {
          console.log("data from api", res.data)
          console.log("rendered", res.data.data.content_html)
          setContent(res.data.data.content_html);

        }
      }).finally(()=>{
         setLoading(false)
      })
  }, []);

  useEffect(() => {
    const extractedTexts = extractAttributeBlocks(content)
    setExtractedTexts(extractedTexts)
    console.log("extracted texts", extractedTexts)

  }, [content])


  const [bgUrl, setBgUrl] = useState(null);

  useEffect(() => {
    const loadBackgroundImage = async () => {
      setLoading(true)
      const bgImage = extractedTexts.find(item => item.type === 'bg_image');
      if (bgImage?.value) {
        const imageData = await fetchWpImageById(bgImage.value);
        setBgUrl(imageData?.url || "/images/kai-pilger-mgFzfrrmGKI-unsplash.jpg");
        setLoading(false)
      }
    };

    loadBackgroundImage();
  }, [extractedTexts]);



if (loading) return <Loading />;

  return (
    <>

      {/* main section */}
      <div
        className="relative min-h-[70vh] md:min-h-[93vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: bgUrl ? `url(${bgUrl})` : 'none',
        }}
      >
        {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45" />

                {/* Content Above Background */}
            <div className="relative">
                  {/* Navbar */}
                <Header texts={extractedTexts}/>
                  {/* Hero Section */}
                <Hero texts={extractedTexts}/>

            </div>
      </div>


      {/* Section 3 */}
      <section>
        <Section3 texts={extractedTexts} />
      </section>


      {/* section 4 */}
      <section>
        <Section4 texts={extractedTexts} />
      </section>



      {/* section 5 */}
      <section>
        <Section5 texts={extractedTexts} />
      </section>


      {/*section video*/}
      <section>
        <VideoSection texts={extractedTexts} />
      </section>



      {/*team section*/}
      <section>
        <TeamSection texts={extractedTexts} />
      </section>


      {/*crousel section*/}
      <section className="min-h-screen flex items-center justify-center flex-col ">
        <ModernCarousel texts={extractedTexts} />
      </section>



      {/*salient section*/}
      <section>
        <SalientSection texts={extractedTexts} />
      </section>


      {/* last section or footer section */}
      <section>
        <Footer texts={extractedTexts} />
      </section>

    </>
    // <></>


  );
}




