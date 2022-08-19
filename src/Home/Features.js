import React from 'react';
import a from '../Asset/a.jpg';
import {BsNewspaper} from 'react-icons/bs'
import {TbDrone} from 'react-icons/tb'
import {GiNotebook} from 'react-icons/gi'
import {MdDraw} from 'react-icons/md'
import {TbBuildingCommunity} from 'react-icons/tb'
import {GiFamilyHouse} from 'react-icons/gi'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {GiSofa} from 'react-icons/gi'

export const Features = () => {

      const img = [
        {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          },
      ];
    return (
      
      <footer class=" bg-white body-font">
  <div class="">
    
<div className='p-10'>
  <p className='text-center text-[4vh] text-blue-500 pb-1 font-fredericka'>
    Our Services
  </p>
  <p className='text-center text-red-500 font-lora'>- What Do We offer -</p>
 
</div>
<section id="service" class="pt-5 lg:pt-[20px] pb-5 lg:pb-[9px] pl-5 pr-5">
   <div class="px-3 lg:px-20 sm:px-10 md:px-5">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-5 lg:mb-5 max-w-[510px]">
               <span class="font-hahmlet text-lg text-primary mb-2 block">
               Our Services
               </span>
               <h2 class=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
                  What We Offer
               </h2>
               <p class="text-base text-body-color font-titillium">
               As an engineering company, we provide a wide range of engineering services on the basis of quality and trust.
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-4">
         <div class=" md:w-1/3 lg:w-1/4 w-1/2 px-1.5 ">
            <div
               class="
               p-5
               md:px-5
               xl:px-5
               rounded-[10px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8 border border-blue-400
               "
               >
               <div
                  class="
                  w-[50px]
                  h-[50px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                 <TbDrone className=" w-20 h-20 fill-red-500" />
               </div>
               <h4 class="font-hahmlet text-xl text-dark mb-3">
               Survey and Mapping
               </h4>
               <p class="text-body-color text-justify font-crimson">
               We provide accurate survey and mapping results by using the latest technology.
               </p>
            </div>
         </div>
         <div class="md:w-1/3 lg:w-1/4 w-1/2 px-1.5">
            <div
               class=" p-5
               md:px-5
               xl:px-5
               rounded-[10px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8  border border-blue-400
               "
               >
               <div class="
                  w-[50px]
                  h-[50px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  <GiNotebook className=" w-20 h-20 fill-blue-500" />
                
               </div>
               <h4 class="font-hahmlet text-xl text-dark mb-3">
               Estimating & Costing
               </h4>
               <p class="font-crimson text-body-color text-justify">
               In accordance with standard procedures, we provide an estimated cost of the project.
               </p>
            </div>
         </div>
         <div class="md:w-1/3 lg:w-1/4 w-1/2 px-1.5">
            <div
               class="
               p-5
               md:px-5
               xl:px-5
               rounded-[10px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8  border border-blue-400
               "
               >
               <div
                  class="
                  w-[50px]
                  h-[50px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  <MdDraw className=" w-20 h-20 fill-teal-600" />
               </div>
               <h4 class="font-hahmlet text-xl text-dark mb-3">
               Detailed Drawing
               </h4>
               <p class="font-crimson text-body-color text-justify">
               We simplify architectural concepts so that even laymen can understand them.
               </p>
            </div>
         </div>
         <div class="md:w-1/3 lg:w-1/4 w-1/2 px-1.5">
            <div
               class="
               p-5
               md:px-5
               xl:px-5
               rounded-[10px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8  border border-blue-400
               "
               >
               <div
                  class="
                  w-[50px]
                  h-[50px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  < GiFamilyHouse className=" w-20 h-20 fill-red-500" />
               </div>
               <h4 class="font-hahmlet text-xl text-dark mb-3">
               Exterior Design
               </h4>
               <p class="font-crimson text-body-color text-justify">
               We offer exterior design in 2D and 3D, as well as render images and videos.
               </p>
            </div>
         </div>
         <div class="md:w-1/3 lg:w-1/4 w-1/2 px-1.5">
            <div
               class="
               p-5
               md:px-5
               xl:px-5
               rounded-[10px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8  border border-blue-400
               "
               >
               <div
                  class="
                  w-[50px]
                  h-[50px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  <TbBuildingCommunity className=" w-20 h-20 fill-pink-300" />
               </div>
               <h4 class="font-hahmlet text-xl text-dark mb-3">
               Muncipal Drawing
               </h4>
               <p class="font-crimson text-body-color text-justify">
               We create designs based on municipal standards and principles.
               </p>
            </div>
         </div>
         <div class="md:w-1/3 lg:w-1/4 w-1/2 px-1.5">
            <div
               class="
               p-5
               md:px-5
               xl:px-5
               rounded-[10px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8  border border-blue-400
               "
               >
               <div
                  class="
                  w-[50px]
                  h-[50px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                 <FaMoneyCheckAlt className=" w-20 h-20 fill-green-500" />
               </div>
               <h4 class="font-hahmlet text-xl text-dark mb-3">
               Valuation
               </h4>
               <p class="font-crimson text-body-color text-justify">
               Providing accurate land and building valuations is one of our specialties.
               </p>
            </div>
         </div>
         <div class="md:w-1/3 lg:w-1/4 w-1/2 px-1.5">
            <div
               class="
               p-5
               md:px-5
               xl:px-5
               rounded-[10px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8  border border-blue-400
               "
               >
               <div
                  class="
                  w-[50px]
                  h-[50px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                 <GiSofa className=" w-20 h-20 fill-purple-700" />
               </div>
               <h4 class="font-hahmlet text-xl text-dark mb-3">
               Interior facilities
               </h4>
               <p class="font-crimson text-body-color text-justify">
               Depending on our clients' needs, we can provide interior design services.
               </p>
            </div>
         </div>
         <div class="md:w-1/3 lg:w-1/4 w-1/2 px-1.5">
            <div
               class="
               p-5
               md:px-5
               xl:px-5
               rounded-[10px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8  border border-blue-400
               "
               >
               <div
                  class="
                  w-[50px]
                  h-[50px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                 <BsNewspaper className=" w-20 h-20 fill-amber-700" />
               </div>
               <h4 class="font-hahmlet text-xl text-dark mb-3">
               Tender
               </h4>
               <p class="font-crimson text-body-color text-justify">
               We offer standard tender documents, bid evaluation and contract assistance. 
               </p>
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