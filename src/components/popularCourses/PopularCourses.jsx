import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/FileManagement';


import Card from './Card'
import { Arrow } from '../shared/svgComponents';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';




function PopularCourses() {
    const [courseData, setCourseData] = useState([]);
    const [filteredData, setFilteredData]=useState([]);
    const [page, setPage] = useState(1);

    const retrieveData = () => {
        const res= fetchData('course');
    
        setCourseData(res)
        const filtered_data= res.slice((0),(4) );
        setFilteredData(filtered_data);
        };

        useEffect(() => {
            retrieveData();
          }, []);
        
          useEffect(() => {
          
          }, [page]);

  return (

    <div className=" ">
         <div className='w-full flex flex-col items-center bg-dark text-slate-300 pt-[50px]  realtive '>
        <p className='text-xl '>Popular Courses</p>
        <h1 className='text-5xl my-4 font-bold'>Pick A Course To Get Started</h1>
        <div className='w-full max-w-[1400px] rounded-md flex gap-6 items-start p-8 flex-wrap bg-grayDark overflow-hidden text-white relative'>
            {courseData.length > 0 ? (
                filteredData.map((course, index) => (
                        <Card 
                        key={index}
                        Image={course.imageUrl}
                        category={course.label}
                        title={course.title}
                        details={course.details}
                        price={course.price}
                        Lessons={'50'}
                        students={'50'}
                        rating={'4.9'}
                        />
    
                ))
            ) : (
                <div>NO COURSE AVAILABLE</div>
                )
            
        }
            
        </div>
        {/* <button className='flex items-center bg-primary px-5 py-4 my-8 rounded-xl active:scale-95 hover:bg-gradient-to-r hover:from-[#1ab69d] hover:to-[#31b978] duration-300'>Browse more courses <Arrow className='ml-4' /> </button> */}
        <Link to="/courses"><Button buttonClass={'py-2 mt-8'} buttonName={'Browse More Courses'} /></Link>
        
    </div>
    </div>
   
  )
}

export default PopularCourses