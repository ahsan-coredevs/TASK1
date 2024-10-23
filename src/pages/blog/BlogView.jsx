import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/FileManagement';
import { useLocation, useParams } from 'react-router-dom';
import { BiCalendar } from 'react-icons/bi';
import { Clock } from '../../components/shared/svgComponents';

function BlogView() {
    
    const {state: {blogData}} = useLocation();

    console.log({blogData})

    return (
        <div className='w-full bg-dark text-white'>
            <div className='w-full p-20 flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold py-4'>{blogData.title}</h1>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2 text-lg'>
                    <BiCalendar className='text-primary' /> <p>Oct 23, 2024</p>
                    </div> 
                    <span>|</span>
                    <div  className='flex items-center gap-2 text-lg'>
                        <Clock className='text-primary' /> <p>03.16 PM</p>
                    </div>
                </div>

            </div>
            <div className='blog-view w-full h-full max-w-[1500px] bg-grayDark text-white flex flex-col items-center p-20'>
                <div className=' w-[50%] h-[30vh] my-8'>
                    <img className= ' w-full h-full object-cover rounded-md' src={blogData.imageUrl} alt={blogData.title} />
                </div>
                <h1 className='text-4xl pb-6'>{blogData.title}</h1>
                <p className='text-lg p-4 border border-primary/40 m-4'>{blogData.details}</p>
             </div>
        </div>
    );
}

export default BlogView;