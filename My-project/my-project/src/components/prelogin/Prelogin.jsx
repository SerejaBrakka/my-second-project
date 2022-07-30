import React from "react";
import { Link } from "react-router-dom";
import classes from "./Prelogin.module.css";
const Prelogin = () => {
  return (
    <div className={classes.container}>
      <h1>BABYCHSCHOOL</h1>
      <h3>Онлайн - школа с репетиторами</h3>
      <div className={classes.buttons}>
        <div>
          <Link to="/teacherLogin">
            <button>Вход учителя</button>
          </Link>
        </div>
        <div>
          <Link to="/parentLogin">
            <button>Вход родителя</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Prelogin;
