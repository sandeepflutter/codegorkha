
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {DiJavascript} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'
import f from '../Asset/f.png'
import a from '../Asset/a.jpg'
import r from '../Asset/r.png'
import t from '../Asset/t.png'
import Footer from "../Navbar/Footer";
import Web from './Tip/Web'





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export const Website = () => {

  let [categories] = useState({
    Company: [
      {
        id: 1,
        title: 'Ashraya Engineering',
        date: 'The company expertise lies in the fields of commercial and residential architectural design supervision and measurement, and cost estimation for residential and commercial buildings. We also have a highly specialized team in land surveying.',
        url: "https://www.ashrayaengineering.com.np/",
        img: a,
        tag1: t,
        tag2: r,
        tag3: null,
        tag4: null,

      },
    ],
  })



    return (
    



<div className="bg-blue-50">
      
      <div id="skill" className="  px-4  py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
     
     
     
     
     
     
<p className="text-center font-bold text-3xl font-crimson">Website</p>



     
      

  

      
  
<div>
  <h1 class="font-hahmlet text-[3vh] ">Tech We Work With</h1>
  <h1 class="font-hahmlet text-[2vh]">FRONT END</h1>
  <section class="text-gray-700 body-font">
  <div class="container px-5 py-2 mx-auto">
   
    <div class="flex flex-wrap -m-4 text-center">

      <div class="p-4 md:w-1/6 sm:w-1/3 w-1/2">
      <div class="px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <AiFillHtml5 class="text-orange-500 w-12 h-12 mb-3 inline-block"/>
          <p class="leading-relaxed font-titillium">HTML</p>
        </div>
      </div>

      <div class="p-4 md:w-1/6 sm:w-1/3 w-1/2">
        <div class="px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <IoLogoCss3 class="text-blue-500 w-12 h-12 mb-3 inline-block"/>
          <p class="leading-relaxed font-titillium" >CSS</p>
        </div>
      </div>



      <div class="p-4 md:w-1/6 sm:w-1/3 w-1/2">
        <div class="px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         <DiJavascript class="text-yellow-500 w-12 h-12 mb-3 inline-block"/>
          <p class="leading-relaxed font-titillium">JavaScript</p>
        </div>
      </div>


<div class="p-4 w-1/2 md:w-1/6 sm:w-1/3">
        <div class="x-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         <GrReactjs class="text-cyan-500 w-12 h-12 mb-3 inline-block"/>
          <p class="leading-relaxed font-titillium">React JS</p>
        </div>
      </div>

      <div class="p-4 w-1/2 md:w-1/6 sm:w-1/3">
        <div class="px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <SiTailwindcss class="text-sky-500 w-12 h-12 mb-3 inline-block"/>
          <p class="leading-relaxed font-titillium">Tailwind CSS</p>
        </div>
      </div>



      <div class="p-4 md:w-1/6 sm:w-1/3 w-1/2">
        <div class="px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <img src={f} alt="img1" class=" w-12 h-12 mb-3 inline-block"/>
          <p class="leading-relaxed font-titillium">Flutter</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
<Web/>
<div className="w-full justify-center flex items-center">
<div className="w-full max-w-6xl px-2 py-2 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-300 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'font-lora w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'font-lora ring-blue-600 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'font-lora bg-white shadow'
                    : 'font-lora text-white hover:bg-blue-500 hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >

             <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-1 "> 
                {posts.map((post) => (
                 <div key={post.id}>

                 <div class="flex justify-center card m-2 cursor-pointer border hover:border-blue-500 rounded-lg hover:shadow-lg transform hover:-translate-y-3 transition-all duration-200">
                 <div class="rounded-lg shadow-lg bg-white max-w-sm">
                 <a href={post.url} target="_blank" rel="noreferrer" >
                 <img class="border-blue-300 border-b rounded-t-lg" src={post.img} alt=""/>
                 </a>
                 <div class="pb-8 pt-5 px-4">
                 <h5 class="text-gray-900 text-xl font-medium pb-2 font-hahmlet">{post.title}</h5>
                 <p class="text-gray-700 text-base mb-2 text-justify font-alegreya">
                 {post.date}
                 </p>
                 
                 
                 <img class="text-sm inline rounded-full px-2 align-top float-right   h-7" src={post.tag1} alt=""/>
                 <img class="text-sm inline rounded-full px-2 align-top float-right   h-7" src={post.tag2} alt=""/>
                 <img class="text-sm inline rounded-full px-2 align-top float-right   h-7" src={post.tag3} alt=""/>
                 <img class="text-sm inline rounded-full px-2 align-top float-right   h-7" src={post.tag4} alt=""/>
                 
                 </div>
                 </div>
                 </div>
                    </div>
                ))}
                </div>
              
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
      </div>
      
      <Footer/>
      </div>
    );
  };
  
  export default Website;