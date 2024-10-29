import React, { useState } from 'react';
import { Checkbox, Checkboxok, Data, Person } from '../../components/shared/svgComponents';
import { useNavigate } from 'react-router-dom';
import { setBlogs } from '../../services/redux/reducers/blogSlice';
import { fetchData } from '../../utils/FileManagement';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../services/redux/reducers/orderSlice';

const orders_list = [
  {
      name : 'Ahsan Kabir',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024'
  },
  {
      name : 'Kabir',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024'
  },
  {
      name : 'Ahsan Kabir',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024'
  },
  {
      name : 'Robin',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024'
  },
  {
      name : 'Ahsan',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024'
  },
  {
      name : 'Habib',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024'
  },
  {
      name : 'Sheikh Ahsan',
      courseName : 'Web Development',
      paymentMethod : 'Bkash',
      phoneNO : "01308686991",
      tnxId : "asj378456sjdfh",
      paymentDate : '12-01-2024'
  },
];

function Orders() {
  const [OrderIds, setOrderIds] = useState([]); // Selected order indices
  const [isSelectedAll, setIsSelectedAll] = useState(false); // "Select All" state
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.order.order);

  dispatch(setOrder(orders_list));



  const handleCheckBox = (index) => {
    setOrderIds((prevSelectedIds) =>
      prevSelectedIds.includes(index)
        ? prevSelectedIds.filter((id) => id !== index) // Deselect if already selected
        : [...prevSelectedIds, index] // Select if not selected
    );
  };

  const handleSelectAll = () => {
    if (isSelectedAll) {
      // Deselect all
      setOrderIds([]);
    } else {
      // Select all items
      setOrderIds(orders_list.map((_, index) => index));
    }
    setIsSelectedAll(!isSelectedAll);
  };

  const handleDeleteMultiple = () => {
    OrderIds.forEach((index) => {
      console.log('Index of order item:', index);
      // Here you would use deleteItem function to remove the item from storage
    });
    setOrderIds([]); // Clear selection after deletion
    setIsSelectedAll(false); // Reset "Select All" state
  };

  const navigate = useNavigate();
  return (
    <div className='w-full h-full'>
      {/* Selected items count */}
      <div className="h-16 pb-4 text-white font-semibold relative">
        {OrderIds.length > 0
          ? `${OrderIds.length} ${OrderIds.length > 1 ? 'items' : 'item'} selected`
          : 'No Item Selected'}
        {OrderIds.length > 0 && (
          <button
            onClick={handleDeleteMultiple} // Button to delete selected items
            className="text-white bg-red-600 py-2 px-4 rounded-md ml-8 focus:scale-90 duration-100 font-[500] absolute top-0"
          >
            {`${OrderIds.length > 1 ? 'Delete All' : 'Delete'}`}
          </button>
        )}
      </div>

      <div className=''>
        <table className='w-full text-white shadow-md overflow-hidden m-4'>
          <thead className='m-4'>
            <tr className='p-4 '>
              <th className='bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase rounded-tl-md'>
                <button onClick={handleSelectAll}>
                  {isSelectedAll ? <Checkboxok /> : <Checkbox />}
                </button>
              </th>
              <th className='bg-primary/50 py-3 px-6 text-left text-lg font-bold uppercase '>Name</th>
              <th className='bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase '>Course Name</th>
              <th className='bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase '>Payment Method</th>
              <th className='bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase '>Phone No</th>
              <th className='bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase '>TnxID</th>
              <th className='bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase '>Date</th>
              <th className='bg-primary/50 py-3 px-6 text-left text-sm font-medium uppercase rounded-tr-md'>Action</th>
            </tr>
          </thead>
          <tbody className='bg-grayDark'>
            {orderData.map((order, index) => (
              <tr className='text-center even:bg-slate-800/50 odd:bg-slate-900/50' key={index}>
                <td className='text-left py-3 px-6'>
                  <button onClick={() => handleCheckBox(index)}>
                    {OrderIds.includes(index) ? <Checkboxok /> : <Checkbox />}
                  </button>
                </td>
                <td className='text-left py-3 px-6'>{order.name}</td>
                <td className='text-left py-3 px-6'>{order.courseName}</td>
                <td className='text-left py-3 px-6'>{order.paymentMethod}</td>
                <td className='text-left py-3 px-6'>{order.phoneNO}</td>
                <td className='text-left py-3 px-6'>{order.tnxId}</td>
                <td className='text-left py-3 px-6'>{order.paymentDate}</td>
                <td className='text-start py-3 px-6 flex gap-2'>
                  <button onClick={() => navigate('order_details')} className='focus:scale-90 duration-100 bg-primary/70 py-2 px-4 rounded-md'><Data /></button>
                  <button onClick={() => navigate('order_owner_info')} className='focus:scale-90 duration-100 bg-primary/70 py-2 px-4 rounded-md'><Person /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Orders;



