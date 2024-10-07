import React from 'react'
import Input from '../SignIn/Input'
import Button from '../Button/Button'
import { Checkbox } from '../shared/svgComponents'

function SignUp() {
  return (
    <div className='w-screen bg-dark  h-[950px] text-white flex justify-center items-center'>
        <div className='w-[450px] h-[690px] flex flex-col justify-center items-left bg-grayDark p-4 pl-16 rounded-lg'>
            <h1 className='text-xl font-bold'>Registration</h1>
            <p>Already have an account? <span className='text-primary text-lg cursor-pointer hover:text-secondary duration-300 cursor-pointer'>Sign In</span> </p>
            <Input 
            labelClass={`py-2 `}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
            labelName={'Name*'}
            type={'text'}
            placeholder={'Type Your Name...'}
            />
            <Input
            labelClass={`py-2 `}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
            labelName={'Email*'}
            type={'email'}
            placeholder={'Type Your Email...'}
            />
            <Input 
            labelClass={`py-2 `}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
            labelName={'NID*'}
            type={''}
            placeholder={'Type Your NID...'}
            />
                <br />
            <Input 
            labelClass={`py-2`}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary `}
            labelName={'Password*'}
            type={'password'}
            placeholder={'Type Your Password...'}
            />
            <p className='flex items-center text-base gap-4 pt-4'><p className='flex items-center gap-2'><Checkbox /> <p className='flex flex-col'><span> I agree the User Agreement And <br /> </span></p> <span className='hover:cursor-pointer hover:text-primary duration-300'>Terms & Conditions.</span></p> </p>
            <Button buttonClass={`w-[90%] py-4 my-4 gap-4`} buttonName={'Create Account'} /> 
            
        </div>
    </div>
  )
}

export default SignUp