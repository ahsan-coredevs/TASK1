import React, { useState } from 'react'
import Input from '../SignIn/Input'
import Button from '../Button/Button'
import { Checkbox } from '../shared/svgComponents'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function SignUp() {

  const {register, handleSubmit, watch, formState: { errors }} = useForm();
  const [isChecked, setIsChecked] = useState();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // const {formData, setFormData}= useState({});

  const password = watch('password');
  
  const onSubmit = (data) => console.log(data)

  return (
    <div className='w-screen bg-dark  h-[950px] text-white flex justify-center items-center'>
       <form onSubmit={handleSubmit(onSubmit)}>
       <div  className='w-[450px] h-[690px] flex flex-col justify-center items-left bg-grayDark p-4 pl-16 rounded-lg'>
            <h1 className='text-xl font-bold'>Registration</h1>
            <p>Already have an account? <Link to='/SignIn'><span className='text-primary text-lg hover:text-secondary duration-300 cursor-pointer'>Sign In</span></Link> </p>
            <Input 
            labelClass={`py-2 `}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
            labelName={'Name*'}
            placeholder={'Type Your Name...'}
            register={()=>register('name', {required: 'Name is required...'})}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            <Input
            labelClass={`py-2 `}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
          
            labelName={'Email*'}
            placeholder={'Type Your Email...'}
            register={()=>register('email', {required: 'Email is required...'})}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            {/* <Input 
            labelClass={`py-2 `}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
            labelName={'NID*'}
            placeholder={'Type Your NID...'}
            register={()=>register('nid')}
            /> */}
                <br />
            <Input 
            labelClass={`py-2`}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary `}
            labelName={'Password*'}
        
            placeholder={'Type Your Password...'}
            register={()=>register('password',{required: 'Password is required...'})}
            id="password"
            /> 
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            <Input 
            labelClass={`py-2`}
            InputClass={` w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary `}
            labelName={'Confirm Password*'}

            placeholder={'Retype Your Password...'}
            
            id="confirmpassword"
            register={() =>register('confirmPassword', {
              required: 'Required same as password...',
              validate: (value, formState) =>
                value === formState.password || 'Passwords do not match. Check again....',
            })}
            />
            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}

            <div className='flex flex-col items-start text-base pt-4'><p className='flex items-center gap-2'><button onClick={toggleCheckbox}><Checkbox  /></button> <p className='flex flex-co'> I agree the User Agreement And </p>  </p> <p className='hover:cursor-pointer hover:text-primary duration-300 text-base font-bold'>  Terms & Conditions. </p> </div>
            <Button type='submit' buttonClass={`w-[90%] py-4 my-4 gap-4`} buttonName={'Create Account'} /> 
            
            
        </div>
       </form>
      
    </div>
  )
}

export default SignUp
