import React from "react";
import { Link } from "react-router-dom";
import Section from "../Section/Section";
import FooterLinks from "./FooterLinks";

import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
      <Section color="#222222">
        <div className={classes["container"]}>
          <FooterLinks heading="PRODUCTS">
            <div className={classes["link-container"]}>
              <Link className={classes["link"]} to="#">
                HERE
              </Link>
              <Link className={classes["link"]} to="#">
                ARE
              </Link>
              <Link className={classes["link"]} to="#">
                SOME
              </Link>
              <Link className={classes["link"]} to="#">
                LINKS
              </Link>
            </div>
          </FooterLinks>

          <FooterLinks heading="SERVICES">
            <div className={classes["link-container"]}>
              <Link className={classes["link"]} to="#">
                THAT
              </Link>
              <Link className={classes["link"]} to="#">
                WOULD
              </Link>
              <Link className={classes["link"]} to="#">
                SEND
              </Link>
              <Link className={classes["link"]} to="#">
                YOU
              </Link>
            </div>
          </FooterLinks>

          <FooterLinks heading="CORPORATE">
            <div className={classes["link-container"]}>
              <Link className={classes["link"]} to="#">
                SOMEWHERE AWESOME
              </Link>
              <Link className={classes["link"]} to="#">
                IF THEY
              </Link>
              <Link className={classes["link"]} to="#">
                WERE
              </Link>
              <Link className={classes["link"]} to="#">
                LINKED TO SOMEWHERE
              </Link>
              <Link className={classes["link"]} to="#">
                AWESOME
              </Link>
            </div>
          </FooterLinks>

          <FooterLinks heading="PACKAGES">
            <div className={classes["link-container"]}>
              <Link className={classes["link"]} to="#">
                UNFORTUNATELY
              </Link>
              <Link className={classes["link"]} to="#">
                WHILE THEY
              </Link>
              <Link className={classes["link"]} to="#">
                LOOK ACTIVE
              </Link>
              <Link className={classes["link"]} to="#">
                THESE LINKS
              </Link>
            </div>
          </FooterLinks>

          <FooterLinks heading="OTHER THINGS">
            <div className={classes["link-container"]}>
              <Link className={classes["link"]} to="#">
                WON'T
              </Link>
              <Link className={classes["link"]} to="#">
                SEND
              </Link>
              <Link className={classes["link"]} to="#">
                YOU
              </Link>
              <Link className={classes["link"]} to="#">
                ANYWHERE
              </Link>
            </div>
          </FooterLinks>
        </div>
      </Section>
  );
};

export default Footer;
