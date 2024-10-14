import React from 'react'
import Button from '../Button/Button'
import Halfball from '../../assets/resources/shape-08.png'
import Blueball from '../../assets/about/shape-13.png'
import Redball from '../../assets/about/shape-25.png'
import Wave from '../../assets/about/shape-15.png'

function Certificates() {
    const handleMouseMove = (event) => {
   
        const movable_images= document.querySelectorAll('.mousemove');
        movable_images.forEach(item=>{
         console.log(item.speed)
   
         item.style.transform=`translate(${(event.clientX *item.getAttribute('speed'))/50}px, ${(event.clientY*item.getAttribute('speed'))/80}px)`;
        })
    };
  return (
    <div className='w-screen h-[400px] bg-dark flex items-center justify-center flex-col relative ' onMouseMove={handleMouseMove}>
        <h1 className='text-5xl font-bold text-white py-4 text-center leading-[60px] pb-8'>Get Your Quality Skills Certificate <br /> Through EduBlink</h1>
        <Button buttonName='Get Started Now' /> 
        <img speed={-3} className='absolute top-[20px] right-0 transition-all duration-200 mousemove ease-linear' src={Halfball} alt="" />
        <img speed={3} className='absolute top-[0px] right-0 transition-all duration-200 mousemove ease-linear' src={Blueball} alt="" />
        <img speed={-3} className='absolute top-[250px] left-20 w-32 transition-all duration-200 mousemove ease-linear' src={Redball} alt="" />
        <img speed={3} className='absolute top-[250px] left-24 transition-all duration-200 mousemove ease-linear' src={Wave} alt="" />
    </div>
  )
}

export default Certificates