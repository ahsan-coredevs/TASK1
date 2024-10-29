import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Checkboxok } from '../../../components/shared/svgComponents';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../services/redux/reducers/userSlice';


const orders_list = [
  {
      name : 'Ahsan Kabir',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024',
      status: 'Verified'
  },
  {
      name : 'Kabir',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024',
      status: 'Pending'
  },
  {
      name : 'Ahsan Kabir',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024',
      status: 'Verified'
  },
  {
      name : 'Robin',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024',
      status: 'Pending'
  },
  {
      name : 'Ahsan',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024',
      status: 'Verified'
  },
  {
      name : 'Habib',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024',
      status: 'Pending'
  },
  {
      name : 'Sheikh Ahsan',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024',
      status: 'Verified'
  },
];

function UsersList() {
  const navigate = useNavigate();
  const [selectedOrderIds, setSelectedOrderIds] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);


  dispatch(setUser(orders_list)); // store userlist in redux store

  // Toggle individual checkbox selection
  const handleCheckBox = (index) => {
    setSelectedOrderIds((prevSelectedIds) =>
      prevSelectedIds.includes(index)
        ? prevSelectedIds.filter((id) => id !== index) // Deselect if already selected
        : [...prevSelectedIds, index] // Select if not selected
    );
  };

  // Toggle "Select All" checkbox
  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectedOrderIds([]); // Deselect all
    } else {
      setSelectedOrderIds(orders_list.map((_, index) => index)); // Select all
    }
    setIsSelectAll(!isSelectAll);
  };

  return (
    <div className="w-full h-full">
      {/* Display selected count and delete button */}
      <div className="h-6 text-white font-semibold relative m-4">
        {selectedOrderIds.length > 0 
          ? `${selectedOrderIds.length} ${selectedOrderIds.length > 1 ? 'items' : 'item'} selected`
          : 'No Item Selected'}
        {selectedOrderIds.length > 0 && (
          <button
            onClick={() => {
              console.log('Selected order indices:', selectedOrderIds); 
              // Add delete functionality here if needed
            }}
            className="text-white bg-red-600 py-2 px-4 rounded-md ml-8 focus:scale-90 duration-100 font-[500] absolute top-0"
          >
            {`${selectedOrderIds.length > 1 ? 'Delete All' : 'Delete'}`}
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
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase">Course Name</th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase">Payment Method</th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase">Phone No</th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase">TnxID</th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase">Date</th>
              <th className="bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase rounded-tr-md">Status</th>
            </tr>
          </thead>
          <tbody className="bg-grayDark">
            {userData.map((order, index) => (
              <tr
                key={index}
                className="text-center even:bg-slate-800/50 odd:bg-slate-900/50 cursor-pointer hover:bg-slate-700/50 transition-colors"
              >
                <td className="text-left py-3 px-6">
                  <button onClick={() => handleCheckBox(index)}>
                    {selectedOrderIds.includes(index) ? <Checkboxok /> : <Checkbox />}
                  </button>
                </td>
                <td onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">{order.name}</td>
                <td  onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">{order.courseName}</td>
                <td onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">{order.paymentMethod}</td>
                <td onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">{order.phoneNO}</td>
                <td onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">{order.tnxId}</td>
                <td onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">{order.paymentDate}</td>
                <td onClick={()=>navigate('order_owner_info')} className="text-left py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-md font-bold ${
                      order.status === 'Verified' ? 'bg-green-500 text-green-900' : 'bg-yellow-500 text-yellow-900'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;





