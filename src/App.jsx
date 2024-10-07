import React from 'react';



import Catergories from './components/Categories/Categories'

// import round from './assets/about/shape-46';

import './App.css'
import { CameraIcon, LinkedinIcon, Dot, Search, Shopping, Arrow, DownArrow, Laptop, Man, Certificate, Members } from './components/shared/svgComponents';
import Learning from './components/Learning/Learning';
import Courses from './components/Courses/Courses';
import Instructors from './components/Instructors/Instructors';
import Partners from './components/Partners/Partners';
import News from './components/News/News';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Categories from './components/Categories/Categories';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';



function App() {
 

  return (
    <Router>
      
      {/* <Home />
      <Catergories />
      <Learning />
      <Courses />
      <Instructors />
      <Partners />
      <News />

     */}
      <Routes>
       <Route  path="/" element={<MainLayout />} >
       <Route path="/Home" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/News" element={<News />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
       </Route>
      </Routes>

    </Router>
  )
}

export default App;

