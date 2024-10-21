import React from 'react'
import { FaStar } from 'react-icons/fa'

function SwapeCard({Image, name, resignation, className=''}) {
  return (
    <div className={`w-[350px] bg-[#212529] p-8 rounded m-2 ml-8 ${className}`}>
        <img className='rounded-full h-[80px] w-[80px] my-4' src={Image} alt="" />
        <p className='py-2 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perferendis atque consequatur dolor autem odio.</p>
        <p className='flex text-xl py-2'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
        <h2 className='text-xl font-bold py-2'>{name}</h2>
        <p className='text-base'>{resignation}</p>
    </div>
  )
}

export default SwapeCard