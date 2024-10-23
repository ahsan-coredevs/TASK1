import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { storeData, editItem } from '../../../utils/FileManagement';
import { toast } from 'react-toastify';
import { Delete, Plus } from '../../../components/shared/svgComponents';
import { useNavigate } from 'react-router-dom';

const AddInstructor = () => {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm();
    const [imageSrc, setImageSrc] = useState('https://via.placeholder.com/100');
    const [skills, setSkills] = useState(['']); 
    const fileInputRef = useRef(null); 
    const API_KEY = '9c7c04f46fb0e79f4be68f9eafd8aff3';
    const navigate = useNavigate();

    useState(()=>{
        if(location?.state?.instructorData) {
            setValue('title', location?.state?.instructorData?.title );
            setValue('label', location?.state?.instructorData?.label );
            setValue('price', location?.state?.instructorData?.price );
            setValue('details', location?.state?.instructorData?.details );
            setImageSrc(location?.state?.instructorData?.imageUrl);
        }

    },[])
  


    const addNewInput = (index) => {
        setSkills([...skills, ''])
    };

    const deleteSkillInput = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    const skillInputData = (index, event) => {
        const inputData = [...skills];
        inputData[index] = event.target.value;
        setSkills(inputData);
    }
   

   
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
        const formData = {
            ...data,
            imageUrl: imageSrc, 
            skills, 
        };

        if(location?.state?.instructorData && operation==='edit') {
            const EditedData = editItem('course',location?.state?.instructorData?.id, formData)
            if(EditedData) {
                toast.success('Instructor successfully added');
    
            }
            else toast.error('Something went wrong')
    
          }
          else {
            //add new
            const res= storeData('instructor',formData);
            if(res) {
                toast.success('instructor successfully added');
    
                navigate('/admin/instructor')
    
            }
            else toast.error('Something went wrong')
          }
        };


    return (
        <div className='h-full flex items-center justify-center bg-grayDark text-white'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[1000px] bg-dark p-4 grid grid-cols-2 gap-2 rounded-lg'>
                
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
                    placeholder='Name of Instructor' 
                    {...register("name", { required: true })} 
                />
                <input 
                    className='h-12 rounded-md bg-grayDark p-4 col-span-2' 
                    placeholder='Designation' 
                    {...register("designation", { required: true })}
                />
                <textarea 
                    type='text' 
                    className='h-32 rounded-md bg-grayDark p-4 col-span-2' 
                    placeholder='Write Something About You' 
                    {...register("details", { required: true })} 
                />

             
               
                    {
                        skills.map((skill, index) => (
                                <div key={index} className='col-span-2 w-full flex items-center mb-2'>
                            <input
                                className='h-12 w-full rounded-md bg-grayDark p-4' 
                                placeholder={`Skill ${index + 1}`} 
                                value={skill} onChange={() => skillInputData(index, event)}
                            
                            />
                            <div className='flex items-center justify-between gap-2 ml-2'>
                    
                                    {
                                        skills.length > 1 && (
                                            <Delete 
                                            className='cursor-pointer text-red-500'
                                            onClick={() => deleteSkillInput(index)}
                                                />
                                        )
                                    }
                            
                                <Plus 
                                    className='cursor-pointer text-green-500'
                                    onClick={() => addNewInput(index)}
                                />
                            </div>
                        </div>
                        ) )
                    }
             

                {/* Submit Button */}
                <button className='w-[150px] py-2 bg-primary rounded-md col-span-2' disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default AddInstructor;


