import React from "react";
import classes from "./LinkBar.module.css";
import NavLinks from "./NavLinks";

const LinkBar = (props) => {
    return(
        <div className={classes["main-container"]}>
            <NavLinks />
        </div>
    );
}

export default LinkBar;