import React from "react";
import classes from "./Pagination.module.css";
const Pagination = ({ questionsPerPage, totalQuestions, paginate }) => {
  let numbers = [];

  for (let i = 1; i <= Math.ceil(totalQuestions / questionsPerPage); i++) {
    numbers.push(i);
  }

  return (
    <div>
      {numbers.map((number) => {
        return (
          <button
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
