
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { api } from '../../utils/apiCaller';

function GenerateNewPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const password = watch("password");
 
  async function onSubmit(data) {
    const token = sessionStorage.getItem("Fun");
    const password = data.password;
    const formData = {
      password,
      token,
    }

    try {
      const res = await api.patch(`/user/updatepassword`, formData);
      if (res.success) {
        toast.success(res.data.message);
        navigate('/SignIn')
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to Update Password");
    }
  };


  return (
        <div className='h-[450px] bg-grayDark flex items-center justify-center'>
        <div className='w-[50%] text-white flex flex-col p-6 bg-dark rounded-md'>
          <h1 className='text-xl font-bold'>Type Your New Password Below</h1>
          <form  onSubmit={handleSubmit(onSubmit)} action="#">
          <Input
              labelClass="py-2"
              InputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              labelName="Password*"
              placeholder="Type Your New Password..."
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
          <Button
            type="submit"
            buttonClass="w-full py-2 my-4 gap-4"
            buttonName="Submit"
          />
          </form>
        </div>
    </div>

  )
}

export default GenerateNewPassword