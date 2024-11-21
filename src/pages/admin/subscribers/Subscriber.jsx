import { toast } from "react-toastify";
import { api } from "../../../utils/apiCaller"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSubscribers } from "../../../services/redux/reducers/subscribers";
import { Delete, LeftArrow, RightArrow } from "../../../components/shared/svgComponents";

function Subscriber() {
    const dispatch = useDispatch();
    const subscribersData = useSelector((state) => state.subscribers.subscribers);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    const retrieveData = async () => {
        try {
            const res = await api.get(`/subscribers?limit=5&page=${page}&paginate=true`);
            if (res.success) {
                console.log("response data of subscribers: ", res.data)
                dispatch(setSubscribers(res.data));
                setTotalPages(res.data.totalPages);
                
            } else {
                toast.error('something went Wrong');
            }
        } catch(error) {
            toast.error(error.message);
        }
    }
    const handleDelete = async (id) => {
        try {
          const response = await api.delete(`/subsriber/${JSON.stringify(id)}`);
          if (response.success) {
            toast.success("Subscriber successfully deleted");
            retrieveData();
          } else {
            throw new Error(response.data || "Failed to delete Subscriber");
          }
        } catch (error) {
          console.error("Error deleting Subscriber:", error);
          toast.error(error.message || "Something went wrong. Please try again.");
        } 
        retrieveData();
       
      };


    useEffect(() => {
        retrieveData();    
        console.log("Subscriber Data : ",subscribersData);
    }, [])
  return (
    <div className="h-full w-[calc(100vw-177px)] relative p-8 text-slate-300">
        <div className="w-full">
        <table className="text-white shadow-md overflow-hidden w-full">
          <thead>
            <tr>
                <th className="bg-primary/50 py-3 px-4 text-left text-lg font-bold uppercase rounded-tl-md">SL.</th>
              <th className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase">
                Email{" "}
              </th>
              <th className="bg-primary/50 py-3 px-6 text-right text-lg font-bold uppercase rounded-tr-md">
                Action{" "}
              </th>
            </tr>

          </thead>

          <tbody>
            {subscribersData?.docs?.length > 0 ? (
              subscribersData?.docs?.map((value, index) => (
                <tr key={value._id} className="text-left  even:bg-slate-800/50 odd:bg-slate-900/50 relative">
                    <td className="px-4 font-bold">{index + 1}.</td>
                    <td className=" py-4 line-clamp-2 leading-[25px] h-[73px]  ml-4"><p className=''>{value.email}</p></td>
                    <td>
                      <button onClick={() => handleDelete(value._id)}  className="focus:scale-90 duration-100 bg-primary/70 py-2 px-4 top-4 rounded-md absolute right-4 ">
                        <Delete />
                      </button>
                    </td>
                 
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-4 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-white text-xl flex justify-end pt-5 pb-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="border p-2 cursor-pointer"
        >
          <LeftArrow />
        </button>
        <span className="px-4">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="border p-2 cursor-pointer"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  )
}

export default Subscriber