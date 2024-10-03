import React from 'react'
import { Star,Book, Person, Arrow } from '../shared/svgComponents'

function Card({category, title, Image, price, Lessons, students }) {
  return (
    
        <div className='bg-grayDark text-white w-[300px] h-[450px] relative group mr-4 rounded-xl overflow-hidden'>
                <div>
                    <img className='w-full h-[250px] object-cover rounded-t-xl group-hover:scale-110  duration-300' src={Image} alt={title} />
                    <div className='p-4'>
                        <h5 className=' text-lg rounded  bg-[#0ecd73] inline py-1 px-2  bg-opacity-20 text-center mb-1' >{category}</h5>
                        <h2 className='text-lg font-bold'>{title}</h2>
                        <div className='flex'>
                        {Array(5)
                        .fill(0) // Creates an array with 5 elements
                        .map((_, index) => (
                        <Star key={index} className="text-yellow-500 my-1" /> // Render the icon 5 times
                        ))} <p className='ml-4 mt-1'>(4.9/8 Rating)</p>
                        </div>
                        <p className='my-1'>${price}.00</p>
                        <p className='flex items-center'> <span className='flex items-center mr-4' ><Book className='mr-1' /> {Lessons} Lessons</span> | <span className='flex items-center ml-4'><Person className='mr-2' />{students} Students</span>  </p>
                    </div>
                </div>
                <div className='opacity-0 rounded-xl group-hover:opacity-100 absolute top-0 group-hover:bg-primary h-full transition-all duration-300 delay-100 ease-linear'>
                <div className='p-4 flex flex-col items-start'>
                        <h5 className=' text-lg rounded bg-grayDark w-[100px] bg-opacity-20 text-center mb-1' >{category}</h5>
                        <h2 className='text-xl font-bold'>{title}</h2>
                        <div className='flex'>
                        {Array(5)
                        .fill(0) // Creates an array with 5 elements
                        .map((_, index) => (
                        <Star key={index} className="text-yellow-500 my-2" /> // Render the icon 5 times
                        ))} <p className='ml-1 my-1'>(4.9/8 Rating)</p>
                        </div>
                        <p className='text-lg my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque dolore sunt porro blanditiis</p>
                        <p className='my-2'>${price}.00</p>
                        <p className='flex items-center'> <span className='flex items-center mr-4' ><Book className='mr-2' /> {Lessons} Lessons</span> | <span className='flex items-center ml-4'><Person className='mr-2' /> {students} Students</span>  </p>
                        <button className='flex items-center bg-[#f92596] px-5 py-4 rounded-xl active:scale-95 hover:bg-gradient-to-r hover:text-black hover:from-[#c4cccb] hover:to-[#b2b8b5] duration-300 my-4'>Enrolled <Arrow className='ml-2' /> </button>
                    </div>
                    
                </div>
            </div>
  )
}

export default Card