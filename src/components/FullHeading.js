import React from "react";

function FullHeading(props) {
  return (
    <div className="row">
      <div className="col-md-10">
        <div className="col">
          <h2>{props.title}</h2>
        </div>
        <div className="col text-muted" style={subInfo}>
          {props.body}
        </div>
      </div>
    </div>
  );
}

export default FullHeading;

const subInfo = {
  borderLeft: "5px solid #5cb85c",
  paddingLeft: "10px",
  marginTop: "2%",
};
