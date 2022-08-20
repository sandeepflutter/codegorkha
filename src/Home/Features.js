import React from 'react';
import a from '../Asset/a.jpg';
import {TbDrone} from 'react-icons/tb'
import '../App.css';


export const Features = () => {

   document.querySelectorAll( '.ciclegraph' ).forEach( ( ciclegraph )=>{
      let circles = ciclegraph.querySelectorAll( '.circle' )
      let angle = 360-90, dangle = 360 / circles.length
      for( let i = 0; i < circles.length; ++i ){
        let circle = circles[i]
        angle += dangle
        circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
      }
    })

      const img = [
        {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
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
      
<div className='flex bg-blue-300 justify-between'>
   <div className='bg-red-200'>
      <div class="p-1.5 w-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 rounded-full text-center">
    Upload <br/>Photo
  </div>
</div>
  


<div class="p-1.5 w-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 rounded-full text-center">
    Upload <br/>Photo
  </div>
</div>

<div class="p-1.5 w-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 rounded-full text-center">
    Upload <br/>Photo
  </div>
</div>
  


  <div class="p-1.5 w-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 rounded-full text-center">
    Upload <br/>Photo
  </div>
</div>


</div>



<div className='bg-teal-300'>
      <div class="p-1.5 w-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 rounded-full text-center">
    Upload <br/>Photo
  </div>
</div>
  


<div class="p-1.5 w-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 rounded-full text-center">
    Upload <br/>Photo
  </div>
</div>

<div class="p-1.5 w-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 rounded-full text-center">
    Upload <br/>Photo
  </div>
</div>
  


  <div class="p-1.5 w-24 border-2 border-black rounded-full">
  <div class="bg-gray-300 p-4 w-20 rounded-full text-center">
    Upload <br/>Photo
  </div>
</div>


</div>




</div>
</div>

</section>
    </div>
</footer>
    );
  };
  
  export default Features;