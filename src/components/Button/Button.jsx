import React from 'react'
import { Arrow } from '../shared/svgComponents'

function Button({buttonName, buttonClass, disabled=false, ...rest}) {
  return (
    <button {...rest} className='w-[90%] transition-all duration-300'>
       <p className={`inline-flex text-lg items-center justify-center object-contain  px-4 py-[14px] rounded-xl ${buttonClass} ${disabled?'bg-primary/50':' active:scale-95 bg-primary  hover:bg-gradient-to-r hover:from-[#1ab69d] hover:to-[#31b978] duration-300'}
       
       `}
       disabled={disabled}
       >{buttonName} <Arrow className="ml-1 size-5 mr-4" /> </p>
    </button>
  )
}

export default Button