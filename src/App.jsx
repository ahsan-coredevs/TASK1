import React from 'react';
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from './assets/icons/logo-white.png';
import hero from './assets/about/girl-1.webp';
import banner from './assets/resources/author-1.png';
import ball1 from './assets/about/shape-35.png';
import ball2 from './assets/about/shape-37.png';
import rectangle from './assets/about/h-1-shape-01.png';
import Catergories from './components/Categories/Categories'

// import round from './assets/about/shape-46';
import wave from './assets/about/shape-15.png';
import './App.css'
import { CameraIcon, LinkedinIcon, Dot, Search, Shopping, Arrow, DownArrow, Laptop, Man, Certificate, Members } from './components/shared/svgComponents';

import { useState } from "react";
import Learning from './components/Learning/Learning';


function App() {
  const handleMouseMove = (event) => {
   
     const movable_images= document.querySelectorAll('.mousemove');
     movable_images.forEach(item=>{
      console.log(item.speed)

      item.style.transform=`translate(${(event.clientX *item.getAttribute('speed'))/50}px, ${(event.clientY*item.getAttribute('speed'))/80}px)`;
     })
     
  };

  return (
    <>
      <div className='w-screen '  onMouseMove={handleMouseMove}>
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
          <a href="#" className="flex items-center text-slate-100 hover:text-primary duration-300">
            <Dot className="mr-1" /> 
            Category
          </a>
        </div>
       </div>

        
        <div className='flex justify-between w-[70%] h-[100%] text-slate-100'>
          
          <div className='w-[50%] h-[100%] items-center'>
            <ul className='flex justify-between items-center h-[100%]'>
              <li className='h-[100%] flex items-center hover:text-primary duration-300'><a href="#" className='flex items-center'>Home <DownArrow className="ml-1" /></a></li>
              <li><a href="#" className='flex items-center hover:text-primary duration-300'>Pages <DownArrow className="ml-1" /></a></li>
              <li><a href="#" className='flex items-center hover:text-primary duration-300'>Courses <DownArrow className="ml-1" /></a></li>
              <li><a href="#" className='flex items-center hover:text-primary duration-300'>Blog <DownArrow className="ml-1" /></a></li>
              <li><a href="#" className='flex items-center hover:text-primary duration-300'>Contact <DownArrow className="ml-1" /></a></li>
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

        <div className='flex justify-between h-screen w-screen bg-dark relative '>
          <div className='flex flex-col items-left z-10 justify-center ml-[85px] text-white w-[50%]'>
            <h1 className='text-[50px] font-bold mb-4'>Get <span className='text-secondary'>2500+</span> <br /> Best Online Courses <br /> from Edublink</h1>
            <p className='text-xl '>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
            <button className='flex w-[170px] text-base mt-3 bg-primary px-4 py-4 rounded-lg justify-center'>Find courses <Arrow className='ml-2 mt-2 text-sm' /></button>
          </div>
          <div className='relative z-20'>
            <img className='h-[591px] mt-[50px]'  src={hero} alt="" />
            <div className='absolute flex flex-col justify-center items-left pl-[20px] bg-white rounded-lg w-[300px] h-[120px] z-10 top-[450px] left-[-110px]'>
              <h5 className='text-xl font-bold'>Instructor</h5>
              <div className='flex'>
                <img src={banner} alt="" />
                <p className='font-bold text-base'> <span className='text-secondary '>200+</span> <br /> Instactors
                </p>
              </div>
            </div>
          </div>
        
              <img speed={-2} className='top-[100px] left-[50px] absolute z-0 transition-all duration-200 mousemove ease-linear' src={ball1} alt="" />
              <img  speed={2} className='top-[130px] right-[300px] absolute z-0 transition-all duration-200 mousemove  ease-linear' src={ball2} alt="" />
              <img  speed={-2} className='bottom-[100px] right-[0px] absolute z-0 transition-all duration-200 mousemove  ease-linear' src={ball1} alt="" />
              <img  speed={2} className='top-[100px] right-[0px] absolute z-0 transition-all duration-200 mousemove  ease-linear' src={rectangle} alt="" />
               {/* <img src={round} alt="" />  */}
              <img className='top-[80px] right-[500px] absolute animate-move transition-all duration-200 ' src={wave} alt="" />
              
         
          
          
        </div>


        <div className='h-[150px] w-screen flex bg-primary text-white justify-around items-center' >
          <div className='flex items-center justify-center h-[100%] w-[25%] border-r border-gray-200/30'>
            <div className='bg-white p-4 rounded-full mr-3 bg-opacity-10'>
            <Laptop className='h-10 w-10 ' />
            </div>
            <p className='font-bold'>3020 <br /> Online Courses</p>
          </div>
          <div className='flex items-center justify-center h-[100%] w-[25%] border-r border-gray-200/30'>
          <div className='bg-white p-4 rounded-full mr-3 bg-opacity-10'>
            <Man className='h-10 w-10 ' />
            </div>
            <p className='font-bold'>Top <br /> Instructors</p>
          </div>
          <div className='flex items-center justify-center h-[100%] w-[25%] border-r border-gray-200/30'>
          <div className='bg-white p-4 rounded-full mr-3 bg-opacity-10'>
            <Certificate className='h-10 w-10 ' />
            </div>
            <p className='font-bold'>Online <br /> Certificates</p>
          </div>
          <div className='flex items-center justify-center h-[100%] w-[25%] '>
          <div className='bg-white p-4 rounded-full mr-3 bg-opacity-10'>
            <Members className='h-10 w-10 ' />
            </div>
            <p className='font-bold'>6000 <br /> Members</p>
          </div>
        </div>
      </div>
      <Catergories />
      <Learning />

    

    </>
  )
}

export default App;

