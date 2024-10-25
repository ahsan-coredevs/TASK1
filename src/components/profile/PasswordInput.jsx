import React from 'react'

const PasswordInput = React.forwardRef(({ labelName,InputClass, labelClass, register, errors, ...rest}) => (
  
    <div className='flex flex-col w-[100%]'>
        <label className={`text-lg font-bold ${labelClass}`} htmlFor="">{labelName}</label>
        <input {...register()} className={`text-base py-2 px-1 bg-grayDark border-2 ${errors?.message?'border-red-500':'border-stone-600 '} rounded-lg ${InputClass} outline-none focus:outline-none`}  {...rest}/>
        {errors?.message && <span className="text-red-500">{errors?.message}</span>}
    </div>
  )
)

export default PasswordInput