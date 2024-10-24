import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { fetchData, deleteItem } from '../../../utils/FileManagement';
import { Book, Delete, Edit, LeftArrow, RightArrow } from '../../../components/shared/svgComponents';

const ManageCourses = () => {
  const [courseData, setCourseData] = useState([]);
  const [showConfirm, setShowConfirm] = useState(null);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData]=useState([]);
  const navigate = useNavigate();
  const item_per_page=5;
 
  const retrieveData = () => {
    const res= fetchData('course');

    setCourseData(res)
    const filtered_data= res.slice((0),(5) );
    setFilteredData(filtered_data);
    }
 
    const handleDelete = (id) => {
      
      deleteItem('course', id);
      retrieveData();

      setShowConfirm(null);
      console.log('ID NO: ', id);

    };


 
  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
  
  }, [page]);
  
  const handlePage = (value=1) => {
 
      const totat_page = Math.ceil(courseData.length/item_per_page);
      if (value < 1  || value>totat_page) return ;
     const filtered_data= courseData.slice((value-1)*item_per_page,((value-1)*item_per_page)+5 );
     setFilteredData(filtered_data);
     setPage(value)

  }
   
  return (
    <>
       <div className='h-full w-[calc(100vw-177px)] relative p-10'>
          <div className="flex justify-end pb-5">
             <button className='text-white bg-primary py-4 px-6 rounded-md focus:scale-90 duration-100 font-[500] ' onClick={()=>navigate('add')}>Add New Course</button>
          </div>
         
          <div className=''>
            <table className=' text-white shadow-md overflow-hidden  w-full top-[100px]'>
            <thead className=' '>
              <tr className='p-4 '>
                <th className='bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase rounded-tl-md '>Title</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase '>Label</th>
                <th className='bg-primary/50 py-3 px-6  text-left text-sm font-medium uppercase rounded-tr-md w-[100px]'>Action</th>
              </tr>
            </thead>
            <tbody className='bg-grayDark'>
              {courseData.length > 0 ? (
                filteredData.map((course) => (
                  <tr className=' text-center even:bg-slate-800/50 odd:bg-slate-900/50  ' key={course.id}>
                    <td className='text-left  py-3 px-6 '>{course.title}</td>
                    <td className=' text-left  py-3 px-6'>{course.label}</td>
                    <td className='text-start py-3 px-6 flex gap-2'>
                      <button onClick={() => setShowConfirm({...course, id:course.id})} className='  focus:scale-90 duration-100 bg-primary/70  py-2 px-4 rounded-md'><Delete /></button> 
                      <button onClick={()=>navigate('edit',{state: {courseData: {...course, id:course.id}}})} className=' focus:scale-90 duration-100 bg-primary/70  py-2 px-4 rounded-md'><Edit /></button>
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
                <div className={`h-2 ${(courseData?.length-1)%2===0?'bg-[#101726]':'bg-[#17212E]'} rounded-b-md`}></div>
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
export default ManageCourses;