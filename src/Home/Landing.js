import React from 'react';
import '../App.css';
import ab from '../Asset/code.riv';
import Rive from 'rive-react';
import wave from '../Asset/wave.svg'

export const Landing  = () => {      
    return (
      
<div class=" bg-gradient-to-r from-blue-800 to-blue-700 body-font">
<section class="pt-5">
   <div class=" px-10 lg:flex items-center content-center md:flex lg:justify-between md:justify-between sm:justify-center justify-center">


      <div class="flex ">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" text-red-500 font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
                  About
               </h2>
               <p class="text-base text-body-color font-titillium text-blue-500">
               As a Software company, we provide a wide range of features on the products.
               </p>
            </div>
      </div>
     
     
<div className='flex flex-1 lg:flex-none sm:flex-1 md:flex-none items-center justify-center'>
<div className='flex items-center justify-cente lg:h-[75vh] md:h-[75vh] h-[50vh]'>
<Rive src={ab} className="full1 "/>
</div>
</div>
</div>
<img src={wave} class="col-start-1 row-start-1 self-center" z-1 alt="Tailwind Play" />
</section>


</div>
    )
  }

  
  export default Landing;