import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import Images
import Image1 from "../images/army.jpg"
import Image2 from "../images/education.jpg"
import Image3 from "../images/self-defence.jpg"
import Image4 from "../images/solar-power.jpg"
import Image5 from "../images/women-with-child.jpg"
import Image6 from "../images/drinking-water.jpg"
import Image7 from "../images/rain-harvesting.jpg"




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Partners = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      showDots={true}
      customTransition="transform 300ms ease-in-out"
      deviceType="desktop"
      itemClass="image-item"
      responsive={responsive}
      infinite={true}
    >
      {images.slice(0, 5).map((image) => {
        return (
          <img
            key={new Date().getSeconds + 1}
            style={{ width: "100%", height: "100%" }}
            src={image}
            alt=".."
          />
        );
      })}
    </Carousel>

  );
};


export default Partners;
