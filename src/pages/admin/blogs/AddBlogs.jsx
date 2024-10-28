import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { storeData, editItem } from '../../../utils/FileManagement';
import { toast } from 'react-toastify';

function AddBlogs() {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm();
    const [imageSrc, setImageSrc] = useState('https://via.placeholder.com/100');
    const fileInputRef = useRef(null); 
    const API_KEY = import.meta.env.VITE_IMG_API_KEY;
    const navigate = useNavigate();
    const operation = useParams;
    const location= useLocation();


    useEffect(()=>{
        if(location?.state?.blogData) {
            setValue('title', location?.state?.blogData?.title );
            setValue('label', location?.state?.blogData?.label );
            setValue('details', location?.state?.blogData?.details );
            setImageSrc(location?.state?.blogData?.imageUrl);
        }

    },[])
  
  
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
            setImageSrc(response.data.data.url); 
            console.log("Image uploaded:", response.data.data.url);
          } else {
            console.log("Failed to upload image");
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
    };

    const handleImageClick = () => {
      fileInputRef.current.click();
    };

   
    async function onSubmit(data) {
      const uniqueId = new Date().getTime();
     
      const formData = {
        ...data,
        imageUrl: imageSrc, 
        id: uniqueId
      };


      if(location?.state?.blogData && operation==='edit') {
        const EditedData = editItem('blogs',location?.state?.blogData?.id, formData)
        if(EditedData) {
            toast.success('Blog successfully added');

        }
        else toast.error('Something went wrong')

      }
      else {
        
        const res= storeData('blogs',formData);
        if(res) {
            toast.success('Course successfully added');

            navigate('/admin/blogs')

        }
        else toast.error('Something went wrong')
      }
      
      
       
       
    
    };
  return (
    <div className='w-full h-full flex items-center justify-center bg-grayDark text-white'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full bg-dark p-4 grid grid-cols-2 gap-2'>
                
                
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

             
                <input 
                    className='h-12 rounded-md bg-grayDark p-4 col-span-2' 
                    placeholder='Type Blog Title...' 
                    {...register("title", { required: true })} 
                />
                <input 
                    className='h-12 rounded-md bg-grayDark p-4 col-span-2' 
                    placeholder='Type Blog Label...' 
                    {...register("label", { required: true })}
                />
                <textarea 
                    type='text' 
                    className='h-32 rounded-md bg-grayDark p-4 col-span-2  text-wrap' 
                    placeholder='Write Down Your Blog' 
                    {...register("details", { required: true })} 
                />
                
            
                <button className='w-[150px] py-2 ml-0 bg-primary rounded-md ' disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' :  operation==='edit'?'Update':'Submit'}
                </button>
            </form>
    </div>
  )
}

export default AddBlogs