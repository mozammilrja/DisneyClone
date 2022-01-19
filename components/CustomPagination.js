import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { ThemeProvider } from "@material-ui/core";

export default function CustomPagination({ setPage, numOfPages = 100 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className=" flex justify-center">
      <ThemeProvider>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}
