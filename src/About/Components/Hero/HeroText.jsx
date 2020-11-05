import React from "react";
import { Link } from "react-router-dom";

import classes from "./HeroText.module.css";

const HeroText = () => {
  return (
    <div className={classes["hero-text"]}>
      <h1 className={classes["hero-heading"]}>
        About Wally's Widgets
      </h1>
      <p>
        We've been making Widgets for a number of years now. We know what makes a good widget! If you're using a widget, it's going to be one of Wally's.
      </p>
    </div>
  );
};

export default HeroText;
