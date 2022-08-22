import React from 'react';
import {TbDrone} from 'react-icons/tb'
import '../App.css';
import Lottie from "lottie-react";
import animationData from "../Asset/mob.json";
import  feat from '../Asset/feature.json';

export const Features  = () => {

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
            ico: TbDrone,
            txt: "High-quality Code",
          },

          {
            ico: TbDrone,
            txt: "Easy-to-use software",
          },

          {
            ico: TbDrone,
            txt: "software development company with flexibility",
          },

          {
            ico: TbDrone,
            txt: "Deliver on schedule",
          },
      ];




      const feature = [
        {
            ico: TbDrone,
            txt: "Application that is reliable",
          },

          {
            ico: TbDrone,
            txt: "Upfront cost-effective rate without any surprises",
          },

          {
            ico: TbDrone,
            txt: "Flexibility",
          },

          {
            ico: TbDrone,
            txt: "Technical assistance and support",
          },
      ];
   

      
    return (
      
      <footer class=" bg-white body-font">
  <div class="">
    
<section id="service" class="pt-5 lg:pt-[20px] pb-5 lg:pb-[9px] pl-5 pr-5">
   <div class="px-3 lg:px-20 sm:px-10 md:px-5">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
                  Our Features
               </h2>
               <p class="text-base text-body-color font-titillium">
               As a Software company, we provide a wide range of features on the products.
               </p>
            </div>
         </div>
      </div>
      
<div className='flex justify-between'>
   <div className=''>
   <>
        {feature1.map((item, index) => (
          <div key={index}>


<div className='flex pb-5 justify-end '>
<p className='align-middle px-5 flex items-center justify-center text-right'>{item.txt}</p>
<div class="p-1.5 w-24 h-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 h-20 rounded-full flex items-center justify-center">
    <item.ico className='w-20 h-20'/>
  </div>
</div>

</div>
          </div>
        ))}
   
    </>


</div>



<div className='flex items-center justify-center'>
<div>
<Lottie animationData={feat} loop={true} height={200} width={200} />
    </div>
</div>




<div className=''>
<>
        {feature.map((item, index) => (
          <div key={index}>


<div className='flex pb-5'>

<div class="p-1.5 w-24 h-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 h-20 rounded-full flex items-center justify-center">
    <item.ico className='w-20 h-20'/>
  </div>
</div>
<p className='align-middle px-5 flex items-center justify-center'>{item.txt}</p>
</div>
          </div>
        ))}
   
    </>
</div>
</div>
</div>
</section>
    </div>
</footer>
    )
  
  }

  
  export default Features;