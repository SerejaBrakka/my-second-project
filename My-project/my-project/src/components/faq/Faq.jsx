import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Faq.module.css";
import Countries from "./Countries";
import Pagination from "../pagination/Pagination";
const Faq = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(20);

  useEffect(() => {
    const loadingQuestions = async () => {
      setLoading(true);
      let res = await axios.get("https://jsonplaceholder.typicode.com/albums");

      setQuestions(res.data);
      setLoading(false);
    };
    loadingQuestions();
  }, []);

  const lastIndexQuestion = currentPage * questionsPerPage;
  const firstIndexQuestion = lastIndexQuestion - questionsPerPage;

  const selectedQuestions = questions.slice(
    firstIndexQuestion,
    lastIndexQuestion
  );
  const paginate = (number) => setCurrentPage(number);
  return (
    <div>
      <h1>Questions</h1>
      <Pagination
        questionsPerPage={questionsPerPage}
        totalQuestions={questions.length}
        paginate={paginate}
      />
      <Countries questions={selectedQuestions} loading={loading} />
    </div>
  );

  //   const [countries, setCountries] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [countriesPerPage] = useState(20);
  //   useEffect(() => {
  //     const getCountries = async () => {
  //       setLoading(true);
  //       const res = await axios.get(
  //         "https://jsonplaceholder.typicode.com/albums"
  //       );
  //       setCountries(res.data);
  //       setLoading(false);
  //     };
  //     getCountries();
  //   }, []);
  //   const lastCountryIndex = currentPage * countriesPerPage;
  //   const firstCountryIndex = lastCountryIndex - countriesPerPage;
  //   const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  //   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //   return (
  //     <div className={classes.container}>
  //       <h1 className={classes.primary}>Часто задаваемые вопросы</h1>
  //       <Pagination
  //         countriesPerPage={countriesPerPage}
  //         totalCountries={countries.length}
  //         paginate={paginate}
  //       />
  //       <Countries countries={currentCountry} loading={loading} />
  //     </div>
  //   );
  // };
};
export default Faq;
