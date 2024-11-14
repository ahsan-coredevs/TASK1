import { useState } from "react";
import {
  Book,
  Certificate,
  Checkright,
  Clock,
  Facebook,
  Language,
  LinkedinIcon,
  Minus,
  Money,
  Plus,
  Teacher,
  Twitter,
  Youtubebtn,
} from "../../components/shared/svgComponents";
import Button from "../../components/Button/Button";
import Youtube from "../../components/Learning/Youtube";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../utils/apiCaller";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


function ViewCourse() {
  const {
    state: { courseData },
  } = useLocation();
  const [expended, setExpended] = useState();
  const [payment, setPayment] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Bkash");
  const user = useSelector(state=>state.user.user)

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {

    if (!user) {
      return navigate("/SignIn", { state: { from: window.location.pathname } });
    }
    const formData = {
      ...data,
      paymentMethod: selectedPaymentMethod,
      course: courseData._id,
      user: user._id
    
    };

    const response = await api.post("/order", formData);
    console.log(response);
    if (response.success) {
      toast.success("Order has been successfully completed.");
      navigate("/Courses");
    } else {
      console.log(response?.data?.message);
      toast.error(response?.data?.message);
    }
  }

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const paymentBtn = () => {
    setPayment(true);
  };

  const handleBtn = () => {
    setExpended(!expended);
  };

  console.log("ViewCourse Information : ", courseData);
  return (
    <div className="bg-dark text-slate-300">
      <div className="p-20">
        <h1 className="text-5xl font-bold pb-4">{courseData.title}</h1>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <Teacher className="text-primary" />{" "}
            <p className=" cursor-pointer hover:text-primary duration-300 ">
              Ahsan Kabir
            </p>
          </div>
          <p>|</p>
          <div className="flex gap-2 items-center">
            <Language className="text-primary" /> <p>English</p>
          </div>
        </div>
      </div>
      <div className="bg-grayDark text-slate-300 p-20">
        <div className="flex w-full relative">
          <div className="w-[60%]">
            <h4 className="text-2xl font-bold pb-8">About This Course</h4>
            <p className="pr-4 text-slate-300">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore blanditiis laboriosam officia possimus, nesciunt
              laborum, ab doloribus, ducimus modi quidem ipsa similique! Ipsa
              culpa illo iste, saepe fugit quisquam in impedit numquam, labore
              alias distinctio veritatis deserunt aperiam, odit eos voluptatem.
              Officiis ex ratione repellendus, architecto eum dignissimos
              corporis! Minus error molestias corporis enim provident recusandae
              nam quis aspernatur expedita? Vero odio culpa numquam aliquid
              necessitatibus sunt sapiente adipisci ad ipsum enim provident
              quod, voluptatum odit doloribus distinctio ea labore tenetur.
              Explicabo facilis magni reprehenderit, veniam ipsa iusto
              praesentium omnis magnam vel odio libero animi recusandae placeat.
              Adipisci rerum nulla, explicabo totam autem mollitia enim deserunt
              in error dolores accusamus est tenetur quos architecto veniam
              veritatis vitae animi quibusdam provident aspernatur. <br /> Ullam
              tenetur eum eos? Deserunt autem repudiandae architecto amet nisi
              maxime quam ipsam officiis asperiores dicta, eius necessitatibus
              ad consequatur obcaecati facilis id maiores minima consectetur
              enim deleniti voluptatem! Deserunt excepturi alias porro, rerum,
              molestiae at placeat similique unde voluptatum nihil omnis fugit!
              Esse labore officia tempore! Assumenda tempore officia sint dicta
              cumque voluptatem reprehenderit eligendi atque aspernatur in esse,
              repellat possimus iure nulla doloribus provident quas minus
              dignissimos voluptas excepturi. Ducimus atque cumque, natus harum
              temporibus reprehenderit iusto! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi commodi provident nostrum.
              Voluptates consequuntur illo ducimus dolor modi esse facere,
              consequatur quasi consectetur, libero iure magnam. Blanditiis unde
              molestiae ipsa quo, doloremque, repellat tenetur, dicta suscipit
              debitis veritatis ipsum. Unde, ab? Eligendi cum, praesentium ex
              quos quasi repellendus numquam! Aliquam nihil atque culpa
              veritatis beatae ad obcaecati similique laudantium quaerat
              excepturi voluptatibus qui sint adipisci fugit ea a iure sequi
              voluptatum eveniet delectus itaque dicta, exercitationem quam
              dolores! Nemo ab quidem quos sit vel natus labore. Natus, saepe
              voluptates voluptatum reprehenderit doloribus numquam cum
              quisquam, ab, asperiores architecto optio id.{" "}
            </p>
            <div className="p-8 border border-stone-400/20 w-full my-4">
              <h5 className="text-xl font-bold w-full ">
                What You will Learn?
              </h5>
              <div className=" grid grid-cols-2 w-full text-slate-300">
                <div className="flex gap-2 items-start py-2 w-[90%]  ">
                  <Checkright className="mt-1 text-xl  text-primary" />
                  <p>
                    Learn to use Python professionally, learning both Python 2 &
                    Python 3!
                  </p>
                </div>

                <div className="flex gap-2 items-start py-2 w-[90%]  ">
                  <Checkright className="mt-1 text-xl  text-primary" />
                  <p>
                    Build 6 beautiful real-world projects for your portfolio
                    (not boring toy apps)
                  </p>
                </div>

                <div className="flex gap-2 items-start py-2 w-[90%]  ">
                  <Checkright className="mt-1 text-xl  text-primary" />
                  <p>
                    Understand the Theory behind Vue.js and use it in Real
                    Projects
                  </p>
                </div>

                <div className="flex gap-2 items-start py-2 w-[90%]  ">
                  <Checkright className="mt-1 text-lg  text-primary" />
                  <p>Create responsive, accessible, and beautiful layouts</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-2xl font-bold mt-10 pb-4">Requirements</h2>
              <div className="w-full text-slate-300 pb-8">
                <div className="flex gap-4 py-2">
                  <Checkright className="mt-1 text-xl  text-primary" />
                  <p>
                    No prior knowledge of Wordpress is required as everything
                    will be covered in this course.
                  </p>
                </div>
                <div className="flex gap-4  py-2">
                  <Checkright className="mt-1 text-xl  text-primary" />
                  <p>
                    Basic HTML and CSS knowledge helps, but is not a must-have
                  </p>
                </div>
                <div className="flex gap-4  py-2">
                  <Checkright className="mt-1 text-xl  text-primary" />
                  <p>
                    You do not need any coding experience at all. That is the
                    beauty of Wordpress.
                  </p>
                </div>
                <div className="flex gap-4  py-2">
                  <Checkright className="mt-1 text-xl  text-primary" />
                  <p>Basic JavaScript knowledge is required</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="font-bold text-2xl pb-4">Course Outline</h2>
              <p className="text-lg text-slate-300 py-4">
                Explore the key topics and essential Knowledge areas that form
                the foundation of this course. Gain insights into the core
                concepts and skills you will master throughtout the program.
              </p>

              <div className="w-full">
                <div
                  onClick={handleBtn}
                  className="w-full flex justify-between p-4 border border-stone-400/20 cursor-pointer"
                >
                  <h1>Course Layout</h1>
                  <div>{!expended ? <Plus /> : <Minus />}</div>
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    expended ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="w-full flex gap-4 items-center p-4 border border-stone-400/20">
                    <Book />
                    <p>Introduction</p>
                  </div>
                  <div className="w-full flex gap-4 items-center p-4 border border-stone-400/20">
                    <Book />
                    <p>Course Overview</p>
                  </div>
                  <div className="w-full flex gap-4 items-center p-4 border border-stone-400/20">
                    <Book />
                    <p>Local Development Environment Tools</p>
                  </div>
                  <div className="w-full flex gap-4 items-center p-4 border border-stone-400/20">
                    <Book />
                    <p>Course Exercise / Reference Files</p>
                  </div>
                  <div className="w-full flex gap-4 items-center p-4 border border-stone-400/20">
                    <Book />
                    <p>Code Editor Installation</p>
                  </div>
                  <div className="w-full flex gap-4 items-center p-4 border border-stone-400/20">
                    <Book />
                    <p>Embedding PHP in HTML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%] p-4 ml-10">
            <div className="w-full bg-slate-500/30 p-10 rounded-md">
              <Youtube videoId="E8lXC2mR6-k" />
              <h2 className="text-2xl font-bold pt-6">Course Includes: </h2>

              <div className="flex justify-between text-lg font-bold py-4 border-b border-stone-500/50">
                <p className="flex items-center gap-4">
                  <Money /> Price :
                </p>
                <span>{courseData.price}</span>
              </div>
              <div className="flex justify-between text-lg font-bold py-4 border-b border-stone-500/50">
                <p className="flex items-center gap-4">
                  <Teacher /> Instructor :
                </p>
                <span>Ahsan Kabir</span>
              </div>
              <div className="flex justify-between text-lg font-bold py-4 border-b border-stone-500/50">
                <p className="flex items-center gap-4">
                  <Clock /> Duration :
                </p>
                <span>6 Months</span>
              </div>
              <div className="flex justify-between text-lg font-bold py-4 border-b border-stone-500/50">
                <p className="flex items-center gap-4">
                  <Language /> Language :
                </p>
                <span>English</span>
              </div>
              <div className="flex justify-between text-lg font-bold py-4 border-b border-stone-500/50">
                <p className="flex items-center gap-4">
                  <Certificate /> Certificate :
                </p>
                <span>Yes</span>
              </div>
              <div>
                <Button
                  onClick={() => paymentBtn()}
                  buttonClass={"my-4 py-2 w-full"}
                  buttonName={"Start Now"}
                />

                <h3 className="text-2xl font-bold mb-8">Share On</h3>
                <div className="text-white flex justify-around items-center">
                  <Facebook className="border border-stone-300/50 h-10 w-10 p-2 rounded-full" />
                  <Twitter className="border border-stone-300/50 h-10 w-10 p-2 rounded-full" />
                  <div className="h-10 w-10 p-2 rounded-full border border-stone-300/50 flex items-center justify-center">
                    <LinkedinIcon />{" "}
                  </div>
                  <Youtubebtn className="border border-stone-300/50 h-10 w-10 p-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {payment && (
            <div className="top-[100px] left-0 right-0 bottom-0 flex justify-center items-center bg-dark fixed opacity-[99%]">
              <form onSubmit={handleSubmit(onSubmit)}
                className=" w-[50%] absolute bg-gray-800 p-8 rounded-md "
                action=""
              >
                <label
                  htmlFor="payment-method"
                  className="block text-lg font-medium text-slate-100"
                >
                  Select Payment Method
                </label>
                <select 
                  id="paymentMethod"
                  value={selectedPaymentMethod}
                  onChange={handlePaymentMethodChange}
                  className=" w-full mt-1 p-2 bg-dark border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                >
                  <option value="Bkash">Bkash</option>
                  <option value="Nogod">Nogod</option>
                  <option value="Rocket">Rocket</option>
                </select>

                <p className="mt-2">
                  Selected Payment Method: {selectedPaymentMethod}
                </p>

                <div className="w-full flex flex-col gap-4 py-4">
                   <label htmlFor="">Phone NO:</label>
                  <input 
                    {...register("phoneNo", { required: true, maxLength: 15 })}
                    className={`py-4 px-2 rounded-md bg-dark ${errors.phoneNo ? "border border-red-500" : "border-none"}`}
                    placeholder="Type Your Phone Number"
                    type="text"
                  /> 
                </div>

                <div className="w-full flex-col flex gap-4 py-4">
                  <label htmlFor="">Tnx ID</label>
                  <input
                    {...register("taxID", { required: true, maxLength: 20 })}
                    placeholder="Type your Transection ID"
                    className={`py-4 px-2 rounded-md bg-dark
                        ${errors.taxID ? "border border-red-500" : "border-none"}
                        `}
                    type="text"
                  />
                </div>
                <Button 
                  type='submit'
                  buttonClass={"py-2 w-full gap-2"}
                  buttonName={"SUBMIT"}
                />
              </form>

              <p
                className="text-3xl absolute right-4 top-8 scale-110 text-green-700 font-bold hover:text-red-700 cursor-pointer"
                onClick={() => setPayment((prev) => !prev)}
              >
                X
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewCourse;
