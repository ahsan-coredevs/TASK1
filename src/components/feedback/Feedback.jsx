import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import Input from '../SignIn/Input';
import StarRating from '../star/StarRating';
import { storeData } from '../../utils/FileManagement';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function Feedback() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm();
  const [starValue, setStarValue] = useState(0);
  const location= useLocation();
  const navigate = useNavigate();


  useState(()=>{
    if(location?.state?.feedbackData) {
        setValue('title', location?.state?.feedbackData?.title );
        setValue('label', location?.state?.feedbackData?.label );
        setValue('price', location?.state?.feedbackData?.price );
        setValue('details', location?.state?.feedbackData?.details );
        setStarValue(location?.state?.feedbackData?.rating);
    }

},[])

  async function onSubmit(data) {

    const formData = {
      ...data,
      rating: starValue,
    };

    const res= storeData('feedback',formData);
        if(res) {
            toast.success('Feedback successfully added');

            navigate('/home')

        }
        else toast.error('Something went wrong')



    // Simulate an async submission (like an API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Feedback Data is submitting', formData);
  }

  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center absolute bg-grayDark text-white'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-[600px] h-full bg-dark p-8 flex flex-col items-center rounded-lg'>
          <h1>Contact Us</h1>
          
          <Input
            errors={errors.name}
            labelClass={`py-2`}
            InputClass={`px-3 py-2 border rounded-md focus:border-primary`}
            labelName={'Name*'}
            placeholder={'Type Your Name...'}
            register={() => register('name', { required: 'Name is required...', minLength: 6, maxLength: 16 })}
            id="name"
          />

          <Input
            errors={errors.email}
            labelClass={`py-2`}
            InputClass={`w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary`}
            labelName={'Email*'}
            placeholder={'Type Your Email...'}
            register={() => register('email', { required: 'Email is required...', minLength: 8, maxLength: 35 })}
            id="Email"
          />

          <div className='w-full py-4'>
            <p className='text-xl font-bold'>Rate Our Service*</p>
            <StarRating setStarValue={setStarValue} />
          </div>

          <label className='text-start w-full font-bold text-xl' htmlFor="">Feedback*</label>
          <textarea
            type='text'
            className='h-32 w-[100%] m-4 rounded-md bg-grayDark p-4 col-span-2 text-wrap'
            placeholder='Write your experience, it will be appreciated.'
            {...register("feedback", { required: true })}
          />
          
          <Button
            type='submit'
            buttonClass={`w-[100%] py-2 my-4 gap-2`}
            disabled={isSubmitting}
            buttonName={isSubmitting ? 'Submitting' : 'Submit'}
          />
        </form>
      </div>
    </>
  );
}

export default Feedback;
