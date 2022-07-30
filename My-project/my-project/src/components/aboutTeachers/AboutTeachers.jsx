import React from "react";
import avatar from "../../assets/img/avatar2.png";
import { useState } from "react";
import { useEffect } from "react";
import classes from "./AboutTeachers.module.css";

let data = [
  { id: 1, name: "dasha" },
  { id: 2, name: "sasha" },
  { id: 3, name: "masha" },
  { id: 4, name: "pasha" },
];

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", false);
xhr.send();

data = xhr.response;
let requestAnswer = JSON.parse(data);

const AboutTeachers = () => {
  const [teachers, setTeachers] = useState(requestAnswer);

  const [searchTeacher, setSearchTeacher] = useState("");

  useEffect(() => {}, []);

  const filterTeacher = (searchText, listOfTeachers) => {
    if (!searchText) {
      return listOfTeachers;
    }
    return listOfTeachers.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  useEffect(() => {
    const filteredTeachers = filterTeacher(searchTeacher, requestAnswer);

    setTeachers(filteredTeachers);
  }, [searchTeacher]);
  return (
    <div>
      <input
        placeholder="Поиск по имени..."
        value={searchTeacher}
        onChange={(e) => setSearchTeacher(e.target.value)}
      />
      <hr />
      {teachers.length ? (
        teachers.map((item) => (
          <div className={classes.obertka} key={item.id}>
            <div className={classes.avatarTeachers}>
              <img src={avatar}></img>
            </div>
            <div className={classes.teachersInformation}>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.address.city}</div>
              <div>{item.company.name}</div>
              <div>{item.phone}</div>
              <a href={item.website}>{item.website}</a>
              <hr />
            </div>
          </div>
        ))
      ) : (
        <div className={classes.recoveryDiv}>Не найдено </div>
      )}
    </div>
  );
};

export default AboutTeachers;
