import React from 'react'
import person from '../../assets/about/about-01.webp';
import { Award, Check } from '../shared/svgComponents'

function Learning() {
  return (
    <>
        <div className='flex justify-between pt-16 bg-dark text-white'>
        <div className='w-[50%] flex flex-col items-center'>
            <img className='h-[400px] w-[350px] rounded-xl' src={person} alt="" />
            <div>
                <Award />
                <p><span>29+</span> <br /> Wonderful Award</p>
            </div>
        </div>
        <div className='w-[50%]'>
            <p>ABOUT US</p>
            <h1>Learn & Grow Your Skills From AnyWhere</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, obcaecati nisi! Sint sequi aspernatur fugiat rerum necessitatibus quod expedita magni odit, aliquam accusantium. Sequi deleniti architecto distinctio perferendis qui temporibus.</p>
            <div>
                <Check/>
                <p>Expert Trainers</p>
            </div>
            <div>
                <Check />
                <p>Online Remote Learning</p>
            </div>
            <div>
                <Check />
                <p>Lifetime Access</p>
            </div>

        </div>

    </div>    
    </>
  )
}

export default Learning