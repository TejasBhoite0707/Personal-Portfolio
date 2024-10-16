import React from 'react';
import FoodCart from '../Images/FoodBlog.png';
import TickTacToe from '../Images/TickTacToe.jpeg';
import jsi from '../Images/passGenerator.jpg';
import TodoList from '../Images/to_do_list_icon.png';
import urlShortener from '../Images/UrlShortner.jpeg'
import BookStore from '../Images/BookStore.png';
import roxiler from '../Images/Roxiler.jpeg'
function Portfolio () {
const CardItems=[
    {
        id:1,
        name:"FoodCourt",
        logo:FoodCart,
        webd:'https://food-cart-tejas.vercel.app/',
        desc:'',
        webRepo:'https://github.com/TejasBhoite0707/Food-CART',
    },
    {
        id:2,
        name:"Tic Tak Toe",
        logo:TickTacToe,
        webd:'https://tejas-tictactoe.netlify.app',
        desc:'',
        webRepo:'https://github.com/TejasBhoite0707/Game',
    },
    {
        id:3,
        name:"PasswordGenerator",
        logo:jsi,
        webd:'https://tejaspassword.netlify.app',
        desc:'',
        webRepo:'https://github.com/TejasBhoite0707/Password_Generator',
    },
    {
        id:4,
        name:"Bookstotre",
        logo:BookStore,
        webd:'https://github.com/TejasBhoite0707/BookStore',
        webRepo:'https://github.com/TejasBhoite0707/BookStore',
    },
    {
        id:5 ,
        name:"TodoList",
        logo:TodoList,
        webd:'https://tejastodolist.netlify.app',
        desc:'',
        webRepo:'https://github.com/TejasBhoite0707/ContextApiStorage',
    },
    {
        id:6 ,
        name:"URL SHORTENER",
        logo:urlShortener,
        webd:'https://playful-sunshine-3d4649.netlify.app',
        desc:'',
        webRepo:'https://github.com/TejasBhoite0707/url-shortener-master',
    },
    {
        id:7 ,
        name:"Roxiler Transaction",
        logo:roxiler,
        webd:'https://roxiller-transactions.vercel.app/',
        desc:'',
        webRepo:'https://github.com/TejasBhoite0707/Solution_Roxiler-Systems',
    },
]
    return (
      <>
      <div name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10' >
        <div>
<h1 className='text-3xl mb-5 font-bold'>Portfolio</h1>
<span className='underline  '>featured Projects</span>
<div className='grid md:grid-cols-4 my-10 gap-20'>
{
    CardItems.map(({id,logo,name, webd,
        webRepo,desc})=>(
    <div key={id} className='md:w-[250px]  md:h-[250px] border-[2px] rounded-lg shadow-lg p-1  cursor-pointer md:hover:scale-95 bg-white duration-150'>
<img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px] ml-14' alt=''/> 
<div className=''>
<div className='font-bold text-lg p-1'>{name}</div>
<p className='text-gray-700 p-1'>{desc}  </p>
    </div>
<div className='flex gap-8'>
    <a className='bg-blue-700 text-white rounded-md w-24 items-center hover:text-green-600 text-center' href={webd} target='_blank' >View</a>
    <a className='bg-blue-700 text-white rounded-md w-24 items-center hover:text-green-600 text-center' href={webRepo} target='_blank'>Repo</a>
</div>
    </div>    
    )
    )
}

</div>


</div>
      </div>
      
      </>
    );
};

export default Portfolio;
