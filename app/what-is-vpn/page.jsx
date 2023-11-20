import React from 'react'
import Hero2 from "../../components/Hero2";
import HeroText from "../../components/HeroText";
import FAQSection from "../../components/FAQSection";
import ReversHero from "../../components/ReversHero";

const whatVpn = () => {
  return (
    <div className='mt-3'>
      <HeroText/>
      <FAQSection/>
      <FAQSection/>
      <Hero2/>
      <FAQSection/>
      <ReversHero/>
      <FAQSection/>
    </div>
  )
}

export default whatVpn