import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';


function Footer () {

    return (
     <>
     <hr/>
     <footer className='py-12 bg-gray-800 text-white'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                    <FaFacebook size={30} className='cursor-pointer hover:scale-125 transition-transform duration-200' />
                </a>
                <a href='https://x.com/?lang=en' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter size={30} className='cursor-pointer hover:scale-125 transition-transform duration-200' />
                </a>
                <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram size={30} className='cursor-pointer hover:scale-125 transition-transform duration-200' />
                </a>
                <a href='https://www.linkedin.com/feed/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={30} className='cursor-pointer hover:scale-125 transition-transform duration-200' />
                </a>
            </div>
            <div className='mt-8 border-t border-gray-600 pt-8 md:flex flex-col items-center'>
                <p className='text-center text-sm font-semibold md:text-lg'>&copy; 2024 Your Company: All rights reserved</p>
                <p className='text-center'>
                    Support Partner 💚
                    <a href='https://pranavpise.netlify.app/' target='_blank' rel='noopener noreferrer' className='underline text-blue-400 hover:text-blue-600 transition-colors duration-200'>
                        Pranav Pise
                    </a>
                </p>
            </div>
        </div>
    </div>
</footer>

     
     </>
    );
};

export default Footer;
