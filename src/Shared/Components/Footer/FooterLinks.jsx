import React, { useEffect, useState } from "react";
import Collapsible from "../Collapsible/Collapsible";

import classes from "./FooterLinks.module.css";

const FooterLinks = (props) => {
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    const updateShow = () => {
      if (window.innerWidth < 860) {
        setShowLinks(false);
      } else {
        setShowLinks(true);
      }
    };

    window.addEventListener("resize", updateShow);

    return () => window.removeEventListener("resize", updateShow);
  }, []);

  const toggleActive = () => {
    if (window.matchMedia("(max-width: 860px)").matches) {
      if (showLinks) {
        setShowLinks(false);
      } else {
        setShowLinks(true);
      }
    }
  };

  return (
    <div className={classes["container"]}>
      <h5 className={classes["heading"]} onClick={toggleActive}>
        {props.heading}
      </h5>
      <Collapsible show={showLinks}>{props.children}</Collapsible>
    </div>
  );
};

export default FooterLinks;
