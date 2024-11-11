import { useForm } from "react-hook-form";
import Button from "../Button/Button";


  
  function CodeVerify() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
      <div className="h-[400px] bg-dark flex justify-center items-center">
        <div className=" flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-8 rounded-md">
          <h1 className="text-xl font-bold -ml-10">Type Your 4 Digit Code</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex justify-center items-center bg-gray-900 gap-4 py-8" action="">
            <input className="w-12 h-10 bg-dark text-white font-bold text-xl text-center no-arrows rounded" type="number" 
                {...register("firstNumber",{ required: true, maxLength: 1 })}
            />

            <input className="w-12 h-10 bg-dark text-white font-bold text-xl text-center no-arrows rounded"  
                {...register("secondNumber",{ required: true, maxLength: 1 })}

            />

            <input className="w-12 h-10 bg-dark text-white font-bold text-xl text-center no-arrows rounded"  
                {...register("thirdNumber",{ required: true, maxLength: 1 })}

            />

            <input className="w-12 h-10 bg-dark text-white font-bold text-xl text-center no-arrows rounded"  
                {...register("fourthNumber",{ required: true, maxLength: 1 })}

            />

            <Button buttonClass={'py-[6px] gap-1'} buttonName={'Verify'} />
          </form>
        </div>
      </div>
    );
  }
  
  export default CodeVerify;
  