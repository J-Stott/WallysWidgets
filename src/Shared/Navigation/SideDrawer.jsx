import React from "react";
import classes from "./SideDrawer.module.css";

import NavLinks from "./NavLinks";

const SideDrawer = React.forwardRef((props, drawerRef) => {

    let drawerClasses = `${classes["side-drawer"]} ${classes["hide"]}`;

    if(props.show) {
        drawerClasses = `${classes["side-drawer"]} ${classes["show"]}`
    }

    return(
        <div ref={drawerRef} className={drawerClasses}>
            <NavLinks />
        </div>
    );
});

export default SideDrawer;