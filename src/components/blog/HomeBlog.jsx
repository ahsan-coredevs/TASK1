import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/FileManagement';

import Button from '../Button/Button';
import { LeftArrow, RightArrow } from '../../components/shared/svgComponents';

function HomeBlog() {
    const [blogData, setBlogData] = useState([]);
    const [filteredData, setFilteredData]=useState([]);


    const retrieveData = ()  => {
        const res = fetchData('blogs');

        setBlogData(res);
        const filered_data = res.slice((0), (3));
        setFilteredData(filered_data);

    }

    useEffect(() => {
        retrieveData();
    }, []);


   


  return (
    <>
        <div className='w-full flex flex-col items-center bg-dark text-slate-200 pt-[50px]   '>
            <p className='text-xl '>Popular Blogs</p>
            <h1 className='text-4xl my-4 font-bold text-center'>Read Blogs to <br /> Gather More Knowledge About The World</h1>
            <div className='w-full max-w-[1400px] rounded-md flex justify-center items-start p-8 flex-wrap  gap-6  bg-grayDark overflow-hidden text-white realtive'>
                {blogData.length > 0 ? (
                    filteredData.map((blogs, index) => (
                        <div className=' w-[28%] h-[405px] rounded-md overflow-hidden group' key={index}>
                            <div className='w-full h-[250px]'>
                                <img className='w-full h-[250px] object-cover group-hover:scale-110 duration-300' src={blogs.imageUrl} alt="" />
                                
                            </div>
                            
                            <div className=' bg-dark p-4 relative mt-0 group-hover:-mt-20 duration-300 border-b-2 border-primary rounded-b-md'>
                                <div className='h-[80px] w-[80px] bg-primary rounded-full flex flex-col justify-center items-center absolute -top-[50px] right-4 '>03 <span> Sep</span></div>
                                <h1 className='text-2xl py-2 line-clamp-1'>{blogs.title}</h1>
                                <p className='text-lg py-1 line-clamp-3'>{blogs.details}</p>
                                <Button buttonClass={'mt-2 py-2'} buttonName={'Read More'} />
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No Blog Upoloaded yet</div>
                )
            }
            </div>
            


        </div>
    </>
  )
}

export default HomeBlog