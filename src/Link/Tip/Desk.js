import React, {useEffect} from 'react';
import '../../App.css';
import Lottie from "lottie-react";
import  desk from '../../Asset/desk.json';
import {CgWebsite} from 'react-icons/cg';
import {FiUserCheck} from 'react-icons/fi';
import {TbAsteriskSimple} from 'react-icons/tb';
import {BsSpeedometer} from 'react-icons/bs';
import {MdOutlineSecurity} from 'react-icons/md';
import {MdScreenRotation} from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'

export const Desk  = () => {

  useEffect(
    ()=>{
  AOS.init({duration:1500})
    },[]
  );

   document.querySelectorAll( '.ciclegraph' ).forEach( ( ciclegraph )=>{
      let circles = ciclegraph.querySelectorAll( '.circle' )
      let angle = 360-90, dangle = 360 / circles.length
      for( let i = 0; i < circles.length; ++i ){
        let circle = circles[i]
        angle += dangle
        circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
      }
    })

      const feature1 = [
        {
            ico: CgWebsite,
            txt: "Best UI and Functionality",
          },

          {
            ico: FiUserCheck,
            txt: "Easy-to-use",
          },

          {
            ico: MdScreenRotation,
            txt: "High Responsiveness",
          },

       
      ];




      const feature = [
        {
            ico: MdOutlineSecurity,
            txt: "Security",
          },

          {
            ico: TbAsteriskSimple,
            txt: "Simplicity",
          },

          {
            ico: BsSpeedometer,
            txt: "Speed",
          },

          
      ];
   

      
    return (
<div class=" bg-white body-font">
<section id="service" class="pt-5 lg:pt-[20px] pb-5 lg:pb-[9px] pl-5 pr-5">
   <div class="px-3 lg:px-20 sm:px-10 md:px-5">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
                  Features
               </h2>
               <p class="text-base text-body-color font-titillium">
               We develop best Desktop Application using modern tools.
               </p>
            </div>
         </div>
      </div>
 <div className='lg:flex md:flex justify-between'>     
{feature1.map((item, index) => (
          <div key={index}>
<div data-aos="fade-zoom-in"
     data-aos-offset="0" className='flex  pb-5'>
<div class="p-1.5 w-12 h-12 border-2 border-black rounded-full hover:bg-red-200">
    <item.ico className='w-8 h-8'/>
</div>
<p className='align-middle px-5 flex items-center justify-center font-oleo text-[2.5vh]'>{item.txt}</p>
</div>
</div>
))}
</div>
<div className='flex items-center justify-center'>
<div className='flex items-center justify-center h-[50vh] w-[60vh] pb-5'>
<div>
<Lottie animationData={desk} loop={true} height={100} width={100} />
    </div>
</div></div>

<div className='justify-between lg:flex md:flex'>
{feature.map((item, index) => (
          <div key={index}>
<div data-aos="fade-zoom-in"
     data-aos-offset="0" className='flex pb-5 '>
<div class="p-1.5 w-12 h-12 border-2 border-black rounded-full hover:bg-red-200">
    <item.ico className='w-8 h-8'/>
</div>
<p className='align-middle px-5 flex items-center justify-center font-oleo text-[2.5vh]'>{item.txt}</p>
</div>
          </div>
        ))}
   
    </div>
</div>
</section>
</div>
    )
  }

  
  export default Desk;