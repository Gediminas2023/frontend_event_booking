import React from "react";

const Pagination = ({
  pageNumbers,
  goToPrevPage,
  goToNextPage,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <nav className="flex justify-center">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <span
            className="flex items-center cursor-pointer justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={goToPrevPage}
          >
            Previous
          </span>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
          >
            <span
              onClick={() => setCurrentPage(pgNumber)}
              className="flex items-center cursor-pointer justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white active:bg-violet-700"
            >
              {pgNumber}
            </span>
          </li>
        ))}
        <li>
          <span
            className="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={goToNextPage}
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
