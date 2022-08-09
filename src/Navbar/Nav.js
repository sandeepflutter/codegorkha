
import React, {useState} from "react";
import {Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import logo from '../Asset/logo.png';



function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky z-50 bg-blue-500 " >
      <div className=" px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-center h-12">
      
      <div className="flex flex-1 lg:flex-none sm:flex-1 md:flex-none items-center justify-center">

                <Link to="/">
                <img src={logo} alt="1" class="w-8 h-8 items-center justify-center content-center "/>
                </Link>
              </div>
              
     <nav className="nav-links justify-center">
     <div className="hidden md:block">
     <div className="ml-10 flex items-baseline space-x-4">
        <Link to="/"></Link>
        
        <Link to="/Website"
        className=" hover:text-red-200 text-white px-3 py-2 rounded-md text-sm font-medium "
        >Website</Link>
        <Link to="/Mobile"
        className=" hover:text-red-200 text-white px-3 py-2 rounded-md text-sm font-medium"

        >Mobile</Link>
        <Link to="/Desktop"
        className=" hover:text-red-200 text-white px-3 py-2 rounded-md text-sm font-medium"
        >Desktop</Link>
        <Link to="/Iot"
        className=" hover:text-red-200 text-white px-3 py-2 rounded-md text-sm font-medium"
        >Iot</Link>
        <Link to="/Contact"
        className=" hover:text-red-200 text-white px-3 py-2 rounded-md text-sm font-medium"
        >Contact</Link>
         
        </div>
        </div>
     </nav>

     <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex p-2 rounded-md text-white hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6  "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
     </div>
     </div>
     <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/Website"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Website
                </Link>

                <Link to="/Mobile"  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                   Mobile
                </Link>

                <Link to="/Desktop"  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Desktop
                </Link>

                <Link to="/Iot"  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  IOT
                </Link>

                <Link to="/Contact"  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>

              
              </div>
            </div>
          )}
        </Transition>
  </div>       
);     
}   

export default Nav;
