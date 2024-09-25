import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import {ReactTyped} from 'react-typed';
import photo from '../Images/Myimge.jpeg';
function Home ()  {

    return (
        <>
        
     <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
        <div className='flex flex-col md:flex-row'>

        <div className="md:w-1/2 mt--3 md:mt-24 space-y-2 order-2 md:order-1">
  <span className="text-lg md:text-2xl">Welcome to My Page</span>
  <h1 className="font-bold text-2xl md:text-4xl">
    Hello I am   <ReactTyped
        className='text-red-700 text-4xl'
          strings={["Programmer", "Coder", "Developer"]}
          typeSpeed={50}
          backSpeed={50}
          loop={true}
        />
  </h1>
  <p className="text-sm md:text-lg text-justify">
    I am a passionate and responsible MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I specialize in creating dynamic, responsive, and user-centric applications that deliver seamless performance across various platforms
  </p>
  <br/>
  <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
  <div className='space-y-2 '>
    <h1 className='text-xl font-semibold'>Available on</h1>
  <ul className='flex space-x-3 text-2xl'>
 <a href='https://www.facebook.com/' target='_blank'><li className='cursor-pointer  hover:scale-110 transition-all duration-200'><FaFacebook/></li></a> 
 <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank'><li className='cursor-pointer hover:scale-110 transition-all duration-200'><FaInstagram/></li></a> 
 <a href='https://web.telegram.org/a/' target='_blank'><li className='cursor-pointer hover:scale-110 transition-all duration-200'><FaTelegram/></li></a>  
 <a href='https://www.linkedin.com/feed/' target='_blank'><li className='cursor-pointer hover:scale-110 transition-all duration-200'><FaLinkedin/></li></a>  
    </ul> 
  </div>
  <div className='space-y-2 '>
  <h1 className='text-xl font-semibold  md:text-xl'>Currently Working On</h1>
  <ul className='flex space-x-3 text-2xl justify-center md:justify-start'>
 <a href='https://react.dev/' target='_blank'><li className='cursor-pointer  hover:scale-110 transition-all duration-200'><FaReact/></li></a> 
  <a href='https://www.w3schools.com/html/' target='_blank'><li className='cursor-pointer  hover:scale-110 transition-all duration-200'><IoLogoHtml5/></li></a>  
  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>  <li className='cursor-pointer  hover:scale-110 transition-all duration-200'><IoLogoJavascript/></li></a>
   <a href='https://tailwindcss.com/' target='_blank'><li className='cursor-pointer  hover:scale-110 transition-all duration-200'><SiTailwindcss/></li></a> 
  
    </ul> 
  </div>
  </div>
  
</div>

        <div className='md:w-1/2 md:mt-20 md:ml-48 order-1'>
        <img src={photo} className='rounded-full md:w-[450px] md:h-[450px]'></img>
        </div>
       
        </div>
        
     </div>
     <hr/>
  
        </>
    );
};

export default Home;
