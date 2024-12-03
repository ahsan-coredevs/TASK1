import { Checkbox } from "../shared/svgComponents";
import GoogleLogo from "../../../src/assets/counterup/google.png";
import Twitter from "../../../src/assets/counterup/twitter.png";
import KvantsProfile from "./KvantsProfile";

const KvantsHome = () => {
  return (
    <div className="w-full h-full bg-bg text-subText flex flex-col justify-center items-center relative p-4">
      <div className="right-4 top-2 absolute">
        <p>
          Don&apos;t have an account? <span className="text-[#5428A7] font-bold">Sign Up</span>
        </p>
      </div>
      <div className="w-[30%] flex flex-col items-center mt-32">
        <h1 className="text-3xl font-bold text-slate-100 py-2">
          Sign up to kvants
        </h1>
        <div className="w-full text-center">
          <p>
            Ready to jump in? Then enter your email to never lose access to your
            Kvants account.
          </p>
        </div>
        <div className="flex h-10 items-center bg-[#1F1F28] text-white w-full rounded-3xl mt-4 justify-center cursor-pointer">
          <img className="h-10 w-10" src={GoogleLogo} alt="" />
          <p>Sign up with Google</p>
        </div>
        <div className="flex h-10 items-center bg-[#1F1F28] text-white w-full rounded-3xl mt-4 justify-center cursor-pointer">
          <img className="h-10 w-10 p-2" src={Twitter} alt="" />
          <p>Sign up with X(Twitter)</p>
        </div>
        <div className="w-full flex items-center space-x-2 mt-4">
          <div className="flex-1 border-t border-slate-600"></div>
          <p className="text-center">or</p>
          <div className="flex-1 border-t border-slate-600"></div>
        </div>
        <div className="flex flex-col items-start w-full gap-4">
          <label htmlFor="Email">Email*</label>
          <input className="p-2 w-full rounded-3xl" type="text" placeholder="Please enter your email" />
          <button className="p-2 w-full bg-[#5224E2] text-white rounded-3xl" >Continue</button>
        </div>
        <div className="flex items-center p-2 justify-start gap-2 w-full">
          <Checkbox /> <p>Accept Terms & Privacy Policy</p>
        </div>
      </div>
      <KvantsProfile/>
    </div>
  );
};

export default KvantsHome;
