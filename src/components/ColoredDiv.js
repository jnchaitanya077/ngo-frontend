import React from "react";
import Image from "../images/children.jpg";

function ColoredDiv(props) {
  return (
    <div className="w-100" style={styles}>
      {props.children}
    </div>
  );
}

export default ColoredDiv;

const styles = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Image})`,
  width: "100%",
  height: "600px",
  backgroundSize: "cover",
  backgroundPosition: "left-top",
  position: "relative",
};
