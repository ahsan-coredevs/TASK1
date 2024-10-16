import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { fetchData, storeData } from '../../../utils/FileManagement';

const ManageCourses = () => {
  const [courseData, setCourseData] = useState([]);
  const navigate = useNavigate();
 
  const retrieveData = () => {
    const res= fetchData('course');

    setCourseData(res)
    }
 

 
  useEffect(() => {
    retrieveData();
  }, []);
  
   
  return (
    <>
       <div className='h-full w-[calc(100vw-177px)] relative p-10'>
        <div className="flex justify-end pb-5">
        <button className='text-white] bg-primary py-4 px-6 rounded-md focus:scale-90 duration-100 text-white font-[500] ' onClick={()=>navigate('add')}>Add New Course</button>
        </div>
         

        <div className=" ">
        <table className=' text-white shadow-md overflow-hidden  w-full top-[100px]'>
            <thead className=' '>
              <tr className='p-4 '>
                <th className='bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase rounded-tl-md '>Title</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase '>Label</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase rounded-tr-md'>Price</th>
              </tr>
            </thead>
            <tbody className='bg-grayDark'>
              {courseData.length > 0 ? (
                courseData.map((course, index) => (
                  <tr className=' text-center even:bg-slate-800/50 odd:bg-slate-900/50  ' key={index}>
                    <td className='text-left  py-3 px-6 '>{course.title}</td>
                    <td className=' text-left  py-3 px-6'>{course.label}</td>
                    <td className='text-start py-3 px-6 '>{course.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className={`h-2 ${(courseData?.length-1)%2===0?'bg-[#101726]':'bg-[#17212E]'} rounded-b-md`}></div>
        </div>


       </div>
    </>
  )
};
export default ManageCourses;