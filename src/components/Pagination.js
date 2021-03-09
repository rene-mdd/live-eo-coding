import React from "react";
import PropTypes from "prop-types";

export default function Pagination({
  commentsPerPage,
  totalComments,
  paginate,
  currentPage,
  backPage,
  forwardPage,
}) {
  // Display the correct pages range of numbers
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

  return (
    <nav className="pagination-nav">
      {/* pagination background style selection - below */}

      {/* <div className="selector-div">
        <label className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <label className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <label className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <label className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <label className="container">
          <input type="radio" name="radio" />
          <span className="checkmark" />
        </label>
        <label className="container">
          <input type="radio" name="radio" />
          <span className="checkmark">1</span>
        </label>
      </div> */}
      {/* pagination background style selection - above */}
      <label htmlFor="back" className="pagination back">
        <input onClick={() => backPage(1)} type="button" value="<" />
      </label>
      <ul className="pagination">
        {resultArray.map((number) => (
          <li key={number}>
            <label htmlFor="page" className="container">
              <input
                key={number}
                onClick={() => {
                  paginate(number);
                }}
                type="radio"
                value={number}
                id="page"
              />
              <span className="checkmark">{number}</span>
            </label>
          </li>
        ))}
        <label htmlFor="forward" className="pagination forward">
          <input onClick={() => forwardPage(1)} type="button" value=">" />
        </label>
      </ul>
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
