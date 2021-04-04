import React from "react";
import { Link } from "react-router-dom";
import "../css/WhiteButton.css";

function DynamicButton({ name, schemeDetails }) {
  return (
    <Link to={`/Schemes/${schemeDetails.title}`}>
      <button type="button" className="btn btn-sm bg-success action-btn">
        {name}
      </button>
    </Link>
  );
}

export default DynamicButton;
