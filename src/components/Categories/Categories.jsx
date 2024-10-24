import React from 'react';
import { Management, Design, Code, Pil, Mic, Hand, Data, Photos, Laptop } from '../shared/svgComponents';

const Categories = () => {
    return (
        <>
            <div id='Categories' className='flex flex-col w-full   items-center pt-16 bg-[#1c242f] text-white overflow-hidden'>
                <h1 className='text-5xl font-bold'>Top Categories</h1>
                <p className='text-xl my-5'>Consectetur adipscing elit sed do eiusmod tempor incididunt ut labore et dolore</p>
                <div className='grid grid-cols-3 gap-12'>
                    <div className='bg-grayDark flex items-center py-4 px-6 justify-start w-[350px] rounded group hover:bg-primary duration-300'>
                        <Management className='h-14 w-10 mr-6 text-primary group-hover:text-white '/>
                        <h3 className='font-bold text-lg'>Business Management</h3>
                    </div>
                    <div className='bg-grayDark group flex items-center py-4 px-6 justify-start w-[350px] rounded hover:bg-secondary duration-300'> 
                        <Design className='h-14 w-10 mr-6 text-secondary group-hover:text-white'/>
                        <h3 className='font-bold text-lg '>Arts Design</h3>
                    </div>
                    <div className='bg-grayDark flex items-center group py-4 px-6 justify-start w-[350px] rounded hover:bg-green-500 duration-300'>
                        <Code className='h-14 w-10 mr-6 text-green-500 group-hover:text-white'/>
                        <h3 className='font-bold text-lg'>Personal Development</h3>
                    </div>
                    <div className='bg-grayDark flex items-center group py-4 px-6 justify-start w-[350px] rounded hover:bg-yellow-500 duration-300'>
                        <Pil className='h-14 w-10 mr-6 text-yellow-500 group-hover:text-white'/>
                        <h3 className='font-bold text-lg'>Healt & Fitness</h3>
                    </div>
                    <div className='bg-grayDark flex items-center group py-4 px-6 justify-start w-[350px] rounded hover:bg-[#8e56ff] duration-300'>
                        <Data className='h-14 w-10 mr-6 text-[#8e56ff] group-hover:text-white'/>
                        <h3 className='font-bold text-lg'>Data Science</h3>
                    </div>
                    <div className='bg-grayDark flex items-center group py-4 px-6 justify-start w-[350px] rounded hover:bg-[#f92596] duration-300'>
                        <Mic className='h-14 w-10 mr-6 text-[#f92596] group-hover:text-white'/>
                        <h3 className='font-bold text-lg'>Marketing</h3>
                    </div>
                    <div className='bg-grayDark flex items-center group py-4 px-6 justify-start w-[350px] rounded hover:bg-[#5866eb] duration-300'>
                        <Hand className='h-14 w-10 mr-6 text-[#5866eb] group-hover:text-white'/>
                        <h3 className='font-bold text-lg'>Business & Finance</h3>
                    </div>
                    <div className='bg-grayDark flex items-center group py-4 px-6 justify-start w-[350px] rounded hover:bg-[#f8941f] duration-300'>
                        <Laptop className='h-14 w-10 mr-6 text-[#f8941f] group-hover:text-white'/>
                        <h3 className='font-bold text-lg'>Computer Science</h3>
                    </div>
                    <div className='bg-grayDark flex items-center group py-4 px-6 justify-start w-[350px] rounded hover:bg-[#1BA2DB] duration-300'>
                        <Photos className='h-14 w-10 mr-6 text-[#1BA2DB] group-hover:text-white'  />
                        <h3 className='font-bold text-lg'> Video & photograhy</h3>
                    </div>
                </div>
            </div>    
        </>
        
    );
};

export default Categories;