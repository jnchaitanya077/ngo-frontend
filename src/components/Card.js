import React, { useState } from "react";
import Link from "./Link";
import "../css/Card.css";

function Card(props) {
  const [shadow, setShadow] = useState({ padding: "2rem" });

  const handleEnter = () => {
    setShadow({
      ...shadow,
      boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
      transition: "box-shadow 0.3s",
    });
  }

  const handleLeave = () => {
    setShadow({ padding: "2rem" });
  }
  return (
    <div className="col" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className={`card zoom h-100`} style={shadow}>
        <img
          src={props.icon}
          className="card-img-top align-self-center"
          alt="..."
          style={{ width: "100px" }}
        />
        <div className="card-body" style={{ textAlign: "center" }}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text fs-6">{props.body}</p>
          <Link href={props.url} name="Learn more" />
        </div>
      </div>
    </div>
  );
}

export default Card;
