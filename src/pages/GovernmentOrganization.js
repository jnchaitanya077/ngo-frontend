import React from 'react';
import Telangana from "../images/support/telangana.png"
import AndhraPradesh from "../images/support/Andhra-Pradesh.png"
import Assam from "../images/support/Assam.png"
import Gujarat from "../images/support/gujarat.png"
import Rajasthan from "../images/support/gujarat.png"
import Karnataka from "../images/support/Karnataka.png"
import Waypoint from '../components/Waypoint';
import OrganizationDisplay from '../components/OrganizationDisplay';

function GovernmentOrganization({ element }) {
    return (
        <div className="container mt-5">
            <Waypoint element={element} />
            <div className="row odd">
                <OrganizationDisplay
                    description={description}
                    data={states}
                    title="Government Organization"
                />
            </div>
        </div>
    );
}

const states = [
    {
        id: 0,
        name: "Government Of Telangana",
        image: Telangana,
    },
    {
        id: 1,
        name: "Government Of Andhra Pradesh",
        image: AndhraPradesh,
    },
    {
        id: 2,
        name: "Government Of Assam",
        image: Assam,
    },
    {
        id: 3,
        name: "Government Of Gujarat",
        image: Gujarat,
    },
    {
        id: 4,
        name: "Government Of Rajasthan",
        image: Rajasthan,
    }, {
        id: 5,
        name: "Government Of Karnataka",
        image: Karnataka,
    }
]

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

export default GovernmentOrganization;