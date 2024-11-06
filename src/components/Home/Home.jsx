import React from 'react'
import { Arrow, Certificate, Laptop, Man, Members } from '../shared/svgComponents'

import hero from '../../assets/about/girl-1.webp';

import banner from '../../assets/resources/author-1.png';
import ball1 from '../../assets/about/shape-35.png';
import ball2 from '../../assets/about/shape-37.png';
import rectangle from '../../assets/about/h-1-shape-01.png';
import wave from '../../assets/about/shape-15.png';
import Categories from '../Categories/Categories';
import Learning from '../Learning/Learning';
import Courses from '../popularCourses/PopularCourses';
import Instructors from '../Instructors/Instructors';
import Partners from '../Partners/Partners';
import News from '../News/News';
import Footer from '../footer/Footer';
import AboutCourse from '../popularCourses/AboutCourse';
import Blog from '../../pages/blog/Blog';
import HomeBlog from '../blog/HomeBlog';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Home() {
  const navigate = useNavigate();
  
  const handleMouseMove = (event) => {
   
    const movable_images= document.querySelectorAll('.mousemove');
    movable_images.forEach(item=>{
  

     item.style.transform=`translate(${(event.clientX *item.getAttribute('speed'))/50}px, ${(event.clientY*item.getAttribute('speed'))/80}px)`;
    })
    
 };
  return (
    <>
    <div className='w-full flex items-center justify-center'>
    <div className='w-full overflow-hidden' onMouseMove={handleMouseMove}>
        <div className='flex justify-between h-full w-full bg-dark relative '>
          <div className='flex flex-col items-left z-10 justify-center ml-[85px] text-white w-[50%]'>
            <h1 className='text-[50px] font-bold mb-4'>Get <span className='text-secondary'>2500+</span> <br /> Best Online Courses <br /> from Edublink</h1>
            <p className='text-xl '>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
            <button onClick={() => navigate("/courses")} className='flex w-[170px] text-base mt-3 bg-primary px-4 py-4 rounded-lg justify-center'>Find courses <Arrow className='ml-2 mt-2 text-sm' /></button>
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


        <div className='h-[150px] w-full flex bg-primary text-white justify-around items-center' >
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
    </div>
    <Categories />
    <Learning />
    <Courses />
    <AboutCourse />
    <HomeBlog/>
    <Instructors />
    <Partners />
    <News />
    </>
  )
}

export default Home