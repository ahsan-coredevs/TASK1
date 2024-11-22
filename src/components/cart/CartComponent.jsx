import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Delete } from "../shared/svgComponents";
import { deleteFromCart } from "../../utils/FileManagement";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../utils/apiCaller";
import { useSelector } from "react-redux";

function CartComponent() {
    const [dataList, setDataList] = useState([]);
    const [total, setTotal] = useState(0);
    const [viewModal, setViewModel] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Bkash");
    const user = useSelector((state) => state.user.user);


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
          course: course._id,
          user: user._id,
        };
        const response = await api.post("/order", formData);
        console.log(response);
        if (response.success) {
          toast.success("Order has been successfully completed.");
          navigate("/courses");
        } else {
          console.log(response?.data?.message);
          toast.error(response?.data?.message);
        }
      }

    const retrieveData = () => {
        const cartList = localStorage.getItem("cartlist");
        if (cartList) {
            const parsedCart = JSON.parse(cartList);
            setDataList(parsedCart);
        }
    };

    const calculateTotal = (cartItems) => {
        const totalSum = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
        setTotal(totalSum);
    };

    const handleDelete = (id) => {
        deleteFromCart(id);
        retrieveData(); 
    };
    const handlePaymentMethodChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
      };

    const handleModal = () => {
        setViewModel(true);
    }

    useEffect(() => {
        retrieveData();
    }, []);

    useEffect(() => {
        calculateTotal(dataList);
    }, [dataList]);
    

    return (
        <div className="w-full h-auto bg-dark text-slate-300 flex flex-col items-center justify-center p-8 relative">
            <div className="w-[50%]">
                <h1 className="text-center text-2xl font-bold">Your Cart ({dataList.length} Items)</h1>
                <table className="w-full bg-grayDark rounded-md overflow-hidden mt-4">
                    <thead className="bg-primary/70">
                        <tr>
                            <th className="text-left pl-4 text-xl py-2">Item</th>
                            <th className="text-right pr-8">Price</th>
                            <th className="text-right pr-4">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList.length > 0 ? (
                            dataList.map((cart, index) => (
                                <tr key={index}>
                                    <td className="flex gap-4 m-4">
                                        <div className="h-20 w-20 rounded-md overflow-hidden">
                                            <img
                                                className="w-full h-full"
                                                src={cart.imageUrl}
                                                alt={cart.title || "Cart Item"}
                                            />
                                        </div>
                                        <div>
                                            <h1 className="text-lg">{cart.title}</h1>
                                            <p>{cart.label}</p>
                                            
                                        </div>
                                    </td>
                                    <td className="text-right pr-8">${cart.price}</td>
                                    <td className="text-right pr-8"> 
                                        <button className="cursor-pointer hover:text-primary duration-200" onClick={() => handleDelete(cart._id)}>
                                                <Delete className="text-xl " />
                                            </button> </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="text-center py-4">
                                    No Cart Data Available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className={`${dataList.length > 0 ? "w-full flex justify-end mt-4" : "hidden"}`}>
                    <div className="w-[50%] bg-grayDark rounded-md p-4">
                        <div>
                            <p className="flex justify-between py-2 border-b border-slate-300 border-opacity-30">
                                <span className="text-lg">Coupon:</span>
                                <a href="#">Add Coupon</a>
                            </p>
                            <p className="flex justify-between py-2">
                                <span className="text-lg">Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </p>
                        </div>

                        <div onClick={() => handleModal()}  className="w-full flex justify-end mt-1 cursor-pointer">
                            <Button
                                buttonClass="gap-2 w-full py-2"
                                buttonName="Check Out"
                            />
                        </div>
                    </div>
                </div>
            </div>

                        
        
            {viewModal && (
            <div className="top-[100px] left-0 right-0 bottom-0 flex justify-center items-center bg-dark fixed opacity-[99%]">
              <form
                onSubmit={handleSubmit(onSubmit)}
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
                  Selected Payment Method: 
                </p>

                <div className="w-full flex flex-col gap-4 py-4">
                  <label htmlFor="">Phone NO:</label>
                  <input
                    {...register("phoneNo", { required: true, maxLength: 15 })}
                    className={`py-4 px-2 rounded-md bg-dark ${
                      errors.phoneNo ? "border border-red-500" : "border-none"
                    }`}
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
                        ${
                          errors.taxID ? "border border-red-500" : "border-none"
                        }
                        `}
                    type="text"
                  />
                </div>
                <Button
                  type="submit"
                  buttonClass={"py-2 w-full gap-2"}
                  buttonName={"SUBMIT"}
                />
              </form>

              <p
                className="text-3xl absolute right-4 top-8 scale-110 text-green-700 font-bold hover:text-red-700 cursor-pointer"
                onClick={() => setViewModel((prev) => !prev)}
              >
              </p>
            </div>
          )}
        </div>
    );
}

export default CartComponent;
