import React from "react";
import Section from "../Section/Section";

import classes from "./Container.module.css";


const Container = (props) => {
  return (
    <Section id={props.id} color={props.color || "#ffffff"}>
    <div className={classes["section-wrapper"]}>
        {props.children}
    </div>
    </Section>  
  );
};

export default Container;
