import {FaYoutube}from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import {FaMedium}from 'react-icons/fa';
import {FaInstagram}from 'react-icons/fa';
import React, { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import Footer from "../Navbar/Footer";


export const Contact = ({social: {youtube, github, medium, facebook, twitter, email, insta}}) => {

  const [status, setStatus] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xe3saz', 'template_5078hnp', form.current, 'kDfSgnoinmtaetfZf')
      .then((result) => {
          console.log(result.text);
        setStatus('success');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    
  };

  useEffect(() => {
    if(status === 'success') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status])




    return (
      <form id="contact" ref={form} onSubmit={sendEmail}>
    <div className='bg-blue-50'>
      <div id="skill" className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">


<section class="text-black body-font relative">
  <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
 
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.2768919371!2d85.29111305705348!3d27.709031933798837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1660056717028!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%" height="100%" title="map" class="absolute inset-0 bg-gray-300" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>
   
      <div class="bg-white relative flex flex-wrap py-2 rounded shadow-md opacity-90">
        <div class="lg:w-1/2 px-10">
          <h2 class=" font-bold text-red-500 tracking-widest text-xs font-hahmlet ">ADDRESS</h2>
          <p class="mt-1 text-blue-500 font-lora">Kathmandu, Bagmati Province, Nepal</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class=" font-bold text-red-500 tracking-widest text-xs font-hahmlet">EMAIL</h2>
          <button class="text-blue-500 leading-relaxed font-lora" >codegorkha@gmail.com</button>
          <h2 class=" font-bold text-red-500 tracking-widest text-xs mt-4 font-hahmlet">PHONE</h2>
          <p class="text-blue-500 font-lora">+977-9840173170</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-black text-lg mb-1 font-medium title-font text-center font-hahmlet">Write Us</h2>
      <p class="text-center mb-5 font-alegreya">Never hesitate to contact us.</p>
      {status && renderAlert()}
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-black font-lora">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray-300 rounded border border-blue-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-400 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellcheck="false" data-ms-editor="true"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-black font-lora">Email</label>
        <input type="email" id="email" name="user_email" class="w-full bg-gray-300 rounded border border-blue-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-400 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-black font-lora">Message</label>
        <textarea id="message" name="message" class="w-full bg-gray-300 rounded border border-blue-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-400 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" spellcheck="false" data-ms-editor="true"></textarea>
      </div>
      <button type='submit' value="send" class="font-hahmlet text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Send</button>
      </div>
  </div>
</section>

<div class="box-content h-fit w-100% p-4 border-t-4 border-red-400 ">
  <div>
    <p className="text-center font-bold font-oleo">Connect With Us</p>
  </div>
  <div className="flex align-center justify-center mt-1">
  
 

            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300"
              href={youtube} target="_blank" rel="noreferrer"
            >
              <FaYoutube/>
              <span class="sr-only">Youtube</span>
            </a>

            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              href={github} target="_blank" rel="noreferrer"
            >
              <FaGithub/>
              <span class="sr-only">Github</span>
            </a>
            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors duration-300"
              href={medium} target="_blank" rel="noreferrer"
            >
              <FaMedium/>
              <span class="sr-only">Medium</span>
            </a>
            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              href={facebook} target="_blank" rel="noreferrer"
            >
              <ImFacebook2/>
              <span class="sr-only">Facebook</span>
            </a>
            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              href={twitter} target="_blank" rel="noreferrer"
            >
              <FaTwitter/>
              <span class="sr-only">Twitter</span>
            </a>

            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
              href={insta} target="_blank" rel="noreferrer"
            >
              <FaInstagram/>
              <span class="sr-only">Twitter</span>
            </a>
            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300"
              href={"https://mail.google.com/mail/?view=cm&fs=1&to="+email } target="_blank" rel="noreferrer"
            >
              <FaRegEnvelope class="animate-pulse"/>
              <span class="sr-only">Email</span>
            </a>
</div>

  
</div>
      </div>
      <Footer/>
      </div>
      </form>
    );
  };
  


  const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-green-700 bg-blue-100 rounded mb-5 text-center ">
      <p>Message Submitted successfully</p>
    </div>)



  export default Contact;
  
  