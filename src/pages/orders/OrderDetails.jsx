import React, { useState } from 'react'

function OrderDetails() {
    const [status, setStatus] = useState("Pending"); // Default value is "Pending"

    const handleChange = (event) => {
      setStatus(event.target.value);
      console.log("Selected Status:", event.target.value);
    }
  return (
    <div className='text-white'>
        <div className='w-full p-4 border-b border-stone-300/50'>
            <h3 className='text-2xl font-bold'>Order Details</h3>
        </div>

        <div className='w-full flex items-start justify-between'>
            <div className='w-[60%] border border-stone-300/50 m-8 p-4 rounded-md'>
                <h3 className='text-xl font-bold p-2 mb-4 border-b border-stone-300/50 inline-block'>Order Info</h3>
                <div className='flex gap-2 py-1'>
                    <p className='w-[150px]'>Order No : </p>  <p>#34857231</p>
                </div>
                <div className='flex gap-2  py-1'>
                    <p className='w-[150px]'>Order Date : </p>  <p>23 Sep 2024</p>
                </div>
                <div className='flex gap-2  py-1'>
                    <p  className='w-[150px]'> Course Name : </p>  <p>Web Development</p>
                </div>
                <div className='flex gap-2  py-1'>
                    <p  className='w-[150px]'>Payment Method : </p>  <p>Bkash</p>
                </div>
                <div className='flex gap-2 py-1'>
                    <p  className='w-[150px]'>Wallet No : </p>  <p>#34857231</p>
                </div>
                <div className='flex gap-2 py-1'>
                    <p  className='w-[150px]'>TnxID : </p> <p>#34857231</p>
                </div>
            </div>
            <div className='w-[40%] border border-stone-300/50 m-8 p-4 rounded-md'>
                <h3 className='text-xl font-bold p-2 mb-4 border-b border-stone-300/50 inline-block'>Curstomer Info</h3>
                <div className='flex gap-2 py-2'>
                    <p  className='w-[150px]'>Name : </p> <p>Ahsan Kabir</p>
                </div >
                <div className='flex gap-2 py-2'>
                    <p  className='w-[150px]'>Phone : </p> <p>+01308686991</p>
                </div>
                <div className='flex gap-2 py-2'>
                    <p className='w-[150px]'>Email : </p> <p>ahsankabirrana@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='m-10'>
            <label htmlFor="status" className="text-base font-semibold mr-2">Status : </label>
            <select 
                id="status"
                value={status}
                onChange={handleChange}
                className="p-2 bg-grayDark rounded-md"
            >
                <option value="Pending">Pending</option>
                <option value="Cancel">Cancel</option>
                <option value="Confirm">Confirm</option>
            </select>
            
            </div>
    </div>
  )
}

export default OrderDetails