import  { useState } from "react";
import Input from "../SignIn/Input";
import Button from "../Button/Button";
import { Checkbox, Checkboxok } from "../shared/svgComponents";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../utils/apiCaller";

function SignUp() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  
  const password = watch("password");

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };


  async function onSubmit(data) {
    delete data.confirmPassword;
    const formData = {
      ...data,

    };
    if (!isChecked) {
      toast.error("Please accept the terms and conditions.");
      return;
    }
      
       const response = await api.post('/user', formData);
       console.log(response)
       if (response.success) {
         toast.success("Account created successfully");
         navigate('/signin');
        } else {
          console.log(response?.data?.message);
         toast.error(response?.data?.message)
        }
      
  }

  return (
    <div className="w-screen h-auto bg-dark text-white flex justify-center">
      <form className="m-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[450px] flex flex-col justify-center items-left bg-grayDark p-8 rounded-lg">
          <h1 className="text-xl font-bold pt-8">Registration</h1>
          <p>
            Already have an account?{" "}
            <Link to="/SignIn">
              <span className="text-primary text-lg hover:text-secondary duration-300 cursor-pointer">
                Sign In
              </span>
            </Link>{" "}
          </p>
          <Input
            labelClass="py-2"
            InputClass="w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            labelName="Name*"
            placeholder="Type Your Name..."
            register={() => register("name", { required: "Name is required..." })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <Input
            labelClass="py-2"
            InputClass="w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            labelName="Email*"
            placeholder="Type Your Email..."
            register={() =>
              register("email", {
                required: "Email is required...",
               
              })
            }
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
         
          <br />
          <Input
            labelClass="py-2"
            InputClass="w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            labelName="Password*"
            placeholder="Type Your Password..."
            register={() => register("password", { required: "Password is required..." })}
            id="password"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
          <Input
            labelClass="py-2"
            InputClass="w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            labelName="Confirm Password*"
            placeholder="Retype Your Password..."
            id="confirmpassword"
            register={() =>
              register("confirmPassword", {
                required: "Required same as password...",
                validate: (value) =>
                  value === password || "Passwords do not match. Check again....",
              })
            }
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message}</span>
          )}

          <div className="flex flex-col items-start text-base pt-4">
            <p className="flex items-center gap-2">
              <button type="button" onClick={toggleCheckbox}>
                {isChecked ? <Checkboxok /> : <Checkbox />}
              </button>{" "}
              <p className="flex flex-col">
                {" "}
                I agree to the User Agreement and{" "}
              </p>
            </p>{" "}
            <p className="hover:cursor-pointer hover:text-primary duration-300 text-base font-bold">
              {" "}
              Terms & Conditions.{" "}
            </p>{" "}
          </div>
          <Button
            type="submit"
            buttonClass="w-full py-2 my-4 gap-4"
            buttonName="Create Account"
          />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
