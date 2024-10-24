import React from 'react'

import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Home from '../components/Home/Home'
import Footer from '../components/footer/Footer'

function MainLayout() {
  
  return (
    <div className='max-w-[1500px] w-full mx-auto relative'>
        <Nav />
        <Outlet />
        <Footer/>

    </div>
  )
}

export default MainLayout