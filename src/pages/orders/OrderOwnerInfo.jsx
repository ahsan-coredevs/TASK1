import React from 'react'
import profileImage from '../../assets/about/profile.png'

function OrderOwnerInfo() {

  return (
    <div className='text-white'>
        <div className='w-full p-4 border-b border-stone-300/50'>
            <h3 className='text-2xl font-bold'>User Details</h3>
        </div>
        <div className='w-full'>
            <div className='w-28 h-28 bg-white rounded-full mt-10 ml-14 overflow-hidden'>
                <img className='scale-125 my-4' src={profileImage} alt="" />
                
            </div>
            <div className='ml-10 mt-6 flex gap-2 items-center py-2'>
                <p className='text-lg '>Name : </p> <p>Ahsan kabir</p>
            </div>
            <div className='ml-10 flex gap-2 items-center py-2'>
                <p className='text-lg'>Phone No : </p> <p>+01316194714</p>
            </div>
            <div className='ml-10 flex gap-2 items-center py-2'>
                <p className='text-lg '>Email : </p> <p>ahsankabirrana@gmail.com</p>
            </div>
            <div className='ml-10 flex gap-2 items-center py-2'>
                <p className=' text-lg'>NID : </p> <p>3523 5345 2342</p>
            </div>
        </div>
       
        <div className=' flex items-center justify-start p-2 ml-8'>
            <p className='p-4 bg-white text-black font-bold rounded-lg cursor-default'>Verified account</p>
        </div>

    </div>
  )
}

export default OrderOwnerInfo