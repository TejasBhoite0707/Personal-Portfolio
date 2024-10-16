import React from 'react';
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
function About () {

    return (
      <>
     <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
  <h1 className='text-3xl mb-8 font-bold text-indigo-300 border-b-4 border-purple-400 pb-2 w-fit'>About Me</h1>
  <p className='text-lg md:text-xl text-stone-50 leading-relaxed'>
    I'm Tejas, a passionate MERN Stack and frontend developer, specializing in creating dynamic, responsive web applications. I excel at building user-centric interfaces using React, Tailwind CSS, and modern tools, delivering seamless performance across platforms. My expertise lies in crafting visually appealing, intuitive web experiences. I strive to ensure every project offers both functionality and aesthetic appeal.
  </p>

  <div className='mt-12'>
    <h1 className='text-2xl font-semibold text-purple-400'>Education and Training</h1>
    <span className='block mt-3 text-lg text-stone-50'>
      B.Tech, Computer Science and Engineering
      <br /> Rajarambapu Institute of Technology, Rajaramnagar
      <br /> December 2021 – July 2025
    </span>
  </div>

  <div className='mt-12'>
    <h1 className='text-2xl font-semibold text-purple-400'>Skills and Expertise</h1>
    <ul className='text-xl space-y-3 mt-4'>
      <li className='flex items-center'><SiMongodb className='mr-2 text-green-600' /> MongoDB</li>
      <li className='flex items-center'><FaReact className='mr-2 text-blue-500' /> React.js</li>
      <li className='flex items-center'><FaNodeJs className='mr-2 text-green-500' /> Node.js</li>
      <li className='flex items-center'><SiExpress className='mr-2 text-stone-50' /> Express.js</li>
      <li className='flex items-center'><IoLogoJavascript className='mr-2 text-yellow-500' /> JavaScript</li>
      <li className='flex items-center'><FaJava className='mr-2 text-red-500' /> Java</li>
      <li className='flex items-center'><FaGitSquare className='mr-2 text-orange-600' /> Git</li>
    </ul>
  </div>

  <div className='mt-12'>
    <h1 className='text-2xl font-semibold text-purple-400'>Mission and Statement</h1>
    <p className='text-lg mt-4 text-stone-50 leading-relaxed'>
      As a MERN Stack developer, my mission is to build dynamic, scalable, and efficient full-stack applications that deliver seamless user experiences. I focus on leveraging cutting-edge technologies and best practices to ensure high-performance, secure, and responsive solutions across the entire development stack. My goal is to turn complex requirements into robust, user-friendly applications that work flawlessly across platforms.
    </p>
  </div>

  <div className='mt-12'>
    <h1 className='text-2xl font-semibold text-purple-400'>Hobbies</h1>
    <p className='text-lg mt-4 text-stone-50 leading-relaxed'>
      I have been playing the tabla since childhood and have achieved distinction in four exams. I also love exploring new environments and enjoy discovering the world around me.
    </p>
  </div>
</div>

       <br/>
       <br/>
       <br/>
       <hr/>
      </>
    
       
    );
};

export default About;
