import React, { useEffect, useState } from 'react';
import { LeftArrow, RightArrow } from '../../components/shared/svgComponents';
import Card from '../../components/popularCourses/Card';
import { fetchData } from '../../utils/FileManagement';


const Courses = () => {

    const [courseData, setCourseData] = useState([]);
    const [filteredData, setFilteredData]=useState([]);
    const [page, setPage] = useState(1);
    const item_per_page=4;

    const retrieveData = () => {
        const res= fetchData('course');
    
        setCourseData(res)
        const filtered_data= res.slice((0),(4) );
        setFilteredData(filtered_data);
        console.log(filtered_data);
        };

        useEffect(() => {
            retrieveData();
          }, []);
        
          useEffect(() => {
          
          }, [page]);

          const handlePage = (value=1) => {
            const totat_page = Math.ceil(courseData.length/item_per_page);
            if (value < 1  || value>totat_page) return ;
           const filtered_data= courseData.slice((value-1)*item_per_page,((value-1)*item_per_page)+4 );
           setFilteredData(filtered_data);
           setPage(value)
      
        }
    return (
        <>
            <div className='w-full flex flex-col items-center bg-dark text-slate-200 pt-[50px]  realtive '>
                <p className='text-xl '>Popular Courses</p>
                <h1 className='text-4xl my-4 font-bold'>Pick A Course To Get Started</h1>
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

                <div className=' text-white text-xl flex justify-end pt-5 pb-10'>
                    <button onClick={() => handlePage(page-1)} className='border p-2'><LeftArrow /></button>
                    <button onClick={() => handlePage(page+1)} className='border border-l-0 p-2'><RightArrow /></button>
                </div>

            </div>
        </>
    );
};

export default Courses;