import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { storeData, editItem } from '../../../utils/FileManagement';
import { toast } from 'react-toastify';
import { Delete, Plus } from '../../../components/shared/svgComponents';
import { useNavigate, useLocation } from 'react-router-dom';
import { api } from '../../../utils/apiCaller';

const AddInstructor = () => {
    const { register, handleSubmit, setValue, formState: { isSubmitting } } = useForm();
    const [imageSrc, setImageSrc] = useState('https://via.placeholder.com/100');
    const [skills, setSkills] = useState([{ id: new Date().getTime(), value: '' }]);
    const fileInputRef = useRef(null);
    const API_KEY = import.meta.env.VITE_IMG_API_KEY;
    const navigate = useNavigate();
    const location = useLocation();
    const operation = location?.state?.operation || 'add';

    useEffect(() => {
        if (location?.state?.instructorData) {
            const { name, designation, details, imageUrl, skills } = location?.state?.instructorData;
            setValue('name', name);
            setValue('designation', designation);
            setValue('details', details);
            setImageSrc(imageUrl);
            if (skills) {
                setSkills(skills.map(skill => ({ id: new Date().getTime(), value: skill })));
            }
        }
    }, [location, setValue]);

    const addNewInput = () => {
        setSkills([...skills, { id: new Date().getTime(), value: '' }]);
    };

    const deleteSkillInput = (skillId) => {
        const updatedSkills = skills.filter(skill => skill.id !== skillId);
        setSkills(updatedSkills);
    };

    const skillInputData = (skillId, event) => {
        const updatedSkills = skills.map(skill =>
            skill.id === skillId ? { ...skill, value: event.target.value } : skill
        );
        setSkills(updatedSkills);
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post(`https://api.imgbb.com/1/upload?key=${API_KEY}`, formData);
            if (response.data.success) {
                setImageSrc(response.data.data.url);
            } else {
                console.log('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
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
            skills: skills.map(skill => skill.value), // Only send skill values
            id: uniqueId
        };
        try {
            let response;
         
            if (location?.state?.instructorData?._id) {
                // Update course (PUT request)
                response = await api.patch(`/insturctor/${location.state.instructorData._id}`, formData);
                if (response.success) {
                    toast.success('Instructor Data successfully updated');
                } else {
                    throw new Error(response.data || "Failed to update Instructor Data");
                }
            } else {
                // Create new course (POST request)
                response = await api.post('/instructor', formData);
                if (response.success) {
                    toast.success('Instructor Data successfully added');
                } else {
                    throw new Error(response.data || "Failed to add Instructor Data");
                }
            }

            navigate('/admin/instructor');
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(error.message || "Something went wrong. Please try again.");
        }
    }

    return (
        <div className='w-full flex items-center justify-center text-white'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full m-4 bg-gray-900 p-4 grid grid-cols-2 gap-2 rounded-lg'>
                
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
                    className='h-12 rounded-md bg-gray-700 p-4 col-span-2'
                    placeholder='Name of Instructor'
                    {...register("name", { required: true })}
                />
                <input
                    className='h-12 rounded-md bg-gray-700 p-4 col-span-2'
                    placeholder='Designation'
                    {...register("designation", { required: true })}
                />
                <textarea
                    type='text'
                    className='h-32 rounded-md bg-gray-700 p-4 col-span-2'
                    placeholder='Write Something About You'
                    {...register("details", { required: true })}
                />

                {/* Skills Input */}
                <div className='col-span-2'>
                    {skills.map((skill) => (
                        <div key={skill.id} className={`transition-all duration-300 ease-in-out flex items-center mb-2 opacity-100`} style={{ height: 'auto' }}>
                            <input
                                className='h-12 w-full rounded-md bg-gray-700 p-4 transition-all duration-300 ease-in-out'
                                placeholder={`Skill`}
                                value={skill.value}
                                onChange={(event) => skillInputData(skill.id, event)}
                            />
                            <div className='flex items-center justify-between gap-2 ml-2'>
                                <Delete
                                    className={`cursor-pointer text-red-500 ${skills.length === 1 ? 'pointer-events-none' : ''}`}
                                    onClick={() => deleteSkillInput(skill.id)}
                                />
                                <Plus
                                    className='cursor-pointer text-green-500'
                                    onClick={addNewInput}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Submit Button */}
                <button className='w-[150px] py-2 bg-blue-500 hover:bg-blue-600 rounded-md col-span-2' disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default AddInstructor;

