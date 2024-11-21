import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import { toast } from "react-toastify";
import { api } from "../../../utils/apiCaller";
import { useEffect, useState } from "react";
import { Delete, LeftArrow, RightArrow } from "../../../components/shared/svgComponents";
import { setNewsLetter } from "../../../services/redux/reducers/newsletter";
import { useDispatch, useSelector } from "react-redux";

function NewsLetters() {
  const { register, handleSubmit } = useForm();
  const [viewModal, setViewModal] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();
  const newsLetterData = useSelector((state) => state.newsLetter.newsLetter);

  const retrieveData = () => {
    api.get(`/newsletters?limit=5&page=${page}&paginate=true`).then((res) => {
      if (res.success) {
        dispatch(setNewsLetter(res.data));
        setTotalPages(res.data.totalPages);
      } 
      else toast.error(res.data.message || "Something went wrong");
    });
  };

  const handleDelete = async (id) => {
    console.log("_id of newsletter", id)
    try {
      const response = await api.delete(`/newsLetter/${JSON.stringify(id)}`);
      if (response.success) {
        toast.success("Newsletter successfully deleted");
        retrieveData();
      } else {
        throw new Error(response.data || "Failed to delete Newsletter");
      }
    } catch (error) {
      console.error("Error deleting Newsletter:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } 
    retrieveData();
   
  };

  useEffect(() => {
    retrieveData();
    console.log("data of newsletter: ",newsLetterData)
  }, [ viewModal, page ]);

  async function onSubmit(data) {
    try {
      const response = await api.post("/newsletter", data);
      console.log(response);
      if (response.success) {
        toast.success("Data Submit successfully");
        setViewModal(false);
      } else {
        console.log(response?.data?.message);
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div className="h-full w-[calc(100vw-177px)] relative p-10 text-slate-300">
      <div className="w-full relative">
        <Button
          onClick={() => setViewModal(true)}
          buttonClass={`py-2 right-4 absolute font-bold gap-2`}
          buttonName={`Add`}
        />
      </div>

      <div className="mt-28">
        <table className="text-white shadow-md overflow-hidden w-full">
          <thead>
            <tr>
                <th className="bg-primary/50 py-3 px-4 text-left text-lg font-bold uppercase rounded-tl-md">SL.</th>
              <th className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase">
                Content{" "}
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase rounded-tr-md">
                Action{" "}
              </th>
            </tr>

          </thead>

          <tbody>
            {newsLetterData?.docs?.length > 0 ? (
              newsLetterData?.docs?.map((value, index) => (
                <tr key={value._id} className="text-left  even:bg-slate-800/50 odd:bg-slate-900/50 relative">
                    <td className="px-4 font-bold">{index + 1}.</td>
                    <td className=" py-4 line-clamp-2 leading-[25px] h-[73px]  ml-4"><p className=''>{value.text}</p></td>
                    <td>
                      <button onClick={() => handleDelete(value._id)} className="focus:scale-90 duration-100 bg-primary/70 py-2 px-4 top-4 rounded-md absolute right-4 ">
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

      {viewModal && (
        <div
          className={`w-full absolute h-full  items-center justify-center top-0 bg-black left-0 bg-opacity-90 ${
            viewModal ? "flex" : "hidden"
          }`}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[50%] flex flex-col bg-grayDark p-8 rounded-md"
            action=""
          >
            <textarea
              type="text"
              className="h-32 rounded-md bg-dark p-4 col-span-2 text-wrap"
              placeholder="Write News For the Subscribers"
              {...register("text", { required: true })}
            />
            <Button
              type="submit"
              buttonClass={`py-2 mt-4`}
              buttonName={`Submit`}
            />
          </form>
        </div>
      )}
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
  );
}

export default NewsLetters;
