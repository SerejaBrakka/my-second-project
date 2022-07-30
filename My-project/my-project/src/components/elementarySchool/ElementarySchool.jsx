import React from "react";
import { Link } from "react-router-dom";
import Home from "../home/Home";
import classes from "./ElementarySchool.module.css";

const ElementarySchool = (props) => {
  return (
    <div className={classes.container}>
      <Home />
      {props.buttonClicked ? (
        <div
          className={classes.list}
          onMouseLeave={props.changeSetButtonClicked}
        >
          {props.state.map((item) => {
            return (
              <ul key={item.id}>
                <Link to={item.link} className={classes.item}>
                  <li className={classes.vsplitie}>{item.name}</li>
                </Link>
              </ul>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ElementarySchool;
