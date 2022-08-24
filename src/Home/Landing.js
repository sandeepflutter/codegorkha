import React from 'react';
import '../App.css';
import Lottie from "lottie-react";
import ab from '../Asset/pp.json';

export const Landing  = () => {      
    return (
      
<div class=" bg-blue-900 body-font">
<section id="About" class="pt-5 lg:pt-[40px] pb-5 lg:pb-[9px] pl-5 pr-5">
<div className='lg:w-[200vh] md:w-[200vh]'>
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
      
</div>
   <div class="px-3 lg:px-20 sm:px-10 md:px-5 lg:flex md:flex">

  




<div className='flex items-center justify-center'>
<div>
<Lottie animationData={ab} loop={true} height={200} width={200} />
    </div>
</div>
<div className='lg:w-[200vh] md:w-[200vh]'>
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
      
</div>
</div>
</section>
</div>
    )
  }

  
  export default Landing;