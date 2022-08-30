import React, {useEffect} from 'react';
import '../../App.css';
import Lottie from "lottie-react";
import  mobile from '../../Asset/mobile.json';
import f from '../../Asset/f.png'
import AOS from 'aos';
import 'aos/dist/aos.css'


export const Mob  = () => {

  useEffect(
    ()=>{
  AOS.init({duration:1500})
    },[]
  );
    return (
<div class="">

<div id="about" class=" bg-gradient-to-r from-blue-800 to-blue-700 body-font">
<section  class="pb-5 lg:pb-[9px] pl-5 pr-5">
   <div class="px-3 lg:px-20 sm:px-10 md:px-5 lg:flex md:flex">

<div data-aos="fade-right lg:w-1/2 "
     data-aos-easing="ease-in-sine" className='lg:w-[200vh] md:w-[200vh]'>
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
<p className='  text-white align-middle flex items-center justify-center text-justify font-alegreya text-[2.5vh]'>
We create mobile applications that are both responsive and suitable for tablets and smartphones. 
Using the right technology, we will create specialized applications for your professional and private needs.
 Applications for smartphones and other mobile devices are crucial for both informational purposes and 
 corporate growth. We deliver you innovative applications that solve your digital problems and boost your 
 online presence. Allow us to assist you in growing along with us.
            </p>
            <div>
     <h1 class="font-hahmlet text-[2vh] text-center text-white">Tech We Work With</h1>
  <h1 class="font-hahmlet text-[1.5vh] text-center text-white">FRAMEWORK</h1>
 <div className='lg:flex text-center relative items-center justify-center md:flex'>
       
 <div class="-m-4">
<div class="p-4 flex items-center justify-center">
  <div class="py-6 rounded-lg transform transition duration-500 hover:scale-110 ">
  <img src={f} alt="img1" class=" w-5 h-5 mb-1 inline-block "/>
    <p class="leading-relaxed font-titillium text-[2vh] text-white ">Flutter</p>
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