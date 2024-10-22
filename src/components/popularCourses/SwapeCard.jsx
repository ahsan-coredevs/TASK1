import React from 'react'
import { FaStar } from 'react-icons/fa'

function SwapeCard({ name, email, feedbackText, rating, className=''}) {
  const stars = Array(5).fill(0);

  const getStarClass = (index) => {
    if (rating >= index + 1) {
      return 'text-yellow-400'; // Full star
    } else if (rating >= index + 0.5) {
      return 'text-yellow-400 half-star'; // Half star
    } else {
      return 'text-gray-300';
    }
  };



  return (
    <div className={`w-[350px] bg-[#212529] p-8 rounded m-2 ml-8 ${className}`}>
       
        <p className='py-2 text-lg'>{feedbackText}</p>
        <p className='flex gap-2 text-xl py-2'> 
        {stars.map((_, index) => {
        const wholeNumber = Math.floor(rating);
        const isHalfStar = rating - index >= 0.5 && rating - index < 1;

        return (
          <span key={index} className="relative">
        
            <i
              className={`text-4xl transition-colors duration-200 ${
                index < wholeNumber ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ★
            </i>

          
            {isHalfStar && (
              <i
                className="absolute left-0 top-0 text-4xl text-yellow-400"
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              >
                ★
              </i>
            )}
          </span>
        );
      })}
            
         </p>
         <p className='text-lg font-bold'>Rating : {rating} / 5</p>
        <h2 className='text-xl font-bold py-2'>{name}</h2>
        <p className='text-base'>{email}</p>
    </div>
  )
}

export default SwapeCard