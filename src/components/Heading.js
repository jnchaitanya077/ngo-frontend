import React from "react";
import "../css/Heading.css";

function Heading(props) {
  return (
    <div className="row">
      <div className="col-lg-3 ">
        <h2>{props.title}</h2>
      </div>
      <div className="col-lg-9 align-self-center info">
        <i className="big chevron right icon greater-icon align-self-center"></i>
        <p className="info-para text-muted">{props.body}</p>
      </div>
    </div>
  );
}

export default Heading;
