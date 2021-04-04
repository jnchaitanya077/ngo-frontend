import React from "react";
import ColoredDiv from "../components/ColoredDiv";
import Carousel from "../components/Carousel";
import Slides from "../components/Slides";

function Testimonials() {
  return (
    <ColoredDiv>
      <Carousel
        data={data}
        title="What People Think About Us"
        content={<Slides data={data} />}
      />
    </ColoredDiv>
  );
}

export default Testimonials;

const data = [
  {
    id: 0,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg",
    name: "Barack Obama",
  },
  {
    id: 1,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXRzfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Albert Einstein genius",
  },
  {
    id: 2,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Albert Edison",
  },
];
