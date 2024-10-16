import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';


function Footer () {

    return (
     <>
     <hr/>
     <footer className='py-12'>
     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
<div className='flex flex-col items-center justify-center'>

<div className='flex space-x-2 '>
  <a href='https://www.facebook.com/' target='_blank'><FaFacebook size={25} className='cursor-pointer hover:scale-110 transition-all duration-200' /></a>  
  <a href='https://x.com/?lang=en' target='_blank'> <FaTwitter size={25} className='cursor-pointer hover:scale-110 transition-all duration-200'/></a>  
  <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank'> <FaInstagram size={25} className='cursor-pointer hover:scale-110 transition-all duration-200'/></a>  
 <a href='https://www.linkedin.com/feed/' target='_blank'> <FaLinkedin size={25} className='cursor-pointer hover:scale-110 transition-all duration-200'/></a>   
</div>
<div className='mt-8 border-t border-gray-600 pt-8 md:flex flex-col items-center'>
    <p className='text-center text-sm font-semibold md:text-lg'>&copy; 2024 your Company: All rights reversed</p>
    <p className='text-center'>Support Partner 💚<a href='https://pranavpise.netlify.app/' target='_blank' className='underline text-blue-700'>Pranav Pise</a></p>
</div>

</div>
      </div>
</footer>
     
     </>
    );
};

export default Footer;
