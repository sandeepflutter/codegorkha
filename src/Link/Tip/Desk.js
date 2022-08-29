import React, {useEffect} from 'react';
import '../../App.css';
import Lottie from "lottie-react";
import  desk from '../../Asset/desk.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import f from '../../Asset/f.png'

export const Desk  = () => {

  useEffect(
    ()=>{
  AOS.init({duration:1500})
    },[]
  );
   

      
    return (

<div class=" bg-red-300 body-font">
<div class=" bg-white body-font pb-5">
<section id="service" class="pt-5 lg:pt-[20px] pb-5 lg:pb-[9px] pl-5 pr-5">
<div class="flex flex-wrap -mx-4">
         <div class="w-full px-4 py-5">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
               Desktop Application
               </h2>
               <p class="text-base text-body-color font-titillium">
               We develop best Desktop Application using modern tools.
               </p>
            </div>
         </div>
      </div>
 
   <div class="lg:flex px-3 lg:px-20 sm:px-10 md:px-5 justify-between">
     <div>
     <h1 class="font-hahmlet text-[3vh] text-center">Tech We Work With</h1>
  <h1 class="font-hahmlet text-[2vh] text-center">FRAMEWORK</h1>
 <div className='lg:flex text-center relative items-center justify-center md:flex'>
       
 <div class="-m-4 ">
<div class="p-4 flex items-center justify-center">
  <div class="py-6 rounded-lg transform transition duration-500 hover:scale-110">
  <img src={f} alt="img1" class=" w-10 h-10 mb-1 inline-block"/>
    <p class="leading-relaxed font-titillium">Flutter</p>
  </div>
</div>
</div>
</div>
</div>
<div className='flex items-center justify-center '>
<div className='flex items-center justify-center h-[50vh] lg:w-1/2 md:w-1/2 sm:w-1/2  py-5'>
<Lottie animationData={desk} loop={true} height={200} width={200} />
</div></div>
</div>
</section>
</div>
</div>
    )
  }

  
  export default Desk;