import React from "react";
import Button from "./Button";
import { cta } from "../data/Styles";

function LandingText() {
  return (
    <div className="hero-text-box container">
      <h1>
        Soliciate your support
        <br /> to bring change in society
      </h1>
      <p className="sub-text mt-4">
        We mainly focuses on three parts of the community: children, youth and
        women to empower them holistically for a better society. What creates
        confidence, makes them more intelligent, safe and affluent.
      </p>
      <Button url={"/Schemes"} name={"Show me more"} style={cta} />
    </div>
  );
}

export default LandingText;
