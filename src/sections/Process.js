import React from "react";
import HeadingText from "../components/Heading";
import Card from "../components/Card";

// icons imports
import VolunteerIcon from "../icons/group.png";
import DonateIcon from "../icons/charity.png";
import FundraiseIcon from "../icons/fundraiser.png";

function Process(props) {
  return (
    <div className=" w-100 even">
      <section className="container">
        <HeadingText
          title="Samagra Foundation"
          body="We raise awareness in all parts of Healthcare, Personality Growth and Ability Enhancement etc., to create a skilled community and make their careers successful."
        />
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-md-5 mt-3">
          {cards.map((eachCard) => (
            <Card
              key={eachCard.id}
              title={eachCard.title}
              body={eachCard.body}
              url={eachCard.url}
              icon={eachCard.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Process;

//Awareness in all sections Healthcare, Personality Development  and Skill Enhancement etc., to build a“Skilled”society and Make their Career successful by Conducting Counselling Sessions for needy sections for holistic Progress on Free of Cost.

const cards = [
  {
    id: 0,
    title: "Volunteer",
    body: "Alone we can do so little; together we can do so much.",
    url: "",
    icon: VolunteerIcon,
  },
  {
    id: 1,
    title: "Donate",
    body: "A small donation can make a huge difference in someone's life.",
    url: "/Schemes",
    icon: DonateIcon,
  },
  {
    id: 2,
    title: "Fundraise",
    body: "Be part of a wonderful cause to support those in need.",
    url: "",
    icon: FundraiseIcon,
  },
];
