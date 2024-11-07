import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Checkbox, Checkboxok, Delete, Edit, LeftArrow, RightArrow } from '../../../components/shared/svgComponents';
import { useDispatch, useSelector } from 'react-redux';
import { setInstructor } from '../../../services/redux/reducers/instructorSlice';
import { api } from '../../../utils/apiCaller';
import { toast } from 'react-toastify';

const ManageInstructor = () => {

  const [showConfirm, setShowConfirm] = useState(null);
  const [page, setPage] = useState(1);
  const [selectInstructorIds, setSelectInstructorIds] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const dispatch = useDispatch();
  const instructorData = useSelector((state) => state.instructor.instructor);
  const navigate = useNavigate();
  const item_per_page=5;

  const handleCheckBox = (id) => {
    setSelectInstructorIds((prevSelectedIds) => 
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((instructorID) => instructorID !== id) // Deselect if already selected
        : [...prevSelectedIds, id] // Select if not selected
    );
  };

  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectInstructorIds([]);
    } else {
      setSelectInstructorIds(instructorData.map((instructor) => instructor._id));
    }
    setIsSelectAll(!isSelectAll);
  };


  const retrieveData = () => {
    api.get("/instructor").then((res) => {
      if (res.success) dispatch(setInstructor(res.data));
      else toast.error(res.data.message || "Something went wrong");
    });
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await api.delete(`/instructor/${JSON.stringify(id)}`);
      if (response.success) {
        toast.success("Insturctor Data successfully deleted");
        retrieveData();
      } else {
        throw new Error(response.data || "Failed to delete Instrctor Data");
      }
    } catch (error) {
      console.error("Error deleting Instructor Data:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setShowConfirm(null);
    }
    retrieveData();
    setSelectInstructorIds([]); // Clear selection after deletion
    setIsSelectAll(false); // Reset "Select All" state
  };


 
  useEffect(() => {
    retrieveData();
  }, []);

    // Calculate the courses to display based on the current page and items per page
    const startIdx = (page - 1) * item_per_page;
    const endIdx = startIdx + item_per_page;
    const paginatedInstructor = instructorData.slice(startIdx, endIdx);
    const totalPages = Math.ceil(instructorData.length / item_per_page);
  
    const handlePage = (newPage) => {
      if (newPage < 1 || newPage > totalPages) return;
      setPage(newPage);
      setIsSelectAll(false);
      setSelectInstructorIds([]);
    };
   
  return (
    <>
       <div className='h-full w-[calc(100vw-177px)] relative p-10'>
          <div className="flex justify-end pb-5">
             <button className='text-white bg-primary py-4 px-6 rounded-md focus:scale-90 duration-100 font-[500] ' onClick={()=>navigate('add')}>Add New Instructor</button>
          </div>

          <div className="h-16 pb-4 text-white font-semibold relative">
            {selectInstructorIds.length > 0 
              ? `${selectInstructorIds.length} ${selectInstructorIds.length>1 ? 'items' : 'item'} selected`
              : 'No Item Selected'}
              {selectInstructorIds.length > 0 && (
              <button type='submit'
                onClick={() => handleDelete(selectInstructorIds)} // Button to delete selected items
                className="text-white bg-red-600 py-2 px-4 rounded-md ml-8 focus:scale-90 duration-100 font-[500] absolute top-0 "
              >
                {`${selectInstructorIds.length > 1 ? 'Delete All' : 'Delete'}`}
              </button>
            )}
          </div>


          <div className=''>
            <table className=' text-white shadow-md overflow-hidden  w-full top-[100px]'>
            <thead className=' '>
              <tr className='p-4 '>
                <th className='bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase'>
                <button onClick={handleSelectAll}>
                  {isSelectAll ? <Checkboxok /> : <Checkbox />}
                </button>
                </th>
                <th className='bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase'>Name</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase '>Designation</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase rounded-tr-md w-[100px]'>Action</th>
              </tr>
            </thead>
            <tbody className='bg-grayDark'>
              {paginatedInstructor.length > 0 ? (
                paginatedInstructor.map((instructor) => (
                  <tr className=' text-center even:bg-slate-800/50 odd:bg-slate-900/50  ' key={instructor._id}>
                     <td className="text-left py-3 px-6">
                        <button onClick={() => handleCheckBox(instructor._id)}>
                          {selectInstructorIds.includes(instructor._id) ? (
                            <Checkboxok />
                          ) : (
                            <Checkbox />
                          )}
                        </button>
                      </td>
                    <td className='text-left  py-3 px-6 '>{instructor.name}</td>
                    <td className=' text-left  py-3 px-6'>{instructor.designation}</td>
                    <td className='text-start py-3 px-6 flex gap-2'>
                      <button onClick={() => setShowConfirm({...instructor, id:id})} className='  focus:scale-90 duration-100 bg-primary/70  py-2 px-4 rounded-md'><Delete /></button> 
                      <button onClick={()=>navigate('edit',{state: {instructorData: {...instructor, id:id}}})} className=' focus:scale-90 duration-100 bg-primary/70  py-2 px-4 rounded-md'><Edit /></button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className='py-4 text-center'>No data available</td>
                </tr>
              )}
            </tbody>
            </table>
                <div className={`h-2 ${(instructorData?.length-1)%2===0?'bg-[#101726]':'bg-[#17212E]'} rounded-b-md`}></div>
            </div>

       {
        showConfirm &&  <div className='  w-[calc(100vw-177px)] h-[calc(100vh-99px)] bg-dark bg-opacity-70 text-white top-0 left-0  absolute'>
        <div className='mt-[150px] ml-[250px] w-[50%] h-[40%] flex flex-col justify-center items-start bg-white/90 rounded-md'>
          <p className='ml-8 p-4 text-black text-lg font-bold'>Are you Sure about delete this Course ? <br /> Note: Once you deleted the data, you won't get it back. </p>
          <div className='w-[50%] flex justify-around ml-8 '>
          <button className='bg-grayDark py-2 px-4 rounded-md font-bold' onClick={() => handleDelete(showConfirm.id)} >Confirm Delete</button>
          <button className='bg-grayDark py-2 px-4 rounded-md font-bold' onClick={() => setShowConfirm(null)} >Cancel</button>
          </div>
        </div>
      </div>
       }
              
        <div className=' text-white text-xl flex justify-end pt-5 pb-10'>
          <button onClick={() => handlePage(page-1)} className='border p-2'><LeftArrow /></button>
          <button onClick={() => handlePage(page+1)} className='border border-l-0 p-2'><RightArrow /></button>
        </div>

       </div>
    </>
  )
};
export default ManageInstructor;