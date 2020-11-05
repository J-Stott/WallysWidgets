import React from "react";
import classes from "./NavBurger.module.css";

const NavBurger = (props) => {
    return(
        <div className={classes["burger-container"]} onClick={props.clickHandler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default NavBurger;