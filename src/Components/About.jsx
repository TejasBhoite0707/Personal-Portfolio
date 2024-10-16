import React from 'react';
import { SiMongodb } from "react-icons/si";

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
    <ul type='disk'>
<li><SiMongodb style={{display:'inline'}} />MongoDB</li>
<li><SiMongodb style={{display:'inline'}} />MongoDB</li>
<li><SiMongodb style={{display:'inline'}} />MongoDB</li>
<li><SiMongodb style={{display:'inline'}} />MongoDB</li>
<li><SiMongodb style={{display:'inline'}} />MongoDB</li>
<li><SiMongodb style={{display:'inline'}} />MongoDB</li>
    </ul>
        </span>
        <br/>
        <br/>
        <h1 className='text-xl font-semibold text-green-800'>
           Mission And Statement
        </h1>
        <span>
        
As a frontend developer, my mission is to create intuitive, responsive, and visually engaging user interfaces that enhance the user experience. 
I strive to implement cutting-edge technologies and best practices to ensure seamless performance across all devices. 
My goal is to transform complex ideas into simple, elegant, and accessible web solutions.
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
