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
        
        <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
  <div className='flex flex-col md:flex-row items-center md:items-start'>

    {/* Text Section */}
    <div className="md:w-1/2 mt-8 md:mt-24 space-y-6 order-2 md:order-1">
      <span className="text-lg md:text-2xl text-gray-700 tracking-wide">Welcome to My Page</span>
      <h1 className="font-extrabold text-3xl md:text-5xl leading-snug md:leading-tight">
        Hello, I am{' '}
        <ReactTyped
          className='text-red-700 md:text-5xl text-4xl font-semibold'
          strings={["Programmer", "Coder", "Developer"]}
          typeSpeed={60}
          backSpeed={60}
          loop={true}
        />
      </h1>
      <p className="text-sm md:text-lg text-gray-600 text-justify leading-relaxed md:leading-loose">
        I am a passionate and responsible MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I specialize in creating dynamic, responsive, and user-centric applications that deliver seamless performance across various platforms.
      </p>

      {/* Social Media and Current Work */}
      <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
        {/* Social Media Links */}
        <div className='space-y-2 text-center md:text-left'>
          <h1 className='text-xl font-semibold'>Available on</h1>
          <ul className='flex space-x-5 text-2xl'>
            <a href='https://www.facebook.com/' target='_blank'>
              <li className='cursor-pointer hover:text-blue-600 hover:scale-110 transition-transform duration-200'>
                <FaFacebook />
              </li>
            </a>
            <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank'>
              <li className='cursor-pointer hover:text-pink-500 hover:scale-110 transition-transform duration-200'>
                <FaInstagram />
              </li>
            </a>
            <a href='https://web.telegram.org/a/' target='_blank'>
              <li className='cursor-pointer hover:text-blue-400 hover:scale-110 transition-transform duration-200'>
                <FaTelegram />
              </li>
            </a>
            <a href='https://www.linkedin.com/feed/' target='_blank'>
              <li className='cursor-pointer hover:text-blue-700 hover:scale-110 transition-transform duration-200'>
                <FaLinkedin />
              </li>
            </a>
          </ul>
        </div>

        {/* Currently Working On */}
        <div className='space-y-2 text-center md:text-left'>
          <h1 className='text-xl font-semibold'>Currently Working On</h1>
          <ul className='flex space-x-5 text-2xl justify-center md:justify-start'>
            <a href='https://react.dev/' target='_blank'>
              <li className='cursor-pointer hover:text-blue-400 hover:scale-110 transition-transform duration-200'>
                <FaReact />
              </li>
            </a>
            <a href='https://www.w3schools.com/html/' target='_blank'>
              <li className='cursor-pointer hover:text-orange-500 hover:scale-110 transition-transform duration-200'>
                <IoLogoHtml5 />
              </li>
            </a>
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
              <li className='cursor-pointer hover:text-yellow-500 hover:scale-110 transition-transform duration-200'>
                <IoLogoJavascript />
              </li>
            </a>
            <a href='https://tailwindcss.com/' target='_blank'>
              <li className='cursor-pointer hover:text-blue-300 hover:scale-110 transition-transform duration-200'>
                <SiTailwindcss />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className='md:w-1/2 md:mt-20 md:ml-48 order-1'>
      <img src={photo} className='rounded-full shadow-lg md:w-[450px] md:h-[450px] hover:scale-105 transition-transform duration-300' alt='Profile' />
    </div>
    
  </div>
</div>

     <hr/>
  
        </>
    );
};

export default Home;
