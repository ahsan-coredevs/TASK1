import { FaBars, FaFacebook, FaTimes, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo-white.png";
import {
  Arrow,
  Dot,
  DownArrow,
  LinkedinIcon,
  Person,
  Search,
} from "../shared/svgComponents";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Nav() {
  const navigate = useNavigate();
  const userDataFromRedux = useSelector((state) => state.user.user);
  const [userData, setUserData] = useState(userDataFromRedux);

  useEffect(() => {
    setUserData(userDataFromRedux);
  }, [userDataFromRedux]);

  const logoutHanddle = () => {
    localStorage.removeItem("token");
    userDataFromRedux(null);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-dark flex items-center justify-center ">
      <div className="w-full  overflow-hidden sticky z-50 ">
        <div className="flex flex-row max-h-14 w-full bg-gray-900 justify-between items-center p-2 ">
          <div className="flex justify-between min-h-full border-r border-gray-500 pr-6">
            <p className="text-slate-300">
              First 20 students get 50% discount.{" "}
              <span className="text-red-600 cursor-pointer">Hurry up!</span>{" "}
            </p>
          </div>

          {userData == null ? (
            <div className="flex items-center justify-center w-[55%] md:w-[15%] pr-2 md:border-r border-gray-500 ml-4 md:-ml-16">
              <Link
                to="/SignIn"
                className="text-slate-300 hover:text-red-500 transition-colors duration-300 cursor-pointer mr-3"
              >
                SignIn
              </Link>
              <Link
                to="/SignUp"
                className="text-slate-300 hover:text-red-500 transition-colors duration-300 pr-3 text-center"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="text-slate-300 text-center min-h-full bg-red-500 w-[25%] md:w-[15%] hover:text-red-500 transition-colors duration-300 cursor-pointer md:-ml-20 outline-none pr-4 md:border-r">
              <Link
              onClick={() => logoutHanddle()}
              
            >
              Logout
            </Link>
            </div>
          )}

          <div className="hidden md:flex border-r items-center justify-center border-gray-500">
            <IoCallSharp className="text-red-500 size-5 mr-2 " />
            <p className="text-slate-300 hover:text-red-500 transition-colors duration-300 cursor-pointer pr-3">
              Call: 123 5452 3462
            </p>
          </div>
          <div className=" hidden md:flex border-r border-gray-500">
            <IoMdMail className="text-red-500 size-5 mr-2 " />
            <p className="text-slate-300 hover:text-red-500 transition-colors duration-300 cursor-pointer pr-3">
              {" "}
              Email: info@edublink.com
            </p>
          </div>
          <div className="hidden md:flex">
            <FaFacebook className="m-2 text-slate-300 size-4 hover:text-red-500 transition-colors duration-300 cursor-pointer" />
            <FaInstagram
              className="m-2 text-slate-300 size-4 hover:text-red-500 transition-colors duration-300 cursor-pointer"
              size={20}
            />
            <FaTwitter
              className="m-2 text-slate-300 size-4 hover:text-red-500 transition-colors duration-300 cursor-pointer"
              size={20}
            />
            <LinkedinIcon
              className="m-2 text-slate-300 size-4 hover:text-red-500 transition-colors duration-300 cursor-pointer"
              size={20}
            />
          </div>
        </div>

        <div className={`${menuOpen? 'h-auto':'flex  h-20 w-full bg-nav justify-between items-center '}`}>
          <div className={`${menuOpen ? 'hidden' : 'flex h-full'}`}>
            <div className="border-r border-gray-500/30 p-2">
              <img
                onClick={() => navigate("/")}
                src={logo}
                alt="Logo"
                className="cursor-pointer mt-2 md:mt-0"
              />
            </div>

            <div className="hidden border-r border-gray-500/30 h-full md:flex items-center justify-center px-5">
              <a
                href="#"
                className="flex items-center text-slate-300 hover:text-primary duration-300"
              >
                <Dot className="mr-1"/>
                Category
              </a>
            </div>
          </div>
          
          <div className={`${menuOpen ? 'items-start':''} flex justify-between w-full md:w-[70%] h-full text-slate-300`}>
      {/* Menu Icon for Mobile */}
      <button onClick={toggleMenu} className="md:hidden text-2xl p-2">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row items-start md:items-center md:justify-between w-full h-full md:w-[50%]`}
      >
        <ul className="flex flex-col md:flex-row justify-between md:justify-around items-start md:items-center md:w-full h-full space-y-4 md:space-y-0">
          <li className="flex items-center hover:text-primary duration-300">
            <Link to="/home" className="flex items-center">
              Home <DownArrow className="ml-1" />
            </Link>
          </li>
          <li className="flex items-center hover:text-primary duration-300">
            <Link to="/courses" className="flex items-center">
              Courses <DownArrow className="ml-1" />
            </Link>
          </li>
          <li className="flex items-center hover:text-primary duration-300">
            <Link to="/blog" className="flex items-center">
              Blog <DownArrow className="ml-1" />
            </Link>
          </li>
          <li className="flex items-center hover:text-primary duration-300">
            <Link to="/Contact" className="flex items-center">
              Contact <DownArrow className="ml-1" />
            </Link>
          </li>
          <li className="flex items-center hover:text-primary duration-300">
            <Link to="/feedback" className="flex items-center">
              Feedback <DownArrow className="ml-1" />
            </Link>
          </li>
        </ul>
      </div>

            <div className={`${menuOpen ? 'mt-4 flex':'flex justify-between items-center space-x-4 mr-6'}`}>
              <Search className="size-7 mr-4" />
              <Person
                onClick={() => navigate("profile")}
                className="size-7 mr-6 cursor-pointer hover:text-primary"
              />
              <button className=" hidden md:flex items-center bg-primary px-5 py-4 rounded-xl active:scale-95 hover:bg-gradient-to-r hover:from-[#1ab69d] hover:to-[#31b978] duration-300">
                Try for free <Arrow className="ml-1 size-5 mr-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
