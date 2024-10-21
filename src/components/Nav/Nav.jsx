import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../assets/icons/logo-white.png';
import { Arrow, Dot, DownArrow, LinkedinIcon, Search, Shopping } from '../shared/svgComponents';
import { Link } from 'react-router-dom';

function Nav() {
 
  
  return (
    <div className='sticky top-0 z-50 bg-dark flex items-center justify-center '>
        <div className='w-full max-w-[1500px] overflow-hidden sticky z-50 '  >
        <div className='flex flex-row max-h-14 w-full bg-gray-900 justify-between items-center p-2 '> 
          <div className='flex justify-between w-[40%] min-h-full border-r border-gray-500'>
          <p className='text-slate-100'>First 20 students get 50% discount. <span className='text-red-600 cursor-pointer'>Hurry up!</span> </p> 
          <Link to='/SignIn' className='text-slate-100 hover:text-red-500 transition-colors duration-300 cursor-pointer mr-3'>Sign In</Link>
          </div>
          <Link to='/SignUp' className='text-slate-100 hover:text-red-500 transition-colors duration-300 border-r border-gray-500 pr-3 text-center'>Register</Link>
          <div className='flex border-r border-gray-500'>
          <IoCallSharp className='text-red-500 size-5 mr-2 ' />
          <p className='text-slate-100 hover:text-red-500 transition-colors duration-300 cursor-pointer pr-3'>Call: 123 5452 3462</p>
          </div>
          <div className='flex border-r border-gray-500'>
          <IoMdMail className='text-red-500 size-5 mr-2 '/>
            <p className='text-slate-100 hover:text-red-500 transition-colors duration-300 cursor-pointer pr-3'> Email: info@edublink.com</p>
          </div>
          <div className='flex'>
          <FaFacebook className='m-2 text-slate-100 size-4 hover:text-red-500 transition-colors duration-300 cursor-pointer'  />
          <FaInstagram className='m-2 text-slate-100 size-4 hover:text-red-500 transition-colors duration-300 cursor-pointer' size={20}  />
          <FaTwitter className='m-2 text-slate-100 size-4 hover:text-red-500 transition-colors duration-300 cursor-pointer' size={20}  />
          <LinkedinIcon className='m-2 text-slate-100 size-4 hover:text-red-500 transition-colors duration-300 cursor-pointer' size={20}  />
          </div>
        </div>


        <div className='flex  h-20 w-full bg-nav justify-between items-center '>
      
          <div className="flex h-full">
          <div className='border-r border-gray-500/30 p-2'>
          <img src={logo} alt="Logo" className='cursor-pointer'/>
          </div>

            <div className='border-r border-gray-500/30 h-full flex items-center justify-center px-5'>
              <a href="#" className="flex items-center text-slate-100 hover:text-primary duration-300">
                <Dot className="mr-1" /> 
                Category
              </a>
            </div>
          </div>

            
            <div className='flex justify-between w-[70%] h-[100%] text-slate-100'>
              
              <div className='w-[50%] h-[100%] items-center'>
                <ul className='flex justify-between items-center h-[100%]'>
                  <li className='h-[100%] flex items-center hover:text-primary duration-300'><Link to="/home" className='flex items-center'>Home <DownArrow className="ml-1" /></Link></li>
                  <li><Link to="#" className='flex items-center hover:text-primary duration-300'>Pages <DownArrow className="ml-1" /></Link></li>
                  <li><Link to="/courses" className='flex items-center hover:text-primary duration-300'>Courses <DownArrow className="ml-1" /></Link></li>
                  <li><Link to="/blog" className='flex items-center hover:text-primary duration-300'>Blog <DownArrow className="ml-1" /></Link></li>
                  <li><Link to="/Contact" className='flex items-center hover:text-primary duration-300'>Contact <DownArrow className="ml-1" /></Link></li>
                </ul>
              </div>

            
              <div className='flex justify-between items-center space-x-4 mr-6'>
                <Search className='size-7 mr-4' />
                <Shopping className='size-7 mr-6' />
                <button className='flex items-center bg-primary px-5 py-4 rounded-xl active:scale-95 hover:bg-gradient-to-r hover:from-[#1ab69d] hover:to-[#31b978] duration-300'>
                  Try for free <Arrow className="ml-1 size-5 mr-4" />
                </button>
              </div>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Nav