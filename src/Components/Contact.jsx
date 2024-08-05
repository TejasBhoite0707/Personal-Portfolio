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
        <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
        <h1>Please fill the details to contact Me</h1>
        <div className='flex flex-col justify-center items-center mt-5'>
            <form 
             action='https://getform.io/f/bkkgemgb'
              onSubmit={handleSubmit(onSubmit)} 
              //</div>method='POST' 
              className='bg-gray-200 w-96 px-8 py-6 rounded-lg'>
              <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
              <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 px-2' htmlFor='name'>Fullname</label>
              <input {...register("name", { required: true })}
               type='text' placeholder='Enter Your Fullname' id='name' name='name' className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-teal-950' />
               {errors.name && <span>This field is required</span>}
              </div>
               
              <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 px-2' htmlFor='email'>Email</label>
              <input {...register("email", { required: true })}
               type='email' placeholder='Enter Your Email' id='email' name='email' className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-teal-950'  />
                {errors.email && <span>This field is required</span>}
              </div>

              <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 px-2' htmlFor='message'>Message to me</label>
              <textarea
              {...register("message", { required: true })}
              type='text' placeholder='Write A Message' id='message' name='message' className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-teal-950' />
              {errors.message && <span>This field is required</span>}
              </div>
              <button className='bg-black rounded-lg text-white px-3 py-2 '>SEND</button>
            </form>
        </div>
      </div>
      </>
    );
};

export default Contact;
