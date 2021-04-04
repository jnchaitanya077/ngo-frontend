import React from "react";
import FullHeading from "../components/FullHeading";
import PlainCard from "../components/PlainCard";
import ActionButton from "../components/Button";
import { cta } from "../data/Styles"

function Faq(props) {
  return (
    <div className="w-100 even">
      <section className="container">
        <FullHeading
          title="Donation FAQs"
          body="We make a difference in the lives of people during a very traumatic time in their life. Meeting their medical transport needs eases their burden."
        />
        <div className="row row-cols-1 row-cols-md-2 g-2 mt-md-5 mt-3">
          {data.map((eachCard) => {
            return <PlainCard
              key={eachCard.id}
              title={eachCard.title}
              text={eachCard.text} />;
          })}
        </div>
        <div className="mt-md-4 mt-3">
          <ActionButton name="Read more" url="/Faq" style={cta} type="btn-sm" />
        </div>
      </section>
    </div>
  );
}

export default Faq;

const data = [{

  id: 0,
  title: "Where will my money go?",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
}, {
  id: 1,
  title: "Where will my money go?",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
}, {
  id: 2,
  title: "Where will my money go?",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
}, {
  id: 3,
  title: "Where will my money go?",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
}, {
  id: 4,
  title: "Where will my money go?",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
}, {
  id: 5,
  title: "Where will my money go?",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
},]
