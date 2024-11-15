import React from 'react'
import Img1 from '../../assets/brand/brand-01.png'
import Img2 from '../../assets/brand/brand-02.png'
import Img3 from '../../assets/brand/brand-03.png'
import Img4 from '../../assets/brand/brand-04.png'
import Img5 from '../../assets/brand/brand-05.png'
import Img6 from '../../assets/brand/brand-06.png'
import Img7 from '../../assets/brand/brand-07.png'
import Img8 from '../../assets/brand/brand-08.png'


function Partners() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full h-auto bg-grayDark text-slate-300 p-4'>
        <div className='w-full md:w-[40%] flex flex-col justify-center md:pl-20'>
            <p className='text-lg py-2'>OUR PARTNERS</p>
            <h1 className='text-4xl font-bold py-4'>Learn With Our Partners</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo distinctio assumenda eum doloribus modi in dolor nisi asperiores ipsam suscipit, iure eos eius dolore mollitia expedita omnis perferendis? Distinctio.</p>
        </div>

        <div className='w-full md:w-[60%] h-auto flex flex-col'>
            <div className='flex items-center w-full justify-center'>
                <div className=' flex items-center justify-center hover:bg-slate-800 duration500 w-[200px] h-[200px] border-l-2 border-b-2 border-stone-300 border-opacity-10'>
                    <img className='w-[150px] h-[150px] ' src={Img1} alt="" />
                </div>

                <div className=' flex items-center justify-center hover:bg-slate-800 duration500 w-[200px] h-[200px] border-l-2 border-b-2 border-stone-300 border-opacity-10' >
                    <img className='w-[150px] h-[150px] ' src={Img2} alt="" />
                </div>
                    
                <div className=' flex items-center justify-center hover:bg-slate-800 duration500 w-[200px] h-[200px] border-l-2 border-b-2 border-stone-300 border-opacity-10'>
                <img className='w-[150px] h-[150px] ' src={Img3} alt="" />
                </div>

                <div className=' flex items-center justify-center hover:bg-slate-800 duration500 w-[200px] h-[200px] border-l-2 border-b-2 border-r-2 border-stone-300 border-opacity-10'>
                <img className='w-[150px] h-[150px] ' src={Img4} alt="" />
                </div>

            </div>
            
            <div className='flex items-center w-full justify-center'>
                <div className=' flex items-center justify-center  hover:bg-slate-800 duration500 w-[200px] h-[200px] border-l-2 border-stone-400 border-opacity-10'>
                <img className='w-[150px] h-[150px] ' src={Img5} alt="" />
                </div>

                <div className=' flex items-center justify-center hover:bg-slate-800 duration500 w-[200px] h-[200px] border-l-2 border-stone-400 border-opacity-10'>
                <img className='w-[150px] h-[150px] ' src={Img6} alt="" />
                </div>

                <div className=' flex items-center justify-center hover:bg-slate-800 duration500 w-[200px] h-[200px] border-l-2 border-stone-400 border-opacity-10'>
                <img className='w-[150px] h-[150px] ' src={Img7} alt="" />
                </div>

                <div className=' flex items-center justify-center hover:bg-slate-800 duration500 w-[200px] h-[200px] border-l-2 border-r-2 border-stone-400 border-opacity-10'>
                <img className='w-[150px] h-[150px]' src={Img8} alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Partners