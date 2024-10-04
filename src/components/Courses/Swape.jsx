import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import SwapeCard from './SwapeCard'

function Swape() {

    const swapeCardData = [
        {
            Image: 'https://i.ibb.co.com/MCc7sRY/comment-02.jpg',
            name: 'Amber Page',
            resignation: 'Developer',
        },
        {
            Image: 'https://i.ibb.co.com/3TbVNbF/author-01.jpg',
            name: 'Robert trap',
            resignation: 'Designer',
        },
        {
            Image: 'https://i.ibb.co.com/3yDq1nK/comment-01.jpg',
            name: 'Thomas Lopez',
            resignation: 'Developer',
        },
        {
            Image: 'https://i.ibb.co.com/NYHcVcC/comment-03.jpg',
            name: 'Roy Sanchez',
            resignation: 'Digital Marketing'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1 ) % swapeCardData.length);
    }, 2000)

    return () => clearInterval(intervalID);
}, [swapeCardData.length]);

const getVisibleCards = () => {
    const firstCardIndex = currentIndex;
    const secondCardIndex = (currentIndex + 1) % swapeCardData.length;
    return [swapeCardData[firstCardIndex], swapeCardData[secondCardIndex]];
  };
  const visibleCards = getVisibleCards();

  return (
    <div className='flex bg-[#181818] pt-[350px] w-screen mt-[-200px] pb-[100px]'>
        <div className='w-[40%] pl-[100px] py-[50px] mt-[-100px]'>
            <p className='text-base py-1'>TEXTTIMONIALS</p>
            <h2 className='text-5xl font-bold py-4'>What Our Students <br /> Have To Say</h2>
            <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio nobis excepturi nam hic eum pariatur. Sit, ea ipsa. Voluptatem excepturi unde voluptatibus a nobis.</p>
            <Button buttonName={'View All'} />
        </div>
        <div className='flex'>
            {
                visibleCards.map((card, index) => (
                    <SwapeCard className=' transition-all duration-700 ease-in-out'
                    key={index}
                    Image={card.Image}
                    name={card.name}
                    resignation={card.resignation}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Swape