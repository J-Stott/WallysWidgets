import React from "react";
import { Link } from "react-router-dom";

import classes from "./HeroContent.module.css";

const HeroText = () => {
  return (
    <div className={classes["hero-text"]}>
      <h1 className={classes["hero-heading"]}>
        Quality Widgets at reasonable prices
      </h1>
      <p>
        Wally's Widgets are made from 100% widget so you can be assured of their
        quality. We've been in the widget business for over 250 years and have
        been working to build relationships with the biggest companies. We know
        widgets. We know your needs!
      </p>
      <p>Check out our latest products!</p>
      <Link className={classes["btn"]} to="/products">Our Widgets</Link>
    </div>
  );
};

export default HeroText;
