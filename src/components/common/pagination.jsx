import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";

//import "bootstrap/dist/css/bootstrap.css";

// input received  (page number)
// ouput (event raised) invoke  onPageinationClicked event

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  console.log(currentPage);

  // [1,2,3].map()
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //console.log(pagesCount);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// const { itemsCount, pageSize, currentPage, onPageChange } = props;
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
