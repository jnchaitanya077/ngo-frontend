import React from "react";
import { Link } from "react-router-dom";
import "../css/WhiteButton.css";

function Button({ url, name }) {
  return (
    <Link to={url}>
      <button type="button" className="btn btn-sm action-btn">
        {name}
      </button>
    </Link>
  );
}

export default Button;
