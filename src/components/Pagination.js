/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Pagination({
  commentsPerPage,
  totalComments,
  paginate,
  currentPage,
  backPage,
  forwardPage,
}) {
  // State manager to re render pagination styles
  const [count, setCounter] = useState([false, false, false]);

  // Display the correct page range of numbers
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

  // Code for the manipulation of pagination numbers background-color toggle

  const focusFunc = (evt) => {
    const elementValue = evt.target.value;
    const setBackground = [true, false, false];
    if (evt.target.value === "1") {
      setCounter(() => setBackground);
    } else if (elementValue === "2") {
      setCounter(() => [false, true, false]);
    } else if (elementValue === "3") {
      setCounter(() => [false, false, true]);
    } else {
      setCounter(() => [false, false, false]);
    }
  };

  return (
    <nav className="pagination-nav">
      <label htmlFor="back" className="back">
        <input onClick={() => backPage(1)} type="button" value="<" />
      </label>
      <ul className="pagination">
        {resultArray.map((number, index) => (
          <li key={number}>
            <label
              htmlFor="page"
              className={count[index] ? "pagination-background" : ""}
            >
              <input
                key={number}
                onClick={(evt) => {
                  paginate(number);
                  focusFunc(evt);
                }}
                type="button"
                id="page"
                value={number}
              />
            </label>
          </li>
        ))}
      </ul>
      <label htmlFor="forward" className="forward">
        <input onClick={() => forwardPage(1)} type="button" value=">" />
      </label>
    </nav>
  );
}

// Props type checking

Pagination.propTypes = {
  commentsPerPage: PropTypes.number,
  totalComments: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
  backPage: PropTypes.func,
  forwardPage: PropTypes.func,
};

Pagination.defaultProps = {
  commentsPerPage: 12,
  totalComments: 500,
  paginate: 1,
  currentPage: 1,
  backPage: 1,
  forwardPage: 1,
};
