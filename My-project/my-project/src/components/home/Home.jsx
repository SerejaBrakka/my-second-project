import React from "react";
import classes from "./Home.module.css";
import people from "../../assets/img/videos/people.mp4";
const Home = () => {
  return (
    <div className={classes.obertka}>
      <div className={classes.inside}>
        <video src={people} autoPlay controls className={classes.pic}></video>
        <div className={classes.insider}>
          <h1>
            Онлайн школа ....................................... , уникальная
            методика преподавания
          </h1>
          <p>Учим детей от 3 до 30 лет на индивидуальных онлайн-занятиях.</p>
          <button className={classes.insideBtn}>
            Записаться на вводный урок
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
