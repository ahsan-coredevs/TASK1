import React, { useRef, useState } from 'react';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../../components/SignIn/Input';

const ManageCourses = () => {
    const {register, handleSubmit, watch, formState: { errors, isSubmitting }} = useForm();

    async function onSubmit(data) {
   
   
      console.log('Data is submitting',data)
    };

    const [imageSrc, setImageSrc] = useState('https://via.placeholder.com/100'); 
    const fileInputRef = useRef(null); 
  
   
    const handleImageClick = () => {
      fileInputRef.current.click(); 
    };
  
    
    const handleImageChange = (e) => {
      const file = e.target.files[0]; 
      if (file) {
        const newImageUrl = URL.createObjectURL(file);
        setImageSrc(newImageUrl);
      }
    };
  return (
    <>
        <div className='h-full w-screen flex items-center justify-center absolute bg-grayDark text-white'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[1000px] h-[450px] -ml-[200px] bg-dark p-4 grid grid-cols-2 gap-2 rounded-lg'>


                <div className="max-w-xs mx-auto p-1 ml-0 bg-white shadow-md rounded-lg">
                    <div
                        onClick={handleImageClick}
                        className="cursor-pointer w-24 h-24 bg-gray-100 flex items-center justify-center border rounded-md overflow-hidden"
                        style={{ width: '100px', height: '100px' }} 
                    >

                        <img
                        src={imageSrc}
                        alt="Click to select a new image"
                        className="object-cover w-full h-full"
                        />
                    </div>
                
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef} 
                        onChange={handleImageChange} 
                        style={{ display: 'none' }} 
                    />
                </div> 

                {/* <Input 
                    labelClass={`py-2 `}
                    InputClass={` px-3 py-2 col-span-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
                    labelName={'Title*'}
                    placeholder={'Type Your Title...'}
                    register={()=>register('title', {required: 'Title is required...'})}
            /> */}
                <input className='h-12 rounded-md bg-grayDark p-4 col-span-2' placeholder='Type Course Title...' {...register("title", { required: true })} />
                <input className='h-12 rounded-md bg-grayDark p-4' placeholder='Type Course Label...' {...register("lebel", { required: true })} />
                <input className='h-12 rounded-md bg-grayDark p-4' placeholder='Type Course Price...' {...register("price", { required: true })} />
                <input type='text' className='h-32 rounded-md bg-grayDark p-4 col-span-2' placeholder='Write Down Further Infomation About Course' {...register("details", { required: true })} />
                <button className='w-[150px] py-2 ml-0 bg-primary rounded-md '>Add Course</button>
                
            </form>
        </div>
    </>
  )
}

export default ManageCourses;