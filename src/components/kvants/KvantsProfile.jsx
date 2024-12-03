import googleLogo from "../../assets/counterup/google.png";
import twitter from "../../assets/counterup/twitter.png";
import bgImage from "../../assets/counterup/ddc6bc20925109c52514dfcf0e7f53e8.jpg";
import {
  Laptop,
  Person,
  ThreeDot,
  Twitter,
} from "../../components/shared/svgComponents";

const KvantsProfile = () => {
  return (
    <div className="w-full bg-bg grid grid-cols-[20%_80%] mt-20">
      <div className="border-r border-b p-4">Kvants</div>
      <div className="border-b p-4">profile</div>
      <div className="w-full border-r p-4">
        <div className="bg-[#13131B] w-full flex items-center justify-between rounded-xl p-2 relative mb-14">
          <div className="rounded-3xl flex items-center">
            <img className="h-[60px]" src={googleLogo} alt="" />
            <div>
              <h1>Ralph Edwards</h1>
              <p className="text-xs">
                @ralphe_65 <span>Free</span>
              </p>
            </div>
          </div>
          <div className="absolute -right-[90px] p-2 cursor-pointer">
            <ThreeDot className="h-6" />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-b pb-10">
          <p>TRADING</p>
          <div className="w-full flex gap-4 bg-gradient-to-r from-secondary2 to-primary2 mt-4 p-2 rounded-xl items-center ">
            <img className="h-8" src={twitter} alt="" />
            <p className="text-xl">Protfolio</p>
          </div>
          <div className="w-full flex gap-4 bg-gradient-to-r from-secondary2 to-primary2 mt-4 p-2 rounded-xl items-center ">
            <img className="h-8" src={twitter} alt="" />
            <p className="text-xl">Strategies Market</p>
          </div>
          <div className="w-full flex gap-4 bg-gradient-to-r from-secondary2 to-primary2 mt-4 p-2 rounded-xl items-center ">
            <img className="h-8" src={twitter} alt="" />
            <p className="text-xl">Exchange Account</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Account</h1>
          <div className="w-full flex gap-4 items-center ">
            <Twitter />
            <p className="text-lg">Plan</p>
          </div>
          <div className="w-full flex gap-4 items-center ">
            <Person />
            <p className="text-lg">Profile</p>
          </div>
        </div>

        {/* Apply background image dynamically */}
        <div className="w-full relative">
          {/* Background Image Overlay */}
          <div
            className="w-full h-full top-0 absolute rounded-xl z-10"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center", // Optional: centers the image
            }}
          ></div>

          {/* Button */}
          <button className="flex items-center justify-start gap-4  mt-8 rounded-xl w-full z-20 relative text-white">
           <div className="flex items-center justify-start gap-4 p-1 w-full h-full rounded-xl bg-opacity-80 pl-4 backdrop-blur-[8px] ">
           <Laptop className="w-8 h-8 drop-shadow" />
            <div className="flex flex-col items-start drop-shadow">
              <h1 className="text-xl ">Active Pro</h1>
              <p className="text-xs">Unlock all features with Pro</p>
            </div>
           </div>
          </button>
        </div>
      </div>
      <div>4</div>
    </div>
  );
};

export default KvantsProfile;
