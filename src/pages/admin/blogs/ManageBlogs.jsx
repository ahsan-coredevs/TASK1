import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  Checkboxok,
  Delete,
  Edit,
  LeftArrow,
  RightArrow,
} from "../../../components/shared/svgComponents";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../../../services/redux/reducers/blogSlice";
import { api } from "../../../utils/apiCaller";
import { toast } from "react-toastify";

const ManageBlogs = () => {
  const [showConfirm, setShowConfirm] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedBlogIds, setSelectedBlogIds] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blogs.blogs);
  const item_per_page = 5;

  const handleCheckBox = (id) => {
    setSelectedBlogIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((blogId) => blogId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectedBlogIds([]);
    } else {
      setSelectedBlogIds(blogData.map((blog) => blog._id));
    }
    setIsSelectAll(!isSelectAll);
  };

  const retrieveData = () => {
    api.get("/blog").then((res) => {
      if (res.success) dispatch(setBlogs(res.data));
      else toast.error(res.data.message || "Something went wrong");
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/blog/${JSON.stringify(id)}`);
      if (response.success) {
        toast.success("Blog successfully deleted");
        retrieveData();
      } else {
        throw new Error(response.data || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setShowConfirm(null);
    }
    retrieveData();
    setSelectedBlogIds([]);
    setIsSelectAll(false);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const startIdx = (page - 1) * item_per_page;
  const endIdx = startIdx + item_per_page;
  const paginatedBlogs = blogData.slice(startIdx, endIdx);
  const totalPages = Math.ceil(blogData.length / item_per_page);

  const handlePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    setIsSelectAll(false);
    setSelectedBlogIds([]);
  };

  return (
    <div className="h-full w-[calc(100vw-177px)] relative p-10 text-white">
      <div className="flex justify-end pb-5">
        <button
          className="text-white bg-primary py-4 px-6 rounded-md focus:scale-90 duration-100 font-[500]"
          onClick={() => navigate("add")}
        >
          Add New Blog
        </button>
      </div>

      <div
        className={`h-16 flex mb-2  w-full left-0
          ${
            selectedBlogIds.length > 0
              ? "scale-100 transform transition-transform duration-[1.5s]"
              : "scale-0"
          }
        `}
      >
        <p className=" h-[40px] px-4 bg-grayDark py-2 rounded-md">
          {selectedBlogIds.length > 0
            ? `${selectedBlogIds.length} ${
                selectedBlogIds.length> 1 ? "Items" : "Item"
              } Selected`
            : "No Item Selected"}
        </p>
        {
          <button
            onClick={() => handleDelete(selectedBlogIds)}
            className={`${
              selectedBlogIds.length > 0
                ? "scale-100 transform transition-transform duration-[1.5s]"
                : "scale-0"
            }
             w-[110px] h-[40px] text-white bg-red-600 px-4 rounded-md ml-8 focus:scale-90 font-[500]`}
          >
            {`${selectedBlogIds.length > 1 ? "Delete All" : "Delete"}`}
          </button>
        }
      </div>

      <div className="">
        <table className="text-white shadow-md overflow-hidden w-full">
          <thead>
            <tr className="p-4">
              <th className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase rounded-tl-md">
                <button onClick={handleSelectAll}>
                  {isSelectAll ? <Checkboxok /> : <Checkbox />}
                </button>
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase">
                Title
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase">
                Label
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase rounded-tr-md w-[100px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-grayDark">
            {paginatedBlogs.length > 0 ? (
              paginatedBlogs.map((blog) => (
                <tr
                  className="text-center even:bg-slate-800/50 odd:bg-slate-900/50"
                  key={blog._id}
                >
                  <td className="text-left py-3 px-6">
                    <button onClick={() => handleCheckBox(blog._id)}>
                      {selectedBlogIds.includes(blog._id) ? (
                        <Checkboxok />
                      ) : (
                        <Checkbox />
                      )}
                    </button>
                  </td>
                  <td className="text-left py-3 px-6">{blog.title}</td>
                  <td className="text-left py-3 px-6">{blog.label}</td>
                  <td className="text-start py-3 px-6 flex gap-2">
                    <button
                      onClick={() => setShowConfirm(blog._id)}
                      className="focus:scale-90 duration-100 bg-primary/70 py-2 px-4 rounded-md"
                    >
                      <Delete />
                    </button>
                    <button
                      onClick={() =>
                        navigate("edit", {
                          state: { blogData: blog },
                        })
                      }
                      className="focus:scale-90 duration-100 bg-primary/70 py-2 px-4 rounded-md"
                    >
                      <Edit />
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

      {showConfirm && (
        <div className="w-[calc(100vw-177px)] h-[calc(100vh-99px)] bg-dark bg-opacity-70 text-white top-0 left-0 absolute">
          <div className="mt-[150px] ml-[250px] w-[50%] h-[40%] flex flex-col justify-center items-start bg-white/90 rounded-md">
            <p className="ml-8 p-4 text-black text-lg font-bold">
              Are you sure you want to delete this blog? Once deleted, it cannot
              be recovered.
            </p>
            <div className="w-[50%] flex justify-around ml-8">
              <button
                className="bg-grayDark py-2 px-4 rounded-md font-bold"
                onClick={() => handleDelete([showConfirm])}
              >
                Confirm Delete
              </button>
              <button
                className="bg-grayDark py-2 px-4 rounded-md font-bold"
                onClick={() => setShowConfirm(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-white text-xl flex justify-end pt-5 pb-10">
        <button
          onClick={() => handlePage(page - 1)}
          disabled={page === 1}
          className="border p-2"
        >
          <LeftArrow />
        </button>
        <span className="px-4">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => handlePage(page + 1)}
          disabled={page === totalPages}
          className="border border-l-0 p-2"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default ManageBlogs;
