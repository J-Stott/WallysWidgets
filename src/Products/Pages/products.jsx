import React from "react";
import Section from "../../Shared/Components/Section/Section";
import Product from "../Components/Product";
import Wrapper from "../../Shared/Components/Wrapper/Wrapper";
import PageContainer from "../../Shared/Components/PageContainer/PageContainer";
import Footer from "../../Shared/Components/Footer/Footer";
import classes from "./products.module.css";

const products = [
  {
    key: 0,
    image:
      "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2017/06/How-to-Create-Custom-Widget-in-WordPress.jpg",
    description: "A Widget",
  },
  {
    key: 1,
    image: "https://miro.medium.com/max/2576/1*Xc0T9E4XHxuRQyWYUiV07g.png",
    description: "A Widget",
  },
  {
    key: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbcrhncQDM5ptF6Bp-O71oJ0Qy9PTCVf-e0A&usqp=CAU",
    description: "A Widget",
  },
  {
    key: 3,
    image:
      "https://9to5google.com/wp-content/uploads/sites/4/2020/09/google-search-ios-14.jpg?quality=82&strip=all",
    description: "A Widget",
  },
  {
    key: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV2XCaqa0diL6GI7B9jXPCXknmZynMdWx_Yw&usqp=CAU",
    description: "A Widget",
  },
  {
    key: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEZNvi14yM0IpfMHsLDOmFLDG06J6u7IeahQ&usqp=CAU",
    description: "A Widget",
  },
  {
    key: 6,
    image:
      "https://i1.wp.com/sixcolors.com/wp-content/uploads/2020/10/fantastical.jpeg?ssl=1",
    description: "A Widget",
  },
  {
    key: 7,
    image: "https://miro.medium.com/max/4770/1*gvB--tekO7L0Kztpr0xV4A.jpeg",
    description: "A Widget",
  },
  {
    key: 8,
    image:
      "https://cms-assets.tutsplus.com/uploads/users/1809/posts/34068/image/333.jpg",
    description: "A Widget",
  },
  {
    key: 9,
    image: "https://miro.medium.com/max/3040/1*onbRO-WKuYZLjNDh5XP-Qw.png",
    description: "A Widget",
  },
  {
    key: 10,
    image:
      "https://cdn57.androidauthority.net/wp-content/uploads/2018/03/KWGT-Kustom-Widget-Maker-best-Android-Widgets.jpg",
    description: "A Widget",
  },
  {
    key: 11,
    image:
      "https://gracethemes.com/wp-content/uploads/2018/04/social-media.jpg",
    description: "A Widget",
  },
  {
    key: 12,
    image:
      "https://www.mathworks.com/help/thingspeak/numeric_display_widget.png",
    description: "A Widget",
  },
  {
    key: 13,
    image:
      "https://www.iphonehacks.com/wp-content/uploads/2020/07/widget-sizes-scaled.jpeg",
    description: "A Widget",
  },
  {
    key: 14,
    image:
      "https://cdn.vox-cdn.com/thumbor/Evb4u9EtmUoF2EkhpcSFcbofs1U=/0x0:1909x1019/1200x800/filters:focal(803x358:1107x662)/cdn.vox-cdn.com/uploads/chorus_image/image/67460756/Screen_Shot_2020_09_24_at_11.39.55_AM.0.png",
    description: "A Widget",
  },
  {
    key: 15,
    image:
      "https://cdn.dribbble.com/users/13754/screenshots/12273158/ios-14-widgets_4x.jpg",
    description: "A Widget",
  },
];

const ProductsPage = (props) => {
  return (
    <PageContainer>
      <Section>
        <Wrapper>
          <h1 className="main-heading">Our Products</h1>
          <div className={classes["grid"]}>
            {products.map(({ key, image, description }) => (
              <Product key={key} image={image} description={description} />
            ))}
          </div>
        </Wrapper>
      </Section>
      <Footer />
    </PageContainer>
  );
};

export default ProductsPage;
