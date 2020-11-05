import React from "react";
import classes from "./Hero.module.css";

import HeroText from "./HeroText";

const Hero = (props) => {
    return(
        <div className={classes["hero"]}>
            <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.image})`}} className={classes["hero-image"]} ></div>
            <HeroText />
        </div>
    );
}

export default Hero;