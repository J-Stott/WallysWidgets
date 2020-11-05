import React, {useState, useEffect, useRef} from "react";

import classes from "./Collapsible.module.css";

const Collapsible = (props) => {
    const [size, setSize] = useState(0);
    const containerRef = useRef(null);

    const {show} = props;

    useEffect(() => {
        const newSize = show ? containerRef.current.scrollHeight : 0;
        setSize(newSize);
    }, [size, show]) 

    return(
        <div ref={containerRef} className={classes["container"]} style={{height: `${size}px`}}>
            {props.children}
        </div>
    );
}

export default Collapsible;