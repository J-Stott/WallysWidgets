import React from "react";
import PageContainer from "../../Shared/Components/PageContainer/PageContainer";
import Hero from "../Components/Hero/Hero";
import Container from "../../Shared/Components/Container/Container";
import Card from "../Components/Card/Card";
import HoveringCard from "../Components/HoveringCard/HoveringCard";
import Footer from "../../Shared/Components/Footer/Footer";

import classes from "./home.module.css";

const HomePage = (props) => {
  return (
    <PageContainer>
      <Hero image="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/09/14082614/software-developer.png" />
      <Container id={"widgets"} color="#f5f5f5">
        <h1 className={classes["heading"]}>
          Boost your productivity today with professional grade widgets created
          by us!
        </h1>
        <p>
          Choose from a wide range of flexible widgets that can be tailored to
          the needs of your business. Our widgets have been crafted and
          perfected for over 2 and a half centuries, so you know they can be
          trusted to deliver the results you need.
        </p>
        <div className={classes["content-container"]}>
          <HoveringCard image="https://cdn57.androidauthority.net/wp-content/uploads/2018/03/KWGT-Kustom-Widget-Maker-best-Android-Widgets.jpg">
            <p>Time Widget</p>
          </HoveringCard>

          <HoveringCard image="https://tapsmart-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/todaywidgets-header-750x400.jpg">
            <p>A collection of Widgets</p>
          </HoveringCard>

          <HoveringCard image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/65212359-55d7-4015-a595-ea893ec5bd97/d9y7h2n-4f616bb0-a37a-4d84-8b55-2256290346fb.png">
            <p>Alternative Time Widget</p>
          </HoveringCard>
        </div>
      </Container>
      <Container id={"recommendations"} color="#FFFFFF">
        <h1 className={classes["heading"]}>Matthew Upson's Lorem Ipsum</h1>
        <div className={classes["content-container"]}>
          <div className={classes["lorem"]}>
            <h3>Lorem Upson</h3>
            <p>Matthew Upson dolor sit amet, consectetur adipiscing elit. Nullam pretium quis tortor a sollicitudin. Nam tristique et nisl eu vestibulum. Morbi in arcu semper, ullamcorper risus non, congue lacus. Nullam congue, lectus vitae pellentesque luctus, enim diam sagittis erat, at interdum dui nulla non metus. In hac habitasse platea dictumst. Suspendisse molestie, est eu mollis suscipit, enim lectus pellentesque ipsum, sit amet scelerisque eros magna nec urna. Nullam accumsan mauris pharetra gravida commodo. Sed accumsan imperdiet tincidunt. Ut non magna quis nibh consectetur tempor in a quam. Nulla nibh elit, elementum sit amet ullamcorper eu, dictum et libero. </p>
          </div>
          <div className={classes["lorem"]}>
            <h3>Lorem Upson</h3>
            <p>Matthew Upson dolor sit amet, consectetur adipiscing elit. Nullam pretium quis tortor a sollicitudin. Nam tristique et nisl eu vestibulum. Morbi in arcu semper, ullamcorper risus non, congue lacus. Nullam congue, lectus vitae pellentesque luctus, enim diam sagittis erat, at interdum dui nulla non metus. In hac habitasse platea dictumst. Suspendisse molestie, est eu mollis suscipit, enim lectus pellentesque ipsum, sit amet scelerisque eros magna nec urna. Nullam accumsan mauris pharetra gravida commodo. Sed accumsan imperdiet tincidunt. Ut non magna quis nibh consectetur tempor in a quam. Nulla nibh elit, elementum sit amet ullamcorper eu, dictum et libero. </p>
          </div>
        </div>
      </Container>
      <Container id={"recommendations"} color="#f5f5f5">
        <h1 className={classes["heading"]}>Don't believe us? Check out what our partners have to say!</h1>

        <div className={classes["content-container"]}>
          <Card>
            <img
              className={classes["image"]}
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt="google img"
            />
            <p>
              <em>
                We've been working with Wally's Widgets for 20 years and our
                business has grown from strength to strength. We believe that
                without this partnership, our goals wouldn't have been met and
                we wouldn't be the company we are today. Thanks Wally!
              </em>
            </p>
          </Card>

          <Card>
            <img
              className={classes["image"]}
              src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10464/assets/images/pages/vertical/small-business/integrations/PayPal-300w.png?d4d99d8db36e19ef450a5b38144ee14a"
              alt="paypal img"
            />
            <p>
              <em>
                Here at Paypal, we didn't think that we needed widgets until we
                saw what Wally had to offer. Their widgets have ensured that we
                can provide an impeccable service to our customers. We would
                recommend Wally's Widgets in a heartbeat!
              </em>
            </p>
          </Card>

          <Card>
            <img
              className={classes["image"]}
              src="https://images.squarespace-cdn.com/content/v1/5c5a7d357d0c914295a5b23b/1585344586608-CHVYIWPZ3NR04B3X09KT/ke17ZwdGBToddI8pDm48kJnInHdkD4QUnOQEw7MUhjMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcuxxCAwGwrrRD4Xa-wMHrKMMj1ReKzk1HH3uvS6SRABfp3xQq7rM8ZKaz5rfZj-3e/squarespace-logo.png"
              alt="squarespace img"
            />
            <p>
              <em>
                We don't even use Widgets in our products! That's how good
                Wally's Widgets are. We don't need them but we still pick them
                up because they're so good! Keep making those Widgets, Wally.
              </em>
            </p>
          </Card>
        </div>
      </Container>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
