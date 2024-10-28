import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData, deleteItem } from '../../../utils/FileManagement';
import { Checkbox, Checkboxok, Delete, Edit, LeftArrow, RightArrow } from '../../../components/shared/svgComponents';

function ManageBlogs() {
  const [blogData, setBlogData] = useState([]);
  const [showConfirm, setShowConfirm] = useState(null);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedBlogIds, setSelectedBlogIds] = useState([]); // State for selected blog IDs
  const [isSelectAll, setIsSelectAll] = useState(false); // State for "Select All" checkbox
  const navigate = useNavigate();
  const item_per_page = 5;

  const handleCheckBox = (id) => {
    setSelectedBlogIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((blogId) => blogId !== id) // Deselect if already selected
        : [...prevSelectedIds, id] // Select if not selected
    );
  };

  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectedBlogIds([]);
    } else {
      setSelectedBlogIds(filteredData.map((blog) => blog.id));
    }
    setIsSelectAll(!isSelectAll);
  };

  const handleDeleteMultiple = () => {
    selectedBlogIds.forEach((id) => {
      deleteItem('blogs', id);
      console.log("Selected ID : ", id);
    });
    retrieveData();
    setSelectedBlogIds([]); // Clear selection after deletion
    setIsSelectAll(false); // Reset "Select All" state
  };

  const retrieveData = () => {
    const res = fetchData('blogs');
    setBlogData(res);
    const filtered_data = res.slice(0, item_per_page);
    setFilteredData(filtered_data);
  };

  const handleDelete = (id) => {
    deleteItem('blogs', id);
    retrieveData();
    setShowConfirm(null);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const handlePage = (value = 1) => {
    const total_page = Math.ceil(blogData.length / item_per_page);
    if (value < 1 || value > total_page) return;
    const filtered_data = blogData.slice(
      (value - 1) * item_per_page,
      value * item_per_page
    );
    setFilteredData(filtered_data);

    // Reset selection on page change
    setPage(value);
    setIsSelectAll(false);
    setSelectedBlogIds([]);
  };

  return (
    <div className="h-full w-[calc(100vw-177px)] relative p-10">
      <div className="flex justify-end pb-5">
        <button
          onClick={() => navigate('add')}
          className="text-white bg-primary py-4 px-6 rounded-md focus:scale-90 duration-100 font-[500]"
        >
          Add New Blogs
        </button>
        
      </div>
      
      <div className="h-16 pb-4 text-white font-semibold relative">
        {selectedBlogIds.length > 0 
          ? `${selectedBlogIds.length} ${selectedBlogIds.length>1 ? 'items' : 'item'} selected`
          : 'No Item Selected'}
          {selectedBlogIds.length > 0 && (
          <button
            onClick={handleDeleteMultiple} // Button to delete selected items
            className="text-white bg-red-600 py-2 px-4 rounded-md ml-8 focus:scale-90 duration-100 font-[500] absolute top-0 "
          >
            {`${selectedBlogIds.length > 1 ? 'Delete All' : 'Delete'}`}
          </button>
        )}
      </div>

      <div className="">
        <table className="text-white shadow-md overflow-hidden w-full top-[100px]">
          <thead className="">
            <tr className="p-4">
              <th className="bg-primary/50 py-3 px-6 text-left text-xl font-bold uppercase rounded-tl-md">
                <button onClick={handleSelectAll}>
                  {isSelectAll ? <Checkboxok /> : <Checkbox />}
                </button>
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase ">
                Title
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase ">
                Label
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase rounded-tr-md w-[100px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-grayDark">
            {blogData.length > 0 ? (
              filteredData.map((blogs) => (
                <tr
                  className="text-center even:bg-slate-800/50 odd:bg-slate-900/50"
                  key={blogs.id}
                >
                  <td className="text-left py-3 px-6">
                    <button onClick={() => handleCheckBox(blogs.id)}>
                      {selectedBlogIds.includes(blogs.id) ? (
                        <Checkboxok />
                      ) : (
                        <Checkbox />
                      )}
                    </button>
                  </td>
                  <td className="text-left py-3 px-6 ">{blogs.title}</td>
                  <td className="text-left py-3 px-6">{blogs.label}</td>
                  <td className="text-start py-3 px-6 flex gap-2">
                    <button
                      onClick={() => setShowConfirm({ ...blogs, id: blogs.id })}
                      className="focus:scale-90 duration-100 bg-primary/70 py-2 px-4 rounded-md"
                    >
                      <Delete />
                    </button>
                    <button
                      onClick={() =>
                        navigate('edit', { state: { blogData: { ...blogs, id: blogs.id } } })
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
        <div
          className={`h-2 ${
            (blogData?.length - 1) % 2 === 0 ? 'bg-[#101726]' : 'bg-[#17212E]'
          } rounded-b-md`}
        ></div>
      </div>

      {showConfirm && (
        <div className="w-[calc(100vw-177px)] h-[calc(100vh-99px)] bg-dark bg-opacity-70 text-white top-0 left-0 absolute">
          <div className="mt-[150px] ml-[250px] w-[50%] h-[40%] flex flex-col justify-center items-start bg-white/90 rounded-md">
            <p className="ml-8 p-4 text-black text-lg font-bold">
              Are you sure you want to delete this blog? <br /> Note: Once deleted, you cannot recover the data.
            </p>
            <div className="w-[50%] flex justify-around ml-8 ">
              <button
                className="bg-grayDark py-2 px-4 rounded-md font-bold"
                onClick={() => handleDelete(showConfirm.id)}
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
        <button onClick={() => handlePage(page - 1)} className="border p-2">
          <LeftArrow />
        </button>
        <button onClick={() => handlePage(page + 1)} className="border border-l-0 p-2">
          <RightArrow />
        </button>
      </div>
    </div>
  );
}

export default ManageBlogs;
