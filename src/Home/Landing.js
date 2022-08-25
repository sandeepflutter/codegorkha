import React from 'react';
import '../App.css';
import ab from '../Asset/code.riv';
import Rive from 'rive-react';

export const Landing  = () => {      
    return (
      
<div class=" bg-blue-50 body-font">
<section class="pt-5">
   <div class="bg-green-200 px-10 lg:flex items-center content-center md:flex lg:justify-between md:justify-between sm:justify-center justify-center">


      <div class="flex bg-purple-200">
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
<div className='flex items-center justify-center bg-red-200 lg:h-[90vh] md:h-[90vh] h-[60vh]'>
<Rive src={ab} className="full1 "/>
</div>
</div>
</div>
</section>
</div>
    )
  }

  
  export default Landing;