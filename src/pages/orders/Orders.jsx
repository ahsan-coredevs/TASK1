import { useEffect, useState } from "react";
import {
  Checkbox,
  Checkboxok,
  Data,
  LeftArrow,
  Person,
  RightArrow,
} from "../../components/shared/svgComponents";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../services/redux/reducers/orderSlice";
import { toast } from "react-toastify";
import { api } from "../../utils/apiCaller";

function Orders() {
  const [page, setPages] = useState(1);
  const [selectedOrderIds, setSelectedOrderIds] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.order.order);

 

  const handleCheckBox = (id) => {
    setSelectedOrderIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((OrderId) => OrderId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectedOrderIds([]);
    } else {
      setSelectedOrderIds(orderData.map((order) => order._id));
    }
    setIsSelectAll(!isSelectAll);
  };

  const retrieveData = async () => {

    try {
      const res = await api.get(`/order?limit=5&page=${page}`,);
      if (res.success) {
        dispatch(setOrder(res.data));
        setTotalPages(res.data.totalPages);
      } else {
        toast.error(res.data.message || "Something Went Wrong"); 
      }
    } catch (error) {
      toast.error("Failed to fetch orders List...")
    }
    
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/order/${JSON.stringify(id)}`);
      if (response.success) {
        toast.success(" successfully deleted");
        retrieveData();
      } else {
        throw new Error(response.data || "Failed to delete course");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      navigate("/admin/order");
    }
    retrieveData();
    setSelectedOrderIds([]); // Clear selection after deletion
    setIsSelectAll(false); // Reset "Select All" state
  };

  useEffect(() => {
    retrieveData();
  }, [page]);

 

  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      {/* Selected items count */}
      <div className="h-16 pb-4 text-white font-semibold relative pt-4 pl-6 mt-4">
        {selectedOrderIds.length > 0
          ? `${selectedOrderIds.length} ${
              selectedOrderIds.length > 1 ? "items" : "item"
            } selected`
          : ""}
        {selectedOrderIds.length > 0 && (
          <button
            onClick={() => handleDelete(selectedOrderIds)} // Button to delete selected items
            className="text-white bg-red-600 py-2 px-4 rounded-md ml-8 focus:scale-90 duration-100 font-[500] absolute top-0 mt-4"
          >
            {`${selectedOrderIds.length > 1 ? "Delete All" : "Delete"}`}
          </button>
        )}
      </div>

      <div className="">
        <table className="w-full text-white shadow-md overflow-hidden m-4">
          <thead className="m-4">
            <tr className="p-4 ">
              <th className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase rounded-tl-md">
                <button onClick={handleSelectAll}>
                  {isSelectAll ? <Checkboxok /> : <Checkbox />}
                </button>
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase ">
                Name
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase ">
                Course Name
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase ">
                Payment Method
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase ">
                Phone No
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase ">
                TnxID
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase ">
                Date
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase rounded-tr-md">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-grayDark">
            {orderData?.docs?.map((order) => (
              <tr
                className="text-center even:bg-slate-800/50 odd:bg-slate-900/50"
                key={order._id}
              >
                <td className="text-left py-3 px-6">
                  <button onClick={() => handleCheckBox(order._id)}>
                    {selectedOrderIds.includes(order._id) ? (
                      <Checkboxok />
                    ) : (
                      <Checkbox />
                    )}
                  </button>
                </td>
                <td className="text-left py-3 px-6">{order?.user?.name}</td>
                <td className="text-left py-3 px-6">{order?.course?.title}</td>
                <td className="text-left py-3 px-6">{order.paymentMethod}</td>
                <td className="text-left py-3 px-6">{order.phoneNo}</td>
                <td className="text-left py-3 px-6">{order.taxID}</td>
                <td className="text-left py-3 px-6">{order.paymentDate}</td>
                <td className="text-start py-3 px-6 flex gap-2">
                  <button
                    onClick={() => navigate("order_details")}
                    className="focus:scale-90 duration-100 bg-primary/70 py-2 px-4 rounded-md"
                  >
                    <Data />
                  </button>
                  <button
                    onClick={() => navigate("order_owner_info")}
                    className="focus:scale-90 duration-100 bg-primary/70 py-2 px-4 rounded-md"
                  >
                    <Person />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div></div>

      <div className="text-white text-xl flex justify-end pt-5 pb-10">
        <button
          onClick={() => setPages(page - 1)}
          disabled={page === 1}
          className="border p-2"
        >
          <LeftArrow />
        </button>
        <span className="px-4">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPages(page + 1)}
          disabled={page === totalPages}
          className="border p-2"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
}

export default Orders;
