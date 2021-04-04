import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Paragraph from "./ParagraphBuilder";
import Waypoint from "./Waypoint";
import GradientImage from "./GradientImage";
import Button from "./Button";
import { cta } from "../data/Styles"
import Stats from "./Stats";
import ImageCard from "./ImageCard";
import axios from 'axios';
import {SchemesDetails} from "../data/Schemes"
import { uniqueId } from "lodash";
import _ from 'lodash';


function DisplayScheme({ element }) {
  const match = useRouteMatch("/Schemes/:schemeId");
  const {
    params: { schemeId },
  } = match;
  const [data, setData] = useState({});
  const [otherSchemes, setSchemes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [title, setFormatedTitle] = useState();


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Fetch data.
    // const headers = {
    //   'Content-Type': 'application/json'
    // }
    // axios.get("https://ngo-server-1.herokuapp.com/loadSchemes", { headers })
    //   .then(function (response) {
    //     findScheme(response.data)
    //     filterSchemes(response.data)
    //     setLoading(false)
    //   })
    //   .catch(err => console.log(err))
    findScheme(SchemesDetails);
    filterSchemes(SchemesDetails);
    setLoading(false)

  }, [schemeId]);

  function findScheme(response) {
    let formatedTitleArr = _.split(schemeId, '-')
    let formatedTitle = formatedTitleArr.join(" ")
    setFormatedTitle(formatedTitle)
    const result = response.find((scheme) => scheme.title == formatedTitle)
    setData(result);
  }

  function filterSchemes(response) {
    const result = response.filter((eachScheme) => eachScheme.title !== data.title)
    setSchemes(result)
  }

  return isLoading ? (
    "Loading.."
  ) : data ? (<>
    <GradientImage title={title} image={data.image} />
    <div className="container">
      <div className="row">
        <div className="col-xl-8">
          <Waypoint element={element} />
          <div
            className="mt-md-3 mb-md-5"
            style={styles.paragraphStyles}
          >
            <h3>Overview</h3>
            {data.fullDescription.paragraph.map((eachPara) => (
              <Paragraph
                key={uniqueId()}
                text={eachPara.text && eachPara.text} //send only if text is present or null
                list={eachPara.list && eachPara.list} //send only if list is present or null
                qoute={eachPara.qoute && eachPara.qoute} //send only if qoute is present or null
              />
            ))}
            <Button name="Donate" style={cta} />
          </div>
        </div>

        <div className="col-xl-4">
          <Stats info={data.stats} />
        </div>
      </div>

      <hr />
      <h3>Other Schemes</h3>
      <div className="row row-cols-1 row-cols-md-4">
        {otherSchemes.map((t) => <div>
          <ImageCard key={uniqueId()} image={t.image} title={t.title} link={`/Schemes/${t.title}`} />
        </div>)}
      </div>
    </div>
  </>
  ) : (
    <h4 className="text-center">Loading...</h4>
  );
}

export default DisplayScheme;


const styles = {
  paragraphStyles: {
    lineHeight: "1.8",
    letterSpacing: "0.3px",
    textAlign: "justify",
    textJustify: "inter-word",

  }
}
