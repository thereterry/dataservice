import React from "react";

const PrevNext = ({
  setCurrentPage,
  currentPage,
  dataLength,
  itemsPerPage,
}) => {
  return (
    <div>
      <h2>TESTER</h2>
      <button
        className="btn"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage <= 0}
      >
        Prev
      </button>

      <button
        className="btn"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage + 1 >= Math.ceil(dataLength / itemsPerPage)}
      >
        Next
      </button>
    </div>
  );
};

export default PrevNext;
