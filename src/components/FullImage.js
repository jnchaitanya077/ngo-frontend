import React from "react";
import "../css/Image.css";
import { cta } from "../data/Styles";
import Button from "./Button";

function FullImage({ schemeDetails }) {
  // console.log(schemeDetails);
  return (
    <div className="col">
      <div className="card card-image shadow-sm bg-white rounded">
        <img
          src={schemeDetails.image}
          className="image img-fluid"
          alt="cause"
        />
        <div className="overlay">
          <div className="text cssanimation moveFromLeft fw-light">
            {schemeDetails.overlayText}
            <div className="mt-2">
              <Button
                name="Know more"
                url={`/Schemes/${schemeDetails.title}`}
                type="btn-sm"
                style={cta}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h5 className="card-title">{schemeDetails.title}</h5>
        <p className="mt-0 text-muted">{schemeDetails.subTitle}</p>
      </div>
    </div>
  );
}

export default FullImage;
