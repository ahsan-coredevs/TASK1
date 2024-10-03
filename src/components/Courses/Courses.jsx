import React from 'react'

import Card from './Card'
import { Arrow } from '../shared/svgComponents';



function Courses() {

    const cardData = [
        {
            Image: 'https://i.ibb.co.com/cwXMQbK/blog-06.jpg',
            category: 'Advanced',
            title: 'Starting SEO as your Home based Business',
            price: 49.00,
            Lessons: 13,
            students: 28,

        },
        {
            Image: 'https://i.ibb.co.com/5GJxvBq/blog-14.jpg',
            category: 'Beginner',
            title: 'Java Programming Mastercalss for Software...',
            price: 29.00,
            Lessons: 8,
            students: 20,

        },
        {
            Image: 'https://i.ibb.co.com/31mdYgb/blog-18.jpg',
            category: 'Advanced',
            title: 'Building A Better World One Students At a Time',
            price: 35.00,
            Lessons: 32,
            students: 18,

        },
        {
            Image: 'https://i.ibb.co.com/phbvgG9/blog-01.jpg',
            category: 'Intermediate',
            title: 'Master Your Personal Brand Like a Marketing Pro',
            price: 49.00,
            Lessons: 50,
            students: 48,

        },
    ];

  return (
    <div className='flex flex-col items-center bg-dark text-slate-200 pt-[50px] '>
        <p className='text-xl '>Popular Courses</p>
        <h1 className='text-5xl my-4'>Pick A Course To Get Started</h1>
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


                />
            ))}
            
        </div>
        <button className='flex items-center bg-primary px-5 py-4 my-8 rounded-xl active:scale-95 hover:bg-gradient-to-r hover:from-[#1ab69d] hover:to-[#31b978] duration-300'>Browse more courses <Arrow className='ml-4' /> </button>
    </div>
  )
}

export default Courses