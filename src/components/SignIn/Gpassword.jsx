import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/apiCaller";
import { toast } from "react-toastify";

function Gpassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
    
      const response = await api.get(`/user/send-otp?email=${data.email}`);

      if (response.data && response.data.message) {
        toast.success(response.data.message || "Email is Matched");
      } else {
        toast.error(response.data.message || "Something went wrong...");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to verify the email");
    }

   
    // navigate('/verify_by_code');
  }

  return (
    <div className="h-[300px] w-full flex justify-center items-center bg-dark">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40%] flex flex-col justify-center items-center bg-grayDark text-white p-4 rounded-md"
      >
        <label className="w-full" htmlFor="#">
          Type Your Account Email:
        </label>
        <input
          {...register("email", { required: true })}
          className={`w-full bg-dark p-2 rounded-md my-2 ${
            errors.email ? "border border-red-600" : ""
          }`}
          type="email"
          placeholder="Email For Verification..."
        />
        <Button buttonClass={"py-2 mt-4"} buttonName={"Send Code"} />
      </form>
    </div>
  );
}

export default Gpassword;
