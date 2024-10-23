import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftArrow, RightArrow } from '../../components/shared/svgComponents';
import { fetchData } from '../../utils/FileManagement';
import { Book, Person, Arrow } from '../../components/shared/svgComponents';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const roundRating = (rating) => {
    if (rating >= 2.75 && rating <= 3.25) return 3;
    if (rating >= 3.26 && rating <= 3.75) return 3.5;
    if (rating >= 3.76 && rating <= 4.25) return 4;
    if (rating >= 4.26 && rating <= 4.75) return 4.5;
    return Math.round(rating); // For values above 4.75 or less than 2.75
  };


const Courses = () => {

    const [courseData, setCourseData] = useState([]);
    const [filteredData, setFilteredData]=useState([]);
    const [page, setPage] = useState(1);
    const item_per_page=4;
    const navigate = useNavigate();

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
       
    
   
        const roundedRating = roundRating(4);

        const getStars = () => {
          const stars = [];
          let fullStars = Math.floor(roundedRating); // Full stars
          let halfStar = roundedRating % 1 !== 0; // Half star check
          let totalStars = 5;
      
          for (let i = 1; i <= totalStars; i++) {
            if (i <= fullStars) {
              stars.push(<FaStar key={i} className="text-gold" />);
            } else if (halfStar) {
              stars.push(<FaStarHalfAlt key={i} className="text-gold" />);
              halfStar = false; // Only allow one half star
            } else {
              stars.push(<FaRegStar key={i} className="text-gray-400" />);
            }
          }
      
          return stars;
        };
    return (
        <>
            <div className='w-full flex flex-col items-center bg-dark text-slate-200 pt-[50px]  realtive '>
                <p className='text-xl '>Popular Courses</p>
                <h1 className='text-4xl my-4 font-bold'>Pick A Course To Get Started</h1>
                <div className='w-full max-w-[1400px] rounded-md flex gap-6 items-start p-8 flex-wrap bg-grayDark overflow-hidden text-white relative'>
                    {courseData.length > 0 ? (
                        filteredData.map((course, index) => (
                            <div className='bg-dark w-[23%] min-w-[280px] text-white h-content relative group rounded-xl overflow-hidden'>
                            <div>
                                <img className='w-full h-[250px] object-cover rounded-t-xl group-hover:scale-110  duration-300' src={course.imageUrl} />
                                <div className='p-4'>
                                    <h5 className=' text-lg rounded  bg-[#0ecd73] inline py-1 px-2  bg-opacity-20 text-center mb-1' >{course.label}</h5>
                                    <h2 className='text-lg font-bold line-clamp-1'>{course.title}</h2>
                                    <div className='flex font-bold py-1'>
                                    <div className='flex w-[120px] justify-between text-xl'>{getStars()}</div> <p className='pl-1'>{4}/5 Rating</p>
                                    </div>
                                    <p className='my-1'>${course.price}.00</p>
                                    <p className='flex items-center'> <span className='flex items-center mr-4' ><Book className='mr-1' /> {50} Lessons</span> | <span className='flex items-center ml-4'><Person className='mr-2' />{50} Students</span>  </p>
                                </div>
                            </div>
                            
                            <div className='opacity-0 rounded-xl group-hover:opacity-100 absolute top-0 group-hover:bg-primary h-full transition-all duration-300 delay-100 ease-linear'>
                                <div className='p-4 flex flex-col items-start'>
                                        <h5 className=' text-lg rounded bg-grayDark w-[100px] bg-opacity-20 text-center mb-1' >{course.label}</h5>
                                        <h2 className='text-xl font-bold'>{course.title}</h2>
                                        <div className='flex'>
                                        {getStars()}
                                        </div>
                                        <p className='text-lg my-2 line-clamp-5'>{course.details}</p>
                                        <p className='my-2'>${course.price}.00</p>
                                        <p className='flex items-center'> <span className='flex items-center mr-4' ><Book className='mr-2' /> {50} Lessons</span> | <span className='flex items-center ml-4'><Person className='mr-2' /> {50} Students</span>  </p>
                                        <button onClick={() =>navigate(`/Courses/${course.title.replace(/\s+/g, ' ').replace(/\s/g, '-')}`, {state:{courseData:{...course, id: index} }})} className='flex items-center bg-[#f92596] px-5 py-4 rounded-xl active:scale-95 hover:bg-gradient-to-r hover:text-black hover:from-[#c4cccb] hover:to-[#b2b8b5] duration-300 my-4'>Enrolled <Arrow className='ml-2' /> </button>
                                </div> 
                            </div>
                        </div>
            
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