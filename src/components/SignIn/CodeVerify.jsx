import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { api } from "../../utils/apiCaller";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function CodeVerify() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();

  // Function to handle input change and auto focus to the next input
  const handleInputChange = (event, nextInput) => {
    const { value } = event.target;
    if (value.length >= 1) {
      event.target.value = value.charAt(0); // Ensure only one digit is kept
      if (nextInput) {
        setFocus(nextInput); // Move focus to the next input
      }
    }
  };

  async function onSubmit(data) {
    const combinedCode = `${data.firstNumber}${data.secondNumber}${data.thirdNumber}${data.fourthNumber}`;
    const codeAsNumber = Number(combinedCode);
    const verifyToken = sessionStorage.getItem("Fun");

    try {
      const res = await api.post(`/user/verifyotp?otp=${codeAsNumber}&token=${verifyToken}`);
      if (res.data) {
        toast.success(res.data.message);
        navigate('/generate_new_Password')
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to verify");
    }
  }

  return (
    <div className="h-[450px] bg-dark flex justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-8 rounded-md">
        <h1 className="text-xl font-bold -ml-10">Type Your 4 Digit Code</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex justify-center items-center bg-gray-900 gap-4 py-8"
        >
          <input
            className="w-12 h-10 bg-dark text-white font-bold text-xl text-center no-arrows rounded"
            type="number"
            {...register("firstNumber", { required: true })}
            onInput={(e) => handleInputChange(e, "secondNumber")}
          />

          <input
            className="w-12 h-10 bg-dark text-white font-bold text-xl text-center no-arrows rounded"
            type="number"
            {...register("secondNumber", { required: true })}
            onInput={(e) => handleInputChange(e, "thirdNumber")}
          />

          <input
            className="w-12 h-10 bg-dark text-white font-bold text-xl text-center no-arrows rounded"
            type="number"
            {...register("thirdNumber", { required: true })}
            onInput={(e) => handleInputChange(e, "fourthNumber")}
          />

          <input
            className="w-12 h-10 bg-dark text-white font-bold text-xl text-center no-arrows rounded"
            type="number"
            {...register("fourthNumber", { required: true })}
            onInput={(e) => handleInputChange(e, null)}
          />

          <Button buttonClass={"py-[6px] gap-1"} buttonName={"Verify"} />
        </form>
      </div>
    </div>
  );
}

export default CodeVerify;
