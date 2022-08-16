import logo from '../Asset/logo.png';
import gp from '../Asset/gp.png';
import Marquee from "react-fast-marquee";
import React from 'react';
import a from '../Asset/a.jpg';

export const Clients = () => {

    const data = [
        {
            family: "AntDesign",
            names: ["stepforward"]
          },
          {
            family: "Entypo",
            names: ["500px",]
          }
      ];

      const img = [
        {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          },
          {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          },
          {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          },
          {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          },
          {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          },
          {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          },
          {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          },
          {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          }
      ];
    return (
    
      <footer class="text-gray-400 bg-sky-900 body-font">
  <div class="container px-5 pt-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <img src={logo} alt="" class="w-16 h-16 p-2 rounded-full border-white border-2"/> 
        <span class="ml-3 text-xl font-work">Code Gorkha</span>
      </a>
      
      <p class="mt-2 mb-2 text-sm text-white font-amaranth">A full technology company that creates the future.</p>
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <img src={gp} alt='' class="mb-2 w-1/2 h-16 p-1"/>
      </a>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3 font-lora">COMPANY</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white font-amaranth">About Us</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white font-amaranth">Services</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white font-amaranth">Blog</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white font-amaranth">Careers</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3 font-lora">POLICY</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white font-amaranth">Privacy Policy</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white font-amaranth">Terms of Use</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4 mb-2">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3 font-lora">HELP</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white font-amaranth">FAQ's</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white font-amaranth">Contact Us</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="overflow-x-hidden">
    
    <Marquee>
    
  
    
                
            
           
    <>
     
        {data.map((item, index) => (
          <div key={index}>
            {item.names.map((name) => {
               return ( 
               
               
               
               
               
               <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
               <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
               <div class="flex flex-col justify-between p-4 leading-normal">
                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.family}</h5>
                   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{name}</p>
               </div>
           </a>)
              
               

            })
            }
          </div>
        ))}
   
    </>
    
</Marquee>





<Marquee pauseOnHover={true}>       
    <>
     
        {img.map((item, index) => (
          <div key={index}>
<div class="w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a href={item.url} target="_blank" rel="noreferrer"
      
      
      class="flex title-font font-medium items-center md:justify-start justify-center">
        <img src={item.img} alt="" class="w-2/3 h-32 p-2"/> 
      </a>
    </div>
          </div>
        ))}
   
    </>
    
</Marquee>
    </div>
</footer>
    );
  };
  
  export default Clients;