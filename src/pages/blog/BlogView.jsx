import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/FileManagement';
import { useLocation, useParams } from 'react-router-dom';

function BlogView() {
    
    const {state: {blogData}} = useLocation();

    console.log({blogData})

    return (
        <div className='blog-view w-full h-full max-w-[1500px] bg-dark text-white flex flex-col items-center'>
            <div className=' w-[50%] h-[30vh] my-8'>
                <img className= ' w-full h-full object-cover rounded-md' src={blogData.imageUrl} alt={blogData.title} />
            </div>
            <h1 className='text-4xl pb-6'>{blogData.title}</h1>
            <p className='text-lg p-4 border border-primary/40 m-4'>{blogData.details}</p>
        </div>
    );
}

export default BlogView;