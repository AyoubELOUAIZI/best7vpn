import React from 'react'
import Hero2 from "./../components/Hero2";
import HeroText from "./../components/HeroText";
import FAQSection from "./../components/FAQSection";
import {FAQ1} from "./FAQData"
import {FAQ2} from "./FAQData"
import {FAQ3} from "./FAQData"
import {FAQ4} from "./FAQData"
import {FAQ5} from "./FAQData"
import {FAQ6} from "./FAQData"
import {FAQ7} from "./FAQData"
const whatVpn = () => {
  return (
    <div className='mt-3'>
      <HeroText/>
      <FAQSection FAQ={FAQ1}/>
      <FAQSection FAQ={FAQ2}/>
      <Hero2/>
      <FAQSection FAQ={FAQ3}/>
      <FAQSection FAQ={FAQ4}/>
      <FAQSection FAQ={FAQ5}/>
      <FAQSection FAQ={FAQ6}/>
      <FAQSection FAQ={FAQ7}/>
    </div>
  )
}

export default whatVpn