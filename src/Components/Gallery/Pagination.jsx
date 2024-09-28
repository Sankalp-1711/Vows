// import React, { useState } from "react";
// import "./Pagination.scss";

// const Pagination = () => {
//   const [activePage, setActivePage] = useState(1);

//   const handlePageChange = (page) => {
//     setActivePage(page);
//   };

//   return (
//     <div className="pagination">
//       <div
//         className={`pagination__item ${activePage === 1 ? "active" : ""}`}
//         onClick={() => handlePageChange(1)}
//       >
//         1
//       </div>
//       <div
//         className={`pagination__item ${activePage === 2 ? "active" : ""}`}
//         onClick={() => handlePageChange(2)}
//       >
//         2
//       </div>
//       <div className="pagination__arrow" onClick={() => handlePageChange(activePage + 1)}>
//         &gt;
//       </div>
//       <div className="pagination__line">
//         <div
//           className="pagination__line--active"
//           style={{ width: `${(activePage / 2) * 100}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Pagination;


import React from "react";
import "./Pagination.scss";

const Pagination = ({ photosPerPage, totalPhotos, paginate, currentPage }) => {
  const pageNumbers = [];
  
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalPhotos / photosPerPage);

  // Push the page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {/* Previous arrow */}
      <div
        className="pagination__arrow"
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
      >
        &lt;
      </div>

      {/* Page number buttons */}
      {pageNumbers.map((number) => (
        <div
          key={number}
          className={`pagination__item ${currentPage === number ? "active" : ""}`}
          onClick={() => paginate(number)}
        >
          {number}
        </div>
      ))}

      {/* Next arrow */}
      <div
        className="pagination__arrow"
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
      >
        &gt;
      </div>

      {/* Dynamic line showing progress */}
      <div className="pagination__line">
        <div
          className="pagination__line--active"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Pagination;
