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
       <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 '>
        <h1 className='text-3xl mb-5 font-bold'>About</h1>
        <p>
        I'm Tejas, a passionate MERN Stack and frontend developer, specializing in creating dynamic, responsive web applications. I excel at building user-centric interfaces using React, Tailwind CSS, and modern tools, delivering seamless performance across platforms. My expertise lies in crafting visually appealing, intuitive web experiences. I strive to ensure every project offers both functionality and aesthetic appeal
        </p>
        <br/>
        <br/>
     
        <h1 className='text-xl font-semibold text-green-800'>
            Education And Training
        </h1>
        <span>
        B.Tech, Computer Science and Engineering
Rajarambapu Institute of Technology, Rajaramnagar
December 2021 – July 2025
        </span>
        <br/>
        <br/>
        <h1 className='text-xl font-semibold text-green-800'>
            Skills And Expertise
        </h1>
        <span>
    <ul type='disk' className='text-xl space-y-2'>
<li><SiMongodb style={{display:'inline'}} /> MongoDB</li>
<li><FaReact style={{display:'inline'}} /> React.js</li>
<li><FaNodeJs style={{display:'inline'}} /> Node.js</li>
<li><SiExpress style={{display:'inline'}} /> Express.js</li>
<li><IoLogoJavascript style={{display:'inline'}} /> JavaScript</li>
<li><FaJava style={{display:'inline'}} /> Java</li>
<li><FaGitSquare style={{display:'inline'}} /> git</li>
    </ul>
        </span>
        <br/>
        <br/>
        <h1 className='text-xl font-semibold text-green-800'>
           Mission And Statement
        </h1>
        <span>
        
        As a MERN Stack developer, my mission is to build dynamic, scalable, and efficient full-stack applications that deliver seamless user experiences. I focus on leveraging cutting-edge technologies and best practices to ensure high-performance, secure, and responsive solutions across the entire development stack. My goal is to turn complex requirements into robust, user-friendly applications that work flawlessly across platforms.
        </span>
        <br/>
        <br/>
        <h1 className='text-xl font-semibold text-green-800'>
            Hobbies
        </h1>
        <span>
        I have been playing the tabla since childhood and have achieved distinction in four exams. I also love exploring new environments and enjoy discovering the world around me. 
        </span>
       </div>
       <br/>
       <br/>
       <br/>
       <hr/>
      </>
    
       
    );
};

export default About;
