import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const handleJump = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const maxVisiblePages = 5; // Maximum number of page buttons to show, excluding ellipses

    // Calculate the range of pages to display
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    // Adjust the range if there are not enough pages on the right
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    const renderEllipsis = (key) => <span key={key}>...</span>;

    const renderPageButtons = pageNumbers.map((number) => (
      <h3
        key={number}
        className={currentPage === number ? "active" : ""}
        onClick={() => handleJump(number)}
      >
        {number}
      </h3>
    ));

    if (startPage > 1) {
      renderPageButtons.unshift(renderEllipsis("start-ellipsis"));
    }

    if (endPage < totalPages) {
      renderPageButtons.push(renderEllipsis("end-ellipsis"));
    }

    return renderPageButtons;
  };

  return (
    <div className="blog_pagination_inside">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        <GrPrevious />
      </button>

      {renderPageNumbers()}

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        <GrNext />
      </button>
    </div>
  );
};

export default BlogPagination;
