import { BiCalendar, BiChat } from 'react-icons/bi'
import Img1 from '../../assets/about/about-26.webp'
import Img2 from '../../assets/about/about-16.webp'
import blueball from '../../assets/about/shape-13.png'
import redball from '../../assets/about/shape-25.png'
import { Arrow } from '../shared/svgComponents'

function News() {
    const handleMouseMove = (event) => {
        const movable_images= document.querySelectorAll('.mousemove');
        movable_images.forEach(item=>{
         console.log(item.speed)
   
         item.style.transform=`translate(${(event.clientX *item.getAttribute('speed'))/50}px, ${(event.clientY*item.getAttribute('speed'))/80}px)`;
        });
    };
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto bg-grayDark text-slate-300 pb-[200px] md:pt-36 md:pb-[200px] md:relative p-4' onMouseOver={handleMouseMove}>
        <p className='text-lg py-4 '>LATEST ARTICLES</p>
        <h2 className='text-4xl font-bold pb-8 z-40'>Get News With Edublink</h2>

        <div className='flex flex-col md:flex-row w-full h-auto items-center justify-between z-20 -mt-8 md:mt-0'>
            <div className='w-full md:w-[25%] md:ml-10 p-4'>
                <div className='w-full h-full py-6 bg-gray-800 flex flex-col items-start justify-center px-6 rounded-lg md:-mt-[390px]'>
                <p className='text-lg'>ONLINE</p>
                <h2 className='text-2xl font-bold py-2'>Become a Better BLogger <br /> Content Planning</h2>
                <p className='flex text-lg items-center gap-4 py-2'><BiCalendar className='text-primary' /> <p>Oct 10, 2024</p> | <BiChat className='text-primary' /> <p>Com 09</p></p>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, perferendis?</p>
                </div>
            </div>

            <div className='w-full md:w-[65%] flex flex-col md:flex-row gap-32 md:gap-14 h-full'>
                <div className='md:w-[40%] h-[400px] relative group p-4'>
                    <div className='w-full h-full rounded-lg overflow-hidden'>
                        <img className='object-cover h-full w-full group-hover:scale-110 duration-300' src={Img1} alt="" />
                    </div>
                    <div className='absolute flex flex-col bg-gray-800 w-[80%] rounded-lg p-4 -mt-[150px] ml-[40px]'>
                        <p>LECTURE</p>
                        <h2>How to Keep Workouts <br /> Fresh in the Morning</h2>
                        <p  className='flex text-lg items-center gap-4 py-2'><BiCalendar /> <p>Oct 10, 2024</p> | <BiChat /> <p>Com 09</p></p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam doloribus, non delectus ipsam totam ipsum, dolorum hic nihil eius .</p>
                    </div>
                    <button className='absolute top-[200px] rounded-full bg-primary p-4 right-20 opacity-0 group-hover:opacity-100 group-hover:top-[220px] duration-300'><Arrow/></button>
                </div>
                <div className='md:w-[40%] h-[400px] relative group p-4'>
                    <div className='overflow-hidden rounded-lg'><img className='object-cover h-[400px] w-full rounded-lg group-hover:scale-110 duration-300 overflow-hidden' src={Img2} alt="" /></div>
                    <div  className='absolute flex flex-col bg-gray-800 w-[80%] rounded-lg p-4 -mt-[150px] ml-[40px]'>
                        <p>BUSINESS</p>
                        <h2>Four Ways to Keep Your <br /> Workout Routine Fresh</h2>
                        <p  className='flex text-lg items-center gap-4 py-2'><BiCalendar /> <p>Oct 10, 2024</p> | <BiChat /> <p>Com 09</p></p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam doloribus, non delectus ipsam totam ipsum, dolorum hic nihil eius.</p>
                    </div>
                    <button className='absolute top-[200px] rounded-full bg-primary p-4 right-20 opacity-0 group-hover:opacity-100 group-hover:top-[220px] duration-300'><Arrow/></button>
                </div>
                
            </div>
        </div>
        <img speed={3} className='hidden md:block absolute left-0 top-4 h-28 w-32 z-0 transition-all duration-200 mousemove ease-linear' src={blueball} alt="" />
        <img speed={-3} className=' hidden md:block absolute right-24 top-[700px] h-36 w-32 z-0 transition-all duration-200 mousemove ease-linear' src={redball} alt="" />
        <div speed={-3} className=' hidden md:block w-28 h-28 border-[20px] border-secondary absolute top-0 left-8 rounded-full transition-all duration-200 mousemove ease-linear'>
            <p></p>
        </div>
    </div>
  )
}

export default News