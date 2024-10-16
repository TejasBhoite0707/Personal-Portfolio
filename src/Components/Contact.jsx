import React from 'react';
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';
const Contact =() => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit= async (data)=>{
    const UserInfo={
      name:data.name,
      email:data.email,
      message:data.message,
    }
    try {
     await axios.post('https://getform.io/f/bkkgemgb',UserInfo)
     toast.success('message sent successfully')
    } catch (error) {
      toast.error('something going to wrong')
      
    }
  }
    return (
      <>
     <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
    <h1 className='text-3xl mb-8 font-bold text-gray-800 border-b-4 border-green-800 pb-2 w-fit'>Contact Me</h1>
    <h2 className='text-gray-600 mb-4'>Please fill in the details to contact me</h2>
    <div className='flex flex-col justify-center items-center mt-5'>
        <form 
            action='https://getform.io/f/bkkgemgb'
            onSubmit={handleSubmit(onSubmit)} 
            className='bg-gray-200 w-full max-w-md px-8 py-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-4 text-center'>Send Your Message</h2>
            
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700 px-2' htmlFor='name'>Fullname</label>
                <input {...register("name", { required: true })}
                    type='text' placeholder='Enter Your Fullname' id='name' name='name' 
                    className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600' />
                {errors.name && <span className='text-red-600'>This field is required</span>}
            </div>
            
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700 px-2' htmlFor='email'>Email</label>
                <input {...register("email", { required: true })}
                    type='email' placeholder='Enter Your Email' id='email' name='email' 
                    className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600' />
                {errors.email && <span className='text-red-600'>This field is required</span>}
            </div>

            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700 px-2' htmlFor='message'>Message to Me</label>
                <textarea {...register("message", { required: true })}
                    placeholder='Write A Message' id='message' name='message' 
                    className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600'></textarea>
                {errors.message && <span className='text-red-600'>This field is required</span>}
            </div>
            
            <button 
                type="submit" 
                className='bg-black rounded-lg text-white px-4 py-2 transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50'>
                SEND
            </button>
        </form>
    </div>
</div>

      </>
    );
};

export default Contact;
