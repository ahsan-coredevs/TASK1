
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import logo from '../assets/icons/logo-white.png';

function AdminLayout() {
    const navigate = useNavigate();
  return (
   <div className="w-full h-screen bg-dark overflow-hidden relative">
   
    {/* Upper part */}
     <div className='flex  h-20 w-full bg-nav justify-between items-center absolute top-0 left-0'>
        <div className="flex h-full">
            <div className='border-r border-gray-500/30 p-2'>
                <img onClick={() => navigate("/")}  src={logo} alt="Logo" className='cursor-pointer'/>
            </div>
        </div>
    </div> 
    {/* Lower */}

    <div className="w-screen h-[calc(100vh-80px)] flex absolute top-[80px] left-0 ">
        {/* sidebar */}
        <div className=" bg-nav border-t max-w-[177px] w-full h-full text-white p-2 border-r border-white/10">
        <ul className='flex flex-col space-y-2 '>
            
            <li className='hover:text-primary cursor-pointer duration-300 text-lg font-bold'>
                <NavLink  to='/admin/course' className={({isActive}) => isActive ? "text-primary" : " "}>Courses </NavLink>
            </li>
            
            
            <li className='hover:text-primary cursor-pointer duration-300 text-lg font-bold'>
                <NavLink to='/admin/blog' className={({isActive}) => isActive ? "text-primary" : " "}> Blogs </NavLink>
            </li>
            <li className='hover:text-primary cursor-pointer duration-300 text-lg font-bold'>
                <NavLink to='/admin/instructor' className={({isActive}) => isActive ? "text-primary" : " "}> Instructor </NavLink>
            </li>
            <li className='hover:text-primary cursor-pointer duration-300 text-lg font-bold'>
                <NavLink to='/admin/order' className={({isActive}) => isActive ? "text-primary" : " "}> Orders </NavLink>
            </li>
            <li className='hover:text-primary cursor-pointer duration-300 text-lg font-bold'>
                <NavLink to='/admin/user' className={({isActive}) => isActive ? "text-primary" : " "}> Users </NavLink>
            </li>
            
        </ul>
        </div>
        {/* outlet */}
        <div className=" h-full overflow-y-auto w-[calc(100vw-177px)] flex items-center justify-center ">
            <Outlet/>
        </div>
    </div>

   </div>
   
  )
}

export default AdminLayout

