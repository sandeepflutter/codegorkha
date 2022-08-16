
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import f from '../Asset/f.png'
import bg from '../Asset/bg.jpg'
import sam from '../Asset/sam.jpg'
import wt from '../Asset/wt.jpg'
import Footer from "../Navbar/Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export const Mobile = () => {

  let [categories] = useState({
    Android: [
      {
        id: 1,
        title: 'World Tour',
        date: "World Tour is a tourist guide mobile application which gives details about different countries and it's tourist destination.",
        url: "https://play.google.com/store/apps/details?id=com.codegurkha.worldtour",
        img: wt,
        tag1: f,
        tag2: null,
        tag3: null,
        tag4: null,
      },
      {
        id: 2,
        title: "BolChitra",
        date: 'The Bolchitra application allows users to share stories from across the world and convey ideas using visual and combine with text.',
        url: "https://play.google.com/store/apps/details?id=com.codegurkha.bolchitra",
        img: bg,
        tag1: f,
        tag2: null,
        tag3: null,
        tag4: null,
      },
      {
        id: 3,
        title: "Samrajya",
        date: 'Samrajya is an online shopping application that is dedicated to serving its users by delivering the essential products.',
        url: "https://play.google.com/store/apps/details?id=com.codegurkha.samrajya",
        img: sam,
        tag1: f,
        tag2: null,
        tag3: null,
        tag4: null,
      },
    ],

  })



    return (
    



<div className="bg-blue-50">
      
      <div id="skill" className="  px-4  py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
     
     
     
     
     
     
<p className="text-center font-bold text-3xl font-crimson">Mobile Application</p>



<div >
  <h1 class="text-[3vh] font-hahmlet">Tech We Work With</h1>
  <h1 class="text-[2vh] font-hahmlet">FRAMEWORK</h1>
  <section class="text-gray-700 body-font">
  <div class="container px-5 py-2 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/6 sm:w-1/3 w-1/2">
        <div class="px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <img src={f} class=" w-12 h-12 mb-3 inline-block" alt=''/>
          <p class="leading-relaxed font-titillium">Flutter</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>



     
      

  

      
  

 

<div className="w-full justify-center flex items-center">
<div className="w-full max-w-6xl px-2 py-2 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-300 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'font-lora  w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'font-lora     ring-blue-600 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'font-lora  bg-white shadow'
                    : 'font-lora  text-white hover:bg-blue-500 hover:text-white'
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

                 <div key={post.id} >
                 <div class="flex justify-center card m-2 cursor-pointer border hover:border-blue-500 rounded-lg hover:shadow-lg transform hover:-translate-y-3 transition-all duration-200">
                 <div class="rounded-lg shadow-lg bg-white max-w-sm">
                 <a href={post.url} target="_blank" rel="noreferrer" >
                 <img class="border-blue-300 border-b rounded-t-lg" src={post.img} alt=""/>
                 </a>
                 <div class="pb-8 pt-5 px-4">
                 <h5 class="text-gray-900 text-xl font-medium pb-2 font-hahmlet  ">{post.title}</h5>
                 <p class="text-gray-700 text-base mb-2 text-justify font-alegreya  ">
                 {post.date}
                 </p>
                 <img class="text-sm inline rounded-full px-2 align-top float-right h-7" src={post.tag1} alt=""/>
                 <img class="text-sm inline rounded-full px-2 align-top float-right  h-7" src={post.tag2} alt=""/>
                 <img class="text-sm inline rounded-full px-2 align-top float-right  h-7" src={post.tag3} alt=""/>
                 <img class="text-sm inline rounded-full px-2 align-top float-right  h-7" src={post.tag4} alt=""/>
                 
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
      </div><Footer />
      </div>
    );
  };
  
  export default Mobile;