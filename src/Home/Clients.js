import Marquee from "react-fast-marquee";
import React from 'react';
import a from '../Asset/a.jpg';

export const Clients = () => {

      const img = [
        {
            img: a,
            url: "https://www.ashrayaengineering.com.np/",
          },
      ];
    return (
      
      <footer class=" bg-sky-900 body-font">
  <div class="">
    <div class="flex flex-col items-center justify-center">
  </div>
<div className='pt-2'>
  <p className='text-center text-[4vh] text-white pb-5 font-fredericka'>
    Our Happy Clients
  </p>
<Marquee pauseOnHover={true} gradient={false}>       
    <>
        {img.map((item, index) => (
          <div key={index}>
<div class="">
      <a href={item.url} target="_blank" rel="noreferrer">
        <img src={item.img} alt="" class="w-full h-32 p-2"/> 
      </a>
    </div>
          </div>
        ))}
   
    </>
    
</Marquee>
</div>
    </div>
</footer>
    );
  };
  
  export default Clients;