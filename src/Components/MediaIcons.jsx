import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
<FaGithubSquare />
import { FaLinkedin } from "react-icons/fa";
<FaLinkedin />

const MediaIcons = () => {
  return (
    <div className='fixed left-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-indigo-400 py-4 flex justify-center items-center flex-col gap-4 px-3 rounded-tr-lg rounded-br-lg shadow-lg z-50'>
    <a 
        href='https://github.com/TejasBhoite0707' 
        target='_blank' 
        
        className='p-2 rounded-lg bg-gray-900 hover:bg-black transition-all duration-300 transform hover:-translate-y-1 hover:rotate-20 hover:scale-110 flex items-center justify-center'
    >
        <FaGithubSquare fontSize={28} className='transition-transform duration-300' />
    </a>
    <a 
        href='https://www.linkedin.com/in/tejas-bhoite-759263239/' 
        target='_blank' 
         
        className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition-all duration-300 transform hover:-translate-y-1 hover:rotate-20 hover:scale-110 flex items-center justify-center'
    >
        <FaLinkedin fontSize={28} className='transition-transform duration-300' />
    </a>
</div>

  )
}

export default MediaIcons