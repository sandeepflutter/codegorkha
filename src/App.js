import React, { useState } from "react";
import Nav from "./components/Navbar/Nav";
import {Link} from 'react-scroll';
import {IoMdRocket} from 'react-icons/io';

function App() {


  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);


  return (
    <div>
      <Link href="#" to="home" spy={true} smooth={true} duration={500} offset={-100}>
      <button  id="myBtn" style={{display: visible ? 'inline' : 'none'}}
      class="fixed z-50 bottom-10 right-8 bg-transparent w-20 h-20 drop-shadow-lg flex justify-center items-center text-blue-500 text-6xl hover:drop-shadow-2xl hover:animate-bounce duration-900">
        <IoMdRocket/></button>
        </Link>
        <Nav /*name={data.name} title={data.title} social={data.social}*/ />
    </div>
  );
}



export default App;
