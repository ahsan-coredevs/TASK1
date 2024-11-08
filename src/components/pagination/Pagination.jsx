function Pagination({ data = {}, onChange = () => {} }) {
  const handlePage = (value) => onChange(value);

  return (
    <div>
      <ul className="flex">
        {data?.totalPages === 1 && (
          <li
            onClick={() => handlePage(1)}
            className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer "
          >
            1
       
          </li>
        )}
        {data?.totalPages === 2 && (
          <div className="flex gap-2">
            <li
              onClick={() => handlePage(1)}
              className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer"
            >
      
              1
            </li>
            <li
              onClick={() => handlePage(1)}
              className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer"
            >
            
              2
            </li>
          </div>
        )}
        {data?.totalPages === 3 && (
          <div className="flex gap-2">
            <li
              onClick={() => handlePage(1)}
              className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer"
            >
         
              1
            </li>
            <li
              onClick={() => handlePage(1)}
              className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer"
            >
            
              2
            </li>
            <li
              onClick={() => handlePage(1)}
              className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer"
            >
             
              3
            </li>
          </div>
        )}
        {data?.totalPages === 4 && (
          <div className="flex gap-2">
            <li
              onClick={() => handlePage(1)}
              className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer"
            >
              1
            </li>
            <li
              onClick={() => handlePage(1)}
              className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer"
            >
              2
            </li>
            <li
              onClick={() => handlePage(1)}
              className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer"
            >
              3
            </li>
            <li
              onClick={() => handlePage(1)}
              className="border px-2 rounded-full h-8 w-8 text-center cursor-pointer"
            >
              4
            </li>
          </div>
        )}
        {data?.totalPages > 4 && (
          <div className="flex gap-2">
            <li
              onClick={() => handlePage(1)}
              className={`border px-2 rounded-full h-8 w-8 text-center cursor-pointer focus:bg-green-500 hover:bg-green-40duration-150 ${
                data?.hasPrevPage === false ? "disabled" : ""
              } ${
                data?.page === 1 ? "bg-green-500  text-black font-bold " : ""
              }`}
            >  1
            </li>

            ...

            <li
              onClick={() => handlePage(data?.prevPage || 2)}
              className={`border px-2 rounded-full h-8 w-8 text-center cursor-pointer ${
                data?.page === 2 ? "bg-green-500 text-black font-bold" : ""
              }`}
            >
              {data?.prevPage > 2 ? data?.prevPage : 2 }
            </li>
              {/* here is the problem solve this at home */}
            <li
              onClick={() => handlePage(data?.page)}
              className={`border px-2 rounded-full h-8 w-8 text-center cursor-pointer ${
                data?.page === data?.page && data?.page !== 1 && data?.page !== 2 && data?.page !== 7 ? "bg-green-500 text-black font-bold" : ""
              }`}
            >
              {data?.prevPage > 2 ? data?.page :  3 }
            </li>

            <li
              onClick={() => handlePage(data?.nextPage || 4 )}
              className={`border px-2 rounded-full h-8 w-8 text-center cursor-pointer ${
                data?.page === data?.totalPages-1
                  ? ""
                  : "disabled"
              }`}
            >
             {data?.nextPage < 7 && data?.nextPage > 3 ? data?.nextPage :  4 }
            </li>

            ...

            <li
              onClick={() => handlePage(data?.totalPages)}
              className={`border px-2 rounded-full h-8 w-8 text-center cursor-pointer ${
                data?.hasNextPage === false ? "disabled" : ""
              } ${
                data?.page === data?.totalPages ? "bg-green-500  text-black font-bold " : ""
              }`}
            >
              {data?.totalPages}
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
