/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Pagination({
  commentsPerPage,
  totalComments,
  paginate,
  currentPage,
  backPage,
  forwardPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalComments / commentsPerPage); i++) {
    if (currentPage < 5 && i <= 10) {
      pageNumbers.push(i);
    } else if (currentPage - 5 < i && currentPage + 6 > i) {
      pageNumbers.push(i);
    }
  }

  // Show limited amount of the pagination ex: 1, 2, 3 ... 10;

  const newPaginationArray = pageNumbers.splice(9);
  const resultArray = pageNumbers
    .slice(0, 3)
    .concat(...["..."], newPaginationArray);
  console.log(newPaginationArray);
  console.log(resultArray);

  return (
    <nav>
      <ul className="pagination">
        <button onClick={() => backPage(1)} type="button">
          {"<"}
        </button>
        {resultArray.map((number) => (
          <li key={number}>
            <button key={number} onClick={() => paginate(number)} type="button">
              {number}
            </button>
          </li>
        ))}
        <button onClick={() => forwardPage(1)} type="button">
          {">"}
        </button>
      </ul>
    </nav>
  );
}
