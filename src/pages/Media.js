import React from 'react';
import GradientImage from '../components/GradientImage';
import TeamCard from '../components/TeamCard';
import Waypoint from '../components/Waypoint';
import Image from "../images/team.jpg";
import _ from "lodash";
import "../css/Media.css"
function Media({ element }) {
    const icons = {
        printMedia: <i class="huge newspaper media-icon outline icon"></i>,
        electronicMedia: <i class="huge at media-icon icon"></i>,
        socialMedia: <i class="huge twitter media-icon icon"></i>,
        videoInterviews: <i class="huge play circle media-icon outline icon"></i>,
        gallery: <i class="huge images outline media-icon icon"></i>
    }
    return (
        <>
            <GradientImage title="Media" image={Image} />
            <Waypoint element={element} />
            <div className="container" >
                <div className="row mt-4 mb-4">
                    {data.map((eachTeam) => <TeamCard
                        key={eachTeam.id}
                        title={eachTeam.title}
                        content={icons[_.camelCase(eachTeam.title)]}
                        url={eachTeam.url + "/" + _.camelCase(eachTeam.title)}
                        buttonName={eachTeam.buttonName}
                        type={eachTeam.type}
                    />)}
                </div>
            </div>
        </>
    );
}

export default Media;



const data = [
    {
        id: 0,
        title: "Print Media",
        url: "/Media",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney",
        buttonName: "Know More",
        type: "btn-sm"
    },
    {
        id: 1,
        title: "Electronic Media",
        url: "/Media",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney",
        buttonName: "Know More",
        type: "btn-sm"
    },
    {
        id: 2,
        title: "Social Media",
        url: "/Media",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney",
        buttonName: "Know More",
        type: "btn-sm"
    },
    {
        id: 3,
        title: "Video Interviews",
        url: "/Media",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney",
        buttonName: "Know More",
        type: "btn-sm"
    },
    {
        id: 4,
        title: "Gallery",
        url: "",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney",
        buttonName: "Know More",
        type: "btn-sm"
    },
];