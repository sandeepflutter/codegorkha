import React, {useEffect} from 'react';
import '../App.css';
import Lottie from "lottie-react";
import ab from '../Asset/pp.json';
import AOS from 'aos';
import 'aos/dist/aos.css'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export const About  =  () => {     
  const [focus, setFocus] = React.useState(false);
useEffect(
  ()=>{
AOS.init({duration:1500})
  },[]
);


    return (
      
<div id="about" class=" bg-blue-900 body-font">
<section  class="pb-5 lg:pb-[9px] pl-5 pr-5">
   <div class="px-3 lg:px-20 sm:px-10 md:px-5 lg:flex md:flex">

<div data-aos="fade-right"
     data-aos-easing="ease-in-sine" className='lg:w-[200vh] md:w-[200vh]'>
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" text-white font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
                  About
               </h2>
               <p class="text-base text-body-color font-titillium text-white">
               As a Software company, we provide a wide range of features on the products.
               </p>
            </div>
         </div>
      </div>
      
<div className=''>
<div className='pb-5 '>
<p className='text-white align-middle px-5 pb-5 flex items-center justify-center text-justify font-alegreya text-[2.5vh]'> 
Code Gorkha (Pvt) Ltd, established in 2021, is a Nepal-based Software Development & IT Services company that provides services at reasonable prices.</p>
<p className='text-white align-middle px-5 flex items-center justify-center text-justify font-alegreya text-[2.5vh]'>
At Code Gorkha, we create cutting-edge, imaginative goods and services that offer IT solutions. 
We offer design and development services for desktop, mobile, and online apps. 
We are dedicated to producing high-quality software all over the world. Code Gorkha was created with the intention of creating and advancing multi-user, cutting-edge information technology. 
The core principles of the Code Gorkha business model are to provide the highest quality products, ensure complete client satisfaction, provide solutions in a timely manner, and offer the best quality/price ratio available in the sector. 
Our aim is to provide a high-quality, user-friendly product through a pleasant, imaginative, and company-focused workforce. 
Through information technology, we hope to impact the lives of millions of people. 
</p>
</div>
</div>
</div>

<div data-aos="fade-left" 
     data-aos-easing="ease-in-sine" className='flex items-center justify-center'>
<div>
<Lottie animationData={ab} loop={true} height={200} width={200} />
    </div>
</div>
</div>
</section>
<section 
      class="text-gray-100 bg-blue-900 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2  class="title-font font-bold sm:text-2xl text-lg text-white ">
        <CountUp start={focus ? 0 : null} end={1} duration={1} redraw={true}>
            {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                    if (isVisible) { setFocus(true); }
                }}>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>+
          </h2>
        <p class="leading-relaxed font-amaranth">Years in Business</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-bold sm:text-2xl text-lg text-white">
        <CountUp start={focus ? 0 : null} end={1} duration={1} redraw={true}>
            {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                    if (isVisible) { setFocus(true); }
                }}>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>+</h2>
        <p class="leading-relaxed font-amaranth">Ongoing Projects</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-bold sm:text-2xl text-lg text-white">
        <CountUp start={focus ? 0 : null} end={1} duration={1} redraw={true}>
            {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                    if (isVisible) { setFocus(true); }
                }}>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>+</h2>
        <p class="leading-relaxed font-amaranth">Clients</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-bold sm:text-2xl text-lg text-white">
        <CountUp start={focus ? 0 : null} end={4} duration={1} redraw={true}>
            {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                    if (isVisible) { setFocus(true); }
                }}>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>+</h2>
        <p class="leading-relaxed font-amaranth">Products</p>
      </div>
    </div>
  </div>
</section>
</div>
    )
  }

  
  export default About;