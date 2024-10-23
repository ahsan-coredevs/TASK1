import React from 'react';



import Catergories from './components/Categories/Categories'

// import round from './assets/about/shape-46';

import './App.css'
import { CameraIcon, LinkedinIcon, Dot, Search, Shopping, Arrow, DownArrow, Laptop, Man, Certificate, Members } from './components/shared/svgComponents';
import Learning from './components/Learning/Learning';
import Instructors from './components/Instructors/Instructors';
import Partners from './components/Partners/Partners';
import News from './components/News/News';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Categories from './components/Categories/Categories';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Contact from './components/Contact/Contact';
import Admin from './components/AdminPanel/Admin';
import ManageCourses from './pages/admin/courses/ManageCourses';
import AddCourses from './pages/admin/courses/AddCourses';
import ManageBlogs from './pages/admin/blogs/ManageBlogs';
import AddBlogs from './pages/admin/blogs/AddBlogs';
import Courses from './pages/course/Courses';
import Blog from './pages/blog/Blog';
import BlogView from './pages/blog/BlogView';
import Feedback from './components/feedback/Feedback';
import ViewCourse from './pages/course/ViewCourse';
import ManageInstructor from './pages/admin/instructors/ManageInstructor';
import AddInstructor from './pages/admin/instructors/AddInstructor';



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
       <Route path="/" element={<Home />} />
       <Route path="/Home" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:operation" element={<ViewCourse />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/blog/:operation' element={<BlogView />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
       </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<Admin />} >
        <Route path="/admin/courses" element={<ManageCourses />} />
        <Route path='/admin/courses/:operation' element={<AddCourses />} />
        <Route path="/admin/blogs" element={<ManageBlogs />} />
        <Route path='/admin/blogs/:operation' element={<AddBlogs />} />
        <Route path="/admin/instructor" element={<ManageInstructor />} />
        <Route path="/admin/instructor/:operation" element={<AddInstructor />} />
        
        </Route>
        
      </Routes>

    </Router>
  )
}

export default App;

