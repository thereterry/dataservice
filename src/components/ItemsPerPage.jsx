import React from "react";
//*

const ItemsPerPage = ({
  setItemsPerPage,
  setCurrentPage,
  options = [3, 6, 9],
}) => {
  return (
    <div>
      {
        //*options svarer til fx [10,50,100] */
        options.map((o) => (
          <button
            key={"btn + o"}
            className="btn"
            onClick={() => {
              setItemsPerPage(0);
              setCurrentPage(0);
            }}
          >
            {" "}
            {o} pr.side
          </button>
        ))
      }
    </div>
  );
};

export default ItemsPerPage;
