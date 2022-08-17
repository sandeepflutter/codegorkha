import logo from '../Asset/logo.png';
import gp from '../Asset/gp.png';
import Screen from "../Link/Screen";
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
      <footer class=" bg-sky-900 body-font">
  <div class="">
    <div class="flex flex-col items-center justify-center pb-16">
  <Screen/>
  </div>
<Marquee>
</Marquee>

<div>
  <p className='text-center text-[4vh] text-white pb-2 font-fredericka'>
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