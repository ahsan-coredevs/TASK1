import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { api } from "../../utils/apiCaller";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function CodeVerify() {
  const navigate = useNavigate();
  const { otp, token } = useParams(); 
  const {
    register,
    handleSubmit,
    setFocus,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
  
    setFocus("firstNumber");


    if (otp && otp.length === 4 && !isNaN(otp)) {
      setValue("firstNumber", otp.charAt(0));
      setValue("secondNumber", otp.charAt(1));
      setValue("thirdNumber", otp.charAt(2));
      setValue("fourthNumber", otp.charAt(3));
      setFocus("fourthNumber"); 
    }
  }, [otp, setFocus, setValue]);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("Fun", token);
    }
  }, [token]);

  const handleInputChange = (event, nextInput) => {
    const { value } = event.target;
    if (value.length >= 1) {
      event.target.value = value.charAt(0);
      if (nextInput) {
        setFocus(nextInput); 
      }
    }
  };

 
  const handlePaste = (event) => {
    const pasteData = event.clipboardData.getData("text").trim();
    if (pasteData.length === 4 && !isNaN(pasteData)) {
      setValue("firstNumber", pasteData.charAt(0));
      setValue("secondNumber", pasteData.charAt(1));
      setValue("thirdNumber", pasteData.charAt(2));
      setValue("fourthNumber", pasteData.charAt(3));
      setFocus("fourthNumber"); 
    }
  };

  async function onSubmit(data) {
    const combinedCode = `${data.firstNumber}${data.secondNumber}${data.thirdNumber}${data.fourthNumber}`;
    const codeAsNumber = Number(combinedCode);
    const verifyToken = sessionStorage.getItem("Fun");

    try {
      const res = await api.post(`/user/verifyotp?otp=${codeAsNumber}&token=${verifyToken}`);
      console.log("data :",res);
      if (res.success) {
        toast.success(res.data.message);
        navigate('/generate_new_Password');
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
            onPaste={handlePaste}
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
