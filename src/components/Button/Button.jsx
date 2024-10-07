import React from 'react'
import { Arrow } from '../shared/svgComponents'

function Button({buttonName, buttonClass}) {
  return (
    <div className='w-[90%]'>
        <a href="#" className='transition-all duration-300'><p className={`inline-flex text-lg items-center justify-center object-contain bg-primary px-4 py-[14px] rounded-xl active:scale-95 hover:bg-gradient-to-r hover:from-[#1ab69d] hover:to-[#31b978] duration-300 ${buttonClass}`}>{buttonName} <Arrow className="ml-1 size-5 mr-4" /> </p></a>
    </div>
  )
}

export default Button