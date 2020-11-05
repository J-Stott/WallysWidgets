import React from "react";
import classes from "./Hero.module.css";

import HeroContent from "./HeroContent";

const Hero = (props) => {
    return(
        <div className={classes["hero"]}>
            <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.image})`}} className={classes["hero-image"]} ></div>
            <HeroContent />
        </div>
    );
}

export default Hero;