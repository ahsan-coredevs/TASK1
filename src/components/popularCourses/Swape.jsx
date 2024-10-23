import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import SwapeCard from './SwapeCard'
import { fetchData } from '../../utils/FileManagement'

function Swape() {
    
     const res= fetchData('feedback');

    
     const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
         const intervalID = setInterval(() => {
             setCurrentIndex((prevIndex) => (prevIndex + 1 ) % res.length);
     }, 4000)
 
     return () => clearInterval(intervalID);
 }, [res.length]);
 
 const getVisibleCards = () => {
     const firstCardIndex = currentIndex;
     const secondCardIndex = (currentIndex + 1) % res.length;
     return [res[firstCardIndex], res[secondCardIndex]];
   };
   const visibleCards = getVisibleCards();

  return (
    <div>
        <div className='flex bg-[#181818] pt-[350px] w-full mt-[-200px] pb-[50px]'>
        <div className='w-[40%] pl-[100px] py-[50px] mt-[-100px]'>
            <p className='text-base py-1'>TEXTTIMONIALS</p>
            <h2 className='text-5xl font-bold py-4'>What Our Students <br /> Have To Say</h2>
            <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio nobis excepturi nam hic eum pariatur. Sit, ea ipsa. Voluptatem excepturi unde voluptatibus a nobis.</p>
            <Button buttonClass={'py-2'} buttonName={'View All'} />
        </div>
        <div className='flex overflow-hidden'>
            {
                res.length > 0 ? (
                    
                        visibleCards.map((feedback, index) => (
                            <SwapeCard className=' transition-all duration-700 ease-in-out animate-slideInLeft'
                            key={index}
                            feedbackText={feedback.feedback}
                            name={feedback.name}
                            designation={feedback.email}
                            rating={feedback.rating}
                            />
                        ))
                    
                ) : (
                    <div className='h-full flex items-center justify-center'>
                        <p >NO DATA FOUND</p>
                    </div>
                )
            }
             </div>
        </div>

        <div className='flex items-center justify-center h-[200px] w-full bg-[#181818] overflow-hidden'>
            <div className='flex px-12 py-8 bg-gradient-to-r from-[#1ab69d] to-[#31b978] rounded-md mt-[60px] w-[800px] items-center justify-center mb-[100px]'>
                <div className='px-8 flex flex-col items-end'>
                    <p className='text-xl py-2'>Get In Touch</p>
                    <h2 className='text-3xl font-bold py-2'>Info@Edublink</h2>
                </div>
                <div className=' h-20 w-20 px-4 text-xl flex justify-center items-center bg-slate-100 p-3 rounded-full text-primary border-slate-300 border-4 font-bold '><p className='text-3xl'>or</p></div>
                <div className='px-8 '>
                    <p className='text-xl py-2'>Call Us Via</p>
                    <h2 className='text-3xl font-bold py-2'>+01 123 5641 231</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Swape