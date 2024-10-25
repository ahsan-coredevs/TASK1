import React from 'react'
import { Data, Person } from '../../components/shared/svgComponents'
import { useNavigate } from 'react-router-dom';

const orders_list = [
    {
        name : 'Ahsan Kabir',
        courseName : 'Web Development',
        paymentMethod : 'Bkash',
        phoneNO : "01308686991",
        tnxId : "asj378456sjdfh",
        paymentDate : '12-01-2024'
    },
    {
        name : 'Kabir',
        courseName : 'Web Development',
        paymentMethod : 'Bkash',
        phoneNO : "01308686991",
        tnxId : "asj378456sjdfh",
        paymentDate : '12-01-2024'
    },
    {
        name : 'Ahsan Kabir',
        courseName : 'Web Development',
        paymentMethod : 'Bkash',
        phoneNO : "01308686991",
        tnxId : "asj378456sjdfh",
        paymentDate : '12-01-2024'
    },
    {
        name : 'Robin',
        courseName : 'Web Development',
        paymentMethod : 'Bkash',
        phoneNO : "01308686991",
        tnxId : "asj378456sjdfh",
        paymentDate : '12-01-2024'
    },
    {
        name : 'Ahsan',
        courseName : 'Web Development',
        paymentMethod : 'Bkash',
        phoneNO : "01308686991",
        tnxId : "asj378456sjdfh",
        paymentDate : '12-01-2024'
    },
    {
        name : 'Habib',
        courseName : 'Web Development',
        paymentMethod : 'Bkash',
        phoneNO : "01308686991",
        tnxId : "asj378456sjdfh",
        paymentDate : '12-01-2024'
    },
    {
        name : 'Sheikh Ahsan',
        courseName : 'Web Development',
        paymentMethod : 'Bkash',
        phoneNO : "01308686991",
        tnxId : "asj378456sjdfh",
        paymentDate : '12-01-2024'
    },
];

function Orders() {
  const navigate = useNavigate();
  return (
    <div>
         <div className=''>
            <table className=' text-white shadow-md overflow-hidden  top-[100px] m-4'>
            <thead className='m-4'>
              <tr className='p-4 '>
                <th className='bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase rounded-tl-md  '>Name</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase '>Course Name</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase  '>Payment Method</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase  '>Phone No</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase  '>TnxID</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase  '>Date</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase rounded-tr-md '>Action</th>
              </tr>
            </thead>
            <tbody className='bg-grayDark'>
             {
                orders_list.map((order, index) => (
                  <tr className=' text-center even:bg-slate-800/50 odd:bg-slate-900/50  ' key={index}>
                    <td className='text-left  py-3 px-6 '>{order.name}</td>
                    <td className=' text-left  py-3 px-6'>{order.courseName}</td>
                    <td className=' text-left  py-3 px-6'>{order.paymentMethod}</td>
                    <td className=' text-left  py-3 px-6'>{order.phoneNO}</td>
                    <td className=' text-left  py-3 px-6'>{order.tnxId}</td>
                    <td className=' text-left  py-3 px-6'>{order.paymentDate}</td>
                    <td className='text-start py-3 px-6 flex gap-2'>
                      <button onClick={()=>navigate('order_details')} className='  focus:scale-90 duration-100 bg-primary/70  py-2 px-4 rounded-md'><Data /></button> 
                      <button onClick={()=>navigate('order_owner_info')} className=' focus:scale-90 duration-100 bg-primary/70  py-2 px-4 rounded-md'><Person /></button>
                    </td>
                  </tr>
                ))
            }
            </tbody>
            </table>
               
            </div>
    </div>
  )
}

export default Orders