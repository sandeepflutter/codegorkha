
import { useState } from 'react'
import { Tab } from '@headlessui/react'


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
<div className="">
    
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
      <Footer/>
      </div>
    );
  };
  
  export default Website;