import React from 'react';
import {MdDeveloperMode} from 'react-icons/md';
import {FaMobileAlt} from 'react-icons/fa';
import {CgWebsite} from 'react-icons/cg';
import {BsTools} from 'react-icons/bs';
import {SiMinetest} from 'react-icons/si'
import {MdAppRegistration} from 'react-icons/md'
import {MdOutlineDesignServices} from 'react-icons/md'
import { IoMdDesktop } from 'react-icons/io';

export const Services = () => {

    return (
      
      <footer class=" bg-white body-font">
  <div class="">
    
<div className='p-10'>
  <p className='text-center text-[4vh] text-red-500 pb-1 font-fredericka'>
    Our Services
  </p>
  <p className='text-center text-red-500 font-lora'>- What Do We offer -</p>
 
</div>
<div id="skill" className="px-16  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-32 lg:px-44 lg:py-10">
    <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-4">

        <div className="group p-8 border-b-2 sm:border-r-2 border-red-500 hover:bg-red-500 hover:ring-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-10 sm:h-10">
            <MdDeveloperMode className='w-full h-full  text-red-500 group-hover:text-white transition ease-in-out delay-150'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson text-red-500 group-hover:text-white transition ease-in-out delay-150">Custom Software Development</h6>
          </div>
        </div>

        
        <div className="group p-8 border-b-2 lg:border-r-2 border-red-500 hover:bg-red-500 hover:ring-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-10 sm:h-10">
            <CgWebsite className='w-full h-full  text-red-500 group-hover:text-white transition ease-in-out delay-150'/>
         
          
            </div>
            <h6 className="text-red-500 mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">Web Application Development</h6>
          </div>
        </div>
        <div className="group p-8 border-b-2 lg:border-r-2 sm:border-r-2 border-red-500 hover:bg-red-500 hover:ring-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-10 sm:h-10">
            <FaMobileAlt className='w-full h-full  text-red-500 group-hover:text-white transition ease-in-out delay-150'/>
         

            </div>
            <h6 className="text-red-500 mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">Mobile Application Development</h6>
          </div>

        </div>
        <div className="group p-8 border-b-2 sm:border-r-0 lg:border-r-0 border-red-500 hover:bg-red-500 hover:ring-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-10 sm:h-10">
            <IoMdDesktop className='w-full h-full  text-red-500 group-hover:text-white transition ease-in-out delay-150'/>
         
            </div>
            <h6 className="text-red-500 mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">Desktop Application Development</h6>
          </div>
          
        </div>
        <div className="group p-8 border-b-2 lg:border-b-0 lg:border-r-2 sm:border-r border-red-500 hover:bg-red-500 hover:ring-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-10 sm:h-10">
            <MdOutlineDesignServices className='w-full h-full  text-red-500 group-hover:text-white transition ease-in-out delay-150'/>
   
            </div>
            <h6 className="text-red-500 mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">Software Design & Prototyping</h6>
          </div>
        </div>
        <div className="group p-8 border-b-2 lg:border-b-0 sm:border-r-0 lg:border-r-2 border-red-500 hover:bg-red-500 hover:ring-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-10 sm:h-10">
            <MdAppRegistration className='w-full h-full  text-red-500 group-hover:text-white transition ease-in-out delay-150'/>
   
            </div>
            <h6 className="text-red-500 mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">IT strategy and consulting</h6>
          </div>
        </div>
        <div className="group p-8 border-b-2 sm:border-b-0 sm:border-r-2 border-red-500 hover:bg-red-500 hover:ring-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-10 sm:h-10">
            <BsTools className='w-full h-full  text-red-500 group-hover:text-white transition ease-in-out delay-150'/>
          
            </div>
            <h6 className="text-red-500 mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">Operation and Maintenance</h6>
          </div>
        </div>

        <div className="group p-8 hover:bg-red-500 hover:ring-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-10 sm:h-10">
            <SiMinetest className='w-full h-full  text-red-500 group-hover:text-white transition ease-in-out delay-150'/>
        
            </div>
            <h6 className="text-red-500 mb-2 font-semibold leading-5 font-crimson group-hover:text-white transition ease-in-out delay-150">QA & Testing</h6>
          </div>
        </div>
      </div>
    </div>
    </div>
</footer>
    );
  };
  
  export default Services;