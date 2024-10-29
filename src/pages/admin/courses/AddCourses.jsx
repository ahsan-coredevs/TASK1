import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { storeData, editItem } from '../../../utils/FileManagement';
import { toast } from 'react-toastify';

const AddCourses = () => {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm();

    const [imageSrc, setImageSrc] = useState('https://via.placeholder.com/100');
    const fileInputRef = useRef(null); 
    const API_KEY = import.meta.env.VITE_IMG_API_KEY;
    const navigate = useNavigate();
    const location= useLocation();
    const operation = location?.state?.operation || 'add';


    useEffect(()=>{
        if(location?.state?.courseData) {
            setValue('title', location?.state?.courseData?.title );
            setValue('label', location?.state?.courseData?.label );
            setValue('price', location?.state?.courseData?.price );
            setValue('details', location?.state?.courseData?.details );
            setImageSrc(location?.state?.courseData?.imageUrl);
        }

    },[])
  
   

    

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
      const uniqueId = new Date().getTime();
      console.log(uniqueId);
      const formData = {
        ...data,
        imageUrl: imageSrc, 
        id: uniqueId
      }

      if(location?.state?.courseData && operation==='edit') {
        const EditedData = editItem('course',location?.state?.courseData?.id, formData)
        if(EditedData) {
            toast.success('Course successfully added');

        }
        else toast.error('Something went wrong')

      }
      else {
        //add new
        const res= storeData('course',formData);
        if(res) {
            toast.success('Course successfully added');

            navigate('/admin/courses')

        }
        else toast.error('Something went wrong')
      }
    };

    return (
        <div className='h-full w-full flex items-center justify-center bg-grayDark text-white'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full bg-dark p-4 grid grid-cols-2 gap-2 rounded-lg'>
                
                {/* Image Chooser */}
                <div className="max-w-xs mx-auto p-1 ml-0 bg-white shadow-md rounded-lg">
                    <div
                        onClick={handleImageClick}
                        className="cursor-pointer w-32 h-24 bg-gray-100 flex items-center justify-center border rounded-md overflow-hidden"
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
                <textarea 
                    type='text' 
                    className='h-32 rounded-md bg-grayDark p-4 col-span-2  text-wrap' 
                    placeholder='Write Down Further Information About Course' 
                    {...register("details", { required: true })} 
                />
                
                {/* Submit Button */}
                <button className='w-[150px] py-2 ml-0 bg-primary rounded-md ' disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' :  operation==='edit'?'Update':'Submit'}
                </button>
            </form>
        </div>
    );
};

export default AddCourses;

