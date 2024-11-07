import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Checkboxok, LeftArrow, RightArrow } from '../../../components/shared/svgComponents';
import { useDispatch, useSelector } from 'react-redux';
import { setUserList } from '../../../services/redux/reducers/userListSlice';
import { toast } from 'react-toastify';
import { api } from '../../../utils/apiCaller';


function UsersList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();
  const userListData = useSelector((state) => state.userList.userList);



  // Toggle individual checkbox selection
  const handleCheckBox = (id) => {
    setSelectedUserIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
    ? prevSelectedIds.filter((userID) => userID !== id)
    : [...prevSelectedIds, id]
    );
  };

  // Toggle "Select All" checkbox
  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectedUserIds([]); // Deselect all
    } else {
      setSelectedUserIds(userListData.map((user) => user._id)); // Select all
    }
    setIsSelectAll(!isSelectAll);
  };

  const retrieveData = async () => {

    try {
      const res = await api.get(`/user?limit=5&page=${page}`);
      if (res.success) {
        dispatch(setUserList(res.data));
        setTotalPages(res.data.totalPages);
      } else {
        toast.error(res.data.message || "Something Went Wrong"); 
      }
    } catch (error) {
      toast.error("Failed to fetch Users List...")
    }
    
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/user/${JSON.stringify(id)}`);
      if (response.success) {
        toast.success("user successfully deleted");
        retrieveData();
      } else {
        throw new Error(response.data || "Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting User:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    }
    retrieveData();
    setSelectedUserIds([]);
    setIsSelectAll(false);
  };

  useEffect(() => {
    retrieveData();
  }, [page]);

  return (
    <div className="w-full h-full">
      {/* Display selected count and delete button */}
      <div className="h-6 text-white font-semibold relative m-4">
        {selectedUserIds.length > 0 
          ? `${selectedUserIds.length} ${selectedUserIds.length > 1 ? 'items' : 'item'} selected`
          : 'No Item Selected'}
        {selectedUserIds.length > 0 && (
          <button
            onClick={() => handleDelete(selectedUserIds)}
            className="text-white bg-red-600 py-2 px-4 rounded-md ml-8 focus:scale-90 duration-100 font-[500] absolute top-0"
          >
            {`${selectedUserIds.length > 1 ? 'Delete All' : 'Delete'}`}
          </button>
        )}
      </div>

      <div className="overflow-auto">
        <table className="text-white shadow-md m-4 w-full">
          <thead>
            <tr className="p-4">
              <th  className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase rounded-tl-md">
                <button onClick={handleSelectAll}>
                  {isSelectAll ? <Checkboxok /> : <Checkbox />}
                </button>
              </th>
              <th className="bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase">Name</th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase">Email</th>
              
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase rounded-tr-md">Status</th>
            </tr>
          </thead>
          <tbody className="bg-grayDark">
            {userListData?.docs?.map((user) => (
              <tr
                key={(user._id)}
                className="text-center even:bg-slate-800/50 odd:bg-slate-900/50 cursor-pointer hover:bg-slate-700/50 transition-colors"
              >
                <td className="text-left py-3 px-6">
                  <button onClick={() => handleCheckBox(user._id)}>
                    {selectedUserIds.includes(user._id) ? <Checkboxok /> : <Checkbox />}
                  </button>
                </td>
                <td onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">{user.name}</td>
                <td  onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">{user.email}</td>
                <td onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-md font-bold ${
                      user.status === 'Verified' ? 'bg-green-500 text-green-900' : 'bg-yellow-500 text-yellow-900'
                    }`}
                  >
                    {/* {order.status} */} Pending
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-white text-xl flex justify-end pt-5 pb-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="border p-2"
        >
          <LeftArrow />
        </button>
        <span className="px-4">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="border p-2"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
}

export default UsersList;





