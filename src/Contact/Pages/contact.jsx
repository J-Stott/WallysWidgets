import React from "react";
import Wrapper from "../../Shared/Components/Wrapper/Wrapper";
import PageContainer from "../../Shared/Components/PageContainer/PageContainer";
import Footer from "../../Shared/Components/Footer/Footer";
import classes from "./contact.module.css";

const ProductsPage = (props) => {
  return (
    <PageContainer>
      <div className={classes["container"]}>
        <Wrapper>
          <h1 className="main-heading">Contact Us</h1>
          <p className={classes["text"]}>
            If you would like to contact us to enquire about our products,
            policies or anything else, please fill out the form below and one of
            our representatives will get back to you as soon as they can.
          </p>
          <div className={classes["form"]}>
            <input type="email" placeholder="Email Address" />
            <input type="Text" placeholder="Subject" />
            <textarea rows="10" placeholder="Comments" />
            <button>Submit</button>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </PageContainer>
  );
};

export default ProductsPage;
