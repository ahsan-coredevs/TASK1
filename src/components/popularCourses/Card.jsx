import React from 'react'
import { Star,Book, Person, Arrow } from '../shared/svgComponents'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const roundRating = (rating) => {
    if (rating >= 2.75 && rating <= 3.25) return 3;
    if (rating >= 3.26 && rating <= 3.75) return 3.5;
    if (rating >= 3.76 && rating <= 4.25) return 4;
    if (rating >= 4.26 && rating <= 4.75) return 4.5;
    return Math.round(rating); // For values above 4.75 or less than 2.75
  };

function Card({category, title, Image, price, Lessons, students, rating ,details }) {
    const roundedRating = roundRating(rating);

  const getStars = () => {
    const stars = [];
    let fullStars = Math.floor(roundedRating); // Full stars
    let halfStar = roundedRating % 1 !== 0; // Half star check
    let totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-gold" />);
      } else if (halfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-gold" />);
        halfStar = false; // Only allow one half star
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }

    return stars;
  };
    
  return (
    
        <div className='bg-dark w-[23%] text-white h-content relative group rounded-xl overflow-hidden'>
                <div>
                    <img className='w-full h-[250px] object-cover rounded-t-xl group-hover:scale-110  duration-300' src={Image} alt={title} />
                    <div className='p-4'>
                        <h5 className=' text-lg rounded  bg-[#0ecd73] inline py-1 px-2  bg-opacity-20 text-center mb-1' >{category}</h5>
                        <h2 className='text-lg font-bold line-clamp-1'>{title}</h2>
                        <div className='flex font-bold py-1'>
                        <div className='flex w-[120px] justify-between text-xl'>{getStars()}</div> <p className='pl-1'>{rating}/5 Rating</p>
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
                            {getStars()}
                            </div>
                            <p className='text-lg my-2'>{details}</p>
                            <p className='my-2'>${price}.00</p>
                            <p className='flex items-center'> <span className='flex items-center mr-4' ><Book className='mr-2' /> {Lessons} Lessons</span> | <span className='flex items-center ml-4'><Person className='mr-2' /> {students} Students</span>  </p>
                            <button className='flex items-center bg-[#f92596] px-5 py-4 rounded-xl active:scale-95 hover:bg-gradient-to-r hover:text-black hover:from-[#c4cccb] hover:to-[#b2b8b5] duration-300 my-4'>Enrolled <Arrow className='ml-2' /> </button>
                    </div> 
                </div>
            </div>
  )
}

export default Card