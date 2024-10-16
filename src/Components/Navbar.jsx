import React from 'react';
import pic from '../Images/Coder.jpeg'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import {Link} from 'react-scroll';
import photo from '../Images/Myimge.jpeg';
function Navbar() {
  const [menu, setMenu] = useState(false);
  const NavItems=[
    {
      id:1,
      name:"Home"
    },
    {
      id:2,
      name:"About"
    },
    {
      id:3,
      name:"Projects"
    },
   
    {
       id:4,
      name:"Contact"
    }
  ]
  return (
    <>

<div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-lg h-16 bg-gradient-to-r from-white via-gray-100 to-gray-50 fixed top-0 right-0 left-0 z-50 border-b-2 border-gray-200'>
  <div className='flex justify-between h-16 items-center'>
    {/* Left Section: Logo and Name */}
    <div className='flex items-center space-x-3'>
      <img src={photo} className='h-12 w-12 rounded-full border-2 border-orange-500 cursor-pointer hover:scale-110 transition-transform duration-300' alt='' />
      <Link to='Home' className='flex flex-col'>
        <h1 className='cursor-pointer text-2xl font-extrabold text-gray-800 hover:text-orange-600 transition-colors duration-300 tracking-wide'>
          Teja<span className='text-orange-600'>s</span>
        </h1>
        <p className='text-sm font-semibold text-gray-500 hover:text-orange-400 transition-colors duration-300'>MERN Stack Developer</p>
      </Link>
    </div>

    {/* Right Section: Nav Links */}
    <div>
      <ul className='hidden md:flex space-x-8'>
        {
          NavItems.map(({ id, name }) => (
            <li className='hover:scale-110 transform transition-transform duration-300 ease-in-out cursor-pointer' key={id}>
              <Link
                to={name}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass='active'
                className='text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium'
              >
                {name}
              </Link>
            </li>
          ))
        }
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
        {menu ? <IoClose size={28} className='text-gray-800 hover:text-orange-600 transition-colors duration-300' /> : <IoMenu size={28} className='text-gray-800 hover:text-orange-600 transition-colors duration-300' />}
      </div>
    </div>
  </div>

  {/* Mobile Navbar */}
  {menu && (
    <div className='bg-white shadow-md border-t-2 border-gray-200'>
      <ul className='md:hidden flex flex-col font-semibold items-center justify-center h-screen space-y-6'>
        {
          NavItems.map(({ id, name }) => (
            <li className='hover:scale-110 transform transition-transform duration-300 cursor-pointer' key={id}>
              <Link
                to={name}
                onClick={() => setMenu(!menu)}
                offset={-70}
                duration={500}
                smooth={true}
                activeClass='active'
                className='text-gray-800 hover:text-orange-600 transition-colors duration-300'
              >
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )}
</div>


    </>


  );
};

export default Navbar;
