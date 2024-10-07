import React from 'react'

function Input({ labelName, InputClass, labelClass,...rest}) {
  return (
    <div className='flex flex-col w-[80%]'>
        <label className={`text-lg font-bold ${labelClass}`} htmlFor="">{labelName}</label>
        <input className={`text-base py-2 px-1 bg-grayDark border-2 border-stone-600 rounded-lg ${InputClass}`} {...rest}/>
    </div>
  )
}

export default Input