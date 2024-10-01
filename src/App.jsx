import React from 'react';
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from './assets/icons/logo-white.png'
import hero from './assets/about/girl-1.webp'
import './App.css'
import { CameraIcon, LinkedinIcon, Dot, Search, Shopping, Arrow, DownArrow } from './components/shared/svgComponents';

function App() {

  return (
    <>
      <div className='w-screen h-screen'>
        <div className='flex flex-row max-h-14 w-full bg-gray-900 justify-between items-center p-2 '> 
          <div className='flex justify-between w-[40%] min-h-full border-r border-gray-500'>
          <p className='text-slate-100'>First 20 students get 50% discount. <span className='text-red-600 cursor-pointer'>Hurry up!</span> </p> 
          <a href="#" className='text-slate-100 hover:text-red-500 transition-colors duration-300 cursor-pointer mr-3'>Login</a>
          </div>
          <a href="#" className='text-slate-100 hover:text-red-500 transition-colors duration-300 border-r border-gray-500 pr-3 text-center'>Register</a>
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
          <a href="#" className="flex items-center text-slate-100 hover:text-primary">
            <Dot className="mr-1" /> 
            Category
          </a>
        </div>
       </div>

        
        <div className='flex justify-between w-[70%] h-[100%] text-slate-100'>
          
          <div className='w-[50%] h-[100%] items-center'>
            <ul className='flex justify-between items-center h-[100%]'>
              <li className='h-[100%] flex items-center'><a href="#" className='flex items-center'>Home <DownArrow className="ml-1" /></a></li>
              <li><a href="#" className='flex items-center'>Pages <DownArrow className="ml-1" /></a></li>
              <li><a href="#" className='flex items-center'>Courses <DownArrow className="ml-1" /></a></li>
              <li><a href="#" className='flex items-center'>Blog <DownArrow className="ml-1" /></a></li>
              <li><a href="#" className='flex items-center'>Contact <DownArrow className="ml-1" /></a></li>
            </ul>
          </div>

        
          <div className='flex justify-between items-center space-x-4 mr-6'>
            <Search className='size-7 mr-4' />
            <Shopping className='size-7 mr-6' />
            <button className='flex items-center bg-primary px-5 py-4 rounded-xl active:scale-95'>
              Try for free <Arrow className="ml-1 size-5 mr-4" />
            </button>
          </div>
        </div>
      </div> 

        <div>
          <div>
            <h1>Get 25000+ <br /> Best Online Courses <br /> from Edublink</h1>
            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
            <button>Find courses <Arrow/></button>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default App
