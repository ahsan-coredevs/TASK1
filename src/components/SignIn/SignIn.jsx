import React, { useState } from 'react'
import Input from './Input'
import { Checkbox, Checkboxok } from '../shared/svgComponents'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignIn() {
  const {register, handleSubmit, reset, formState: { errors }} = useForm();
  const [isChecked, setIsChecked] = useState(false);

  



  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className='w-screen bg-dark text-white flex justify-center items-center'>
        <form className='m-8' onSubmit={handleSubmit(onSubmit)} >
        <div className='w-[450px] p-8 flex flex-col justify-center items-left bg-grayDark rounded-lg'>
            <h1 className='text-xl font-bold'>Sign In</h1>
            <p>Don't have an account? <Link to='/SignUp'><span className='text-primary text-lg hover:text-secondary duration-300 cursor-pointer'>Sign Up</span></Link> </p>
            <Input 
            labelClass={`py-2 `}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
            labelName={'Email*'}
            id={'email'}
            placeholder={'Type Your Email...'}
            register={()=>register('email', {required: 'Email is required...'})}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              
            <Input 
            labelClass={`py-2`}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary `}
            labelName={'Password*'}
            placeholder={'Type Your Password...'}
            id={'password'}
            register={()=>register('password',{required: 'Password is required'})}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            <p className='flex items-center text-base gap-4 pt-4'><p className='flex items-center gap-2'>
              <input 
              type="checkbox" 
              onChange={({target:{checked}})=>setIsChecked(checked)}
              
              />
              
              <span>Remember Me </span></p> <span className='hover:cursor-pointer hover:text-primary duration-300'>Lost your password?</span></p>
            <Button buttonClass={`w-full py-4 my-4 gap-2 flex`} disabled={!isChecked} buttonName={'Log In'} /> 
           
        </div>
        </form>
    </div>
  )
}

export default SignIn