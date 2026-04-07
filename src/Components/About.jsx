import React from 'react';
import { SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { BiLogoTypescript } from 'react-icons/bi';
import APILogo from "../assets/Logos/APILogo.png"
import CICD from "../assets/Logos/CICD.png"
function About () {

    return (
      <>
     <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
  <h1 className='text-3xl mb-8 font-bold text-indigo-300 border-b-4 border-purple-400 pb-2 w-fit'>About Me</h1>
  <p className='text-lg md:text-xl text-stone-50 leading-relaxed'>
    I'm Tejas, a Full Stack Developer with hands-on experience in building scalable and efficient web applications. I specialize in developing modern applications using React.js, Node.js, SQL, and REST APIs, with a strong focus on creating responsive and user-friendly interfaces. I enjoy working across both frontend and backend to deliver complete, high-performance solutions. My experience includes building real-time systems, API-driven applications, and dynamic dashboards that improve usability and performance. I strive to write clean, maintainable code while continuously learning new technologies to build impactful and reliable software solutions.
  </p>

  <div className='mt-12'>
    <h1 className='text-2xl font-semibold text-purple-400'>Education and Training</h1>
    <span className='block mt-3 text-lg text-stone-50'>
      B.Tech, Computer Science and Engineering
      <br /> Rajarambapu Institute of Technology, Rajaramnagar
      <br /> December 2021 – July 2025
    </span>
  </div>

<div className="mt-12">
  <h1 className="text-2xl font-semibold text-purple-400">Experience</h1>

   <div className="mt-6">
    <div className="flex justify-between items-center flex-wrap">
    <a href='https://www.linkedin.com/company/solutions-by-technosoft/posts/?feedView=all'><h2 className="underline text-xl text-stone-50 font-semibold">Technosoft Software Solution</h2></a>  
      <span className="text-sm text-stone-400 italic">Present</span>
    </div>
    <p className="text-lg text-purple-300 mt-1">Full Stack Developer </p>

    <div className="mt-4">
      <ul className="list-disc pl-5 text-stone-50 space-y-2 text-[18px]">
        <li>Developed and deployed a Token Management System using React.js, Node.js, Express, SQL, and Socket.IO, enabling real-time queue updates, token generation, counter management, and live display panels.</li>
        <li>Designed and implemented a Notification Center module with integrated SMS API configuration, dynamic template parameters, and messaging workflows, currently used in production by institute clients.</li>
        <li>Built multiple backend REST APIs for file processing, including Excel data validation and automated ZIP extraction with structured data verification to ensure accuracy before system ingestion.</li>
        <li>Developed academic management modules including Timetable Tracking and Syllabus Tracking, handling complex API dependencies and optimized SQL queries for efficient data retrieval.</li>
        <li>Implemented relational mapping systems for Course–Teacher, Subject–Teacher, and Class–Teacher assignments, improving academic resource allocation and administrative workflow management.</li>
        <li>Designed and integrated responsive React-based UI screens for operational dashboards including token generation panels, display boards, and management interfaces.</li>
        <li>Collaborated with cross-functional teams to gather requirements, coordinate with UI/UX designers, and follow Git-based version control workflows, while gaining exposure to CI/CD pipeline setup and deployment processes.</li>
      </ul>
    </div>
  </div>

  <div className="mt-8">
    <div className="flex justify-between items-center flex-wrap">
    <a href='https://www.linkedin.com/company/5techg/posts/?feedView=all'><h2 className="text-xl text-stone-50 font-semibold underline">5TechG Lab LLP</h2></a>  
      <span className="text-sm text-stone-400 italic">Jan 2025 – May 2025</span>
    </div>
    <p className="text-lg text-purple-300 mt-1">MERN Stack Developer Intern</p>

    <div className="mt-4">
      <ul className="list-disc pl-5 text-stone-50 space-y-2 text-[18px]">
        <li>Developed and maintained real-world applications in real estate, ERP, and ed-tech domains.</li>
        <li>Created responsive UIs using React.js, Tailwind CSS, Ant Design, and Material UI.</li>
        <li>Integrated Redux and Redux Thunk for efficient state management and API handling.</li>
        <li>Worked on admin panels, employee dashboards, and Excel export/reporting features.</li>
        <li>Implemented dynamic charts for attendance using Chart.js (daily, weekly, monthly views).</li>
        <li>Collaborated with backend teams for API development and participated in client meetings.</li>
        <li>Enhanced user engagement with features like birthday/work anniversary pop-ups.</li>
      </ul>
    </div>
  </div>
</div>



  <div className='mt-12'>
    <h1 className='text-2xl font-semibold text-purple-400'>Skills and Expertise</h1>
   
    <div className="flex flex-wrap gap-3 mt-4 text-lg">
  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full ">
    <SiMongodb className="text-green-600 h-8 w-8"/> MongoDB
  </span>

  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <FaReact className="text-blue-500 h-8 w-8"/> React.js
  </span>

  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full ">
    <FaNodeJs className="text-green-500 h-8 w-8"/> Node.js
  </span>

  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <SiExpress className='h-8 w-8' /> Express.js
  </span>

  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <IoLogoJavascript className="text-yellow-500 h-8 w-8"/> JavaScript
  </span>

  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <FaJava className="text-red-500 h-8 w-8"/> Java
  </span>

  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <FaGitSquare className="text-orange-600 h-8 w-8"/> Git
  </span>
  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <BiLogoTypescript className="text-blue-400 h-8 w-8"/> TypeScript
  </span>
   <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <SiMysql  className="text-blue-400 h-8 w-8"/> MySQL
  </span>
  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <img src={APILogo}  className="text-blue-400 h-8 w-10"/> Rest API
  </span>
  <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <img src={CICD}  className="text-blue-400 h-8 w-10"/> CICD pipeline
  </span>
   <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <SiPostman  className="text-orange-600 h-8 w-8"/> Postman
  </span>
  
</div>
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
