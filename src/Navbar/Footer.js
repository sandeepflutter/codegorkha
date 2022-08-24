import logo from '../Asset/logo.png';
import gp from '../Asset/gp.png';

export const Footer = () => {
    return (
    
      <footer class="text-gray-400 bg-sky-900 body-font">
  <div class="container px-5 pt-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a href="#" class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <img src={logo} alt="" class="w-16 h-16 p-2 rounded-full border-white border-2"/> 
        <p class="ml-3 text-xl font-work">Code Gorkha</p>
      </a>
      
      <p class="mt-2 mb-2 text-sm text-white font-amaranth">A full technology company that creates the future.</p>
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <img src={gp} alt='' class="mb-2 w-1/2 h-12 lg:h-14 md:h-14 sm:h-14  p-1"/>
      </a>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3 font-lora">COMPANY</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="#" class="text-gray-400 hover:text-white font-amaranth">About Us</a>
          </li>
          <li>
            <a href="#" class="text-gray-400 hover:text-white font-amaranth">Services</a>
          </li>
          <li>
            <a href="#" class="text-gray-400 hover:text-white font-amaranth">Blog</a>
          </li>
          <li>
            <a href="#" class="text-gray-400 hover:text-white font-amaranth">Careers</a>
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
            <a href="#" class="text-gray-400 hover:text-white font-amaranth">FAQ's</a>
          </li>
          <li>
            <a href="#" class="text-gray-400 hover:text-white font-amaranth">Contact Us</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-emerald-900 bg-opacity-75">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-400 text-sm text-center sm:text-left font-lora">© 2021 Code Gorkha —
        <a href="https://twitter.com/CodeGorkha" rel="noopener noreferrer" class="text-red-400 ml-1 font-lora" target="_blank">@CodeGorkha</a>
      </p>
    </div>
  </div>
</footer>
    );
  };
  
  export default Footer;