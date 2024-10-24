import React from 'react'
import blueBall from '../../assets/about/shape-13.png'
import redBall from '../../assets/counterup/shape-03.png'
import stone from '../../assets/counterup/shape-04.png'
import circle from '../../assets/resources/shape-08.png'
import Swape from './Swape'

function AboutCourse() {
    const handleMouseMove = (event) => {
   
        const movable_images= document.querySelectorAll('.mousemove');
        movable_images.forEach(item=>{
         console.log(item.speed)
   
         item.style.transform=`translate(${(event.clientX *item.getAttribute('speed'))/50}px, ${(event.clientY*item.getAttribute('speed'))/80}px)`;
        })
    };
  return (
    <div className='w-full flex flex-col items-center bg-dark text-slate-200 pt-[100px]'>
         <div className='w-full flex flex-col items-center bg-dark text-slate-200 pb-[100px] relative '>
            <div className='bg-[#1c242f] h-[400px] p-14 w-[50%] grid grid-cols-2 grid-rows-2 rounded-xl z-10  ' onMouseMove={handleMouseMove}  >
                <div className='flex flex-col items-center justify-center border-r-[1px] border-b-[1px] border-slate-600'>
                    <h1 className='text-primary text-5xl font-bold py-2'>45.2k</h1>
                    <p>STUDENT ENROLLED</p>
                </div>
                <div className='flex flex-col items-center justify-center border-l-[1px] border-b-[1px] border-slate-600'>
                    <h1 className='text-secondary text-5xl font-bold py-2'>32.4K
                    </h1>
                    <p>CLASS COMPLETED</p>
                </div>
                <div className='flex flex-col items-center justify-center border-t-[1px] border-r-[1px] border-slate-600'>
                    <h1 className='text-yallow text-5xl font-bold py-2'>354+</h1>
                    <p>TOP INSTRUCTORS</p>
                </div>
                <div className='flex flex-col items-center justify-center border-l-[1px] border-t-[1px] border-slate-600'>
                    <h1 className='text-[#8e56ff] text-5xl font-bold py-2'>99.9%</h1>
                    <p>SATISFACTION RATE</p>
                </div>
                
            </div>
            <div>
                    <img speed={-3} className='absolute top-[-70px] left-[270px] transition-all duration-200 mousemove ease-linear ' src={blueBall} alt="" />
                    <img className='absolute top-[-80px] left-[290px] z-1 animate-spinreverse' src={circle} alt="" />
                    <img speed={3} className='absolute top-[250px] right-[290px] transition-all duration-200 mousemove ease-linear' src={stone} alt="" />
                    <img speed={-3} className='absolute h-[200px] top-[250px] right-[290px] transition-all duration-200 mousemove ease-linear' src={redBall} alt="" />
                </div>
         </div>

        
        <Swape />
    </div>
  )
}

export default AboutCourse