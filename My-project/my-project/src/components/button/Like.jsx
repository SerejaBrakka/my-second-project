import React, { useState } from "react";

import like2 from "../../assets/img/like2.jpg";
import classes from "./Like.module.css";
const Like = (props) => {
  const [likes, setLikes] = useState(0);
  const changeSetLikes = () => {
    setLikes(likes + 1);
  };

  const [comment, setComments] = useState("");
  return (
    <div className={classes.likeContainer}>
      <div className={classes.innerContainer}>
        <div>
          <img
            src={like2}
            className={classes.likesBtn}
            onClick={changeSetLikes}
          ></img>
          <span className={classes.spanLikes}>{likes}</span>
          <span className={classes.spanComments}></span>
        </div>
      </div>
    </div>
  );
};

export default Like;
