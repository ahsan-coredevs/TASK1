import { useEffect, useState } from "react";

function Pagination({ data = {}, onChange = () => {} }) {
  const [pages, setPages] = useState([]);
  const { page, totalPages } = data;

  useEffect(() => {
    if (totalPages <= 2) setPages([]);
    else if (totalPages === 3) setPages([2]);
    else if (totalPages === 4) setPages([2, 3]);
    else {
      if (page <= 2) setPages([2, 3, '...']);
      else if (page >= totalPages - 1) setPages(['...', totalPages - 2, totalPages - 1]);
      else setPages(['...', page - 1, page, page + 1, '...']);
    }
  }, [page, totalPages]);

  if (!data || data.docs === 0) {
    return <div></div>;
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => onChange(1)} className={`px-4 py-2 rounded-full font-bold ${page === 1 ? "bg-green-400 text-black" : ""}`}>
        1
      </button>
      {pages.map((currentPage, i) => (
        <button
          key={i}
          onClick={() => typeof currentPage === 'number' && onChange(currentPage)}
          className={`px-4 py-2 rounded-full  font-bold ${currentPage == page ? "bg-green-400 text-black" : ""}`}
        >
          {currentPage}
        </button>
      ))}
      {totalPages > 1 && (
        <button
          onClick={() => onChange(totalPages)}
          className={`px-4 py-2 rounded-full font-bold  ${ page == totalPages ? "bg-green-400 text-black" : ""}`}
        >
          {totalPages}
        </button>
      )}
    </div>
  );
}

export default Pagination;
