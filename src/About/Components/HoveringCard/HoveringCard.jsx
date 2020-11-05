import React from "react";
import classes from "./HoveringCard.module.css";

const HoveringCard = (props) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["image"]} style={{backgroundImage: `url(${props.image})`}}></div>
      <div className={classes["hoverable"]}>
          {props.children}
      </div>
    </div>
  );
};

export default HoveringCard;
