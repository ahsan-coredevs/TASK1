import React from 'react'


const Input = React.forwardRef(({ labelName,InputClass, labelClass, register, errors, ...rest}) => (
  
    <div className='flex flex-col w-[80%]'>
        <label className={`text-lg font-bold ${labelClass}`} htmlFor="">{labelName}</label>
        <input {...register()} className={`text-base py-2 px-1 bg-grayDark border-2 border-stone-600 rounded-lg ${InputClass}`}  {...rest}/>
        {errors && <span className="text-red-500">{errors?.message}</span>}
    </div>
  )
)

export default Input