import React from 'react';
import '../App.css';
import ab from '../Asset/code.riv';
import Rive from 'rive-react';

export const Landing  = () => {      
    return (
      
<div class=" bg-blue-900 body-font">
<section class="pt-5">
   <div class="px-3 lg:flex md:flex">


      <div class="flex">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" text-white font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
                  About
               </h2>
               <p class="text-base text-body-color font-titillium text-white">
               As a Software company, we provide a wide range of features on the products.
               </p>
            </div>
      </div>
      

<div className='flex items-center justify-center bg-white full'>
<div>
<Rive src={ab} className=""/>
    </div>
</div>
</div>
</section>
</div>
    )
  }

  
  export default Landing;