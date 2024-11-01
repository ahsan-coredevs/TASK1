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
import { setCourse } from "../../../services/redux/reducers/courseSlice";
import { api } from "../../../utils/apiCaller";
import { toast } from "react-toastify";

const ManageCourses = () => {
  const [showConfirm, setShowConfirm] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedCourseIds, setSelectedCourseIds] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.course.course);
  const item_per_page = 5;

  const handleCheckBox = (id) => {
    setSelectedCourseIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((courseId) => courseId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectedCourseIds([]);
    } else {
      setSelectedCourseIds(courseData.map((course) => course._id));
    }
    setIsSelectAll(!isSelectAll);
  };

  const retrieveData = () => {
    api.get("/course").then((res) => {
      if (res.success) dispatch(setCourse(res.data));
      else toast.error(res.data.message || "Something went wrong");
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/course/${JSON.stringify(id)}`);
      if (response.success) {
        toast.success("Course successfully deleted");
        retrieveData();
      } else {
        throw new Error(response.data || "Failed to delete course");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setShowConfirm(null);
    }
    retrieveData();
    setSelectedCourseIds([]); // Clear selection after deletion
    setIsSelectAll(false); // Reset "Select All" state
  };

  useEffect(() => {
    retrieveData();
  }, []);

  // Calculate the courses to display based on the current page and items per page
  const startIdx = (page - 1) * item_per_page;
  const endIdx = startIdx + item_per_page;
  const paginatedCourses = courseData.slice(startIdx, endIdx);
  const totalPages = Math.ceil(courseData.length / item_per_page);

  const handlePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    setIsSelectAll(false);
    setSelectedCourseIds([]);
  };

  return (
    <div className="h-full w-[calc(100vw-177px)] relative p-10 text-white">
      <div className="flex justify-end pb-5">
        <button
          className="text-white bg-primary py-4 px-6 rounded-md focus:scale-90 duration-100 font-[500]"
          onClick={() => navigate("add")}
        >
          Add New Course
        </button>
      </div>

      <div
        className={`h-16 flex items-center mb-2 
          ${
            selectedCourseIds.length > 0
              ? "scale-100  transform transition-transform duration-[1.5s]"
              : "scale-0"
          }
        `}
      >
        <p className="px-4 bg-grayDark py-2 rounded-md">
          {selectedCourseIds.length > 0
            ? `${selectedCourseIds.length} ${
                selectedCourseIds.length > 1 ? "Items" : "Item"
              } Selected`
            : "No Item Selected"}
        </p>
        {
          <button
            onClick={() => handleDelete(selectedCourseIds)}
            className={`${
              selectedCourseIds.length > 0
                ? "scale-100  transform transition-transform duration-[1.5s]"
                : "scale-0"
            }
              
             w-[110px] h-[40px] text-white bg-red-600 px-4 rounded-md ml-8 focus:scale-90 font-[500]`}
          >
            {`${selectedCourseIds.length > 1 ? "Delete All" : "Delete"}`}
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
            {paginatedCourses.length > 0 ? (
              paginatedCourses.map((course) => (
                <tr
                  className="text-center even:bg-slate-800/50 odd:bg-slate-900/50"
                  key={course._id}
                >
                  <td className="text-left py-3 px-6">
                    <button onClick={() => handleCheckBox(course._id)}>
                      {selectedCourseIds.includes(course._id) ? (
                        <Checkboxok />
                      ) : (
                        <Checkbox />
                      )}
                    </button>
                  </td>
                  <td className="text-left py-3 px-6">{course.title}</td>
                  <td className="text-left py-3 px-6">{course.label}</td>
                  <td className="text-start py-3 px-6 flex gap-2">
                    <button
                      onClick={() => setShowConfirm(course._id)}
                      className="focus:scale-90 duration-100 bg-primary/70 py-2 px-4 rounded-md"
                    >
                      <Delete />
                    </button>
                    <button
                      onClick={() =>
                        navigate("edit", {
                          state: { courseData: course },
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
              Are you sure you want to delete this course? Once deleted, it
              cannot be recovered.
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
          className="border p-2"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default ManageCourses;
