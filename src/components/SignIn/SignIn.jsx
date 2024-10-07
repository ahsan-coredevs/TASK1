import React from 'react'
import Input from './Input'
import { Checkbox } from '../shared/svgComponents'
import Button from '../Button/Button'

function SignIn() {
  return (
    <div className='w-screen bg-dark  h-[550px] text-white flex justify-center items-center'>
        <div className='w-[450px] h-[490px] flex flex-col justify-center items-left bg-grayDark p-4 pl-16 rounded-lg'>
            <h1 className='text-xl font-bold'>Sign In</h1>
            <p>Don't have an account? <span className='text-primary text-lg cursor-pointer hover:text-secondary duration-300 cursor-pointer'>Sign Up</span> </p>
            <Input 
            labelClass={`py-2 `}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
            labelName={'Email*'}
            type={'email'}
            placeholder={'Type Your Email...'}
            />
                <br />
            <Input 
            labelClass={`py-2`}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary `}
            labelName={'Password*'}
            type={'password'}
            placeholder={'Type Your Password...'}
            />
            <p className='flex items-center text-base gap-4 pt-4'><p className='flex items-center gap-2'><Checkbox /> <span>Remember Me </span></p> <span className='hover:cursor-pointer hover:text-primary duration-300'>Lost your password?</span></p>
            <Button buttonClass={`w-[90%] py-4 my-4 gap-4`} buttonName={'Sign In'} /> 
            <Button buttonClass={`w-[90%] py-4 gap-4`} buttonName={'Register'} /> 
        </div>
    </div>
  )
}

export default SignIn