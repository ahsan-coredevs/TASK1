import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import Input from '../SignIn/Input';


function Contact() {
    const {register, handleSubmit, watch, formState: { errors, isSubmitting }} = useForm();

    async function onSubmit(data) {
   
      await new Promise((resolve) => setTimeout(resolve, 5000))
      console.log('Data is submitting',data)
    };
  return (
    <>
        <div className='h-screen w-screen flex items-center justify-center absolute bg-grayDark text-white'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[600px] h-[500px] bg-dark p-8 flex flex-col items-center rounded-lg'>
                <h1>Contact Us</h1>
                <Input 
                errors={errors.name}
                labelClass={`py-2`}
                InputClass={`  px-3 py-2 border rounded-md focus:border-primary  `}
                labelName={'Name*'}
                placeholder={'Type Your Name...'}
                register={()=>register('name',{required: 'name is required...', minLength:6, maxLength: 16})}
                id="name"
                /> 
                
                <Input 
                errors={errors.email}
                labelClass={`py-2`}
                InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary `}
                labelName={'Email*'}
                placeholder={'Type Your Email...'}
                register={()=>register('email',{required: 'Email is required...', minLength:8, maxLength: 35})}
                id="Email"
                /> 
               
                <Input 
                errors={errors.textbox}
                labelClass={`py-2`}
                InputClass={`  w-[100%] h-[100px] text-ellipsis text-wrap px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary `}
                labelName={'Write Your Message*'}
                type={"text"}
                register={()=>register('textbox',{required: 'text is required...', minLength:20, maxLength: 100})}
                id="textbox"
                /> 
                <Button 
                type='submit' buttonClass={`w-[80%] py-2 my-4 gap-2 `} disabled={isSubmitting} buttonName={isSubmitting? 'Submitting':'Submit'}
                />
            </form>
        </div>
    </>
  )
}

export default Contact