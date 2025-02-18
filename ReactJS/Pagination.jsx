import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="px-4 py-2 bg-gray-100 rounded">{currentPage}</span>
      <button
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
