
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import f from '../Asset/f.png'
import bg from '../Asset/bg.jpg'
import sam from '../Asset/sam.jpg'
import wt from '../Asset/wt.jpg'

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
        tag: f,
      },
      {
        id: 2,
        title: "BolChitra",
        date: 'The Bolchitra application allows users to share stories from across the world and convey ideas using visual and combine with text.',
        url: "https://play.google.com/store/apps/details?id=com.codegurkha.bolchitra",
        img: bg,
        tag: f,
      },
      {
        id: 3,
        title: "Samrajya",
        date: 'Samrajya is an online shopping application that is dedicated to serving its users by delivering the essential products right to their front doors.',
        url: "https://play.google.com/store/apps/details?id=com.codegurkha.samrajya",
        img: sam,
        tag: f,
      },
    ],

  })



    return (
    



<div className="bg-blue-100">
      
      <div id="skill" className="  px-4  py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
     
     
     
     
     
     
<p className="text-center font-bold text-3xl">Mobile</p>



<div>
  <h1 class="">Tech We Work With</h1>
  <h1 class="">FRONT END</h1>
  <section class="text-gray-700 body-font">
  <div class="container px-5 py-2 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/6 sm:w-1/3 w-1/2">
        <div class="px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <img src={f} class=" w-12 h-12 mb-3 inline-block" alt=''/>
          <p class="leading-relaxed">Flutter</p>
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
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-blue-600 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-white hover:bg-blue-500 hover:text-white'
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
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 "
                  >



<div class="Aligne-center">
    <div class="">
      <div class="card m-2 cursor-pointer border border-gray-500 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
      <div class="m-3">

<a href={post.url} target="_blank" rel="noreferrer" class="flex flex-col items-center md:flex-row">
<img class="object-contain w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={post.img} alt="img"/>
<div class="flex flex-col justify-between p-4 leading-normal">
<div class="flex items-center justify-between">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 lg:pr-10">{post.title}</h5>
<img class="text-sm inline rounded-full px-2 align-top float-right animate-pulse h-5" src={post.tag} alt="tag"/>
</div>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify"> {post.date}</p>
</div>
</a>

</div>
      </div>
    </div>
  </div>
                    
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
      </div>
      </div>
    );
  };
  
  export default Mobile;