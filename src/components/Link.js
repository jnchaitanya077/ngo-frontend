import React from "react";
import "../css/Link.css";

function Link(props) {
  return (
    <a href={props.href} className=" pr-link schemes-nav-link">
      {props.name}
    </a>
  );
}

export default Link;
