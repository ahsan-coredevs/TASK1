import {
  Arrow,
  Certificate,
  Laptop,
  Man,
  Members,
} from "../shared/svgComponents";

import hero from "../../assets/about/girl-1.webp";

import banner from "../../assets/resources/author-1.png";
import ball1 from "../../assets/about/shape-35.png";
import ball2 from "../../assets/about/shape-37.png";
import rectangle from "../../assets/about/h-1-shape-01.png";
import wave from "../../assets/about/shape-15.png";
import Categories from "../Categories/Categories";
import Learning from "../Learning/Learning";
import Instructors from "../Instructors/Instructors";
import Partners from "../Partners/Partners";
import News from "../News/News";
import HomeBlog from "../blog/HomeBlog";
import { useNavigate } from "react-router-dom";
import HomeCources from "../popularCourses/HomeCources";

function Home() {
  const navigate = useNavigate();

  const handleMouseMove = (event) => {
    const movable_images = document.querySelectorAll(".mousemove");
    movable_images.forEach((item) => {
      item.style.transform = `translate(${
        (event.clientX * item.getAttribute("speed")) / 50
      }px, ${(event.clientY * item.getAttribute("speed")) / 80}px)`;
    });
  };
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full overflow-hidden" onMouseMove={handleMouseMove}>
          <div className="flex flex-col md:flex-row justify-between h-full w-full bg-dark relative ">
            <div className="flex flex-col items-left z-10 justify-center p-4 md:p-0 md:ml-[85px] text-slate-300 md:w-[50%]">
              <h1 className=" text-4xl md:text-[50px] font-bold mb-4">
                Get <span className="text-secondary">2500+</span> <br /> Best
                Online Courses <br /> from Edublink
              </h1>
              <p className="md:text-xl ">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit.
              </p>
              <div>
                <button
                  onClick={() => navigate("/courses")}
                  className="flex md:w-[170px] text-base mt-3 bg-primary px-4 py-4 rounded-lg justify-center "
                >
                  Find courses <Arrow className="ml-2 mt-2 text-sm" />
                </button>
              </div>
            </div>
            <div className="relative z-20">
              <img className="h-[591px] md:mt-[50px]" src={hero} alt="" />
              <div className="absolute flex flex-col justify-center items-left pl-[20px] ml-4 bg-white rounded-lg w-[300px] md:h-[120px] z-10 top-[450px] md:left-[-110px]">
                <h5 className="text-lg font-bold">Instructor</h5>
                <div className="flex w-full">
                  <img className="" src={banner} alt="" />
                  <p className="font-bold text-base">
                    {" "}
                    <span className="text-secondary ">200+</span> <br />{" "}
                    Instactors
                  </p>
                </div>
              </div>
            </div>

            <img
              speed={-2}
              className="hidden md:block  top-[100px] left-[50px] absolute z-0 transition-all duration-200 mousemove ease-linear"
              src={ball1}
              alt=""
            />
            <img
              speed={2}
              className="hidden md:block  top-[130px] right-[300px] absolute z-0 transition-all duration-200 mousemove  ease-linear"
              src={ball2}
              alt=""
            />
            <img
              speed={-2}
              className="hidden md:block  bottom-[100px] right-[0px] absolute z-0 transition-all duration-200 mousemove  ease-linear"
              src={ball1}
              alt=""
            />
            <img
              speed={2}
              className="hidden md:block  top-[100px] right-[0px] absolute z-0 transition-all duration-200 mousemove  ease-linear"
              src={rectangle}
              alt=""
            />
            {/* <img src={round} alt="" />  */}
            <img
              className=" top-[80px] md:top-[80px] md:right-[500px] absolute animate-move transition-all duration-200 "
              src={wave}
              alt=""
            />
          </div>

          <div className="md:h-[150px] w-full grid grid-cols-2 md:grid-cols-4 bg-primary text-slate-300 justify-around items-center">
            <div className="flex items-center justify-center h-[100%] border-r border-b py-2 border-gray-200/30">
              <div className="bg-white p-4 rounded-full mr-3 bg-opacity-10">
                <Laptop className="h-10 w-10 " />
              </div>
              <p className="font-bold">
                3020 <br /> Online Courses
              </p>
            </div>
            <div className="flex items-center justify-center h-[100%]  border-r  border-b  py-2  border-gray-200/30">
              <div className="bg-white p-4 rounded-full mr-3 bg-opacity-10">
                <Man className="h-10 w-10 " />
              </div>
              <p className="font-bold">
                Top <br /> Instructors
              </p>
            </div>
            <div className="flex items-center justify-center h-[100%]  py-2   border-r  border-gray-200/30">
              <div className="bg-white p-4 rounded-full mr-3 bg-opacity-10">
                <Certificate className="h-10 w-10 " />
              </div>
              <p className="font-bold">
                Online <br /> Certificates
              </p>
            </div>
            <div className="flex items-center justify-center h-[100%] ">
              <div className="bg-white p-4 rounded-full mr-3 bg-opacity-10">
                <Members className="h-10 w-10 " />
              </div>
              <p className="font-bold">
                6000 <br /> Members
              </p>
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <Learning />
      {/* <Courses /> */}
      <HomeCources />
      <HomeBlog />
      <Instructors />
      <Partners />
      <News />
    </div>
  );
}

export default Home;
