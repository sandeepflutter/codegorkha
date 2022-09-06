import React from 'react';
import '../../App.css';
import Lottie from "lottie-react";
import  mobile from '../../Asset/mob.json';
import f from '../../Asset/f.png'


export const Mob  = () => {
    return (
<div class="">

<div id="about" class=" bg-gradient-to-r from-blue-800 to-blue-700 body-font">
<section  class="pb-5 lg:pb-[9px] pl-5 pr-5">
   <div class="px-3 lg:px-20 sm:px-10 md:px-5 lg:flex md:flex">

<div className='lg:w-[200vh] md:w-[200vh]'>
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" py-10 text-white font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
               Mobile Application
               </h2>
            </div>
         </div>
      </div>
      

<div className='pb-5 '>
<p className='  text-white pb-5 align-middle flex items-center justify-center text-justify font-alegreya text-[18px]'>
We create mobile applications that are both responsive and suitable for tablets and smartphones. 
Using the right technology, we will create specialized applications for your professional and private needs.
 Applications for smartphones and other mobile devices are crucial for both informational purposes and 
 corporate growth. We deliver you innovative applications that solve your digital problems and boost your 
 online presence. Allow us to assist you in growing along with us.
            </p>
            <div>
     <h1 class="font-hahmlet text-[14px] text-center text-white">Tech We Work With</h1>
  <h1 class="font-hahmlet text-[12px] text-center text-white">FRAMEWORK</h1>
 <div className='lg:flex text-center relative items-center justify-center md:flex'>
       
 <div class="-m-4">
<div class="p-4 flex items-center justify-center">
  <div class="py-6 rounded-lg transform transition duration-500 hover:scale-110 ">
  <img src={f} alt="img1" class=" w-5 h-5 mb-1 inline-block "/>
    <p class="leading-relaxed font-titillium text-[14px] text-white ">Flutter</p>
  </div>
</div>
</div>
</div>
</div>
</div>

</div>

<div className='flex items-center justify-center lg:w-1/2 ' >
<Lottie animationData={mobile} loop={true}/>
</div>
</div>
</section>
</div>
</div>
    )
  }

  
  export default Mob;