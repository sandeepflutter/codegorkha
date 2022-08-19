import React from 'react';
import a from '../Asset/a.jpg';
import {GiPiggyBank} from 'react-icons/gi';
import {FaThumbsUp} from 'react-icons/fa';
import {FaFileContract} from 'react-icons/fa';
import {BsChatLeftDotsFill} from 'react-icons/bs';
import {RiBillFill} from 'react-icons/ri';
import {GiVacuumCleaner} from 'react-icons/gi'
import {MdEngineering} from 'react-icons/md'
import {FaBusinessTime} from 'react-icons/fa'

export const Services = () => {

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
<div id="skill" className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-4">

        <div className="group p-8 border-b-2 sm:border-r-2 border-blue-500 hover:bg-blue-500 hover:ring-sky-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center ">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <GiPiggyBank className='w-full h-full  text-blue-500 group-hover:text-white transition ease-in-out delay-150'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150 ">No hidden cost, upfront pricing</h6>
          </div>
        </div>

        
        <div className="group p-8 border-b-2 lg:border-r-2 border-blue-500 hover:bg-sky-500 hover:ring-sky-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaThumbsUp className='w-full h-full  text-blue-500 group-hover:text-white transition ease-in-out delay-150'/>
         
          
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">100% work satisfaction</h6>
          </div>
        </div>
        <div className="group p-8 border-b-2 lg:border-r-2 sm:border-r-2 border-blue-500 hover:bg-sky-500 hover:ring-sky-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaFileContract className='w-full h-full  text-blue-500 group-hover:text-white transition ease-in-out delay-150'/>
         

            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">Work from registered company</h6>
          </div>

        </div>
        <div className="group p-8 border-b-2 sm:border-r-0 lg:border-r-0 border-blue-500 hover:bg-sky-500 hover:ring-sky-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaBusinessTime className='w-full h-full  text-blue-500 group-hover:text-white transition ease-in-out delay-150'/>
         
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150"> Work done by experinced licenced engineers</h6>
          </div>
          
        </div>
        <div className="group p-8 border-b-2 lg:border-b-0 lg:border-r-2 sm:border-r border-blue-500 hover:bg-sky-500 hover:ring-sky-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <MdEngineering className='w-full h-full  text-blue-500 group-hover:text-white transition ease-in-out delay-150'/>
   
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">Work around your schedules</h6>
          </div>
        </div>
        <div className="group p-8 border-b-2 lg:border-b-0 sm:border-r-0 lg:border-r-2 border-blue-500 hover:bg-sky-500 hover:ring-sky-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <BsChatLeftDotsFill className='w-full h-full  text-blue-500 group-hover:text-white transition ease-in-out delay-150'/>
   
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">Free professional advices</h6>
          </div>
        </div>
        <div className="group p-8 border-b-2 sm:border-b-0 sm:border-r-2 border-blue-500 hover:bg-sky-500 hover:ring-sky-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <RiBillFill className='w-full h-full  text-blue-500 group-hover:text-white transition ease-in-out delay-150'/>
          
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150"> No obligation estimations</h6>
          </div>
        </div>
        <div className="group p-8 hover:bg-sky-500 hover:ring-sky-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <GiVacuumCleaner className='w-full h-full  text-blue-500 group-hover:text-white transition ease-in-out delay-150'/>
        
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">We leave your premises clean & tidy</h6>
          </div>
        </div>
      </div>
    </div>
    </div>
</footer>
    );
  };
  
  export default Services;