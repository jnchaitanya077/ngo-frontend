import React from "react";
import Process from "../sections/Process";
import LandingText from "../components/LandingText";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/Faq";
import Partners from "../sections/Partners";
import Newsletter from "../sections/Newsletter";
import Waypoint from "../components/Waypoint";
import Event from "../components/Event";

function Homepage({ element }) {
  return (
    <div>
      <div className="landing-section">
        <LandingText />
      </div>
      <Event />
      <Waypoint element={element} />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <Partners />
      <Newsletter />
    </div>
  );
}

export default Homepage;
