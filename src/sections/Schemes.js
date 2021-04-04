import React, { useEffect, useState } from "react";
import FullHeading from "../components/FullHeading";
import FullImage from "../components/FullImage";
import Waypoint from "../components/Waypoint";
import axios from "axios";
import {SchemesDetails} from "../data/Schemes"


// Data
// import { SchemesDetails } from "../data/Schemes";

function Schemes({ element }) {

  const [schemesInfo, setSchemesInfo] = useState([])

  useEffect(() => {
    // const headers = {
    //   'Content-Type': 'application/json'
    // }
    // axios.get("https://ngo-server-1.herokuapp.com/loadSchemes", { headers })
    //   .then(response => setSchemesInfo(response.data))
    //   .catch(e => console.log(e))
    setSchemesInfo(SchemesDetails);
    
  }, [])

  return (
    <div className="w-100 odd">
      <Waypoint element={element} />
      <section className="container mt-md-3">
        <FullHeading
          title="Major Schemes"
          body="We make a difference in the lives of people during a very traumatic time in their life. Meeting their medical transport needs eases their burden."
        />
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-md-5 mt-3">
          {schemesInfo.length > 0 ? <>
            {schemesInfo.map((eachScheme) => (
              <FullImage key={eachScheme.id} schemeDetails={eachScheme} />
            ))}
          </> : <h3 className="text-center">Loading...</h3>}

        </div>
      </section>
    </div>
  );
}

export default Schemes;
