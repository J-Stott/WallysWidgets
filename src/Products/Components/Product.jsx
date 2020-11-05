import React from "react";
import classes from "./Product.module.css";

const ProductPage = (props) => {
    return(
        <div className={classes["container"]}>
            <img className={classes["image"]} src={props.image} alt="product" />
            <p className={classes["text"]}>{props.description}</p>
        </div>
    );
}

export default ProductPage;