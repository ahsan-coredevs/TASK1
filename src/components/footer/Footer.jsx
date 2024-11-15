import Button from "../Button/Button";
import logo from "../../assets/icons/logo-white.png";

function Footer() {
  return (
    <div className="w-full h-full flex items-center justify-center pb-[100px] bg-gray-700">
      <div className="bg-gray-700 w-full flex flex-col md:flex-row pt-14 text-slate-300 px-8 pb-12 ">
        <div className="flex flex-col md:w-[30%]">
          <div className="border-r border-gray-500/30 p-2">
            <img src={logo} alt="Logo" className="cursor-pointer" />
          </div>
          <p className="text-2lg font-bold mb-1 w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
            cumque a? Architecto libero expedita dignissimos laborum dolor,
            voluptatum quas odit.
          </p>
          <p className="pt-1 text-lg">Add:70-80 Upper St Norwich NR2</p>
          <p className="pt-1 text-lg">Call:+01 123 5641 231</p>
          <p className="pt-1 text-lg">Email:info@edublink.com</p>
        </div>
        <div className="flex justify-start items-center gap-20 mt-8">
          <div className="flex flex-col md:w-[20%]">
            <h1 className="text-2lg font-bold mb-4">Online Platform</h1>
            <a
              className="text-lg hover:text-primary duration-150 hover:scale-105"
              href="#about"
            >
              About
            </a>
            <a
              className="text-lg  hover:text-primary duration-150 hover:scale-105"
              href="#courses"
            >
              Courses
            </a>
            <a
              className="text-lg  hover:text-primary duration-150 hover:scale-105"
              href="#instructor"
            >
              Instructor
            </a>
            <a
              className="text-lg  hover:text-primary duration-150 hover:scale-105"
              href="#events"
            >
              Events
            </a>
            <a
              className="text-lg  hover:text-primary duration-150 hover:scale-105"
              href="#profile"
            >
              Instructor Profile
            </a>
            <a
              className="text-lg  hover:text-primary duration-150 hover:scale-105"
              href="#guide"
            >
              Pruchase Guide
            </a>
          </div>
          <div className="flex flex-col md:w-[20%]">
            <h1 className="text-2lg font-bold mb-4">Online Platform</h1>
            <a
              className="text-lg  hover:text-primary duration-150 hover:scale-105"
              href="#about"
            >
              About
            </a>
            <a
              className="text-lg hover:text-primary duration-150 hover:scale-105"
              href="#courses"
            >
              Courses
            </a>
            <a
              className="text-lg hover:text-primary duration-150 hover:scale-105"
              href="#instructor"
            >
              Instructor
            </a>
            <a
              className="text-lg hover:text-primary duration-150 hover:scale-105"
              href="#events"
            >
              Events
            </a>
            <a
              className="text-lg hover:text-primary duration-150 hover:scale-105"
              href="#profile"
            >
              Instructor Profile
            </a>
            <a
              className="text-lg hover:text-primary duration-150 hover:scale-105"
              href="#guide"
            >
              Pruchase Guide
            </a>
          </div>
        </div>
        <div className="flex flex-col md:w-[30%]">
          <h1 className="text-2lg font-bold mb-4">Contacts</h1>
          <p className="text-lg pb-4">
            Enter your email address to register to our newsletter subscription
          </p>
          <div className="flex gap-4 flex-col">
            <input
              className="py-2 px-4 rounded-md bg-gray-600 border"
              placeholder="Your Email:"
              type=""
            />
            <Button buttonClass={"py-2"} buttonName={"Subcribe"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
