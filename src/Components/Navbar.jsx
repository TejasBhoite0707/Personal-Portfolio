import React from 'react';
import pic from '../Images/Coder.jpeg'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import {Link} from 'react-scroll';
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
      name:"Portfolio"
    },
   
    {
       id:4,
      name:"Contact"
    }
  ]
  return (
    <>

      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 bg-white fixed top-0 right-0 left-0 z-50'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full cursor-pointer' alt='' />
            <h1 className='cursor-pointer text-2xl '>Teja<span className='text-orange-600'>s</span>
              <p className='text-sm font-semibold'>React Devloper</p>
            </h1>
          </div>

          <div className=''>
            <ul className='hidden md:flex space-x-8'>
              {
                NavItems.map(({id,name})=>(
                  <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
<Link to={name}
smooth={true}
duration={500}
offset={-70}
activeClass='active'
>
  {name}
</Link>

                  </li>
                ))
              }
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden' >
              {menu ? <IoClose size={24} /> : <IoMenu size={24} />}

            </div>
          </div>
        </div>
        {/* mobile Navbar*/}
        {menu && (
   <div className='bg-white'>
   <ul className='md:hidden flex flex-col font-semibold items-center justify-center h-screen space-y-4'>
     {
      NavItems.map(({id,name})=>
      <li className='hover:scale-105 duration-200 cursor-pointer' key={id} > 
      <Link to={name}
      onClick={()=>setMenu(!menu)}
      offset={-70}
      duration={500}
      smooth={true}
      activeClass='active'
      >{name}</Link>
      </li>
      )
     }
   </ul>
 </div>
        )}
      </div>
    </>


  );
};

export default Navbar;
