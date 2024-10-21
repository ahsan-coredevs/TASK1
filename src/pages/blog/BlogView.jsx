import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/FileManagement';
import { useLocation, useParams } from 'react-router-dom';

function BlogView() {
    
    const {state: {blogData}} = useLocation();

    console.log({blogData})

    return (
        <div className='blog-view'>
            <div>
                <img src={blogData.imageUrl} alt={blogData.title} />
            </div>
            <h1>{blogData.title}</h1>
            <p>{blogData.details}</p>
        </div>
    );
}

export default BlogView;