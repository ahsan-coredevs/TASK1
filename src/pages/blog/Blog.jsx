import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/FileManagement';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { LeftArrow, RightArrow } from '../../components/shared/svgComponents';

function Blog() {
    const [blogData, setBlogData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    
    const item_per_page = 6;

    const retrieveData = ()  => {
        const res = fetchData('blogs');
        setBlogData(res);

        // Set initial filtered data
        const filtered_data = res.slice(0, item_per_page);
        setFilteredData(filtered_data);
    }

    useEffect(() => {
        retrieveData();
    }, []);

    useEffect(() => {
        const filtered_data = blogData.slice((page - 1) * item_per_page, page * item_per_page);
        setFilteredData(filtered_data);
    }, [page, blogData]);

    const handlePage = (value) => {
        const total_page = Math.ceil(blogData.length / item_per_page);
        if (value >= 1 && value <= total_page) {
            setPage(value);
        }
    }

  

    return (
        <>
            <div className='w-full flex flex-col items-center bg-dark text-slate-200 pt-[50px]'>
                <p className='text-xl'>Popular Blogs</p>
                <h1 className='text-4xl my-4 font-bold text-center'>Read Blogs to <br /> Gather More Knowledge About The World</h1>
                <div className='w-full max-w-[1400px] rounded-md flex justify-start items-start p-8 flex-wrap gap-6 bg-grayDark overflow-hidden text-white'>
                    {filteredData.length > 0 ? (
                        filteredData.map((blog, index) => (
                            <div className='w-[28%] h-[405px] rounded-md overflow-hidden group' key={index}>
                                <div className='w-full h-[250px]'>
                                    <img className='w-full h-[250px] object-cover group-hover:scale-110 duration-300' src={blog.imageUrl} alt={blog.title} />
                                </div>
                                <div className='h-50 bg-dark p-4 relative mt-0 group-hover:-mt-20 duration-300 border-b-2 border-primary rounded-b-md'>
                                    <div className='h-[80px] w-[80px] bg-primary rounded-full flex flex-col justify-center items-center absolute -top-[50px] right-4'>03 <span> Sep</span></div>
                                    <h1 className='text-2xl py-2 line-clamp-1'>{blog.title}</h1>
                                    <p className='text-lg py-1 line-clamp-3'>{blog.details}</p>
                                    <Button onClick={() =>navigate(`/blog/${blog.title.replace(/\s+/g, ' ').replace(/\s/g, '-')}`, {state:{blogData:{...blog, id: index} }})} buttonClass={'mt-2 py-2'} buttonName={'Read More'} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No Blogs Uploaded yet</div>
                    )}
                </div>
                <div className='text-white text-xl flex justify-end pt-5 pb-10'>
                    <button onClick={() => handlePage(page - 1)} className='border p-2'><LeftArrow /></button>
                    <button onClick={() => handlePage(page + 1)} className='border border-l-0 p-2'><RightArrow /></button>
                </div>
            </div>
        </>
    );
}

export default Blog;
