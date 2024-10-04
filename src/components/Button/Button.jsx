import React from 'react'
import { Arrow } from '../shared/svgComponents'

function Button({buttonName}) {
  return (
    <div>
        <a href="#" className='transition-all duration-300'><p className='inline-flex text-lg items-center  object-contain  bg-primary px-8 py-[22px] rounded-xl active:scale-95 hover:bg-gradient-to-r hover:from-[#1ab69d] hover:to-[#31b978] duration-300'>{buttonName} <Arrow className="ml-1 size-5 mr-4" /> </p></a>
    </div>
  )
}

export default Button