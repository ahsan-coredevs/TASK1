import React from 'react'
import logo from '../../assets/icons/logo-white.png';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Courses from '../Courses/Courses';

function Admin() {
  return (
   <div className="w-full h-screen bg-dark overflow-hidden relative">
    {/* Upper part */}
     <div className='flex  h-20 w-full bg-nav justify-between items-center absolute top-0 left-0'>
        <div className="flex h-full">
            <div className='border-r border-gray-500/30 p-2'>
                <img src={logo} alt="Logo" className='cursor-pointer'/>
            </div>
        </div>
    </div> 
    {/* Lower */}

    <div className="w-screen h-[calc(100vh-80px)] flex absolute top-[80px] left-0 ">
        {/* sidebar */}
        <div className=" bg-nav border-t max-w-[177px] w-full h-full text-white p-2 border-r border-white/10">
        <ul className='flex flex-col space-y-2 '>
            
            <li className='hover:text-primary cursor-pointer duration-300 text-lg font-bold'><Link to='/admin/courses'>Courses </Link>
            </li>
           
            <li className='hover:text-primary cursor-pointer duration-300 text-lg font-bold'><Link to='/admin/news'>Blogs </Link>
            </li>
        </ul>
        </div>
        {/* outlet */}
        <div className=" h-full overflow-y-auto w-[calc(100vw-150px)] ">
            <Outlet/>
        </div>
    </div>

   </div>
   
  )
}

export default Admin

