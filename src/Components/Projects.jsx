import React from 'react';
import FoodCart from '../Images/FoodBlog.png';
import TickTacToe from '../Images/TickTacToe.jpeg';
import jsi from '../Images/passGenerator.jpg';
import TodoList from '../Images/to_do_list_icon.png';
import urlShortener from '../Images/UrlShortner.jpeg'
import BookStore from '../Images/BookStore.png';
import roxiler from '../Images/Roxiler.jpeg'
function Projects () {
const CardItems=[
    {
        id:1,
        name:"FoodCourt",
        logo:FoodCart,
        webd:'https://food-cart-tejas.vercel.app/',
        desc:'The MERN Food Court project is a full-stack app for food ordering with Redux for state management',
        webRepo:'https://github.com/TejasBhoite0707/Food-CART',
    },
    {
        id:2,
        name:"Tic Tak Toe",
        logo:TickTacToe,
        webd:'https://tejas-tictactoe.netlify.app',
        desc:'The Tic Tac Toe project is a React app that lets players play and saves move history',
        webRepo:'https://github.com/TejasBhoite0707/Game',
    },
    {
        id:3,
        name:"PasswordGenerator",
        logo:jsi,
        webd:'https://tejaspassword.netlify.app',
        desc:'Developed a random password generator in React for creating secure, customizable passwords',
        webRepo:'https://github.com/TejasBhoite0707/Password_Generator',
    },
    {
        id:4,
        name:"Bookstotre",
        logo:BookStore,
        webd:'https://github.com/TejasBhoite0707/BookStore',
        desc:'Built a MERN stack bookstore app where users can browse and read books seamlessly',
        webRepo:'https://github.com/TejasBhoite0707/BookStore',
    },
    {
        id:5 ,
        name:"TodoList",
        logo:TodoList,
        webd:'https://tejastodolist.netlify.app',
        desc:'Developed a React to-do list app using Context API for efficient state management and task tracking',
        webRepo:'https://github.com/TejasBhoite0707/ContextApiStorage',
    },
    {
        id:6 ,
        name:"URL SHORTENER",
        logo:urlShortener,
        webd:'https://playful-sunshine-3d4649.netlify.app',
        desc:'Built a React URL shortener app with Supabase backend Service to efficiently shorten long URLs',
        webRepo:'https://github.com/TejasBhoite0707/url-shortener-master',
    },
    {
        id:7 ,
        name:"Roxiler Transaction",
        logo:roxiler,
        webd:'https://roxiller-transactions.vercel.app/',
        desc:'Developed a full-stack app that fetches transaction data, featuring a dashboard for sales insights',
        webRepo:'https://github.com/TejasBhoite0707/Solution_Roxiler-Systems',
    },
]
    return (
      <>
     <div name='Projects' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
    <div>
    <h1 className='text-3xl mb-8 font-bold text-gray-800 border-b-4 border-green-800 pb-2 w-fit'>Projects</h1>
        
        <div className='grid md:grid-cols-4 my-10 gap-10'>
            {CardItems.map(({ id, logo, name, webd, webRepo, desc }) => (
                <div key={id} className='border-2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 p-4 bg-white flex flex-col justify-between'>
                    <div className='flex flex-col items-center mb-4'>
                        <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-2 shadow-md' alt={name} />
                        <div className='font-bold text-lg text-center mt-2'>{name}</div>
                        <p className='text-gray-700 text-center mt-1'>{desc}</p>
                    </div>
                    
                    <div className='flex justify-between mt-auto'>
                        <a className='bg-blue-700 text-white rounded-md w-24 p-2 text-center hover:bg-blue-600 transition-colors duration-200' href={webd} target='_blank' rel='noopener noreferrer'>View</a>
                        <a className='bg-blue-700 text-white rounded-md w-24 p-2 text-center hover:bg-blue-600 transition-colors duration-200' href={webRepo} target='_blank' rel='noopener noreferrer'>Repo</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

      
      </>
    );
};

export default Projects;
