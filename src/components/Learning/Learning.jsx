
import person from '../../assets/about/about-01.webp';
import { Award, Check } from '../shared/svgComponents'
import YoutubeVideo from './Youtube';

import redball from '../../assets/about/shape-35.png'
import blueball from '../../assets/about/shape-37.png'
import ball from '../../assets/about/shape-18.png'
import rock from '../../assets/about/shape-36.png'

function Learning() {
    const handleMouseMove = (event) => {
   
        const movable_images= document.querySelectorAll('.mousemove');
        movable_images.forEach(item=>{
         console.log(item.speed)
   
         item.style.transform=`translate(${(event.clientX *item.getAttribute('speed'))/50}px, ${(event.clientY*item.getAttribute('speed'))/80}px)`;
        })
    };
  return (
    <div className='flex flex-col '>
        <div className=' w-full flex flex-col md:flex-row p-4 md:pb-52 pt-28 bg-[#1c242f] text-slate-300 overflow-hidden relative ' onMouseMove={handleMouseMove}>
            <div className='md:w-[50%] flex flex-col  items-left z-20 p-4 relative mb-20'>

                <img className='md:h-[400px] md:w-full/2 rounded-xl md:top-14 md:left-20 md:absolute' src={person} alt="" />

                <div className='flex justify-start items-center bg-ctaColorBg text-primary h-24 w-[250px] md:right-32 -bottom-6 md:-bottom-[200px] absolute rounded-lg animate-bounce '>
                    <div className='bg-grayDark rounded-full ml-4 h-12 w-12 flex items-center justify-center bg-opacity-20 '>
                    <Award className=' h-8 w-8' />
                    </div>
                    <p className='ml-4'><span className='text-3xl font-bold'>29+</span> <br /> <span className='text-grayDark text-xl'>Wonderful Award</span> </p>
                </div>
 
                <div className='absolute md:h-[200px] md:w-[300px] bg-slate-100 right-12 -top-28 md:right-20  md:top-0 rounded-lg'>
                    <div className="flex justify-center items-center">
                        <YoutubeVideo tClassName={'p-4'} videoId="bMknfKXIFA8" /> 
                    </div>
                </div>
            </div>


            <div className='md:w-[50%] z-10'>
                <p className='text-xl mb-4 text-[#bababa]'>ABOUT US</p>
                <h1 className='text-5xl font-bold mb-4'>Learn & Grow Your Skills From <br /> <span className='text-secondary'>AnyWhere</span> </h1>
                <p className='text-lg mb-4 text-[#bababa]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, obcaecati nisi! Sint sequi aspernatur fugiat rerum necessitatibus quod expedita magni odit, aliquam accusantium. Sequi deleniti architecto distinctio perferendis qui temporibus.</p>
                <div className='text-lg flex justify-start items-center mb-2'>
                    <Check className='text-yallow h-6 w-6 font-bold mr-8' />
                    <p className='text-[#bababa]'>Expert Trainers</p>
                </div>
                <div className='text-lg flex justify-start items-center mb-2'>
                    <Check className='text-yallow h-6 w-6 mr-8' />
                    <p className='text-[#bababa]'>Online Remote Learning</p>
                </div>
                <div className='text-lg flex justify-start items-center mb-2'>
                    <Check className='text-yallow h-6 w-6 font-bold mr-8' />
                    <p className='text-[#bababa]'>Lifetime Access</p>
                </div>

            </div>
            <img speed={-1} src={redball} alt="" className=' md:block hidden  absolute top-[1860px] left-[300px] transition-all duration-200 mousemove ease-linear' />
            <img speed={1} src={blueball} alt="" className='md:block hidden absolute left-10 z-10 transition-all duration-200 mousemove ease-linear' />
            <img speed={1} src={ball} alt="" className='md:block hidden absolute right-6 top-[1560px] h-28 transition-all duration-200 mousemove ease-linear' />
            <img speed={-1} src={rock} alt="" className=' md:block hidden absolute top-[1630px] z-0 transition-all duration-200 mousemove ease-linear' />

        </div>    
    </div>
  )
}

export default Learning