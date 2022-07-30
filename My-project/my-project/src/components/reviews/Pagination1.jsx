import React from "react";
import classes from "./Pagination1.module.css";
const Pagination1 = ({ reviewsPerPage, totalReviews, paginate }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.container}>
      {pageNumbers.map((number) => {
        return (
          <div className={classes.inside}>
            <a
              onClick={() => {
                paginate(number);
              }}
              className={classes.listElement}
            >
              {number}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination1;
