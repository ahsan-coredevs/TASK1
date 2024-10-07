import React from 'react'
import InStructor1 from '../../assets/resources/blog-01.jpg'
import InStructor2 from '../../assets/resources/process-1.webp'
import InStructor3 from '../../assets/resources/about-18.webp'
import InStructor4 from '../../assets/resources/about-17.webp'
import { Facebook, LinkedinIcon, Shared, Twitter } from '../shared/svgComponents'
import Certificates from './Certificates'

function Instructors() {
  return (
    <>
        <div className='flex flex-col items-center justify-center bg-grayDark w-screen'>
        <p className='py-4 text-lg text-white'>INSTRUCTORS</p>
        <h1 className='text-5xl font-bold pb-8 text-white'>Course Instructors</h1>
        <div className='flex items-center justify-center gap-8 w-screen pb-20'>
            <div className='text-white flex flex-col items-center'>
                <div className='w-[300px] h-[400px] relative group rounded-lg'>
                    <div className='w-full h-full absolute group-hover:bg-primary group-hover:bg-opacity-70 z-10 duration-300 rounded-lg'></div>
                    <img className='absolute object-cover w-full h-full rounded-lg' src={InStructor1} alt="" />
                    <Shared className='p-2 w-10 h-10 rounded-full absolute right-6 top-[25px] text-primary border-2 border-primary z-30 group-hover:bg-slate-200 group-hover:border-none duration-300' />
                    <Facebook className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[75px] group-hover:opacity-100 duration-1000 absolute' />
                    <Twitter className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[125px] group-hover:opacity-100 duration-1000 absolute' /> 
                    <LinkedinIcon className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[175px] group-hover:opacity-100 duration-1000 absolute' />
                </div>
                <h1 className='py-2 text-2xl font-bold'>Jane Seymour</h1>
                <p className='text-lg'>UI Designer</p>

            </div>
            
            <div className='text-white flex flex-col items-center'>
                <div className='w-[300px] h-[400px] relative group rounded-lg'>
                    <div className='w-full h-full absolute group-hover:bg-primary group-hover:bg-opacity-70 z-10 duration-300 rounded-lg'></div>
                    <img className='absolute object-cover w-full h-full rounded-lg' src={InStructor3} alt="" />
                    <Shared className='p-2 w-10 h-10 rounded-full absolute right-6 top-[25px] text-primary border-2 border-primary z-30 group-hover:bg-slate-200 group-hover:border-none duration-300' />
                    <Facebook className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[75px] group-hover:opacity-100 duration-1000 absolute' />
                    <Twitter className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[125px] group-hover:opacity-100 duration-1000 absolute' /> 
                    <LinkedinIcon className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[175px] group-hover:opacity-100 duration-1000 absolute' />
                </div>
                 
                 <h1 className='py-2 text-2xl font-bold'>Edward Norton</h1>
                 <p className='text-lg'>Web Developer</p>

            </div>

            <div className='text-white flex flex-col items-center'>
                <div className='w-[300px] h-[400px] relative group rounded-lg'>
                    <div className='w-full h-full absolute group-hover:bg-primary group-hover:bg-opacity-70 z-10 duration-300 rounded-lg'></div>
                    <img className='absolute object-cover w-full h-full rounded-lg' src={InStructor2} alt="" />
                    <Shared className='p-2 w-10 h-10 rounded-full absolute right-6 top-[25px] text-primary border-2 border-primary z-30 group-hover:bg-slate-200 group-hover:border-none duration-300' />
                    <Facebook className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[75px] group-hover:opacity-100 duration-1000 absolute' />
                    <Twitter className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[125px] group-hover:opacity-100 duration-1000 absolute' /> 
                    <LinkedinIcon className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[175px] group-hover:opacity-100 duration-1000 absolute' />
                </div>
                <h1 className='py-2 text-2xl font-bold'>Penenlope Cruz</h1>
                <p className='text-lg'>Digital Marketer</p>
            </div>
            
            <div className='text-white flex flex-col items-center'>
                <div className='w-[300px] h-[400px] relative group rounded-lg'>
                    <div className='w-full h-full absolute group-hover:bg-primary group-hover:bg-opacity-70 z-10 duration-300 rounded-lg'></div>
                    <img className='absolute object-cover w-full h-full rounded-lg' src={InStructor4} alt="" />
                    <Shared className='p-2 w-10 h-10 rounded-full absolute right-6 top-[25px] text-primary border-2 border-primary z-30 group-hover:bg-slate-200 group-hover:border-none duration-300' />
                    <Facebook className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[75px] group-hover:opacity-100 duration-1000 absolute' />
                    <Twitter className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[125px] group-hover:opacity-100 duration-1000 absolute' /> 
                    <LinkedinIcon className='w-10 h-10 right-6 font-bold opacity-0 top-6 text-white border-2 border-white rounded-full p-2 group-hover:z-50 group-hover:top-[175px] group-hover:opacity-100 duration-1000 absolute' />
                </div>
                <h1 className='py-2 text-2xl font-bold'>John Travolta</h1>
                <p className='text-lg'>Medicine Expert</p>
            </div>

            
        </div>
    </div>
    <Certificates />
    </>
  )
}

export default Instructors