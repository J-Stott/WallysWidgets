import React from "react";
import classes from "./Section.module.css";

const Section = (props) => {
    return(
        <section id={props.id}>
            <div className={classes["section-container"]} style={{backgroundColor: props.color}}>
                {props.children}
            </div>
        </section>
    );
}

export default Section;