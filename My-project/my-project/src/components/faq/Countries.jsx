import React from "react";

const Countries = ({ questions, loading }) => {
  if (loading) {
    return <div>Идет загрузка</div>;
  }

  return (
    <ul>
      {questions.map((question) => {
        return <li key={question.id}>{question.title}</li>;
      })}
    </ul>
  );

  //   if (loading) {
  //     return <h2>Loading...</h2>;
  //   }
  //   return (
  //     <ul>
  //       {countries.map((country) => {
  //         return <li key={country.id}>{country.title}</li>;
  //       })}
  //     </ul>
  //   );
  // };
};

export default Countries;
