import React from "react";
import Container from "../../Shared/Components/Container/Container";
import PageContainer from "../../Shared/Components/PageContainer/PageContainer";
import Footer from "../../Shared/Components/Footer/Footer";
import classes from "./about.module.css";

const AboutPage = (props) => {
  return (
    <PageContainer>
      <Container id={"widgets"} color="#f5f5f5">
        <h1 className="main-heading">
          About Us
        </h1>
        <p className={classes["text"]}>
          We've been creating widgets for over 250 years. Wally's Widgets was established when Wally was frustrated that Maggufins couldn't handle a simple task. Wally then decided to create a competing product; the widget. Wally was impressed with how versatile his creation was and it inspired Wally to create different kinds of widgets to help with a variety of tasks.
        </p>
        <p className={classes["text"]}>
          Fast forward to the present day and Wally's Widgets is the number one widget manufacturer in the world. We're partnered with the biggest technology brands because of the quality and reliability of our products. With a catalogue of over 500 widgets, we believe we have a widget for any task. 
        </p>
      </Container>
      <Container id={"widgets"} color="#ffffff">
        <h1 className="heading">
          Our Goals
        </h1>
        <p className={classes["text"]}>
          At Wally's Widgets we have 3 main objectives:
          <ol>
            <li>Provide you with the highest quality widgets possible for the lowest price possible.</li>
            <li>Provide a fantastic customer service experience for our clients.</li>
            <li>Provide a 100% money back guarantee if you aren't completely satisfied.</li>
          </ol>
        </p>
        <p className={classes["text"]}>
          We achieve these goals by applying a rigerous process from the inception of a widget all the way through until its completion. All our widgets are tested by our in house team of professionals for quality. Any widget that doesn't match our standards is recycled, recreated and retested. That way we can guarantee you that the widget you receive are of the highest standard.
        </p>
        <p className={classes["text"]}>
          Customer service is incredibly important to us. We believe that happy customers are returning customers. By having best in class customer service representatives, we ensure that any problems you have with our products can be solved quickly and professionally. Our representatives are as knowledgable about our widgets as the manufacturers so their guidance can be trusted.
        </p>
        <p className={classes["text"]}>
          If you aren't satisfied with our products for any reason, we offer a 100% money back guarantee with no questions asked. We believe in the quality of our widgets and will happily refund you if they do not match the standards of your business.
        </p>
      </Container>
      <Container id={"widgets"} color="#f5f5f5">
        <h1 className="heading">
          Our Partners
        </h1>
        <p className={classes["text"]}>
          We've been working with the biggest firms in technology for the past 50 years. We've provided a great set of products that our partners love. Here are some of the companies that we have worked with over the years.
        </p>
        <div className={classes["flex-container"]}>
          <div className={classes["flex-item"]}>
            <img className={classes["image"]} src="https://propelenergytech.com/wp-content/uploads/2020/01/microsoft-logo-transparent.png" alt="mslogo"/>
          </div>
          <div className={classes["flex-item"]}>
            <img className={classes["image"]} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="googlelogo"/>
          </div>
          <div className={classes["flex-item"]}>
            <img className={classes["image"]} src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10464/assets/images/pages/vertical/small-business/integrations/PayPal-300w.png?d4d99d8db36e19ef450a5b38144ee14a" alt="mslogo"/>
          </div>
          <div className={classes["flex-item"]}>
            <img className={classes["image"]} src="https://images.squarespace-cdn.com/content/v1/5c5a7d357d0c914295a5b23b/1585344586608-CHVYIWPZ3NR04B3X09KT/ke17ZwdGBToddI8pDm48kJnInHdkD4QUnOQEw7MUhjMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcuxxCAwGwrrRD4Xa-wMHrKMMj1ReKzk1HH3uvS6SRABfp3xQq7rM8ZKaz5rfZj-3e/squarespace-logo.png" alt="squarespace logo"/>
          </div>
          <div className={classes["flex-item"]}>
            <img className={classes["image"]} src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png" alt="facebook logo"/>
          </div>
          <div className={classes["flex-item"]}>
            <img className={classes["image"]} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png" alt="ibm logo"/>
          </div>
          <div className={classes["flex-item"]}>
            <img className={classes["image"]} src="https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG13.png" alt="samsung logo"/>
          </div>
          <div className={classes["flex-item"]}>
            <img className={classes["image"]} src="https://www.medicalcenter.virginia.edu/mobile-device-setup/Apple_with_wordmark.png/image" alt="apple logo"/>
          </div>
        </div>
      </Container>
      <Footer />
    </PageContainer>
  );
};

export default AboutPage;
