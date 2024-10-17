import React, { useRef, useState } from 'react';
import Button from '../../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../../components/SignIn/Input';
import axios from 'axios';
import { storeData } from '../../../utils/FileManagement';
import { toast } from 'react-toastify';

const AddCourses = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const [imageSrc, setImageSrc] = useState('https://via.placeholder.com/100'); 
    const fileInputRef = useRef(null); 
    const API_KEY = '9c7c04f46fb0e79f4be68f9eafd8aff3';
    const submitButtonRef = useRef(null);
    const navigate = useNavigate();

    // Image change handler and ImgBB upload
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
          const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${API_KEY}`,
            formData
          );

          if (response.data.success) {
            setImageSrc(response.data.data.url); // Set the new image URL after upload
            console.log("Image uploaded:", response.data.data.url);
          } else {
            console.log("Failed to upload image");
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
    };

    const handleImageClick = () => {
      fileInputRef.current.click(); // Open file dialog
    };

    // Form submit handler
    async function onSubmit(data) {

      // Include the image URL in the form data
      const formData = {
        ...data,
        imageUrl: imageSrc, // Add image URL to form data
      };

      await new Promise((resolve) => setTimeout(resolve,10));
      console.log('Form data with image url:', formData);
      
      
        const res= storeData('course',formData);
        if(res) {
            toast.success('Course successfully added');

            navigate('/admin/courses')

        }
        else toast.error('Something went wrong')
       
    
    };

    return (
        <div className='h-full w-screen flex items-center justify-center absolute bg-grayDark text-white'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[1000px] h-[450px] -ml-[200px] bg-dark p-4 grid grid-cols-2 gap-2 rounded-lg'>
                
                {/* Image Chooser */}
                <div className="max-w-xs mx-auto p-1 ml-0 bg-white shadow-md rounded-lg">
                    <div
                        onClick={handleImageClick}
                        className="cursor-pointer w-24 h-24 bg-gray-100 flex items-center justify-center border rounded-md overflow-hidden"
                        style={{ width: '170px', height: '100px' }} 
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

                {/* Input Fields */}
                <input 
                    className='h-12 rounded-md bg-grayDark p-4 col-span-2' 
                    placeholder='Type Course Title...' 
                    {...register("title", { required: true })} 
                />
                <input 
                    className='h-12 rounded-md bg-grayDark p-4' 
                    placeholder='Type Course Label...' 
                    {...register("label", { required: true })}
                />
                <input 
                    className='h-12 rounded-md bg-grayDark p-4' 
                    placeholder='Type Course Price...' 
                    {...register("price", { required: true })} 
                />
                <input 
                    type='text' 
                    className='h-32 rounded-md bg-grayDark p-4 col-span-2' 
                    placeholder='Write Down Further Information About Course' 
                    {...register("details", { required: true })} 
                />
                
                {/* Submit Button */}
                <button className='w-[150px] py-2 ml-0 bg-primary rounded-md ' disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Add Course'}
                </button>
            </form>
        </div>
    );
};

export default AddCourses;

