import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import Logo2 from "../../Assets/Logo2.png";
import NavBurger from "./NavBurger";
import SideDrawer from "./SideDrawer";
import LinkBar from "./LinkBar";

const HOME_LOCATION = "/";

const isHome = (pathname) => {
  return HOME_LOCATION === pathname;
}

const MainNavigation = (props) => {
  const location = useLocation();
  const [navClasses, setNavClasses] = useState(isHome(location.pathname) ? `${classes["main-nav-transparent"]}` : `${classes["main-nav"]}`);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerRef = useRef(null);

  const showSideDrawerHandler = () => {
    setShowSideDrawer(true);
  };

  // const hideSideDrawerHandler = () => {
  //   setShowSideDrawer(false);
  // }

  const setStyle = () => {
    if (!isScrolled && window.scrollY > 0) {
      setIsScrolled(true);
      setNavClasses(`${classes["main-nav-transparent"]} ${classes["is-scrolled"]}`);
    } else if (window.scrollY === 0) {
      setIsScrolled(false);
      setNavClasses(`${classes["main-nav-transparent"]}`);
    }
  }

  useEffect(() => {
    if (isHome(location.pathname)) {
      setStyle();

      const checkScrollPos = () => {
        setStyle();
      };

      document.addEventListener("scroll", checkScrollPos);

      return () => {
        document.removeEventListener("scroll", checkScrollPos);
      };
    } else {
      setNavClasses(`${classes["main-nav"]}`);
    }
  }, [isScrolled, location]);

  //closes side drawer when navigating to a new page
  useEffect(() => {
    if (location.pathname && showSideDrawer) {
      setShowSideDrawer(false);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showSideDrawer &&
        sideDrawerRef.current &&
        !sideDrawerRef.current.contains(event.target)
      ) {
        setShowSideDrawer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideDrawerRef, showSideDrawer]);

  return (
    <nav className={navClasses}>
      <Link className={classes["link-wrapper"]} to="/">
        <img className={classes["image"]} src={Logo2} alt="Wally's Widgets" />
      </Link>

      <NavBurger clickHandler={showSideDrawerHandler} />
      <SideDrawer show={showSideDrawer} ref={sideDrawerRef} />
      <LinkBar />
    </nav>
  );
};

export default MainNavigation;
