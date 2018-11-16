import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";

//import "bootstrap/dist/css/bootstrap.css";

// input received  (page number)
// ouput (event raised) invoke  onPageinationClicked event

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
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

export default Pagination;
