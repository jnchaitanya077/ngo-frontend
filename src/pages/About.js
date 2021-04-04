import React from 'react';
import FullHeading from '../components/FullHeading';
import ImageCard from '../components/ImageCard';
import Waypoint from '../components/Waypoint';
// images
import AnnualReports from "../images/report.jpg"
import BoardMembers from "../images/impact.jpg"
import Join from "../images/image-11.jpg"
import Impact from "../images/talent.jpg"


function About({ element }) {
    return (

        <div className="container odd">
            <Waypoint element={element} />
            <div className="row">
                <FullHeading title="About us" />
                <div className="col col-md-7">
                    <p>
                        SAMAGRA Foundation is focused on three sections of the Society Viz: Children, Youth and Women to empower them Holistically for better society.Which will create Self Confidence, Making them more Intellectual, Health and Wealthy Society i.e “Bharatiya Prides”.
                </p>
                    <h3>Our Mission</h3>
                    <p>Creating awareness in all sections healthcare, personality development  and skill enhancement etc., to build a“Skilled”society. </p>
                    <h3>Our Vision</h3>
                    <p>Creating awareness, career building and counselling for all the sections of the needy people in the society for making them professions on “Free of Cost” to make them as ‘Bharatiya Prides’ as make our nation as a talent epicenter to this world. </p>
                </div>
                <div className="col-md-5">
                    <img src="https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/Gadi-lake.jpg" alt="..." className="img-fluid" width="400px" />

                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-3">
                    <ImageCard
                        title="Annual Reports"
                        link="/AnnualReports"
                        image={AnnualReports}
                    />
                </div>
                <div className="col-md-3">
                    <ImageCard
                        title="Board Members"
                        link="/Team"
                        image={BoardMembers}
                    />
                </div>
                <div className="col-md-3">
                    <ImageCard
                        title="Join Us"
                        link="/Team"
                        image={Join}
                    />
                </div>
                <div className="col-md-3">
                    <ImageCard
                        title="Create Impact"
                        link="/Schemes"
                        image={Impact}
                    />
                </div>
            </div>
        </div>

    );
}

export default About;