import React from 'react'

import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'

function MainLayout() {
  
  return (
    <div>
        <Nav />
        <Outlet />

    </div>
  )
}

export default MainLayout