import React from 'react'

import blueBall from '../../assets/about/shape-13.png'
import redBall from '../../assets/counterup/shape-03.png'
import stone from '../../assets/counterup/shape-04.png'
import circle from '../../assets/resources/shape-08.png'
import Card from './Card'
import { Arrow } from '../shared/svgComponents';
import Swape from './Swape'



function Courses() {


    const handleMouseMove = (event) => {
   
        const movable_images= document.querySelectorAll('.mousemove');
        movable_images.forEach(item=>{
         console.log(item.speed)
   
         item.style.transform=`translate(${(event.clientX *item.getAttribute('speed'))/50}px, ${(event.clientY*item.getAttribute('speed'))/80}px)`;
        })
    };

    const cardData = [
        {
            Image: 'https://i.ibb.co.com/cwXMQbK/blog-06.jpg',
            category: 'Advanced',
            title: 'Starting SEO as your Home based Business',
            price: 49.00,
            Lessons: 13,
            students: 28,
            rating: 4.8,

        },
        {
            Image: 'https://i.ibb.co.com/5GJxvBq/blog-14.jpg',
            category: 'Beginner',
            title: 'Java Programming Mastercalss for Software...',
            price: 29.00,
            Lessons: 8,
            students: 20,
            rating: 4.4,

        },
        {
            Image: 'https://i.ibb.co.com/31mdYgb/blog-18.jpg',
            category: 'Advanced',
            title: 'Building A Better World One Students At a Time',
            price: 35.00,
            Lessons: 32,
            students: 18,
            rating: 4.1,

        },
        {
            Image: 'https://i.ibb.co.com/phbvgG9/blog-01.jpg',
            category: 'Intermediate',
            title: 'Master Your Personal Brand Like a Marketing Pro',
            price: 49.00,
            Lessons: 50,
            students: 48,
            rating: 3.6,

        },
    ];

  return (
    <div className='flex flex-col items-center bg-dark text-slate-200 pt-[50px] realtive ' onMouseMove={handleMouseMove} >
        <p className='text-xl '>Popular Courses</p>
        <h1 className='text-5xl my-4 font-bold'>Pick A Course To Get Started</h1>
        <div className='flex flex-wrap mt-8'>
            {cardData.map((card, index) => (
                <Card 
                key={index}
                Image={card.Image}
                category={card.category}
                title={card.title}
                price={card.price}
                Lessons={card.Lessons}
                students={card.students}
                rating={card.rating}
                />
            ))}
            
        </div>
        <button className='flex items-center bg-primary px-5 py-4 my-8 rounded-xl active:scale-95 hover:bg-gradient-to-r hover:from-[#1ab69d] hover:to-[#31b978] duration-300'>Browse more courses <Arrow className='ml-4' /> </button>
        <div className='bg-[#1c242f] h-[400px] p-14 w-[700px] grid grid-cols-2 grid-rows-2 rounded-xl z-10 ' >
            <div className='flex flex-col items-center justify-center border-r-[1px] border-b-[1px] border-slate-600'>
                <h1 className='text-primary text-5xl font-bold py-2'>45.2k</h1>
                <p>STUDENT ENROLLED</p>
            </div>
            <div className='flex flex-col items-center justify-center border-l-[1px] border-b-[1px] border-slate-600'>
                <h1 className='text-secondary text-5xl font-bold py-2'>32.4K
                </h1>
                <p>CLASS COMPLETED</p>
            </div>
            <div className='flex flex-col items-center justify-center border-t-[1px] border-r-[1px] border-slate-600'>
                <h1 className='text-yallow text-5xl font-bold py-2'>354+</h1>
                <p>TOP INSTRUCTORS</p>
            </div>
            <div className='flex flex-col items-center justify-center border-l-[1px] border-t-[1px] border-slate-600'>
                <h1 className='text-[#8e56ff] text-5xl font-bold py-2'>99.9%</h1>
                <p>SATISFACTION RATE</p>
            </div>
        </div>

        <img speed={-3} className='absolute top-[2800px] left-[300px] transition-all duration-200 mousemove ease-linear' src={blueBall} alt="" />
        <img className='absolute top-[2810px] left-[390px] z-20 animate-spinreverse' src={circle} alt="" />
    <img speed={3} className='absolute top-[3200px] left-[950px] transition-all duration-200 mousemove ease-linear' src={stone} alt="" />
        <img speed={-3} className='absolute h-[220px] top-[3200px] left-[850px] transition-all duration-200 mousemove ease-linear' src={redBall} alt="" />
        <Swape />

        
    </div>
  )
}

export default Courses