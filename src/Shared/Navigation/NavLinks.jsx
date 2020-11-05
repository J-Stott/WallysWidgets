import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <div className={classes["links-wrapper"]}>
      <div className={classes["link-wrapper"]}>
        <Link className={classes["link"]} to="/about">
          ABOUT
        </Link>
      </div>

      <div className={classes["link-wrapper"]}>
        <Link className={classes["link"]} to="/products">
          PRODUCTS
        </Link>
      </div>

      <div className={classes["link-wrapper"]}>
        <Link className={classes["link"]} to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
