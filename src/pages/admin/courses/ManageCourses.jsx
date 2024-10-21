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
 
    const handleDelete = (index) => {

      deleteItem('course', index);
      retrieveData();

      setShowConfirm(null);

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
         
         <div className='w-[calc(100vw-177px)] flex gap-8 flex-wrap'>
          {courseData.length > 0 ? (
            filteredData.map((course, index) => (
              <div className='w-[25%] rounded-md bg-grayDark overflow-hidden text-white relative group' key={index}>
                <div className='w-full h-[200px]'>
                  <img className='w-[100%] h-full object-cover' src={course.imageUrl} alt="" />
                </div>

                <button onClick={() => setShowConfirm({...course, id:index})} className='  focus:scale-90 bg-primary/90  py-2 px-4 rounded-md absolute top-4 right-20 opacity-0 group-hover:opacity-100 duration-300'><Delete /></button> 
                <button onClick={()=>navigate('edit',{state: {courseData: {...course, id:index}}})} className=' focus:scale-90 bg-primary/90  py-2 px-4 rounded-md absolute top-4 right-4 opacity-0 group-hover:opacity-100 duration-300'><Edit /></button>
                
                <div className='bg-primary w-[80px] h-[80px] flex items-center justify-center rounded-full absolute top-[155px] right-[20px]'>
                  $ {course.price}
                </div>

                <h1 className='text-4xl py-6 px-4 text-wrap'>{course.title}</h1>
                <p className='px-4 my-2 text-lg'>{course.details}</p>
                <p className='px-4 flex items-center gap-2 text-lg'> <Book/> 6 Lessons</p>
                <Button buttonClass={'py-2 pl-4 pr-1 m-4'} buttonName={'Enroll Now'} />



              </div>
            ))
    
          ) : (
            <div className='text-white text-4xl font-bold'>No Course Available</div>
          )}
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