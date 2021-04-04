import React, { useEffect, useState } from 'react';
import GradientImage from '../components/GradientImage';
import Person from '../components/Person';
import Waypoint from '../components/Waypoint';
import axios from 'axios';
import {teamData} from "../data/TeamData"
import teamImage from "../images/team.jpg"

function AboutTeam({ element }) {

    const [isLoading, Loading] = useState(true);
    const [data, setData] = useState();
    const BASE_URL = "https://ngo-server-1.herokuapp.com/";

    useEffect(() => {
        // const headers = {
        //     'Content-Type': 'application/json'
        // }
        // axios.get(`${BASE_URL}/loadMembers`, { headers })
        //     .then(function (response) {
        //         setData(response.data[0].boardMembers)
        //         Loading(false)
        //     })
        //     .catch(err => console.log(err))
        console.log("t",teamData);
        setData(teamData);
        Loading(false)
        console.log("d",data);

    },[]);

    return (
        <>{!isLoading ? <>
            <GradientImage title="Board Members" image={teamImage} />
            <Waypoint element={element} />
            <div className="container">
                <div className="row d-flex mt-3">
                    {data.map((eachMember) =>
                        <Person image={eachMember.image}
                            name={eachMember.name}
                            position={eachMember.position}
                            content={eachMember.content}
                        />
                    )}
                </div>
            </div>
        </> : <h3 className="text-center">Loading...</h3>}
        </>

    );
}

export default AboutTeam;




